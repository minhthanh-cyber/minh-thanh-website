import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

const SESSION = 'tw_session';
const CSRF = 'tw_csrf';
const USER = process.env.ADMIN_USERNAME || 'ThanhWind';
const TTL_MS=12*60*60*1000;

function secret():string | null {
 const s=process.env.SESSION_SECRET;
 return s && s.length>=48 ? s : null;
}
export function adminReady(){return !!(secret() && process.env.ADMIN_PASSWORD && process.env.ADMIN_PASSWORD.length>=12);}
function sign(input:string):string {return createHmac('sha256',secret() || '').update(input).digest('base64url');}
export function adminUsername(){return USER;}
export function adminPasswordValid(username:string,password:string):boolean {
 if(!adminReady() || username!==USER)return false;
 const a=Buffer.from(String(process.env.ADMIN_PASSWORD),'utf8');
 const b=Buffer.from(password||'','utf8');
 return a.length===b.length && timingSafeEqual(a,b);
}
export async function issueCsrf() {
 const jar=await cookies();
 let token=jar.get(CSRF)?.value;
 if(!token){token=randomBytes(24).toString('base64url');jar.set(CSRF,token,{sameSite:'strict',secure:process.env.NODE_ENV==='production',path:'/',httpOnly:false});}
 return token;
}
export async function verifyCsrf(value?:string|null):Promise<boolean>{
 if(!value || value.length>256)return false;
 const stored=(await cookies()).get(CSRF)?.value;
 if(!stored)return false;
 const a=Buffer.from(value);const b=Buffer.from(stored);
 return a.length===b.length && timingSafeEqual(a,b);
}
export async function setSession(username:string){
 if(!adminReady())throw new Error('Admin chưa cấu hình mật khẩu/SESSION_SECRET');
 const payload=JSON.stringify({u:username,e:Date.now()+TTL_MS,k:sign(`credentials:${process.env.ADMIN_PASSWORD}`)});
 const token=Buffer.from(payload).toString('base64url')+'.'+sign(payload);
 (await cookies()).set(SESSION,token,{httpOnly:true,sameSite:'strict',secure:process.env.NODE_ENV==='production',path:'/',maxAge:43200});
}
export async function currentSession():Promise<{u:string,e:number}|null>{
 const token=(await cookies()).get(SESSION)?.value;
 if(!token || !adminReady() || token.length>1800)return null;
 const parts=token.split('.');if(parts.length!==2)return null;
 try{
  const payload=Buffer.from(parts[0],'base64url').toString('utf8');
  const expected=Buffer.from(sign(payload));const got=Buffer.from(parts[1]);
  if(expected.length!==got.length || !timingSafeEqual(expected,got))return null;
  const parsed=JSON.parse(payload);
  if(parsed.u!==USER || !Number.isFinite(parsed.e) || parsed.e<Date.now() || parsed.k!==sign(`credentials:${process.env.ADMIN_PASSWORD}`))return null;
  return {u:parsed.u,e:parsed.e};
 }catch{return null;}
}
export async function clearSession(){(await cookies()).set(SESSION,'',{httpOnly:true,sameSite:'strict',secure:process.env.NODE_ENV==='production',path:'/',maxAge:0});}

const fallback = new Map<string,{n:number,reset:number}>();
export async function allowRate(key:string,limit:number,windowSeconds:number):Promise<boolean>{
 const now=Date.now();
 if(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN){
  try{
   const url=process.env.UPSTASH_REDIS_REST_URL;
   const bearer=process.env.UPSTASH_REDIS_REST_TOKEN;
   const hashed=createHmac('sha256',secret()||'thanhwind').update(key).digest('hex').slice(0,30);
   const slot=`tw:rate:${hashed}:${Math.floor(now/(windowSeconds*1000))}`;
   const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${bearer}`},body:JSON.stringify(['INCR',slot]),cache:'no-store'});
   if(r.ok){const n=Number((await r.json()).result)||1;if(n===1){await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${bearer}`},body:JSON.stringify(['EXPIRE',slot,windowSeconds+20]),cache:'no-store'}).catch(()=>{});}return n<=limit;}
  }catch{}
 }
 const x=fallback.get(key);
 if(!x || x.reset<now){fallback.set(key,{n:1,reset:now+windowSeconds*1000});return true;}
 x.n++;return x.n<=limit;
}

import { phones as seedPhones } from '@/data/phones';
import type { CatalogPhone, AiMemoryItem, SiteSettings } from './types';
import { cleanDesign } from './design-controls';

const KEYS={phones:'tw:phones:v2',settings:'tw:settings:v2',memory:'tw:memory:v2'};
const SEED: CatalogPhone[] = seedPhones as CatalogPhone[];
const REDIS_URL=process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN=process.env.UPSTASH_REDIS_REST_TOKEN;

export function hasPersistentStore(){return !!(REDIS_URL && REDIS_TOKEN);}
export const DEFAULT_SETTINGS:SiteSettings={
 brandName:'Thanh Wind', brandTagline:'Premium Phone Intelligence',heroTitle:'Thanh Wind Phone Hub',
 heroDescription:'Khám phá điện thoại, thông số kỹ thuật, giá theo từng phiên bản và tư vấn bằng Thanh Wind AI.',
 primaryColor:'#fa4e58',secondaryColor:'#ff914e',heroImages:['/images/vivo-x300-ultra-background.jpg','/images/xiaomi-17-ultra-backround.webp','/images/xiaomi-18-pro-backround.webp'],
 siteStatus:'online',maintenanceMessage:'Website đang bảo trì. Vui lòng quay lại sau.',aiName:'Thanh Wind AI',aiWelcome:'Xin chào! Mình là Thanh Wind AI. Bạn cần tìm máy theo cấu hình, giá hay so sánh hai điện thoại?',
 aiAvatar:'',adminPath:'/ThanhWindAdmin',shieldEnabled:false,blockF12:false,blockContextMenu:false,blockViewSource:false,allowCopy:true, design:{}
};
async function redisCommand(args:(string|number)[]):Promise<unknown>{
 if(!hasPersistentStore())throw new Error('Chưa có Upstash Redis');
 const r=await fetch(REDIS_URL!,{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${REDIS_TOKEN}`},body:JSON.stringify(args),cache:'no-store'});
 if(!r.ok)throw new Error(`Redis lỗi ${r.status}`);
 const out=await r.json();if(out.error)throw new Error('Redis trả về lỗi');
 return out.result;
}
async function load<T>(key:string):Promise<T|null>{const x=await redisCommand(['GET',key]);return x===null||x===undefined?null:JSON.parse(String(x));}
async function save<T>(key:string,value:T):Promise<void>{const r=await redisCommand(['SET',key,JSON.stringify(value)]);if(r!=='OK')throw new Error('Redis chưa xác nhận đã lưu');}
export async function getPhones():Promise<CatalogPhone[]>{
 if(!hasPersistentStore())return SEED;
 // An explicit empty catalog is valid after user deletes all products.
 try{const x=await load<CatalogPhone[]>(KEYS.phones);return x===null?SEED:Array.isArray(x)?x:SEED;}catch{return SEED;}
}
export async function savePhones(x:CatalogPhone[]):Promise<void>{await save(KEYS.phones,x);}
export async function getSettings():Promise<SiteSettings>{
 if(!hasPersistentStore())return DEFAULT_SETTINGS;
 try{const x=await load<Partial<SiteSettings>>(KEYS.settings);return {...DEFAULT_SETTINGS,...x,design:cleanDesign(x?.design)};}catch{return DEFAULT_SETTINGS;}
}
export async function saveSettings(input:Partial<SiteSettings>):Promise<SiteSettings>{
 const base=await getSettings();
 const next:SiteSettings={...base, ...input, design:cleanDesign(input.design ?? base.design)};
 await save(KEYS.settings,next);return next;
}
export async function getMemory():Promise<AiMemoryItem[]>{
 if(!hasPersistentStore())return [];
 try{const x=await load<AiMemoryItem[]>(KEYS.memory);return Array.isArray(x)?x:[];}catch{return [];}
}
export async function saveMemory(x:AiMemoryItem[]):Promise<void>{await save(KEYS.memory,x);}

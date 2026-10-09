'use client';
import { useEffect, useState } from 'react';

export default function PhoneImage({src,alt,priority=false}:{src:string;alt:string;priority?:boolean}){
 const [failed,setFailed]=useState(false);
 useEffect(()=>setFailed(false),[src]);
 const image=failed||!src?'/images/logo.png':src;
 return <img src={image} alt={alt} loading={priority?'eager':'lazy'} decoding="async" onError={()=>{if(!failed)setFailed(true)}} className="h-full w-full object-contain"/>;
}

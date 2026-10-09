import raw from './design-control-schema.json';

export type DesignValue = string | number;
export type DesignSettings = Record<string, DesignValue>;
export interface DesignControl {
  id: string; label: string; group: string; selector: string; property: string;
  default: DesignValue; type: 'color' | 'range'; unit: string;
  min?: number; max?: number; step?: number;
}
export const DESIGN_GROUPS = raw.groups;
export const DESIGN_CONTROLS: DesignControl[] = raw.controls as DesignControl[];
const controlMap = new Map(DESIGN_CONTROLS.map(c=>[c.id,c]));

export function cleanDesign(input: unknown): DesignSettings {
  const o: DesignSettings = {};
  if (!input || typeof input !== 'object' || Array.isArray(input)) return o;
  for (const [key, value] of Object.entries(input)) {
    const c = controlMap.get(key);
    if (!c) continue;
    if (c.type === 'color') {
      if (typeof value === 'string' && /^#[0-9a-fA-F]{6}$/.test(value)) o[key] = value;
    } else {
      const n = Number(value);
      if (Number.isFinite(n)) o[key] = Math.max(c.min ?? 0,Math.min(c.max ?? 100, n));
    }
  }
  return o;
}

export function designCss(input?: unknown): string {
  const cleaned = cleanDesign(input);
  const blocks: string[]=[];
  for(const c of DESIGN_CONTROLS){
    const value=cleaned[c.id] ?? c.default;
    const selector=c.selector;
    let cssValue='';
    if(c.type==='color') cssValue=String(value);
    else if(c.unit==='brightness') cssValue=`brightness(${value})`;
    else if(c.property==='translate') cssValue=`0 ${value}px`;
    else if(c.property==='--tw-bg-scale') cssValue=String(value);
    else if(c.unit==='mobile-px') cssValue=`${value}px`;
    else cssValue=`${value}${c.unit==='unitless'?'':c.unit}`;
    const rule=`${selector}{${c.property}:${cssValue}!important}`;
    blocks.push(c.unit==='mobile-px' ? `@media(max-width:767px){${rule}}` : rule);
  }
  return blocks.join('\n');
}

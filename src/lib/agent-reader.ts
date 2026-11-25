import { getCollection } from 'astro:content';
import { sports } from '../data/sports';
export async function readSite() {
 const guides=await getCollection('guides');
 return {title:'Sports',description:'排球、健身、棒球的独立运动手册。',source:'https://github.com/suiyue77/sports',home:'https://sports-two-xi.vercel.app/',limitations:['不是赛事官方站。','训练信息为一般教育资料，不是个体医疗或训练处方。'],sections:sports.map(s=>({title:s.name,url:new URL(s.id+'/', 'https://sports-two-xi.vercel.app/').href,description:s.description,reference:{title:s.source,url:s.url},items:guides.filter(g=>g.data.sport===s.id).sort((a,b)=>a.data.number-b.data.number).map(g=>({title:g.data.title,url:new URL(s.id+'/'+g.id+'/', 'https://sports-two-xi.vercel.app/').href,description:g.data.description}))}))};
}

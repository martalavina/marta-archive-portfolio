import ProjectStory from '../../ProjectStory';
export const metadata={title:'Who Controls Formula 1? | Marta Laviña',description:'A concise research note about Formula 1 governance, commercial rights and influence.'};
const story={
 meta:'2026 / SPORTS LAW RESEARCH NOTE',eyebrow:'MOTORSPORT / GOVERNANCE / COMMERCIAL POWER',
 title:'Who controls',titleAccent:'Formula 1?',lead:'The answer changes depending on which decision is being made.',
 role:'Research note adapted from a Sports Law academic project and updated for the 2026 framework.',
 accent:'#ddd4ce',highlight:'#8c2929',
 sections:[
 {label:'The answer',short:'The thesis',title:'No single actor controls Formula 1.',copy:'The championship is governed through overlapping regulatory, commercial and competitive interests. Ownership alone does not explain how decisions are made.',cards:[{title:'FIA',copy:'Sporting, technical and safety regulations.'},{title:'Formula 1',copy:'Commercial rights, media, partnerships and promoter relationships.'},{title:'Teams',copy:'Participants with negotiated interests and formal governance influence.'}]},
 {label:'The framework',short:'Concorde',title:'Rules are only one layer.',copy:'The Concorde framework shapes the relationship between Formula 1, the FIA and competing teams alongside sporting and technical regulations.',statement:'2026–2030 / Ninth Concorde Agreement',panels:[{title:'Sporting authority',copy:'FIA rules govern the sporting and safety framework.'},{title:'Commercial structure',copy:'Agreements help define participation, commercial rights and governance.'}]},
 {label:'The case study',short:'Team entry',title:'Andretti / Cadillac made the split visible.',copy:'Regulatory eligibility and commercial acceptance are distinct steps. The revised Cadillac proposition ultimately became the 11th team on the 2026 grid.',cards:[{title:'2023',copy:'FIA approves the original Andretti application after assessment.'},{title:'2024',copy:'Formula 1 rejects the proposed commercial entry.'},{title:'2025',copy:'A revised GM/Cadillac proposition receives approval.'},{title:'2026',copy:'Cadillac joins as the 11th Formula 1 team.'}]},
 {label:'What it reveals',short:'Power',title:'Ask what kind of decision is being made.',copy:'Who writes rules? Who manages commercial value? Who approves entry? Who negotiates the terms? Those are different power questions.',pills:['Rules','Money','Entry','Influence']},
 {label:'Sources & context',short:'Sources',title:'A research note, not a claim to insider access.',copy:'This page condenses an academic Sports Law project; the 2026 governance details are based on public official Formula 1 and FIA information.',panels:[{title:'Framework',copy:'Formula 1 official communications on the 2026–2030 Concorde Agreement.'},{title:'Team entry',copy:'FIA and Formula 1 public accounts of Andretti, Cadillac and the 11th team.'}]}
 ],
 sources:[
 {label:'Formula 1: 2026 Concorde Governance Agreement',url:'https://www.formula1.com/en/latest/article/formula-1-the-fia-and-all-11-teams-confirm-signing-of-2026-concorde.79MABMiuGyslBK1107y7Ig'},
 {label:'FIA: Cadillac and the 11th team',url:'https://www.fia.com/news/cadillac-f1-how-fia-paved-way-11th-team-formula-1'}
 ],
 closing:'Formula 1 is governed by a managed balance of authority.'
};
export default function Page(){return <ProjectStory story={story}/>;}

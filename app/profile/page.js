import './profile-v2.css';
import HomeNav from '../HomeNav';

export const metadata={
 title:'About Marta Laviña | Sports, Brands & Experiences',
 description:'Meet Marta Laviña, final-year Sports Management student, figure skater and sports business candidate working across brands, partnerships, events and communication.'
};

const experiences=[
 {when:'2026 / PRESENT',title:'Financial Advertising Analyst',place:'AUDITMEDIA',description:'Reviewing financial advertising across digital platforms and checking offers, legal disclosures and promotional content. Work that depends on accuracy and close attention to detail.'},
 {when:'2025 / 2026',title:'Guest Services & Event Support',place:'Doble L Eventos y Azafatas / Hexagon Cup',description:'Paid event work supporting guest experience, attendee assistance and live operational delivery.'},
 {when:'2025',title:'Sports Event Volunteer',place:'European Athletics / X-Trial Madrid',description:'Supporting circulation, access and event operations within live sporting environments.'},
 {when:'2022 / 2023',title:'Figure Skating Commentator',place:'Real Federación Española de Deportes de Hielo',description:'Commentary for national competitions, making technical performances understandable to audiences.'}
];
const interests=[
 ['Strategy & Partnerships','Finding where a brand can contribute something genuinely useful to sport and its audiences.'],
 ['Creative & Content','Building campaigns and content that have a clear idea behind the visual execution.'],
 ['Events & Experience','Thinking about fan journeys, operational details and the moments people remember.']
];
export default function ProfilePage(){
 return <div className="about-v2">
  <HomeNav brandHref="/" />
  <main className="about-v2-main">
   <header className="about-v2-hero">
    <div className="about-v2-top"><span>A LITTLE MORE ABOUT ME</span><span>MADRID / NICE</span></div>
    <div className="about-v2-hero-grid">
     <div>
      <p className="about-v2-hello">Hi again, I'm Marta.</p>
      <h1>Sport has always<br/>been <em>part of my world.</em></h1>
      <p className="about-v2-lead">I'm a final-year Sports Management student interested in the ideas, brands and people that shape everything around competition.</p>
      <a className="about-v2-link" href="/cv">Download my CV ↗</a>
     </div>
     <div className="about-v2-image"><img src="/home-v2/marta-flower.webp" alt="Marta smiling by the sea, inside a soft flower-shaped portrait" width="900" height="506"/></div>
    </div>
   </header>
   <section className="about-v2-story">
    <div className="about-v2-count">01 / MY PERSPECTIVE</div>
    <div>
     <h2>I've seen sport from <em>more than one side.</em></h2>
     <p>As a competitive figure skater, I've spent years training, performing and working in an environment where the part people see is only a fraction of what happens behind the scenes.</p>
     <p>I've also supported live events, commentated competitions and worked with advertising analysis. Those different perspectives shape how I think about experiences, brands and audiences.</p>
    </div>
   </section>
   <section className="about-v2-current">
    <div className="about-v2-count">02 / RIGHT NOW</div>
    <div className="about-v2-current-grid">
     <article><span>STUDYING</span><h3>Sports Management</h3><p>European Sport Business School</p><p>2024–2027 / Madrid & Nice</p></article>
     <article><span>WORKING</span><h3>Financial Advertising Analyst</h3><p>AUDITMEDIA</p><p>September 2026 – Present / Remote</p></article>
    </div>
   </section>
   <section className="about-v2-experience">
    <div className="about-v2-count">03 / SELECTED EXPERIENCE</div>
    <div><h2>Off the ice, <em>on the ground.</em></h2>
     <div className="about-v2-timeline">{experiences.map(x=><article key={x.title}><span>{x.when}</span><div><h3>{x.title}</h3><p className="about-v2-place">{x.place}</p><p>{x.description}</p></div></article>)}</div>
    </div>
   </section>
   <section className="about-v2-areas">
    <div className="about-v2-count">04 / WHAT I BRING</div>
    <div><h2>One perspective.<br/><em>Different ways to use it.</em></h2>
     <div className="about-v2-areas-grid">{interests.map(([title,description],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </div>
   </section>
   <section className="about-v2-footnotes">
    <div className="about-v2-count">05 / A FEW DETAILS</div>
    <div className="about-v2-footnotes-grid">
     <article><span>SPORT</span><h3>Figure skating</h3><p>Competitive skater, coaching and live ice show experience.</p></article>
     <article><span>LANGUAGES</span><h3>ES / EN / FR</h3><p>Spanish native. English and French professional working proficiency.</p></article>
     <article><span>LOCATION</span><h3>Madrid / Nice</h3><p>Interested in international sports environments and open to relocation.</p></article>
    </div>
   </section>
   <section className="about-v2-final">
     <div><p>WHAT'S NEXT?</p><h2>Let's talk about<br/><em>what happens around the game.</em></h2></div>
     <div><a href="/archive">Explore my work ↗</a><a href="/contact">Get in touch ↗</a></div>
   </section>
  </main>
  <footer className="about-v2-footer"><span>© Marta Laviña 2026</span><span>Sports, brands & experiences.</span><a href="/contact">Contact ↗</a></footer>
 </div>
}

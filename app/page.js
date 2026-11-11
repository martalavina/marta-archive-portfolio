import './home-v2.css';
import HomeNav from './HomeNav';

const projects = [
  { name: 'IKEA × 24H Le Mans', category: 'Sponsorship / Fan Experience', css: 'big lemans', href: '/archive/ikea-le-mans' },
  { name: 'Swarovski × World Junior Figure Skating', category: 'Brand Experience', css: 'skate', href: '/archive/swarovski-figure-skating' },
  { name: 'Canada Soccer', category: 'Campaign Strategy', css: 'canada', href: '/archive/canada-soccer' },
  { name: 'Celta × ECOALF', category: 'Partnership Strategy', css: 'celta', href: '/archive/celta-ecoalf' },
];

export const metadata = {
  title: 'Marta Laviña | Sports, Brands & Experiences',
  description: 'Marta Laviña, final-year Sports Management student exploring sports marketing, sponsorship, creative concepts and live experiences.',
};

export default function Home() {
  return <div className="home-v2">
    <HomeNav />
    <main id="top">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hello">Oh, hey! So glad you could stop by.</p>
            <h1 id="home-title">I’m Marta.</h1>
            <p className="hero-blurb">Final-year Sports Management student exploring <strong>sports marketing, partnerships, creative concepts and live experiences.</strong></p>
            <a className="primary-action" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
          </div>
          <img className="portrait" src="/home-v2/marta-flower.webp" width="900" height="506" alt="Marta smiling at the beach, framed inside an organic flower shape" fetchPriority="high" />
        </div>
      </section>
      <div className="wave" aria-label="The moments, the people, the experiences beyond the game">
        <svg viewBox="0 0 1400 180" preserveAspectRatio="none" aria-hidden="true">
          <defs><path id="text-wave" d="M -275 92 C -45 15, 155 170, 390 95 S 800 18, 1030 100 S 1420 170, 1680 90" /></defs>
          <text><textPath href="#text-wave" startOffset="0">the moments, the people, the experiences beyond the game · the moments, the people, the experiences beyond the game · the moments, the people, the experiences beyond the game · the moments, the people, the experiences beyond the game</textPath></text>
        </svg>
      </div>
      <div className="content">
        <section id="work" aria-labelledby="work-title">
          <div className="section-header">
            <div><p className="kicker">A few things I've been working on</p><h2 id="work-title">Selected work</h2></div>
            <a href="/archive">All work ↗</a>
          </div>
          <div className="project-grid">
            {projects.map(p => <a key={p.href} className={'project '+p.css} href={p.href}>
              <small>{p.category}</small><strong>{p.name}</strong>
            </a>)}
            <a className="project outdoormix" href="/archive/outdoormix-winter" aria-label="OutdoorMix Winter, marketing and ticketing strategy">
              <small>Marketing / Ticketing</small><strong>OutdoorMix Winter</strong>
            </a>
          </div>
        </section>
        <section className="about" id="about">
          <div><p className="kicker">Beyond the work</p><h2>Sport from the inside.</h2></div>
          <div><p>I think about what happens around the game.</p>
            <p className="about-secondary">I've spent years experiencing sport as an athlete and as part of the teams that make events happen. Now I bring that perspective to sponsorship, brand experiences, events and the creative ideas that connect them.</p>
            <a className="primary-action" style={{marginTop:23}} href="/profile">More about me ↗</a>
          </div>
        </section>
        <section className="offering" aria-labelledby="offer-title"><p className="kicker">What I bring</p><h2 id="offer-title">Different skills.<br/>One point of view.</h2>
          <div className="offer-grid">
            <article className="offer"><h3>Strategy & Partnerships</h3><p>Finding the fit, shaping the idea, making the partnership useful.</p></article>
            <article className="offer"><h3>Creative & Content</h3><p>From a strong concept to a clear campaign or content system.</p></article>
            <article className="offer"><h3>Events & Experience</h3><p>Understanding how audiences move, participate and remember.</p></article>
          </div>
        </section>
        <section className="contact"><div><p className="kicker">What's next?</p><h2>Let’s make something<br/><em>worth experiencing.</em></h2></div>
          <div className="contact-links"><a href="/cv">Download CV ↗</a><a href="/contact">Get in touch ↗</a></div>
        </section>
        <footer className="footer"><span>© Marta Laviña 2026</span><span>Sports, brands & experiences.</span><a href="https://www.linkedin.com/in/martalavinaperez" target="_blank" rel="noreferrer">LinkedIn ↗</a></footer>
      </div>
    </main>
  </div>;
}
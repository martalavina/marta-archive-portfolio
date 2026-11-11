import './work.css';
import ArchiveProjects from './ArchiveProjects';
import HomeNav from '../HomeNav';

export const metadata = {
  title: 'Work | Marta Laviña',
  description: 'Selected sports business projects across sponsorship, brand experience, campaign strategy, creative concepts and events.',
};

const projects = [
  {
    id: 'ikea-le-mans',
    title: 'IKEA × 24H Le Mans',
    number: '01',
    discipline: 'Sponsorship / Fan Experience',
    type: 'Independent concept',
    image: '/home-v2/cover-ikea.webp',
    lenses: ['strategy', 'creative', 'experience'],
    href: '/archive/ikea-le-mans',
  },
  {
    id: 'swarovski-figure-skating',
    title: 'Swarovski × Figure Skating',
    number: '02',
    discipline: 'Brand Experience',
    type: 'Concept',
    image: '/home-v2/cover-swarovski.webp',
    lenses: ['strategy', 'creative', 'experience'],
    href: '/archive/swarovski-figure-skating',
  },
  {
    id: 'canada-soccer',
    title: 'Canada Soccer',
    number: '03',
    discipline: 'Campaign / Creative Strategy',
    type: 'Academic concept',
    image: '/home-v2/cover-canada.webp',
    lenses: ['creative', 'content', 'strategy'],
    href: '/archive/canada-soccer',
  },
  {
    id: 'celta-ecoalf',
    title: 'Celta de Vigo × ECOALF',
    number: '04',
    discipline: 'Partnership Strategy',
    type: 'Team study',
    image: '/home-v2/cover-celta.webp',
    lenses: ['strategy', 'experience'],
    href: '/archive/celta-ecoalf',
  },
  {
    id: 'outdoormix',
    title: 'OutdoorMix Winter',
    number: '05',
    discipline: 'Marketing / Ticketing',
    type: 'Academic project',
    image: '/home-v2/cover-outdoormix.webp',
    coverClass: 'work-card-outdoormix',
    lenses: ['strategy', 'content', 'experience'],
    // A dedicated case page is being developed. Keep this entry non-interactive until it exists.
  },
  {
    id: 'formula-1-governance',
    title: 'Who Controls Formula 1?',
    number: '06',
    discipline: 'Motorsport / Research',
    type: 'Research note',
    coverClass: 'work-card-f1',
    lenses: ['strategy'],
    href: '/archive/formula-1-governance',
  },
];

export default function WorkPage() {
  return (
    <div className="work-page" id="top">
      <HomeNav brandHref="/" />
      <main className="work-main">
        <header className="work-hero">
          <div className="work-hero-kicker">
            <span>SELECTED WORK</span>
            <span>SPORTS / BRANDS / EXPERIENCES</span>
          </div>
          <div className="work-hero-layout">
            <h1>Things I've<br/><em>been working on.</em></h1>
            <p>A mix of strategy, creative thinking and experiences built around sport. Each project starts with a question worth exploring.</p>
          </div>
        </header>

        <ArchiveProjects projects={projects} />

        <section className="work-bottom">
          <div>
            <p className="work-eyebrow">A LITTLE CONTEXT</p>
            <h2>Different briefs.<br/><em>One point of view.</em></h2>
          </div>
          <div className="work-bottom-copy">
            <p>Some projects are academic, others are independent concepts or research. They are clearly labelled, and I focus on the decisions behind each one.</p>
            <div className="work-bottom-links">
              <a href="/profile">More about me <span aria-hidden="true">↗</span></a>
              <a href="/contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="work-footer">
        <span>© Marta Laviña 2026</span>
        <span>Sports, brands & experiences.</span>
        <a href="https://www.linkedin.com/in/martalavinaperez" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </footer>
    </div>
  );
}

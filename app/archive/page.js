import './archive.css';

const projects = [
  {
    id: 'ikea-le-mans',
    code: 'ML-001',
    date: 'OCT 2026',
    type: 'FEATURE',
    category: 'SPONSORSHIP / FAN EXPERIENCE',
    title: 'The Human Side of Endurance',
    headline: 'What if endurance was about the fans too?',
    client: 'IKEA × 24H Le Mans',
    description: 'A sponsorship activation built around the human side of a 24-hour race: rest, food, comfort and participation as part of the fan experience.',
    weight: 'feature',
    href: '/archive/ikea-le-mans',
  },
  {
    id: 'canada-soccer',
    code: 'ML-002',
    date: '19 MAY 2026',
    type: 'CASE',
    category: 'CAMPAIGN / FOOTBALL',
    title: 'Our Game Now: The Host Nation Experience',
    headline: 'A host nation should feel like one.',
    client: 'Canada Soccer / Our Game Now',
    description: 'A strategic extension of an existing campaign into a physical, digital and participatory host-nation experience.',
    weight: 'case',
    href: '/archive/canada-soccer',
  },
  {
    id: 'swarovski-figure-skating',
    code: 'ML-003',
    date: 'MAR 2026',
    type: 'CASE',
    category: 'BRAND EXPERIENCE / FIGURE SKATING',
    title: 'From Performance to Experience',
    headline: 'What happens while the ice is empty?',
    client: 'Swarovski × World Junior Figure Skating Championships',
    description: 'A fan experience concept exploring how the moments between performances can help new audiences understand, feel and remember the event.',
    weight: 'case',
    href: '/archive/swarovski-figure-skating',
  },
  {
    id: '300-vip',
    code: 'ML-004',
    date: 'SEP 2026',
    type: 'CASE',
    category: 'EVENT OPERATIONS / GUEST EXPERIENCE',
    title: '300 VIP in 20 Minutes',
    headline: 'When the experience starts before the event does.',
    client: 'Event Operations Case',
    description: 'An operational response to a VIP arrival bottleneck, covering guest flow, check-in, staffing and service recovery under time pressure.',
    weight: 'case',
    href: '/archive/300-vip',
  },
  {
    id: 'celta-ecoalf',
    code: 'ML-005',
    date: 'DEC 2025',
    type: 'STUDY',
    category: 'PARTNERSHIP STRATEGY / FOOTBALL',
    title: 'Afouteza Polo Planeta',
    headline: 'Can a partnership connect football identity with the place it comes from?',
    client: 'Celta de Vigo × ECOALF',
    description: 'A purpose-led partnership study connecting Galician football culture, the Atlantic and environmental responsibility.',
    weight: 'study',
    href: '/archive/celta-ecoalf',
  },
  {
    id: 'formula-1-governance',
    code: 'ML-006',
    date: '2026',
    type: 'NOTE',
    category: 'RESEARCH / MOTORSPORT',
    title: 'Who Controls Formula 1?',
    headline: 'Sport, regulation and commercial power.',
    client: 'Formula 1 Governance Study',
    description: 'A concise look at the relationship between the FIA, Formula 1 and the teams, including how power shifts depending on the decision being made.',
    weight: 'note',
    href: '/archive/formula-1-governance',
  },
];

function Arrow() {
  return <span className="ui-arrow ui-arrow-up-right" aria-hidden="true" />;
}

function MobileMenu() {
  return (
    <details className="mobile-nav">
      <summary>MENU</summary>
      <div className="mobile-menu-panel">
        <div className="mobile-menu-top"><span>MARTA LAVIÑA</span><span className="mobile-menu-close">×</span></div>
        <div className="mobile-menu-links">
          <a href="/archive"><span>ARCHIVE</span><small>01</small></a>
          <a href="/profile"><span>PROFILE</span><small>02</small></a>
          <a href="/contact"><span>CONTACT</span><small>03</small></a>
          <span className="mobile-menu-disabled"><span>CV</span><small>04</small></span>
        </div>
        <div className="mobile-menu-foot"><span>SPORTS / BRANDS / PEOPLE / EXPERIENCES</span></div>
      </div>
    </details>
  );
}

export const metadata = {
  title: 'Archive | Marta Laviña',
  description: 'Selected projects, concepts and thinking across sports, brands and experiences by Marta Laviña.',
};

export default function ArchivePage() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="/">MARTA LAVIÑA</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a className="nav-active" href="/archive">ARCHIVE</a>
          <a href="/profile">PROFILE</a>
          <a href="/contact">CONTACT</a>
          <span className="nav-disabled" aria-label="CV download will be enabled when the final PDF is added">CV</span>
        </nav>
        <MobileMenu />
      </header>

      <section className="archive-hero shell reveal">
        <div className="archive-kicker">
          <span>ARCHIVE</span>
          <span>SELECTED WORK / CURRENT ARCHIVE</span>
        </div>
        <h1>Ideas, strategies<br />and things worth<br /><em>keeping.</em></h1>
        <div className="archive-intro">
          <p>A growing collection of projects across sponsorship, brand experience, events, fan experience and sports communication.</p>
          <p>Not every entry has the same weight. Some are full case studies. Others are ideas, studies or pieces of thinking that were worth filing.</p>
        </div>
      </section>

      <section className="archive-lenses shell section-rule">
        <p className="eyebrow">BROWSE THE ARCHIVE</p>
        <div className="archive-lens-list" aria-label="Archive themes">
          <span>ALL</span>
          <span>SPONSORSHIP</span>
          <span>FAN EXPERIENCE</span>
          <span>EVENTS</span>
          <span>BRAND</span>
          <span>CAMPAIGNS</span>
          <span>RESEARCH</span>
        </div>
      </section>

      <section className="archive-index shell section-rule">
        <div className="archive-index-heading">
          <span>INDEX</span>
          <span>{String(projects.length).padStart(2, '0')} ENTRIES</span>
        </div>

        {projects.map((project, index) => (
          <article id={project.id} className={`archive-project archive-project-${project.weight}`} key={project.code}>
            <div className="archive-project-num">{String(index + 1).padStart(2, '0')}</div>
            <div className="archive-project-main">
              <p className="entry-meta">{project.code} · {project.date} · {project.type}</p>
              <p className="archive-project-category">{project.category}</p>
              <h2>{project.headline}</h2>
              <p className="archive-project-client">{project.client}</p>
              <p className="archive-project-title">{project.title}</p>
              <p className="archive-project-description">{project.description}</p>
              {project.href ? (
                <a className="archive-project-link" href={project.href}>READ FULL CASE <Arrow /></a>
              ) : (
                <span className="archive-project-link archive-project-link-pending">FULL ENTRY IN DEVELOPMENT <Arrow /></span>
              )}
            </div>
            {project.weight === 'feature' && (
              <div className="archive-feature-mark" aria-hidden="true">
                <span>FEATURED</span>
                <span>ML-001</span>
              </div>
            )}
          </article>
        ))}
      </section>

      <section className="archive-note shell section-rule">
        <p className="eyebrow">ABOUT THE ARCHIVE</p>
        <p>The archive is intentionally uneven. A finished activation can sit next to a two-minute research note because the value is not always in the scale of the output. Sometimes it is in the question behind it.</p>
        <a className="text-link" href="/">BACK TO HOME <span className="ui-arrow ui-arrow-right" aria-hidden="true" /></a>
      </section>

      <footer className="footer shell section-rule">
        <div><strong>MARTA LAVIÑA</strong><p>Sports, brands & experiences.</p></div>
        <div className="footer-links"><a href="mailto:mlavinaperez@gmail.com">Email</a><a href="https://www.linkedin.com/in/martalavinaperez" target="_blank" rel="noreferrer">LinkedIn</a></div>
        <div className="legal"><p>© Marta Laviña 2026</p><p><span>Legal</span> · <span>Privacy</span></p></div>
      </footer>
    </main>
  );
}

const recentEntries = [
  {
    code: 'ML-001',
    date: 'OCT 2026',
    category: 'SPONSORSHIP / FAN EXPERIENCE',
    title: 'What if endurance was about the fans too?',
    client: 'IKEA × 24H Le Mans',
    description: 'A fan experience concept built around the human side of a 24-hour race.',
    href: '/archive#ikea-le-mans',
  },
  {
    code: 'ML-002',
    date: 'JAN 2026',
    category: 'CAMPAIGN / FOOTBALL',
    title: 'A host nation should feel like one.',
    client: 'Canada Soccer / Our Game Now',
    description: 'Turning an existing campaign into a physical, digital and participatory host-nation experience.',
    href: '/archive#canada-soccer',
  },
];

const interests = [
  'Why some sponsorships feel natural and others feel forced.',
  'What fans remember after the final whistle.',
  'How operational decisions shape an experience.',
  'Why sport deserves better storytelling.',
];

function Arrow({ direction = 'right' }) {
  return <span className={`ui-arrow ui-arrow-${direction}`} aria-hidden="true" />;
}

function MobileMenu() {
  return (
    <details className="mobile-nav">
      <summary>MENU</summary>
      <div className="mobile-menu-panel">
        <div className="mobile-menu-top">
          <span>MARTA LAVIÑA</span>
          <span className="mobile-menu-close">×</span>
        </div>
        <div className="mobile-menu-links">
          <a href="/archive"><span>ARCHIVE</span><small>01</small></a>
          <a href="/profile"><span>PROFILE</span><small>02</small></a>
          <a href="#contact"><span>CONTACT</span><small>03</small></a>
          <span className="mobile-menu-disabled"><span>CV</span><small>04</small></span>
        </div>
        <div className="mobile-menu-foot"><span>SPORTS / BRANDS / PEOPLE / EXPERIENCES</span></div>
      </div>
    </details>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top">MARTA LAVIÑA</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/archive">ARCHIVE</a>
          <a href="/profile">PROFILE</a>
          <a href="#contact">CONTACT</a>
          <span className="nav-disabled" aria-label="CV download will be enabled when the final PDF is added">CV</span>
        </nav>
        <MobileMenu />
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy reveal">
          <h1>Marta Laviña</h1>
          <p className="hero-line">I think about what happens <em>around the game.</em></p>
          <p className="eyebrow">AN EDITORIAL ARCHIVE OF SPORTS, BRANDS & EXPERIENCES.</p>
          <p className="intro">I’m Marta, a Sports Management student working across sponsorship, brand experience and events. I’m interested in the moments where strategy becomes something people can actually experience.</p>
          <p className="meta-row">MADRID / NICE · SPORTS MANAGEMENT · SPONSORSHIP · BRAND EXPERIENCE · EVENTS</p>
        </div>

        <figure className="hero-image reveal-delay">
          <img
            src="/marta-hero"
            alt="Portrait of Marta Laviña outdoors in warm evening light"
          />
          <div className="hero-stamp" aria-hidden="true">
            <span>SPORTS</span>
            <span>BRANDS</span>
            <span>PEOPLE</span>
            <span>PLACES</span>
          </div>
        </figure>
      </section>

      <section id="latest" className="archive shell section-rule">
        <div className="section-heading">
          <h2>Latest from<br />the Archive</h2>
          <p>TWO RECENT EXPLORATIONS INTO SPORTS, BRANDS AND PEOPLE.</p>
        </div>

        <div className="entries">
          {recentEntries.map((entry, index) => (
            <article className="entry" key={entry.code}>
              <div className="entry-index">0{index + 1}</div>
              <div className="entry-body">
                <p className="entry-meta">{entry.code} · {entry.date} · {entry.category}</p>
                <h3>{entry.title}</h3>
                <p className="client">{entry.client}</p>
                <p className="description">{entry.description}</p>
                <a className="text-link" href={entry.href}>READ ENTRY <Arrow direction="up-right" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quick shell section-rule">
        <h2>Looking for<br />something specific?</h2>
        <div className="quick-links">
          <a href="/archive"><span>01 / Explore the archive</span><Arrow /></a>
          <a href="/profile"><span>02 / My profile</span><Arrow /></a>
          <span className="quick-disabled"><span>03 / Download my CV</span><span>PDF TO BE ADDED</span></span>
          <a href="#contact"><span>04 / Get in touch</span><Arrow /></a>
        </div>
      </section>

      <section className="interests shell section-rule">
        <h2>Currently<br />interested in</h2>
        <div className="interest-grid">
          {interests.map((interest, index) => (
            <div className="interest" key={interest}>
              <span>0{index + 1}</span>
              <p>{interest}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-teaser shell section-rule">
        <p className="eyebrow">BEHIND THE ARCHIVE</p>
        <div>
          <h2>Sport first. Business second.<br />Now I think about both.</h2>
          <p>Before studying the business of sport, I experienced it from the inside. That perspective still shapes how I think about fans, athletes, brands and events.</p>
          <a className="text-link" href="/profile">READ MY PROFILE <Arrow direction="up-right" /></a>
        </div>
      </section>

      <section className="cv-cta shell section-rule">
        <p className="eyebrow">PREFER THE TRADITIONAL VERSION?</p>
        <span className="cv-placeholder">CV PDF COMING NEXT</span>
        <p>THE DOWNLOAD WILL BE ENABLED WHEN THE FINAL CV IS ADDED.</p>
      </section>

      <footer id="contact" className="footer shell section-rule">
        <div>
          <strong>MARTA LAVIÑA</strong>
          <p>Sports, brands & experiences.</p>
        </div>
        <div className="footer-links footer-links-pending">
          <span>Email</span>
          <span>LinkedIn</span>
        </div>
        <div className="legal">
          <p>© Marta Laviña 2026</p>
          <p><span>Legal</span> · <span>Privacy</span></p>
        </div>
      </footer>
    </main>
  );
}

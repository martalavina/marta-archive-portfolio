const recentEntries = [
  {
    code: 'ML—001',
    date: 'OCT 2026',
    category: 'SPONSORSHIP / FAN EXPERIENCE',
    title: 'What if endurance was about the fans too?',
    client: 'IKEA × 24H Le Mans',
    description: 'A fan experience concept built around the human side of a 24-hour race.',
  },
  {
    code: 'ML—002',
    date: 'JAN 2026',
    category: 'CAMPAIGN / FOOTBALL',
    title: 'A host nation should feel like one.',
    client: 'Canada Soccer — Our Game Now',
    description: 'Turning an existing campaign into a physical, digital and participatory host-nation experience.',
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

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top">MARTA LAVIÑA</a>
        <nav aria-label="Primary navigation">
          <a href="/archive">ARCHIVE</a>
          <a href="#profile">PROFILE</a>
          <a href="#contact">CONTACT</a>
          <a href="/Marta-Lavina-CV.pdf" download>CV <Arrow direction="down" /></a>
        </nav>
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
            src="https://images.unsplash.com/photo-1693825948507-acd866203fae?auto=format&fit=crop&fm=jpg&q=82&w=1800"
            alt="Spectator seated in a sports stadium"
          />
          <figcaption>Temporary visual reference · final image will be Marta’s own.</figcaption>
        </figure>
      </section>

      <section id="archive" className="archive shell section-rule">
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
                <a className="text-link" href="/archive">READ ENTRY <Arrow direction="up-right" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quick shell section-rule">
        <h2>Looking for<br />something specific?</h2>
        <div className="quick-links">
          <a href="/archive"><span>01 — Explore the archive</span><Arrow /></a>
          <a href="#profile"><span>02 — My profile</span><Arrow /></a>
          <a href="/Marta-Lavina-CV.pdf" download><span>03 — Download my CV</span><Arrow direction="down" /></a>
          <a href="#contact"><span>04 — Get in touch</span><Arrow /></a>
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

      <section id="profile" className="profile-teaser shell section-rule">
        <p className="eyebrow">BEHIND THE ARCHIVE</p>
        <div>
          <h2>Sport first. Business second.<br />Now I think about both.</h2>
          <p>Before studying the business of sport, I experienced it from the inside. That perspective still shapes how I think about fans, athletes, brands and events.</p>
          <a className="text-link" href="#">READ MY PROFILE <Arrow direction="up-right" /></a>
        </div>
      </section>

      <section className="cv-cta shell section-rule">
        <p className="eyebrow">PREFER THE TRADITIONAL VERSION?</p>
        <a href="/Marta-Lavina-CV.pdf" download>DOWNLOAD MY CV <Arrow direction="down" /></a>
        <p>PDF · ENGLISH · UPDATED OCT 2026</p>
      </section>

      <footer id="contact" className="footer shell section-rule">
        <div>
          <strong>MARTA LAVIÑA</strong>
          <p>Sports, brands & experiences.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:hello@example.com">Email</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className="legal">
          <p>© Marta Laviña 2026</p>
          <p><a href="#">Legal</a> · <a href="#">Privacy</a></p>
        </div>
      </footer>
    </main>
  );
}

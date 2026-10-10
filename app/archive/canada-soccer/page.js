import './canada-soccer.css';

const audiences = [
  {
    number: '01',
    title: 'DIGITAL-FIRST FANS',
    copy: 'A younger audience discovering teams through players, short-form content, creators, visual culture and moments that travel beyond the match itself.',
  },
  {
    number: '02',
    title: 'MULTICULTURAL CANADA',
    copy: 'Supporters whose first football identity may come from another country, club or family tradition, while Canada becomes an additional football home.',
  },
  {
    number: '03',
    title: 'GLOBAL WORLD CUP AUDIENCE',
    copy: 'International visitors and viewers encountering a host nation with less inherited World Cup mythology but a clear contemporary story to tell.',
  },
];

const activations = [
  {
    number: '01',
    title: 'THE RED ROUTE',
    role: 'CITY / DISCOVERY / HOST NATION',
    statement: 'Make the host nation visible beyond the stadium.',
    copy: 'A physical and digital route across Toronto and Vancouver using the campaign red line to connect fan zones, urban landmarks, local stories, player content and community touchpoints.',
    physical: 'Urban markers, temporary installations, wayfinding, QR touchpoints and fan-zone connections.',
    digital: 'Interactive map, city reels, unlockable stories, local playlists, AR and creator content.',
    measure: 'Visits, scans, microsite traffic, route interaction, city-level content and CanadaRED conversion.',
  },
  {
    number: '02',
    title: 'BORROWED SHIRTS',
    role: 'IDENTITY / COMMUNITY / STORYTELLING',
    statement: 'Do not ask fans to erase one identity to adopt another.',
    copy: 'A multicultural storytelling platform built around the shirts that first introduced people to football and the Canada shirt they can add to that story during a home World Cup.',
    physical: 'Pop-ups in multicultural neighbourhoods, fan zones, universities, CanadaRED events and selected retail partners.',
    digital: 'My First Shirt / My New Shirt films, portraits, family stories and supporter-led content.',
    measure: 'Stories collected, participation, communities represented, earned coverage, sentiment and CanadaRED sign-ups.',
  },
  {
    number: '03',
    title: 'THE 90TH MINUTE LETTERS',
    role: 'VOICE / EMOTION / MEMORY',
    statement: 'Turn supporter voice into an archive, not just a hashtag.',
    copy: 'A physical and digital collection of letters, audio and video messages for the national team, released around key tournament moments instead of disappearing into a live social feed.',
    physical: 'Red message boxes across fan zones, events and selected public spaces.',
    digital: 'Message archive, audio edits, supporter reels, quote-led content and player reactions.',
    measure: 'Submissions, archive visits, content completion, shares, player interaction and qualitative sentiment.',
  },
];

const measurement = [
  ['REACH', 'Unique reach, video views, impressions and campaign discovery'],
  ['PARTICIPATION', 'Route visits, pop-up participation, messages submitted and supporter stories collected'],
  ['CONVERSION', 'QR scans, microsite sessions, repeat visits and CanadaRED registrations'],
  ['ADOPTION', 'UGC, organic mentions, shares, creator participation and community representation'],
  ['BRAND EFFECT', 'Sentiment, campaign association, perceived relevance and host-nation identity'],
];

function Arrow() {
  return <span className="ui-arrow ui-arrow-right" aria-hidden="true" />;
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
  title: 'Canada Soccer | Marta Laviña',
  description: 'Our Game Now: The Host Nation Experience, a strategic campaign extension for Canada Soccer ahead of the 2026 FIFA World Cup.',
};

export default function CanadaSoccerPage() {
  return (
    <main className="canada-case">
      <header className="site-header shell">
        <a className="wordmark" href="/">MARTA LAVIÑA</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a className="nav-active" href="/archive">ARCHIVE</a>
          <a href="/profile">PROFILE</a>
          <a href="/contact">CONTACT</a>
          <span className="nav-disabled">CV</span>
        </nav>
        <MobileMenu />
      </header>

      <section className="canada-hero shell reveal">
        <div className="canada-meta-top">
          <span>ML-002</span>
          <span>2026 / PRE-WORLD CUP</span>
          <span>STRATEGIC CAMPAIGN CONCEPT</span>
          <span>INDIVIDUAL PROJECT</span>
        </div>
        <div className="canada-hero-grid">
          <div>
            <p className="canada-kicker">CANADA SOCCER / OUR GAME NOW</p>
            <h1>A host nation<br />should <em>feel</em><br />like one.</h1>
          </div>
          <div className="canada-hero-side">
            <p className="canada-proposition">Turn an existing brand position into a physical, digital and participatory host-nation experience.</p>
            <div className="canada-role-list">
              <span>Brand Strategy</span>
              <span>Integrated Campaign</span>
              <span>Fan Experience</span>
              <span>Content Ecosystem</span>
              <span>Community Engagement</span>
            </div>
          </div>
        </div>
        <p className="canada-disclaimer">Independent strategic concept developed around Canada Soccer's existing Our Game Now platform. Not commissioned by or affiliated with Canada Soccer, FIFA or their commercial partners.</p>
      </section>

      <section className="canada-context shell section-rule">
        <p className="canada-section-label">01 / THE CONTEXT</p>
        <div className="canada-context-grid">
          <h2>Hosting a World Cup is not only a tournament role.<br />It is a brand role.</h2>
          <div>
            <p>Canada entered 2026 with a rare communications opportunity: compete on home soil while presenting a football identity to domestic and international audiences at the same time.</p>
            <p>The challenge was not to imitate nations with deeper World Cup mythology. It was to make a younger, diverse and increasingly confident football culture feel visible on its own terms.</p>
          </div>
        </div>
        <div className="canada-context-callout">Canada does not need borrowed football history. It needs a clear way to make its own moment visible.</div>
      </section>

      <section className="canada-diagnosis shell section-rule">
        <p className="canada-section-label">02 / THE DIAGNOSIS</p>
        <div className="canada-diagnosis-grid">
          <div className="diagnosis-left">
            <span className="canada-mini-label">EXISTING PLATFORM</span>
            <h2>Our Game Now already had the message.</h2>
            <p>Canada Soccer's platform positioned football as confident, culturally relevant and increasingly central to the country's sporting conversation.</p>
          </div>
          <div className="diagnosis-right">
            <span className="canada-mini-label">STRATEGIC GAP</span>
            <h3>The next step was participation.</h3>
            <p>The opportunity was to move from campaign communication into experiences people could encounter in cities, share digitally and contribute to themselves.</p>
          </div>
        </div>
        <div className="canada-equation">
          <span>MESSAGE</span><strong>+</strong><span>PLACE</span><strong>+</strong><span>PARTICIPATION</span><strong>=</strong><span>HOST NATION EXPERIENCE</span>
        </div>
      </section>

      <section className="canada-audience shell section-rule">
        <p className="canada-section-label">03 / AUDIENCE</p>
        <div className="canada-audience-heading">
          <h2>One national team.<br /><em>Three different entry points.</em></h2>
          <p>The campaign needed to work for people already following Canada, people whose football identity started somewhere else, and people encountering Canadian football for the first time.</p>
        </div>
        <div className="canada-audience-grid">
          {audiences.map((audience) => (
            <article key={audience.number}>
              <span>{audience.number}</span>
              <h3>{audience.title}</h3>
              <p>{audience.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="canada-platform shell section-rule">
        <p className="canada-section-label">04 / THE STRATEGIC PLATFORM</p>
        <div className="canada-platform-grid">
          <div>
            <span className="canada-mini-label">OUR GAME NOW: THE HOST NATION EXPERIENCE</span>
            <h2>From message<br />to experience.<br /><em>From host nation to shared memory.</em></h2>
          </div>
          <div className="canada-platform-copy">
            <p>The extension connects team, cities, communities, supporters and digital channels around one role: make the home World Cup feel lived across the country, not contained inside the match schedule.</p>
            <div className="canada-system-list">
              <span>CITY</span>
              <span>COMMUNITY</span>
              <span>PLAYERS</span>
              <span>FANS</span>
              <span>CONTENT</span>
              <span>MEMORY</span>
            </div>
          </div>
        </div>
      </section>

      <section className="canada-pulse shell section-rule">
        <div className="canada-pulse-mark" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="canada-pulse-copy">
          <p className="canada-section-label">05 / VISUAL SYSTEM</p>
          <h2>The Red Pulse</h2>
          <p>A single red line acts as route, heartbeat, movement and connection. Its job is not decoration. It gives the campaign a recognisable device that can travel from urban wayfinding to social content, digital maps and live environments.</p>
          <div className="canada-pulse-tags"><span>ROUTE</span><span>HEARTBEAT</span><span>TERRITORY</span><span>MOVEMENT</span><span>CONNECTION</span></div>
        </div>
      </section>

      <section className="canada-activations shell section-rule">
        <p className="canada-section-label">06 / ACTIVATION SYSTEM</p>
        <div className="canada-activation-list">
          {activations.map((activation) => (
            <article className="canada-activation" key={activation.number}>
              <div className="canada-activation-num">{activation.number}</div>
              <div className="canada-activation-main">
                <p className="canada-mini-label">{activation.role}</p>
                <h2>{activation.title}</h2>
                <p className="canada-activation-statement">{activation.statement}</p>
                <p className="canada-activation-copy">{activation.copy}</p>
              </div>
              <div className="canada-activation-details">
                <div><span>PHYSICAL</span><p>{activation.physical}</p></div>
                <div><span>DIGITAL</span><p>{activation.digital}</p></div>
                <div><span>MEASURE</span><p>{activation.measure}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="canada-ecosystem shell section-rule">
        <p className="canada-section-label">07 / CHANNEL ARCHITECTURE</p>
        <div className="canada-ecosystem-heading">
          <h2>The campaign should behave like an ecosystem, not a content calendar.</h2>
          <p>Each channel has a different job. Physical spaces create evidence, the microsite connects the system, social platforms distribute stories, and CanadaRED provides a route into longer-term community value.</p>
        </div>
        <div className="canada-channel-grid">
          <div><span>INSTAGRAM</span><p>Campaign world, films, portraits, city stories and activation edits.</p></div>
          <div><span>TIKTOK</span><p>Creators, supporter stories, rapid cultural moments and participation.</p></div>
          <div><span>YOUTUBE</span><p>Longer player, fan and city storytelling.</p></div>
          <div><span>LIVE / X</span><p>Match conversation, reactive publishing and supporter voice.</p></div>
          <div><span>MICROSITE</span><p>Route map, story archive, participation hub and activation utility.</p></div>
          <div><span>PHYSICAL</span><p>Fan zones, streets, pop-ups and public touchpoints that make the platform tangible.</p></div>
        </div>
      </section>

      <section className="canada-measurement shell section-rule">
        <p className="canada-section-label">08 / MEASUREMENT</p>
        <div className="canada-measurement-heading">
          <h2>Do not stop at views.<br /><em>Measure whether people joined in.</em></h2>
          <p>The campaign is only stronger than a communications layer if people move from seeing it to participating, contributing and identifying with it.</p>
        </div>
        <div className="canada-kpi-grid">
          {measurement.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="canada-process shell section-rule">
        <p className="canada-section-label">09 / STRATEGIC PROCESS</p>
        <div className="canada-process-intro">
          <h2>The project started by extending what already existed, not replacing it.</h2>
          <p>The work combined analysis of Canada Soccer's digital presence, audience behaviour, host-nation context and existing brand platform before developing the campaign extension.</p>
        </div>
        <div className="canada-process-grid">
          <div><span>01</span><h3>BRAND AUDIT</h3><p>Existing channels, visual language, content roles and the core promise of Our Game Now.</p></div>
          <div><span>02</span><h3>AUDIENCE LOGIC</h3><p>Digital-first fans, multicultural communities and the international host-nation audience.</p></div>
          <div><span>03</span><h3>EXPERIENCE GAP</h3><p>Identify where a strong campaign line could become more participatory, physical and ownable.</p></div>
          <div><span>04</span><h3>CAMPAIGN SYSTEM</h3><p>Build activations with distinct roles, shared visual codes, channel jobs and measurable behaviours.</p></div>
        </div>
      </section>

      <section className="canada-close shell section-rule">
        <div>
          <p className="canada-section-label">CLOSING VIEW</p>
          <h2>A host nation does not only stage matches. It creates the memories people attach to being there.</h2>
        </div>
        <div className="canada-close-actions">
          <a className="text-link" href="/archive">BACK TO ARCHIVE <Arrow /></a>
          <a className="text-link" href="/contact">GET IN TOUCH <Arrow /></a>
        </div>
      </section>

      <footer className="footer shell section-rule">
        <div><strong>MARTA LAVIÑA</strong><p>Sports, brands & experiences.</p></div>
        <div className="footer-links"><a href="mailto:mlavinaperez@gmail.com">Email</a><a href="https://www.linkedin.com/in/martalavinaperez" target="_blank" rel="noreferrer">LinkedIn</a></div>
        <div className="legal"><p>© Marta Laviña 2026</p><p><span>Legal</span> · <span>Privacy</span></p></div>
      </footer>
    </main>
  );
}

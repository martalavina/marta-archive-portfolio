import './swarovski-figure-skating.css';

const experienceModules = [
  {
    number: '01',
    title: 'THE SWAROVSKI ICE EXPERIENCE',
    role: 'HERO ACTIVATION / IN-ARENA',
    statement: 'Use the moments when competition pauses to make the sport easier to understand.',
    copy: 'A guided in-arena storytelling sequence designed for resurfacing breaks. Light, replay, commentary and short visual explanations turn dead time into useful audience time without competing with the athletes.',
  },
  {
    number: '02',
    title: 'LIGHT PATH FAN JOURNEY',
    role: 'ARRIVAL / WAYFINDING',
    statement: 'Start the experience before the first program begins.',
    copy: 'A restrained light-based journey through arrival and concourse spaces, connecting key touchpoints while introducing the visual language of the partnership.',
  },
  {
    number: '03',
    title: 'CRYSTAL DETAIL REPLAY',
    role: 'UNDERSTANDING / SCREEN CONTENT',
    statement: 'Help new audiences notice what experienced fans already see.',
    copy: 'Short in-venue replay moments isolate details such as edge quality, rotation, synchronicity, speed and costume movement using approved competition footage and simple visual cues.',
  },
  {
    number: '04',
    title: 'CRYSTAL MEMORY INSTALLATION',
    role: 'MEMORY / PARTICIPATION',
    statement: 'Give spectators a way to leave something behind.',
    copy: 'A physical installation that collects selected fan reactions and event memories, gradually changing across the championship and creating a visible record of the audience experience.',
  },
];

const measurement = [
  ['ATTENTION', 'Break-time screen engagement, participation and dwell around activation moments'],
  ['UNDERSTANDING', 'Audience self-reported understanding of selected skating elements and event format'],
  ['EXPERIENCE', 'Event satisfaction, memorability and perceived usefulness of the added content'],
  ['PARTNER VALUE', 'Swarovski recall, attribution and perceived fit with the event experience'],
  ['CONTENT', 'Completion, saves, shares and replay interaction for approved digital extensions'],
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
  title: 'Swarovski × World Junior Figure Skating | Marta Laviña',
  description: 'A brand and fan experience concept for Swarovski at the ISU World Junior Figure Skating Championships, focused on making the event easier to understand and more memorable for new audiences.',
};

export default function SwarovskiFigureSkatingPage() {
  return (
    <main className="swarovski-case">
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

      <section className="skate-hero shell reveal">
        <div className="skate-meta-top">
          <span>ML-003</span>
          <span>MARCH 2026</span>
          <span>BRAND EXPERIENCE CONCEPT</span>
          <span>INDIVIDUAL PROJECT</span>
        </div>
        <div className="skate-hero-grid">
          <div>
            <p className="skate-kicker">SWAROVSKI × WORLD JUNIOR FIGURE SKATING CHAMPIONSHIPS</p>
            <h1>From performance<br />to <em>experience.</em></h1>
          </div>
          <div className="skate-hero-side">
            <p className="skate-proposition">A fan experience system designed to help new audiences understand, feel and remember figure skating beyond the programs themselves.</p>
            <div className="skate-role-list">
              <span>Brand Experience</span>
              <span>Fan Experience</span>
              <span>Sponsorship Activation</span>
              <span>Audience Strategy</span>
              <span>Event Programming</span>
            </div>
          </div>
        </div>
        <p className="skate-disclaimer">Independent portfolio concept. Not commissioned by or affiliated with Swarovski, the International Skating Union, the World Junior Figure Skating Championships or their commercial partners.</p>
      </section>

      <section className="skate-context shell section-rule">
        <p className="skate-section-label">01 / THE CONTEXT</p>
        <div className="skate-context-grid">
          <h2>Junior skating produces future stars.<br />The event experience should help audiences recognise them.</h2>
          <div>
            <p>The World Junior Figure Skating Championships bring together emerging international athletes across singles, pairs and ice dance, yet junior events naturally operate with less mainstream attention than senior championships or the Olympic stage.</p>
            <p>The opportunity is therefore not only visibility. It is helping the people who do attend understand what they are watching, stay engaged between performances and leave with stronger memories of the athletes and the event.</p>
          </div>
        </div>
      </section>

      <section className="skate-insight shell section-rule">
        <p className="skate-section-label">02 / THE INSIGHT</p>
        <div className="skate-insight-grid">
          <div>
            <span className="skate-mini-label">OBSERVATION</span>
            <h2>Figure skating is often experienced as a performance, not as an event.</h2>
          </div>
          <div>
            <p>For dedicated fans, that can be enough. They understand the disciplines, technical language, warm-ups, scoring rhythm and why small details matter.</p>
            <p>For a newer spectator, much of that context is invisible. Accessibility alone does not create engagement. The event needs to help people know where to look, what to notice and why a moment matters.</p>
          </div>
        </div>
        <div className="skate-equation">
          <span>ACCESS</span><strong>+</strong><span>CONTEXT</span><strong>+</strong><span>PARTICIPATION</span><strong>=</strong><span>ENGAGEMENT</span>
        </div>
      </section>

      <section className="skate-audience shell section-rule">
        <p className="skate-section-label">03 / THE AUDIENCE JOURNEY</p>
        <div className="skate-audience-heading">
          <h2>The gaps between performances are not empty.<br /><em>They are part of the fan journey.</em></h2>
          <p>Competition rhythm creates repeated transitions. Arrival, warm-up, performance, scoring, resurfacing and the next group each create a different audience need.</p>
        </div>
        <div className="skate-journey">
          <div><span>ARRIVAL</span><strong>Orient</strong><p>Where am I going and what is happening today?</p></div>
          <div><span>PERFORMANCE</span><strong>Watch</strong><p>Let the athlete own the moment. No competing activation.</p></div>
          <div><span>SCORING</span><strong>Decode</strong><p>Give enough context to follow the result without turning the event into a lesson.</p></div>
          <div><span>RESURFACING</span><strong>Engage</strong><p>Use the longest natural pause for guided storytelling and audience interaction.</p></div>
          <div><span>DEPARTURE</span><strong>Remember</strong><p>Leave with a story, athlete or detail worth carrying beyond the arena.</p></div>
        </div>
      </section>

      <section className="skate-fit shell section-rule">
        <p className="skate-section-label">04 / PARTNER ROLE</p>
        <div className="skate-fit-grid">
          <div>
            <h2>Swarovski should not sit beside the sport.<br /><em>It should help reveal it.</em></h2>
          </div>
          <div className="skate-fit-copy">
            <p>The concept uses Swarovski as an experience enabler rather than a logo layer. The creative territory is built around light, detail, precision and transformation, qualities that can be translated into how spectators discover the sport.</p>
            <div className="skate-fit-tags"><span>LIGHT</span><span>DETAIL</span><span>PRECISION</span><span>TRANSFORMATION</span></div>
          </div>
        </div>
      </section>

      <section className="skate-platform shell section-rule">
        <p className="skate-section-label">05 / THE EXPERIENCE PLATFORM</p>
        <div className="skate-platform-grid">
          <div>
            <span className="skate-mini-label">SWAROVSKI INTEGRATED AUDIENCE EXPERIENCE</span>
            <h2>One hero moment.<br />Three supporting touchpoints.<br /><em>One audience logic.</em></h2>
          </div>
          <p>Every element has a job. The system avoids turning the arena into a branded exhibition. Instead, the partnership appears where it can improve orientation, understanding, participation or memory.</p>
        </div>
        <div className="skate-platform-index">
          {experienceModules.map((item) => (
            <div className="skate-platform-item" key={item.number}>
              <span>{item.number}</span>
              <small>{item.role}</small>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="skate-hero-activation shell section-rule">
        <p className="skate-section-label">06 / HERO ACTIVATION</p>
        <div className="skate-activation-heading">
          <div>
            <span className="skate-mini-label">THE SWAROVSKI ICE EXPERIENCE</span>
            <h2>Turn resurfacing into a guided storytelling window.</h2>
          </div>
          <p>The activation uses an existing operational pause rather than creating a new interruption. The ice remains the visual centre while in-arena screens, lighting and short-form narration help audiences read the competition more confidently.</p>
        </div>
        <div className="skate-runshow">
          <div><span>01</span><strong>RESET</strong><p>Competition ends, resurfacing begins, arena tone changes without demanding immediate attention.</p></div>
          <div><span>02</span><strong>REVEAL</strong><p>A concise story introduces one technical, artistic or athlete-led idea using approved footage and graphics.</p></div>
          <div><span>03</span><strong>NOTICE</strong><p>Replay or visual treatment isolates a detail spectators can look for in the next group.</p></div>
          <div><span>04</span><strong>RETURN</strong><p>The sequence clears before athlete introduction so the brand never competes with the competition.</p></div>
        </div>
        <p className="skate-runshow-note">Illustrative run-of-show. Final duration and content would follow the official competition timetable, venue presentation plan and broadcaster or rights-holder approvals.</p>
      </section>

      <section className="skate-support shell section-rule">
        <p className="skate-section-label">07 / SUPPORTING TOUCHPOINTS</p>
        <div className="skate-support-list">
          {experienceModules.slice(1).map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <div>
                <p className="skate-mini-label">{item.role}</p>
                <h2>{item.title}</h2>
                <p className="skate-support-statement">{item.statement}</p>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skate-real shell section-rule">
        <p className="skate-section-label">08 / MAKING IT REAL</p>
        <div className="skate-real-heading">
          <h2>In figure skating, the best activation knows when to disappear.</h2>
          <p>Competition integrity comes first. The experience must fit around athletes, officials, broadcast, ice operations and safeguarding requirements rather than forcing the event around the sponsor.</p>
        </div>
        <div className="skate-real-grid">
          <div><span>01</span><h3>FIELD OF PLAY</h3><p>No activation on the ice during athlete warm-up or competition. Resurfacing content remains fully coordinated with event presentation and ice operations.</p></div>
          <div><span>02</span><h3>RIGHTS</h3><p>Event marks, athlete imagery, official footage, replay use, music, venue screens, content capture and sponsor category rights require approval.</p></div>
          <div><span>03</span><h3>SAFEGUARDING</h3><p>Junior athlete content requires federation-led consent, age-appropriate storytelling and clear safeguards around interviews, imagery and fan interaction.</p></div>
          <div><span>04</span><h3>PRODUCTION</h3><p>Lighting cues, screen graphics, voiceover, timing, staffing, accessibility and technical fallback plans must be built into the competition run-of-show.</p></div>
        </div>
      </section>

      <section className="skate-measurement shell section-rule">
        <p className="skate-section-label">09 / MEASUREMENT</p>
        <div className="skate-measurement-heading">
          <h2>Measure whether the experience helped people follow the sport.</h2>
          <p>Visibility matters, but the stronger test is whether the partnership improves attention, understanding, event memory and partner attribution.</p>
        </div>
        <div className="skate-kpi-grid">
          {measurement.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="skate-process shell section-rule">
        <p className="skate-section-label">10 / PERSPECTIVE & PROCESS</p>
        <div className="skate-process-grid">
          <div>
            <h2>This project started from inside the sport.</h2>
            <p>Years spent competing in figure skating shaped the initial observation: a spectator can enjoy a program without understanding the event around it. The strategic work then translated that first-hand perspective into an audience problem rather than treating personal experience as proof on its own.</p>
          </div>
          <div className="skate-process-steps">
            <div><span>01</span><h3>OBSERVE</h3><p>Identify where live spectators lose context, attention or confidence during a competition session.</p></div>
            <div><span>02</span><h3>SEPARATE</h3><p>Protect athlete moments from sponsor moments and identify the natural spaces where activation can add value.</p></div>
            <div><span>03</span><h3>TRANSLATE</h3><p>Turn brand qualities into useful audience behaviours rather than decorative brand presence.</p></div>
            <div><span>04</span><h3>STRESS TEST</h3><p>Check timing, rights, safeguarding, accessibility, technical delivery and measurement before treating the concept as credible.</p></div>
          </div>
        </div>
      </section>

      <section className="skate-close shell section-rule">
        <div>
          <p className="skate-section-label">CLOSING VIEW</p>
          <h2>The objective is not to make sponsorship more visible. It is to make the event more legible, more engaging and more memorable.</h2>
        </div>
        <div className="skate-close-actions">
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

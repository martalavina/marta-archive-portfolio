import './formula-1-governance.css';

const actors = [
  ['FIA', 'Governing body', 'Writes and enforces the sporting, technical and safety framework of the championship.'],
  ['FORMULA 1', 'Commercial rights holder', 'Controls the championship’s commercial exploitation, including media, sponsorship and promoter relationships.'],
  ['TEAMS', 'Participants and stakeholders', 'Compete under the regulatory framework while influencing governance through formal structures and negotiated agreements.'],
];

const powerQuestions = [
  ['RULES', 'Who can write or change the sporting and technical framework?'],
  ['MONEY', 'Who controls the commercial rights and the distribution model?'],
  ['ENTRY', 'Who decides whether a new team can join the championship?'],
  ['INFLUENCE', 'How much formal and informal leverage do existing teams hold?'],
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
  title: 'Who Controls Formula 1? | Marta Laviña',
  description: 'A short research note on Formula 1 governance, regulation, commercial rights and stakeholder power.',
};

export default function FormulaOneGovernancePage() {
  return (
    <main className="f1-note">
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

      <section className="f1-hero shell reveal">
        <div className="f1-meta">
          <span>ML-006</span>
          <span>2026</span>
          <span>RESEARCH NOTE</span>
          <span>SPORTS LAW / MOTORSPORT</span>
        </div>
        <div className="f1-hero-grid">
          <div>
            <p className="f1-kicker">GOVERNANCE / REGULATION / COMMERCIAL POWER</p>
            <h1>Who controls<br /><em>Formula 1?</em></h1>
          </div>
          <div className="f1-intro">
            <p>Formula 1 does not have one centre of power. It operates through a negotiated structure where regulatory authority, commercial control and team interests overlap.</p>
            <p className="f1-source-note">Adapted from a Sports Law research project and updated to reflect the current 2026 governance framework.</p>
          </div>
        </div>
      </section>

      <section className="f1-thesis shell section-rule">
        <p className="f1-section-label">01 / THE SHORT ANSWER</p>
        <div className="f1-thesis-grid">
          <h2>No single actor controls Formula 1.</h2>
          <p>The FIA governs the championship. Formula 1 holds the commercial rights. Teams compete, negotiate and influence the system. The real structure is the relationship between all three.</p>
        </div>
      </section>

      <section className="f1-actors shell section-rule">
        <p className="f1-section-label">02 / THREE CENTRES OF POWER</p>
        <div className="f1-actor-grid">
          {actors.map(([name, role, copy], index) => (
            <article key={name}>
              <span>0{index + 1}</span>
              <h2>{name}</h2>
              <h3>{role}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="f1-framework shell section-rule">
        <p className="f1-section-label">03 / WHAT ACTUALLY ORGANISES THE SYSTEM</p>
        <div className="f1-framework-grid">
          <div>
            <h2>Rules are only one layer.</h2>
            <p>The championship is governed through FIA regulations, but participation, commercial terms and decision-making are also shaped by the Concorde Agreement.</p>
          </div>
          <div className="f1-framework-box">
            <span>2026 TO 2030</span>
            <strong>Ninth Concorde Agreement</strong>
            <p>The current framework combines a commercial agreement and a governance agreement signed by Formula 1, the FIA and all 11 teams.</p>
          </div>
        </div>
      </section>

      <section className="f1-questions shell section-rule">
        <p className="f1-section-label">04 / A BETTER WAY TO READ POWER</p>
        <div className="f1-question-heading">
          <h2>Do not ask only, “Who is in charge?”</h2>
          <p>Ask which decision is being made. Authority changes depending on whether the issue is sporting, technical, commercial or structural.</p>
        </div>
        <div className="f1-question-grid">
          {powerQuestions.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="f1-case shell section-rule">
        <p className="f1-section-label">05 / WHY TEAM ENTRY EXPOSES THE STRUCTURE</p>
        <div className="f1-case-grid">
          <div>
            <h2>The Andretti and Cadillac process made the split visible.</h2>
            <p>The original research used Andretti as a case study because the FIA approved the application on sporting, technical and operational grounds while Formula 1 rejected the proposed entry after its commercial assessment.</p>
          </div>
          <div className="f1-timeline">
            <div><span>2023</span><p>FIA approves Andretti’s application after its formal assessment.</p></div>
            <div><span>2024</span><p>Formula 1 rejects the entry on commercial grounds.</p></div>
            <div><span>2025</span><p>Following a revised GM and Cadillac proposition, Formula 1 and the FIA approve the new team.</p></div>
            <div><span>2026</span><p>Cadillac joins the grid as Formula 1’s 11th team.</p></div>
          </div>
        </div>
        <div className="f1-case-note">The lesson is not that one side “won”. The process shows that regulatory eligibility and commercial acceptance are separate forms of power.</div>
      </section>

      <section className="f1-tension shell section-rule">
        <p className="f1-section-label">06 / THE CORE TENSION</p>
        <div className="f1-tension-grid">
          <div><span>SPORTING INTEGRITY</span><p>Rules, safety, technical standards, fairness and the legitimacy of the championship.</p></div>
          <div><span>COMMERCIAL GROWTH</span><p>Media value, sponsorship, promoters, market expansion and the economic strength of the series.</p></div>
          <div><span>TEAM INTERESTS</span><p>Revenue, competitiveness, cost control, regulatory influence and protection of franchise value.</p></div>
        </div>
      </section>

      <section className="f1-close shell section-rule">
        <div>
          <p className="f1-section-label">CLOSING NOTE</p>
          <h2>Formula 1 is governed less by one owner than by a managed balance of authority.</h2>
        </div>
        <div className="f1-close-copy">
          <p>That balance is what makes the championship commercially powerful, legally complex and strategically interesting.</p>
          <a className="text-link" href="/archive">BACK TO ARCHIVE <Arrow /></a>
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

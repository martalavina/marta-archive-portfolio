import './ikea-le-mans.css';

const experienceModules = [
  {
    number: '01',
    title: 'REST PIT',
    role: 'RECOVERY',
    copy: 'A controlled short-rest service for the hardest overnight hours, designed around quiet, charging, privacy and fast turnover.',
    details: ['20-minute sessions', 'Capacity by bays × cycles/hour', 'Accessible quiet bays', 'Check-in, cleaning and reset logic'],
  },
  {
    number: '02',
    title: '24H KITCHEN',
    role: 'FOOD + SERVICE',
    copy: 'A high-throughput food operation using familiar IKEA behaviours and a visible Order / Pay / Collect flow across the 24-hour rhythm.',
    details: ['Edited menu by daypart', 'Fast service architecture', 'IKEA Family value exchange', 'Queue and stock thresholds'],
  },
  {
    number: '03',
    title: 'LIVING ROOM',
    role: 'VIEWING + CHARGING + GATHERING',
    copy: 'A communal race-watching environment that makes downtime useful without turning general spectators into hospitality guests.',
    details: ['Official race feed', 'Mixed seating and charging', 'High-capacity social anchor', 'No trackside footprint required'],
  },
  {
    number: '04',
    title: 'BUILD',
    role: 'SUPPORTING ENGAGEMENT',
    copy: 'A timed two-person assembly challenge connecting IKEA flat-pack logic with motorsport precision, sequencing and teamwork.',
    details: ['Identical repeated-use kits', 'Time + correct assembly', 'Visible leaderboard', 'Scalable by station count'],
  },
];

const kpis = [
  ['REACH', 'Zone entries, external footfall, screen visibility'],
  ['SERVICE', 'Rest Pit occupancy, Kitchen throughput, charging usage, dwell time'],
  ['ENGAGEMENT', 'BUILD participation, completion, IKEA Family verification or sign-up'],
  ['BRAND VALUE', 'Recall, perceived usefulness, IKEA × Le Mans fit, sentiment'],
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
  title: 'IKEA × 24H Le Mans | Marta Laviña',
  description: 'The Human Side of Endurance, a speculative sponsorship activation and fan experience platform for IKEA at the 24 Hours of Le Mans.',
};

export default function IkeaLeMansPage() {
  return (
    <main className="ikea-case">
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

      <section className="case-hero shell reveal">
        <div className="case-meta-top">
          <span>ML-001</span>
          <span>OCT 2026</span>
          <span>INDEPENDENT CONCEPT</span>
          <span>INDIVIDUAL PROJECT</span>
        </div>
        <div className="case-hero-grid">
          <div>
            <p className="case-kicker">IKEA × 24 HOURS OF LE MANS</p>
            <h1>The Human Side<br />of <em>Endurance</em></h1>
          </div>
          <div className="case-hero-side">
            <p className="case-proposition">IKEA turns everyday functionality into a 24-hour support system for fans.</p>
            <div className="case-role-list">
              <span>Brand Strategy</span>
              <span>Sponsorship Activation</span>
              <span>Fan Experience</span>
              <span>Experience Design</span>
              <span>Operations & Measurement</span>
            </div>
          </div>
        </div>
        <p className="case-disclaimer">Independent speculative portfolio concept. Not affiliated with IKEA, the Automobile Club de l'Ouest, Le Mans Endurance Management or any official partner of the 24 Hours of Le Mans.</p>
      </section>

      <section className="case-opening shell section-rule">
        <p className="case-section-label">01 / THE CHALLENGE</p>
        <div className="case-opening-main">
          <h2>Le Mans already has spectacle.<br />The opportunity was not to add more.</h2>
          <p>The 24 Hours of Le Mans asks spectators to live with the event for far longer than a conventional match, race or concert. Across 24 hours, excitement gives way to food, charging, fatigue, recovery and the need to return to the action.</p>
        </div>
        <div className="fan-rhythm" aria-label="Fan needs across 24 hours">
          <div><span>START</span><strong>Excitement<br />Movement</strong></div>
          <div><span>NIGHT</span><strong>Food<br />Charging</strong></div>
          <div><span>EARLY MORNING</span><strong>Fatigue<br />Rest</strong></div>
          <div><span>FINAL HOURS</span><strong>Energy<br />Return to action</strong></div>
        </div>
        <p className="case-callout">The cars are not the only ones experiencing endurance.</p>
      </section>

      <section className="case-opportunity shell section-rule">
        <p className="case-section-label">02 / THE STRATEGIC OPPORTUNITY</p>
        <div className="opportunity-question">What can IKEA make work better for people who are living through Le Mans?</div>
        <div className="opportunity-grid">
          <div>
            <span className="mini-label">THE EVENT SUPPLIES</span>
            <h3>Intensity.</h3>
          </div>
          <div>
            <span className="mini-label">IKEA SUPPLIES</span>
            <h3>Functionality.</h3>
          </div>
        </div>
        <p className="opportunity-copy">The strategy deliberately avoids making IKEA look like a racing brand. Instead, it uses capabilities that already belong to IKEA: everyday function, food, familiar environments, clear instructions, gathering and simple systems that reduce friction.</p>
      </section>

      <section className="case-permission shell section-rule">
        <p className="case-section-label">03 / WHY IKEA</p>
        <div className="permission-grid">
          <div className="permission-lead">
            <h2>The setting is extraordinary.<br /><em>The needs are everyday.</em></h2>
            <p>The partnership is built on brand permission, not just visual fit.</p>
          </div>
          <div className="permission-list">
            <div><span>FUNCTION</span><p>Clear flow, charging and services people understand immediately.</p></div>
            <div><span>FORM</span><p>Comfortable spaces without decorative theatre.</p></div>
            <div><span>QUALITY</span><p>Structures and furniture able to survive heavy public use.</p></div>
            <div><span>SUSTAINABILITY</span><p>Reusable build, durable assets and post-event recovery.</p></div>
            <div><span>LOW PRICE</span><p>Broad public access rather than premium-only hospitality.</p></div>
          </div>
        </div>
        <div className="native-behaviours">
          <span>FOOD</span><span>FAMILY / LOYALTY</span><span>ASSEMBLY</span><span>EVERYDAY LIFE</span>
        </div>
      </section>

      <section className="case-platform shell section-rule">
        <div className="platform-heading">
          <p className="case-section-label">04 / THE PLATFORM</p>
          <div>
            <h2>One platform.<br />Four experiences.<br /><em>Different jobs.</em></h2>
            <p>The Human Side of Endurance is the filter for every execution: if it makes the partnership louder but not more useful, understandable or human, it does not belong.</p>
          </div>
        </div>
        <div className="platform-index">
          {experienceModules.map((item) => (
            <div className={`platform-item platform-item-${item.number}`} key={item.number}>
              <span className="platform-num">{item.number}</span>
              <span className="platform-role">{item.role}</span>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="case-experiences shell section-rule">
        <p className="case-section-label">05 / EXPERIENCE SYSTEM</p>
        <div className="experience-list">
          {experienceModules.map((item, index) => (
            <article className={`experience-row experience-row-${index + 1}`} key={item.title}>
              <div className="experience-index">{item.number}</div>
              <div className="experience-main">
                <p className="mini-label">{item.role}</p>
                <h2>{item.title}</h2>
                <p className="experience-copy">{item.copy}</p>
              </div>
              <div className="experience-detail-list">
                {item.details.map((detail) => <span key={detail}>{detail}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-capacity shell section-rule">
        <p className="case-section-label">06 / OPERATIONAL DETAIL</p>
        <div className="capacity-grid">
          <div>
            <h2>Capacity should come from the service mechanic, not from a headline visitor number.</h2>
            <p>Rest Pit capacity is bays × cycles per hour. Kitchen capacity is driven by transaction time, menu complexity and collection space. Living Room capacity comes from safe occupancy and egress. BUILD scales through station count and round duration.</p>
          </div>
          <div className="capacity-example">
            <span className="mini-label">REST PIT PLANNING EXAMPLE</span>
            <strong>12 bays</strong>
            <span>×</span>
            <strong>25 min cycle</strong>
            <span>=</span>
            <strong>≈ 29 users / hour</strong>
            <small>Illustrative planning logic, not proposed final capacity.</small>
          </div>
        </div>
      </section>

      <section className="case-real shell section-rule">
        <p className="case-section-label">07 / MAKING IT REAL</p>
        <div className="real-heading">
          <h2>The concept only works if the service holds up under 24-hour pressure.</h2>
        </div>
        <div className="real-grid">
          <div><span>01</span><h3>SITE & FLOW</h3><p>High-throughput services on active edges, BUILD visible but contained, Rest Pit protected by acoustic and visual buffer.</p></div>
          <div><span>02</span><h3>OPERATIONS</h3><p>Overnight shifts, cleaning, queue thresholds, stock control, timed returns and service recovery plans.</p></div>
          <div><span>03</span><h3>RIGHTS</h3><p>Designation, marks, broadcast feed, footprint, F&B, data, sampling, content capture and category exclusivity.</p></div>
          <div><span>04</span><h3>PRODUCTION</h3><p>Temporary structure, AV, power, connectivity, food equipment, staffing, security, freight, insurance and contingency.</p></div>
        </div>
        <div className="budget-note">
          <span className="mini-label">WHY THERE IS NO FAKE TOTAL BUDGET</span>
          <p>Without negotiated rights, footprint, structural specification, broadcast feed, power and operating responsibilities, a precise total would create false confidence. The project defines the cost centres and scope decisions that drive the budget instead.</p>
        </div>
      </section>

      <section className="case-rights shell section-rule">
        <div className="rights-heading">
          <p className="case-section-label">08 / RIGHTS CHECK</p>
          <h2>Rights are not a formality.<br />They change the execution.</h2>
        </div>
        <div className="rights-grid">
          <div className="rights-list">
            <span>Official designation</span>
            <span>Le Mans marks</span>
            <span>Official broadcast feed</span>
            <span>Site footprint</span>
            <span>F&B permissions</span>
            <span>IKEA Family / data</span>
            <span>Sampling</span>
            <span>Content capture</span>
            <span>Category exclusivity</span>
          </div>
          <div className="rights-note">
            <span className="mini-label">EXAMPLE OF COMMERCIAL CONSTRAINT</span>
            <p>Milwaukee is publicly listed as an official supplier. BUILD therefore stays focused on IKEA assembly, instructions and hand-tool logic rather than becoming a generic tool activation.</p>
          </div>
        </div>
      </section>

      <section className="case-measurement shell section-rule">
        <p className="case-section-label">09 / MEASUREMENT</p>
        <div className="measurement-heading">
          <h2>Prove usefulness first.<br /><em>Then prove visibility.</em></h2>
          <p>The measurement model separates operational performance from brand effect. Social amplification can support the story, but it does not prove that the physical service worked.</p>
        </div>
        <div className="kpi-grid">
          {kpis.map(([title, copy], index) => (
            <div className="kpi-item" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-process shell section-rule">
        <p className="case-section-label">10 / RESEARCH & VALIDATION</p>
        <div className="process-intro">
          <h2>The idea came after the constraints.</h2>
          <p>The project was built by researching the property, the brand, sponsorship precedents and delivery realities before fixing the final experience architecture.</p>
        </div>
        <div className="process-grid">
          <div><span>01</span><h3>PROPERTY REALITY</h3><p>Existing fan infrastructure, spectator behaviour, current partner landscape and official digital products.</p></div>
          <div><span>02</span><h3>BRAND PERMISSION</h3><p>Democratic Design, IKEA Food, IKEA Family and the behaviours the brand already owns credibly.</p></div>
          <div><span>03</span><h3>BENCHMARKING</h3><p>Agency and sponsorship case studies used to identify existing patterns and avoid relying on generic fan-zone conventions.</p></div>
          <div><span>04</span><h3>FEASIBILITY FILTER</h3><p>Rights, accessibility, capacity, operations, data, production and measurement used to challenge the concept before presentation.</p></div>
        </div>
      </section>

      <section className="case-close shell section-rule">
        <div>
          <p className="case-section-label">CLOSING VIEW</p>
          <h2>A sponsorship platform judged by what it does for fans, not only by how visible the logos are.</h2>
        </div>
        <div className="case-close-actions">
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

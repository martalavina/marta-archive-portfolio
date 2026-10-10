import './celta-ecoalf.css';

const fitPoints = [
  ['CELTA', 'A football brand built around Galicia, belonging, community and a strong relationship with the Atlantic.'],
  ['ECOALF', 'A sustainability brand whose proposition is rooted in circularity, recycled materials and protecting natural resources.'],
  ['SHARED SPACE', 'The sea is not a decorative link between the two brands. It is part of Vigo’s identity and central to ECOALF’s environmental story.'],
];

const platformLayers = [
  ['ACT', 'Coastal clean-ups, community projects and local environmental action.'],
  ['LEARN', 'Workshops, schools and academy programmes that make the partnership educational as well as visible.'],
  ['PARTICIPATE', 'A fan impact system built around QR profiles, challenges and milestones across the season.'],
  ['RECOGNISE', 'Volunteer recognition, matchday visibility and rewards based on sustained contribution rather than chance.'],
];

const rights = [
  ['BRAND VISIBILITY', 'Training kit or sleeve presence, Balaídos sustainability zones and partnership branding within the platform.'],
  ['DIGITAL & STORYTELLING', 'Joint ocean-protection content, educational use of players and integration of fan impact milestones.'],
  ['COMMUNITY & EDUCATION', 'Naming rights for the annual clean-up, access to school and academy programmes and ECOALF-led workshops.'],
  ['PRODUCT & INNOVATION', 'Co-branded upcycled merchandise, recycled-material collaboration and stadium waste-to-product initiatives.'],
  ['MATCHDAY', 'A sustainability-led matchday, fan-zone touchpoints, recognition moments and installations created from recovered material.'],
];

const kpis = [
  ['ENVIRONMENTAL', 'Waste collected, volunteers participating, recycling and plastic reduction, quantity of material upcycled.'],
  ['COMMUNITY', 'Schools and students involved, fan participation, milestone completion and volunteer retention.'],
  ['BRAND', 'ECOALF awareness, partnership fit, sustainability perception and engagement with partnership content.'],
  ['COMMERCIAL', 'Co-branded product sales, ECOALF traffic during activations and partnership renewal potential.'],
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
  title: 'Celta × ECOALF | Marta Laviña',
  description: 'A partnership strategy study connecting Galician football identity, ocean protection and measurable community participation.',
};

export default function CeltaEcoalfPage() {
  return (
    <main className="celta-case">
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

      <section className="celta-hero shell reveal">
        <div className="celta-meta">
          <span>ML-005</span>
          <span>DEC 2025</span>
          <span>PARTNERSHIP STRATEGY STUDY</span>
          <span>TEAM PROJECT</span>
        </div>
        <div className="celta-hero-grid">
          <div>
            <p className="celta-kicker">FOOTBALL / BRAND PARTNERSHIPS / SUSTAINABILITY</p>
            <h1>Afouteza<br /><em>Polo Planeta.</em></h1>
          </div>
          <div className="celta-hero-side">
            <p className="celta-intro">A season-long partnership platform designed to connect Celta’s Galician identity with ECOALF’s sustainability mission through action, participation and measurable local impact.</p>
            <div className="celta-role">
              <span>ROLE</span>
              <p>Sponsorship strategy / activation concept / fan engagement</p>
            </div>
          </div>
        </div>
        <div className="celta-statement">
          <span>MOVEMENT, NOT CAMPAIGN</span>
          <strong>Protect what defines Galicia.</strong>
        </div>
        <p className="celta-disclaimer">Independent academic partnership concept. Developed for educational purposes. No affiliation with or commissioning by RC Celta or ECOALF.</p>
      </section>

      <section className="celta-opportunity shell section-rule">
        <p className="celta-section-label">01 / THE OPPORTUNITY</p>
        <div className="celta-two-col">
          <h2>A purpose partnership only works when the cause already belongs to both brands.</h2>
          <div>
            <p>Celta’s identity is strongly rooted in Galicia, community and the Atlantic. ECOALF builds its sustainability proposition around circularity, recycled materials and reducing pressure on natural resources.</p>
            <p>The opportunity was not to place a sustainable fashion logo inside football. It was to create a platform where the club, the brand and the local community could act around a shared territory with cultural relevance.</p>
          </div>
        </div>
        <div className="celta-fit-grid">
          {fitPoints.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="celta-context shell section-rule">
        <p className="celta-section-label">02 / REALITY CHECK</p>
        <div className="celta-context-grid">
          <div>
            <h2>The idea is stronger when it acknowledges what already exists.</h2>
            <p>RC Celta already operates environmental initiatives, including ISO 14001 environmental management, recycling programmes, reuse projects and community clean-ups. That means a credible partnership would need to extend existing behaviour rather than claim to invent sustainability for the club.</p>
          </div>
          <div className="celta-context-note">
            <span>WHY THIS MATTERS</span>
            <p>A sustainability sponsor should add capability, participation and narrative value to an existing commitment. Otherwise the partnership risks becoming a layer of communication without operational substance.</p>
          </div>
        </div>
      </section>

      <section className="celta-platform shell section-rule">
        <p className="celta-section-label">03 / THE PLATFORM</p>
        <div className="celta-platform-heading">
          <div>
            <span>CELTA × ECOALF</span>
            <h2>Afouteza Polo Planeta</h2>
          </div>
          <p>A collective identity built around protecting the Galician sea, with the partnership living across community action, education, fan participation and matchday recognition.</p>
        </div>
        <div className="celta-platform-grid">
          {platformLayers.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="celta-flagship shell section-rule">
        <p className="celta-section-label">04 / FLAGSHIP MOMENT</p>
        <div className="celta-flagship-grid">
          <div className="celta-day">
            <span>ANNUAL ACTION</span>
            <h2>Afouteza Polo Planeta Day</h2>
            <p>A large coastal clean-up in Vigo bringing together fans, families, volunteers and the partnership around one visible act of environmental participation.</p>
          </div>
          <div className="celta-reward">
            <span>MEANINGFUL REWARD</span>
            <h3>Earned through commitment, not luck.</h3>
            <p>The original concept links season-long participation to impact milestones, with the strongest contribution recognised through a season-ticket reward. The intention is to reward behaviour, not run another random competition.</p>
          </div>
        </div>
      </section>

      <section className="celta-system shell section-rule">
        <p className="celta-section-label">05 / SEASON-LONG PARTICIPATION</p>
        <div className="celta-system-grid">
          <div>
            <h2>One event creates attention. A system creates behaviour.</h2>
            <p>The digital layer connects actions across the season through a fan profile, QR access, impact milestones, challenges, storytelling and a visible progression model.</p>
          </div>
          <div className="celta-journey" aria-label="Participation journey">
            <div><span>01</span><strong>JOIN</strong><small>Fan profile + QR</small></div>
            <div><span>02</span><strong>ACT</strong><small>Challenges + clean-ups</small></div>
            <div><span>03</span><strong>PROGRESS</strong><small>Impact milestones</small></div>
            <div><span>04</span><strong>BE SEEN</strong><small>Leaderboard + storytelling</small></div>
            <div><span>05</span><strong>BE RECOGNISED</strong><small>Matchday recognition + reward</small></div>
          </div>
        </div>
      </section>

      <section className="celta-rights shell section-rule">
        <p className="celta-section-label">06 / WHAT THE PARTNERSHIP NEEDS TO OWN</p>
        <div className="celta-rights-heading">
          <h2>Activation requires assets, not just alignment.</h2>
          <p>The original proposal mapped the platform across rights that would need to be negotiated if the concept became real.</p>
        </div>
        <div className="celta-rights-list">
          {rights.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="celta-credibility shell section-rule">
        <p className="celta-section-label">07 / CREDIBILITY FILTER</p>
        <div className="celta-credibility-grid">
          <div>
            <h2>Purpose needs proof.</h2>
            <p>The greatest risk in this partnership is not low awareness. It is greenwashing. Every visible claim therefore needs to connect back to a measurable action, operational change or documented outcome.</p>
          </div>
          <div className="celta-filter-list">
            <div><span>DO</span><p>Measure environmental outputs and publish the methodology behind them.</p></div>
            <div><span>DO</span><p>Connect participation to local organisations, schools and existing club sustainability programmes.</p></div>
            <div><span>DO</span><p>Use product collaboration only where materials, sourcing and end-of-life claims can be substantiated.</p></div>
            <div><span>AVOID</span><p>Turning one coastal clean-up into evidence that the whole partnership is sustainable.</p></div>
          </div>
        </div>
      </section>

      <section className="celta-measure shell section-rule">
        <p className="celta-section-label">08 / MEASUREMENT</p>
        <div className="celta-measure-heading">
          <h2>Measure the partnership in four directions.</h2>
          <p>Impact is broader than engagement. The framework separates environmental, community, brand and commercial performance.</p>
        </div>
        <div className="celta-kpi-grid">
          {kpis.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="celta-reflection shell section-rule">
        <p className="celta-section-label">09 / PORTFOLIO REFLECTION</p>
        <div className="celta-two-col">
          <h2>The strongest part of this study is the partnership logic, not the volume of activation ideas.</h2>
          <div>
            <p>The original project explored a wide set of assets and executions. For this portfolio edit, the case is intentionally reduced to the strategic connection, the participation platform, the flagship action, the rights architecture and the measurement logic.</p>
            <p>That makes the value of the work clearer: identifying a territory both organisations can credibly own, then building a partnership system around it.</p>
          </div>
        </div>
      </section>

      <section className="celta-close shell section-rule">
        <div>
          <p className="celta-section-label">CLOSING VIEW</p>
          <h2>A football partnership should not borrow a purpose. It should make a shared one useful.</h2>
        </div>
        <div className="celta-close-actions">
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

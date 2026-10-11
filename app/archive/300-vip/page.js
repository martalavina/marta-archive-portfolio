import './300-vip.css';

const priorities = [
  ['01', 'SAFETY', 'Keep circulation clear, prevent crowd compression and protect emergency routes.'],
  ['02', 'EVENT TIMING', 'Move the maximum number of guests through before tip-off without creating a second problem downstream.'],
  ['03', 'GUEST FLOW', 'Reduce decisions, visible uncertainty and unnecessary stopping points.'],
  ['04', 'ACCESS INTEGRITY', 'Speed cannot remove verification. Every guest still needs the correct access outcome.'],
  ['05', 'VIP EXPERIENCE', 'Warmth, information and ownership matter even when the operation is under pressure.'],
];

const responsePhases = [
  {
    time: '00-05',
    title: 'REGAIN CONTROL',
    copy: 'Create one operational lead, stop conflicting instructions, assess available people, space, technology and access rules, then separate the queue into clear operational paths.',
    actions: ['Single decision-maker', 'Visible queue ownership', 'Identify blocked cases', 'Protect circulation'],
  },
  {
    time: '05-15',
    title: 'INCREASE THROUGHPUT',
    copy: 'Keep straightforward arrivals moving through the fastest valid route while exception cases are handled away from the main flow. Reallocate existing resources where they remove the biggest bottleneck.',
    actions: ['Fast path for ready guests', 'Exception desk off the main line', 'Open every viable processing point', 'Live queue communication'],
  },
  {
    time: '15-20',
    title: 'PROTECT TIP-OFF',
    copy: 'Prioritise unresolved guests by urgency and access impact, communicate realistic wait expectations and hand over remaining cases without allowing the entrance to collapse again.',
    actions: ['Time-to-tip-off calls', 'Escalation ownership', 'Service recovery', 'Controlled handover'],
  },
];

const systemChecks = [
  ['PEOPLE', 'Who is already on site, who can process, who can host, who can solve exceptions and who has authority to change the setup?'],
  ['SPACE', 'How many usable entry positions exist, where can queues split safely and where can unresolved cases wait without blocking the main flow?'],
  ['TECHNOLOGY', 'What verification tools are live, what information is available at each point and what fallback exists if the system slows or fails?'],
  ['COMMUNICATION', 'What do guests know before they arrive, what can staff tell them now and how quickly can instructions change across the team?'],
];

const metrics = [
  ['THROUGHPUT', 'Guests processed per minute and total guests cleared before tip-off'],
  ['QUEUE', 'Queue length, estimated wait and time to stable flow'],
  ['EXCEPTIONS', 'Share of guests diverted from the main line and average exception resolution time'],
  ['ACCURACY', 'Access errors, duplicate checks and incorrect routing'],
  ['EXPERIENCE', 'Guest complaints, escalations, service recovery cases and staff observations'],
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
  title: '300 VIP in 20 Minutes',
  description: 'An event operations and guest experience case focused on recovering a collapsed VIP check-in before a basketball game.',
};

export default function VipOperationsPage() {
  return (
    <main className="vip-case">
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

      <section className="vip-hero shell reveal">
        <div className="vip-meta-top">
          <span>ML-004</span>
          <span>SEP 2026</span>
          <span>EVENT OPERATIONS CASE</span>
          <span>INDIVIDUAL RESPONSE</span>
        </div>

        <div className="vip-hero-grid">
          <div>
            <p className="vip-kicker">BASKETBALL / VIP HOSPITALITY / LIVE OPERATIONS</p>
            <h1>300 VIP.<br />20 minutes.<br /><em>One collapsed check-in.</em></h1>
          </div>
          <div className="vip-hero-side">
            <p className="vip-proposition">A live operations response built around throughput, access integrity and protecting the guest experience under pressure.</p>
            <div className="vip-role-list">
              <span>Event Operations</span>
              <span>Guest Experience</span>
              <span>Queue & Flow Design</span>
              <span>Operational Decision-Making</span>
              <span>Service Recovery</span>
            </div>
          </div>
        </div>

        <div className="vip-number-band" aria-label="Case numbers">
          <div><span>GUESTS</span><strong>300</strong></div>
          <div><span>ARRIVAL WINDOW</span><strong>20 MIN</strong></div>
          <div><span>REQUIRED AVERAGE FLOW</span><strong>15 / MIN</strong></div>
        </div>

        <p className="vip-disclaimer">Scenario-based operational case. The cause of the check-in failure and the exact on-site resources were not provided, so the response does not invent them.</p>
      </section>

      <section className="vip-situation shell section-rule">
        <p className="vip-section-label">01 / THE SITUATION</p>
        <div className="vip-situation-grid">
          <h2>The queue is visible.<br />The root cause is not.</h2>
          <div>
            <p>Three hundred VIP guests arrive across a 20-minute window before a basketball event. Check-in has collapsed and the operation is no longer processing arrivals fast enough.</p>
            <p>The first mistake would be to diagnose the cause from a distance. Slow scanners, missing names, poor staffing, guest behaviour, bad layout or access rules are all possible, but none are confirmed.</p>
          </div>
        </div>
        <div className="vip-core-problem">The only confirmed operational fact: demand is higher than current processing capacity.</div>
      </section>

      <section className="vip-math shell section-rule">
        <p className="vip-section-label">02 / THE THROUGHPUT TEST</p>
        <div className="vip-math-grid">
          <div className="vip-equation">
            <span>300 GUESTS</span>
            <strong>÷</strong>
            <span>20 MINUTES</span>
            <strong>=</strong>
            <span>15 GUESTS / MIN</span>
          </div>
          <div className="vip-math-copy">
            <h2>Start with the required flow, then test the operation against it.</h2>
            <p>If the active check-in system cannot sustain an average of 15 guests per minute, the queue will continue to grow. The response therefore focuses on reducing processing friction, isolating exceptions and using every viable resource already available.</p>
          </div>
        </div>
      </section>

      <section className="vip-priorities shell section-rule">
        <p className="vip-section-label">03 / DECISION PRIORITIES</p>
        <div className="vip-priority-heading">
          <h2>Speed matters.<br /><em>But not at any cost.</em></h2>
          <p>The order of decisions matters because a fast check-in that creates a safety issue or access breach is not a successful recovery.</p>
        </div>
        <div className="vip-priority-list">
          {priorities.map(([num, title, copy]) => (
            <article key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vip-assess shell section-rule">
        <p className="vip-section-label">04 / BEFORE CHANGING THE SETUP</p>
        <div className="vip-assess-heading">
          <h2>Use what is actually there.</h2>
          <p>The case does not specify staffing numbers, available lanes, scanners or entrance geometry. Those variables need to be assessed before prescribing a fixed setup.</p>
        </div>
        <div className="vip-assess-grid">
          {systemChecks.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vip-flow shell section-rule">
        <p className="vip-section-label">05 / SIMPLIFY THE FLOW</p>
        <div className="vip-flow-grid">
          <div className="vip-flow-copy">
            <h2>The main queue should contain the easiest guests to process.</h2>
            <p>Every complex case that stays in the primary line slows everyone behind it. The fastest recovery is not simply more staff. It is a cleaner decision path.</p>
          </div>
          <div className="vip-flow-diagram" aria-label="Proposed guest flow">
            <div className="flow-node flow-arrival"><span>01</span><strong>ARRIVAL</strong><small>Visible host directs the next decision</small></div>
            <div className="flow-split">
              <div className="flow-node flow-ready"><span>02A</span><strong>READY TO VERIFY</strong><small>Main processing flow</small></div>
              <div className="flow-node flow-exception"><span>02B</span><strong>EXCEPTION</strong><small>Missing, unclear or unresolved case</small></div>
            </div>
            <div className="flow-split">
              <div className="flow-node flow-access"><span>03A</span><strong>ACCESS</strong><small>Verified guest continues</small></div>
              <div className="flow-node flow-resolve"><span>03B</span><strong>RESOLUTION</strong><small>Handled away from main throughput</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="vip-command shell section-rule">
        <p className="vip-section-label">06 / THE FIRST 20 MINUTES</p>
        <div className="vip-command-heading">
          <h2>Stabilise first.<br />Accelerate second.</h2>
          <p>A collapsed entrance needs a timed recovery plan, not a list of ideas.</p>
        </div>
        <div className="vip-response-grid">
          {responsePhases.map((phase) => (
            <article key={phase.time}>
              <div className="vip-time"><span>{phase.time}</span><small>MIN</small></div>
              <h3>{phase.title}</h3>
              <p>{phase.copy}</p>
              <div className="vip-action-list">
                {phase.actions.map((action) => <span key={action}>{action}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vip-command-model shell section-rule">
        <p className="vip-section-label">07 / COMMAND & STAFFING LOGIC</p>
        <div className="vip-command-model-grid">
          <div>
            <h2>One lead.<br />Clear roles.<br />Short instructions.</h2>
            <p>During recovery, the team should not improvise independently. One operational lead owns the situation and every available person is assigned to the point where they remove the most friction.</p>
          </div>
          <div className="vip-role-matrix">
            <div><span>OPERATIONAL LEAD</span><p>Owns priorities, reallocates resources and makes escalation decisions.</p></div>
            <div><span>QUEUE HOST</span><p>Prepares guests before they reach processing and keeps instructions visible.</p></div>
            <div><span>CHECK-IN</span><p>Processes straightforward verified guests without solving unrelated exceptions.</p></div>
            <div><span>EXCEPTION OWNER</span><p>Handles missing records, unclear entitlements and cases requiring authority.</p></div>
            <div><span>RUNNER / LIAISON</span><p>Connects the entrance with hospitality, ticketing, accreditation or venue teams when needed.</p></div>
          </div>
        </div>
        <p className="vip-role-note">These are operational roles, not a claim that five additional staff are available. One person may cover more than one role depending on the actual resource assessment.</p>
      </section>

      <section className="vip-experience shell section-rule">
        <p className="vip-section-label">08 / PROTECTING THE VIP EXPERIENCE</p>
        <div className="vip-experience-grid">
          <div>
            <h2>Pressure should be visible to the team, not transferred to the guest.</h2>
          </div>
          <div className="vip-experience-list">
            <div><span>SET EXPECTATIONS</span><p>Tell guests what is happening, which queue they need and what they should prepare before reaching the desk.</p></div>
            <div><span>REMOVE PUBLIC ARGUMENTS</span><p>Move unresolved cases to a separate owner instead of debating entitlement at the front of the line.</p></div>
            <div><span>KEEP OWNERSHIP</span><p>A guest with a problem should know who is solving it and where the next update will come from.</p></div>
            <div><span>RECOVER THE MOMENT</span><p>Once access is resolved, the handover into hospitality should feel deliberate rather than rushed or dismissive.</p></div>
          </div>
        </div>
      </section>

      <section className="vip-measure shell section-rule">
        <p className="vip-section-label">09 / LIVE CONTROL</p>
        <div className="vip-measure-heading">
          <h2>You cannot manage a queue you are not measuring.</h2>
          <p>The lead needs a small set of live indicators to know whether the intervention is actually working.</p>
        </div>
        <div className="vip-metric-grid">
          {metrics.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vip-after shell section-rule">
        <p className="vip-section-label">10 / AFTER THE DOORS OPEN</p>
        <div className="vip-after-grid">
          <div>
            <h2>The recovery solves tonight.<br />The review should solve the next event.</h2>
          </div>
          <div className="vip-after-list">
            <div><span>ARRIVAL DESIGN</span><p>Review whether invitations, parking, hospitality opening and communication concentrated too many guests into the same window.</p></div>
            <div><span>PRE-EVENT VERIFICATION</span><p>Move avoidable identity, entitlement or guest-list questions away from the entrance wherever possible.</p></div>
            <div><span>CAPACITY MODEL</span><p>Match expected arrival peaks against measured processing time and available positions before event day.</p></div>
            <div><span>EXCEPTION PLAYBOOK</span><p>Define who can authorise each common exception, where it is solved and what fallback exists when technology fails.</p></div>
            <div><span>TEAM BRIEFING</span><p>Brief routes, responsibilities, escalation contacts and service language before the first guest arrives.</p></div>
          </div>
        </div>
      </section>

      <section className="vip-close shell section-rule">
        <div>
          <p className="vip-section-label">CLOSING VIEW</p>
          <h2>VIP service is not tested when everything goes to plan. It is tested when the plan stops working.</h2>
        </div>
        <div className="vip-close-actions">
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

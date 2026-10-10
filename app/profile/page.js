import './profile.css';

const experience = [
  {
    period: 'SEP 2026 / PRESENT',
    role: 'Financial Advertising Analyst',
    organisation: 'AUDITMEDIA',
    location: 'Madrid / Remote',
    text: 'Review and analysis of financial advertising across client digital platforms, with a focus on commercial offers, financing conditions, legal disclosures and promotional content. The role is built around accuracy, consistency and visible compliance in detail-sensitive environments.',
  },
  {
    period: '2025 / JUN 2026',
    role: 'Guest Services Assistant',
    organisation: 'Doble L Eventos y Azafatas',
    location: 'Madrid',
    text: 'Supported guest and fan experience across live events, including attendee assistance, operational coordination and event-day problem solving. Paid event work included Hexagon Cup 2026.',
  },
  {
    period: 'OCT 2025',
    role: 'Event Operations Volunteer',
    organisation: 'X-Trial Madrid 2025',
    location: 'Madrid',
    text: 'Supported setup, access management and backstage operational flow across two event days.',
  },
  {
    period: 'JUN 2025',
    role: 'Access and Circulation Volunteer',
    organisation: 'European Athletics Team Championship',
    location: 'Madrid',
    text: 'Supported stadium access, attendee circulation and medal ceremony delivery as part of the event coordination team.',
  },
  {
    period: 'DEC 2022 / MAY 2023',
    role: 'Sports Commentator',
    organisation: 'Real Federación Española de Deportes de Hielo',
    location: 'Spain',
    text: 'Delivered official YouTube commentary for national figure skating competitions, translating technical knowledge into clear audience-facing communication.',
  },
];

const capabilities = [
  'Sponsorship Activation',
  'Brand Experience',
  'Event Operations',
  'Guest & Fan Experience',
  'Brand Partnerships',
  'Sports Branding & Communication',
  'Research & Concept Development',
  'Media Analysis',
];

export const metadata = {
  title: 'Profile | Marta Laviña',
  description: 'Profile, experience and perspective of Marta Laviña across sports business, events, sponsorship and brand experience.',
};

export default function ProfilePage() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="/">MARTA LAVIÑA</a>
        <nav aria-label="Primary navigation">
          <a href="/archive">ARCHIVE</a>
          <a className="nav-active" href="/profile">PROFILE</a>
          <a href="/#contact">CONTACT</a>
          <span className="nav-disabled">CV</span>
        </nav>
      </header>

      <section className="profile-hero shell reveal">
        <div className="profile-kicker">
          <span>PROFILE</span>
          <span>MADRID / NICE</span>
        </div>
        <h1>I grew up inside sport.<br />Now I think about what happens <em>around it.</em></h1>
        <div className="profile-hero-copy">
          <p>I am a Sports Management student building my career around sponsorship activation, brand experience, events and partnerships.</p>
          <p>My perspective comes from experiencing sport from several sides: athlete, coach, commentator, event staff, analyst and fan.</p>
        </div>
      </section>

      <section className="profile-perspective shell section-rule">
        <p className="eyebrow">MY PERSPECTIVE</p>
        <div className="profile-perspective-copy">
          <p className="profile-large-copy">Sport taught me to notice the parts people do not always see.</p>
          <div className="profile-columns">
            <p>I have spent years inside competitive figure skating, where performance is only one part of the experience. Training, pressure, logistics, communication, audience understanding and the environment around an athlete all shape what eventually happens on the ice.</p>
            <p>That is why I am interested in what surrounds competition: how a sponsor earns a role, how a fan moves through an event, how operations affect perception, and how a brand can become part of an experience instead of simply appearing inside it.</p>
          </div>
        </div>
      </section>

      <section className="profile-now shell section-rule">
        <p className="eyebrow">NOW</p>
        <div className="profile-now-grid">
          <div>
            <span className="profile-label">EDUCATION</span>
            <h2>Bachelor's Degree in Sports Management</h2>
            <p>European Sport Business School</p>
            <p>Sep 2024 / Sep 2027</p>
            <p>Madrid / Nice</p>
          </div>
          <div>
            <span className="profile-label">CURRENT ROLE</span>
            <h2>Financial Advertising Analyst</h2>
            <p>AUDITMEDIA</p>
            <p>Sep 2026 / Present</p>
            <p>Madrid / Remote</p>
          </div>
        </div>
      </section>

      <section className="profile-experience shell section-rule">
        <div className="profile-section-heading">
          <p className="eyebrow">SELECTED EXPERIENCE</p>
          <p>A mix of analysis, live events and sports communication.</p>
        </div>
        <div className="profile-timeline">
          {experience.map((item, index) => (
            <article className="profile-role" key={`${item.role}-${item.period}`}>
              <div className="profile-role-index">0{index + 1}</div>
              <div className="profile-role-period">{item.period}</div>
              <div className="profile-role-main">
                <h3>{item.role}</h3>
                <p className="profile-role-org">{item.organisation}</p>
                <p className="profile-role-location">{item.location}</p>
                <p className="profile-role-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-sport shell section-rule">
        <p className="eyebrow">SPORT FROM THE INSIDE</p>
        <div>
          <h2>International figure skater since 2016.</h2>
          <p>Competition and training across Spain, Italy, France, Canada, Slovenia and Bulgaria gave me first-hand exposure to high-performance sport and international sporting environments.</p>
          <p>I have also coached skaters, performed in live ice shows and worked with sports brands as an athlete-led content collaborator. Those experiences shape how I think about athletes, audiences and brand credibility.</p>
        </div>
      </section>

      <section className="profile-capabilities shell section-rule">
        <p className="eyebrow">WORKING ACROSS</p>
        <div className="profile-capability-list">
          {capabilities.map((capability, index) => (
            <div className="profile-capability" key={capability}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{capability}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-languages shell section-rule">
        <p className="eyebrow">LANGUAGES</p>
        <div className="profile-language-grid">
          <div><span>01</span><h3>Spanish</h3><p>Native</p></div>
          <div><span>02</span><h3>English</h3><p>Professional working proficiency</p></div>
          <div><span>03</span><h3>French</h3><p>Professional working proficiency</p></div>
        </div>
      </section>

      <section className="profile-looking shell section-rule">
        <p className="eyebrow">WHAT I AM LOOKING FOR</p>
        <div>
          <h2>Work where sport, brands and people actually meet.</h2>
          <p>I am particularly interested in sponsorship activation, brand experience, event management, fan experience and brand partnerships within international sports environments.</p>
          <div className="profile-cta-row">
            <a className="text-link" href="/archive">VIEW THE ARCHIVE <span className="ui-arrow ui-arrow-right" aria-hidden="true" /></a>
            <a className="text-link" href="/#contact">GET IN TOUCH <span className="ui-arrow ui-arrow-right" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <footer className="footer shell section-rule">
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

import './contact.css';
import ContactForm from './ContactForm';

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
  title: 'Contact | Marta Laviña',
  description: 'Get in touch with Marta Laviña about sports business, sponsorship, brand experience, events and partnerships.',
};

export default function ContactPage() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="/">MARTA LAVIÑA</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/archive">ARCHIVE</a>
          <a href="/profile">PROFILE</a>
          <a className="nav-active" href="/contact">CONTACT</a>
          <span className="nav-disabled">CV</span>
        </nav>
        <MobileMenu />
      </header>

      <section className="contact-hero shell reveal">
        <div className="contact-kicker">
          <span>CONTACT</span>
          <span>MADRID / NICE / OPEN TO INTERNATIONAL OPPORTUNITIES</span>
        </div>
        <h1>Let’s talk about<br />what happens <em>around the game.</em></h1>
        <p>I’m open to conversations about sponsorship activation, brand experience, event management, fan experience and partnerships in sport.</p>
      </section>

      <section className="contact-stage">
        <div className="contact-stripes" aria-hidden="true" />
        <div className="contact-panel shell">
          <div className="contact-panel-heading">
            <div>
              <p className="eyebrow">SEND A MESSAGE</p>
              <h2>Tell me who you are and what you have in mind.</h2>
            </div>
            <div className="contact-direct">
              <span>DIRECT</span>
              <a href="mailto:mlavinaperez@gmail.com">mlavinaperez@gmail.com</a>
              <a href="https://www.linkedin.com/in/martalavinaperez" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="contact-note shell section-rule">
        <p className="eyebrow">A SMALL NOTE</p>
        <div>
          <h2>Relevant details make better conversations.</h2>
          <p>If you are contacting me about a role, project, event or collaboration, adding the organisation and subject helps me understand the context before I reply.</p>
        </div>
      </section>

      <footer className="footer shell section-rule">
        <div><strong>MARTA LAVIÑA</strong><p>Sports, brands & experiences.</p></div>
        <div className="footer-links">
          <a href="mailto:mlavinaperez@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/martalavinaperez" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="legal"><p>© Marta Laviña 2026</p><p><span>Legal</span> · <span>Privacy</span></p></div>
      </footer>
    </main>
  );
}

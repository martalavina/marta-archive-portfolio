import './contact.css';
import ContactForm from './ContactForm';
import HomeNav from '../HomeNav';

export const metadata = {
  title: 'Contact | Marta Laviña',
  description: 'Get in touch with Marta Laviña about sports business, sponsorship, brand experience, events and partnerships.',
};

export default function ContactPage() {
  return (
    <div className="contact-consistent">
      <HomeNav brandHref="/" />
      <main>

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
    </div>
  );
}

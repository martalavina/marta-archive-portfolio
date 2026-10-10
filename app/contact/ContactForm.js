'use client';

import { useState } from 'react';

const EMAIL = 'mlavinaperez@gmail.com';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const company = String(form.get('company') || '').trim();
    const subject = String(form.get('subject') || '').trim();
    const message = String(form.get('message') || '').trim();

    if (!name || !email || !company || !subject || !message) {
      setStatus('Please complete every field before sending.');
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Organisation: ${company}`,
      '',
      message,
    ].join('\n');

    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus('Your email app should open with everything prefilled.');
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field-grid">
        <label>
          <span>NAME</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>EMAIL</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
      </div>

      <label>
        <span>COMPANY / ORGANISATION</span>
        <input name="company" type="text" autoComplete="organization" placeholder="Company, club, agency, federation or independent" required />
      </label>

      <label>
        <span>SUBJECT</span>
        <input name="subject" type="text" placeholder="What would you like to talk about?" required />
      </label>

      <label>
        <span>MESSAGE</span>
        <textarea name="message" rows="7" placeholder="Tell me a little about the opportunity, project or idea." required />
      </label>

      <div className="contact-submit-row">
        <button type="submit">OPEN EMAIL TO SEND <span className="ui-arrow ui-arrow-up-right" aria-hidden="true" /></button>
        <p>{status || 'All fields are required so I know who is getting in touch and why.'}</p>
      </div>
    </form>
  );
}

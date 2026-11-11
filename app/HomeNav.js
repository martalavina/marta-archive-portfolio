'use client';
import { useState } from 'react';

export default function HomeNav({ brandHref = '#top' }) {
  const [open, setOpen] = useState(false);
  return <header className="site-nav">
    <a className="brand" href={brandHref} onClick={() => setOpen(false)}>Marta Laviña</a>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="home-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
    <nav className={'nav-links' + (open ? ' open' : '')} id="home-navigation" aria-label="Main navigation">
      <a href="/archive" onClick={() => setOpen(false)}>Work</a>
      <a href="/profile" onClick={() => setOpen(false)}>About</a>
      <a href="/cv" onClick={() => setOpen(false)}>CV</a>
      <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
    </nav>
  </header>;
}
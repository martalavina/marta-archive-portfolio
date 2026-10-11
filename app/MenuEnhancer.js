'use client';

import { useEffect } from 'react';

export default function MenuEnhancer() {
  useEffect(() => {
    const closeMenu = (details) => {
      if (details?.open) details.removeAttribute('open');
    };

    const onClick = (event) => {
      const closeControl = event.target.closest('.mobile-menu-close');
      if (closeControl) {
        event.preventDefault();
        closeMenu(closeControl.closest('details.mobile-nav'));
      }
    };

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      document.querySelectorAll('details.mobile-nav[open]').forEach(closeMenu);
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return null;
}

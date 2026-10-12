'use client';

import { useEffect } from 'react';

const CV_SELECTOR = '.nav-disabled, .mobile-menu-disabled, .quick-disabled, .cv-placeholder';

export default function MenuEnhancer() {
  useEffect(() => {
    const closeMenu = (details) => {
      if (details?.open) details.removeAttribute('open');
    };

    const prepareCvLinks = () => {
      document.querySelectorAll(CV_SELECTOR).forEach((element) => {
        element.setAttribute('role', 'link');
        element.setAttribute('tabindex', '0');
        element.setAttribute('aria-label', 'Download Marta Laviña CV as PDF');
        element.classList.add('cv-download-ready');
      });

      document.querySelectorAll('.quick-disabled').forEach((element) => {
        const labels = element.querySelectorAll('span');
        if (labels[0]) labels[0].textContent = '03 / Download my CV';
        if (labels[1]) labels[1].textContent = 'PDF DOWNLOAD';
      });

      document.querySelectorAll('.cv-placeholder').forEach((element) => {
        element.textContent = 'DOWNLOAD CV PDF';
      });
    };

    const downloadCv = () => {
      window.location.assign('/cv');
    };

    const onClick = (event) => {
      const closeControl = event.target.closest('.mobile-menu-close');
      if (closeControl) {
        event.preventDefault();
        closeMenu(closeControl.closest('details.mobile-nav'));
        return;
      }

      const cvControl = event.target.closest(CV_SELECTOR);
      if (cvControl) {
        event.preventDefault();
        closeMenu(cvControl.closest('details.mobile-nav'));
        downloadCv();
      }
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        document.querySelectorAll('details.mobile-nav[open]').forEach(closeMenu);
        return;
      }

      if ((event.key === 'Enter' || event.key === ' ') && event.target.closest(CV_SELECTOR)) {
        event.preventDefault();
        downloadCv();
      }
    };

    prepareCvLinks();
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return null;
}

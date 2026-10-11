import './globals.css';
import './color-override.css';
import './polish.css';
import './final.css';
import './project-bleed.css';
import './qa.css';
import './release.css';

export const metadata = {
  title: 'Marta Laviña | Sports, Brands & Experiences',
  description: 'An editorial archive of sports, brands & experiences by Marta Laviña.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

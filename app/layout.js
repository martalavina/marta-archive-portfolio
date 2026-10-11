import './globals.css';
import './color-override.css';
import './polish.css';
import './final.css';
import './project-bleed.css';
import './qa.css';
import './release.css';

export const metadata = {
  metadataBase: new URL('https://marta-lavina-archive.vercel.app'),
  title: 'Marta Laviña Archive | Sports, Brands & Experiences',
  description: 'An editorial archive of sports, brands and experiences by Marta Laviña, focused on sponsorship, fan experience, events and partnerships.',
  applicationName: 'Marta Laviña Archive',
  authors: [{ name: 'Marta Laviña' }],
  creator: 'Marta Laviña',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'Marta Laviña Archive',
    title: 'Marta Laviña Archive | Sports, Brands & Experiences',
    description: 'An editorial archive of sports, brands and experiences by Marta Laviña.',
    url: '/',
  },
  twitter: {
    card: 'summary',
    title: 'Marta Laviña Archive | Sports, Brands & Experiences',
    description: 'An editorial archive of sports, brands and experiences by Marta Laviña.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

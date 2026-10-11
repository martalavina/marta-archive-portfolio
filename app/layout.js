import './globals.css';
import './color-override.css';
import './polish.css';
import './final.css';
import './project-bleed.css';
import './qa.css';
import './release.css';
import MenuEnhancer from './MenuEnhancer';

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

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://marta-lavina-archive.vercel.app/#person',
      name: 'Marta Laviña',
      url: 'https://marta-lavina-archive.vercel.app',
      sameAs: ['https://www.linkedin.com/in/martalavinaperez'],
      jobTitle: 'Sports Management Student',
      knowsAbout: [
        'Sponsorship Activation',
        'Brand Experience',
        'Event Management',
        'Fan Experience',
        'Brand Partnerships',
        'Sports Branding and Communication',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://marta-lavina-archive.vercel.app/#website',
      url: 'https://marta-lavina-archive.vercel.app',
      name: 'Marta Laviña Archive',
      description: 'An editorial archive of sports, brands and experiences by Marta Laviña.',
      author: { '@id': 'https://marta-lavina-archive.vercel.app/#person' },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuEnhancer />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

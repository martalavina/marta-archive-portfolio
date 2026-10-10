import { HERO_IMAGE } from '../heroData';

export const dynamic = 'force-dynamic';

export async function GET() {
  const base64 = HERO_IMAGE.replace(/^data:image\/webp;base64,/, '');
  const bytes = Buffer.from(base64, 'base64');

  return new Response(bytes, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}

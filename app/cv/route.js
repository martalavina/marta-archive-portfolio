import { gunzipSync } from 'node:zlib';
import part1 from './part1';
import part2 from './part2';
import part3 from './part3';
import part4 from './part4';
import part5 from './part5';
import part6 from './part6';
import part7 from './part7';
import part8 from './part8';
import part9 from './part9';
import part10 from './part10';

export const runtime = 'nodejs';

export async function GET() {
  const compressed = Buffer.from(
    part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8 + part9 + part10,
    'base64'
  );
  const pdf = gunzipSync(compressed);

  return new Response(pdf, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Marta-Lavina-CV.pdf"',
      'Content-Length': String(pdf.length),
      'Cache-Control': 'public, max-age=3600, immutable',
    },
  });
}

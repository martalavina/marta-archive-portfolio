import { NextResponse } from 'next/server';

const CV_BASE64 = '__PLACEHOLDER__';

export async function GET() {
  const pdf = Buffer.from(CV_BASE64, 'base64');
  return new NextResponse(pdf, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Marta-Lavina-CV.pdf"',
      'Cache-Control': 'public, max-age=3600, immutable',
    },
  });
}

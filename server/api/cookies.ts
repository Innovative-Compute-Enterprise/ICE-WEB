// server/api/cookies.ts

import { defineEventHandler, setCookie, readBody } from 'h3';

export default defineEventHandler(async (event) => {
    
  const body = await readBody(event);
  const consent = body.consent;

  setCookie(event, 'cookieConsent', consent, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    secure: true,
    httpOnly: true,
    sameSite: 'none', // or 'None' if cross-site requests are necessary
  });
  console.log('Setting cookie with consent:', consent);

  return { status: 'Cookie set', consent };
  
});


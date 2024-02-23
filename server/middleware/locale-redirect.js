import { defineEventHandler } from 'h3';

// Define your locale codes and default locale.
const localeCodes = ['en', 'pt']; // Replace with your actual locale codes.
const defaultLocale = 'en'; // This is your default locale.

// Regular expression to match the locales in the URL path.
const localeRegExp = new RegExp(`^/(${localeCodes.join('|')})/`);

// Middleware to handle locale-based redirects.
export default defineEventHandler((event) => {
  const path = event.req.url; // The URL path of the request.
  
  // Determine the current locale by splitting the path or using the default.
  const currentLocale = path.split('/')[1] || defaultLocale;
  
  // Check if the current locale is the default.
  const isDefaultLocale = currentLocale === defaultLocale;

  // If the default locale is in the URL when it shouldn't be, redirect.
  if (isDefaultLocale && localeRegExp.test(path)) {
    const newPath = path.replace(localeRegExp, '/');
    console.log('Redirecting to:', newPath); // Debugging line to track redirects.
    return event.res.writeHead(302, { Location: newPath }).end();
  }

  // If the URL does not start with the current locale, prepend the locale and redirect.
  if (!isDefaultLocale && !path.startsWith(`/${currentLocale}`)) {
    const newPath = `/${currentLocale}${path}`;
    console.log('Redirecting to:', newPath); // Debugging line to track redirects.
    return event.res.writeHead(302, { Location: newPath }).end();
  }
  
  if (path.startsWith('/api/')) {
    // Skip middleware for API routes
    return;
  }
});

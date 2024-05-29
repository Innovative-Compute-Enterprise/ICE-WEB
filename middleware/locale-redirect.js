import { defineEventHandler } from 'h3';

// Define your locale codes and default locale.
const localeCodes = ['en', 'pt']; // Replace with your actual locale codes.
const defaultLocale = 'en'; // This is your default locale.

// Regular expression to match the locales in the URL path.
const localeRegExp = new RegExp(`^/(${localeCodes.join('|')})/`);

// Middleware to handle locale-based redirects.
export default defineEventHandler((event) => {
  const path = event.node.req.url; // The URL path of the request.

  // Handle API requests early.
  if (path.startsWith('/api/')) {
    return;
  }

  // Determine the current locale by splitting the path or using the default.
  const pathSegments = path.split('/');
  const currentLocale = localeCodes.includes(pathSegments[1]) ? pathSegments[1] : defaultLocale;

  // Check if the current locale is the default locale.
  const isDefaultLocale = currentLocale === defaultLocale;

  // If the default locale is in the URL when it shouldn't be, redirect.
  if (isDefaultLocale && localeRegExp.test(path)) {
    const newPath = path.replace(localeRegExp, '/');
    // console.log('Redirecting to:', newPath); // Disable or remove logging in production.
    return event.node.res.writeHead(302, { Location: newPath }).end();
  }

  // If the URL does not start with the current locale, prepend the locale and redirect.
  if (!isDefaultLocale && !path.startsWith(`/${currentLocale}`)) {
    const newPath = `/${currentLocale}${path}`;
    // console.log('Redirecting to:', newPath); // Disable or remove logging in production.
    return event.node.res.writeHead(302, { Location: newPath }).end();
  }
});
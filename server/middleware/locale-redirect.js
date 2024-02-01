import { defineEventHandler } from 'h3';

// Example of hardcoded locales or imported from a config file
const localeCodes = ['en', 'pt']; // Replace with your actual locale codes
const defaultLocale = 'en'; // Replace with your actual default locale
const localeRegExp = new RegExp(`^/(${localeCodes.join('|')})/`);

export default defineEventHandler((event) => {
  const path = event.req.url;

  // Example of determining the current locale
  // This should be replaced with your actual logic of determining the current locale
  const currentLocale = path.split('/')[1] || defaultLocale;
  const isDefaultLocale = currentLocale === defaultLocale;

  if (isDefaultLocale && localeRegExp.test(path)) {
    const newPath = path.replace(localeRegExp, '/');
    return event.res.writeHead(302, { Location: newPath }).end();
  }

  if (!isDefaultLocale && !path.startsWith(`/${currentLocale}`)) {
    const newPath = `/${currentLocale}${path}`;
    return event.res.writeHead(302, { Location: newPath }).end();
  }
});

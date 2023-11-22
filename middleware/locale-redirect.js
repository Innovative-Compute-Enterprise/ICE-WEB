export default function ({ app, redirect, route }) {
    const defaultLocale = app.i18n.defaultLocale;
    const currentLocale = app.i18n.locale;
    const locales = app.i18n.locales.map(l => l.code);
    const path = route.path;
    const isDefaultLocale = currentLocale === defaultLocale;
  
    if (isDefaultLocale && locales.some(code => path.startsWith(`/${code}`))) {
      const newPath = path.replace(new RegExp(`^/(${locales.join('|')})/`), '/');
      return redirect(newPath);
    }
  
  
    if (!isDefaultLocale && !path.startsWith(`/${currentLocale}`)) {
      const newPath = `/${currentLocale}${path}`;
      return redirect(newPath);
    }
  }
  
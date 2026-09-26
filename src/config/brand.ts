/**
 * Merkgegevens van View Plus. Eén bron voor header, footer, schema en formulieren.
 */
export const brand = {
  id: 'viewplus',
  name: 'View Plus',
  legalName: 'View Plus', // TODO Jordan: juridische naam (zoals in KvK) invullen.
  siteUrl: 'https://www.viewplus.io',
  /**
   * Webshop (live volgerstellers). Uit de GitHub-variabele PUBLIC_SHOP_URL:
   * testversie https://aioplus.github.io/viewplus-shop, live https://shop.viewplus.io. Leeg = geen "Shop" in menu en footer.
   */
  shopUrl: (import.meta.env.PUBLIC_SHOP_URL || '').replace(/\/+$/, ''),
  /**
   * Inloggen op View Plus Online (eigen software, komt later op app.viewplus.io). Uit de GitHub-variabele
   * PUBLIC_APP_LOGIN_URL; zolang die leeg is, gaat "Log in" naar de tijdelijke pagina /login op deze site.
   */
  appLoginUrl: (import.meta.env.PUBLIC_APP_LOGIN_URL || '/login').replace(/\/+$/, '') || '/login',
  // LET OP: deze mailbox is nog niet actief (25-09-2026). Activeer hem vóór de livegang.
  email: 'support@viewplus.io',
  /** Rasterlogo voor schema.org/Google (min. 112px). Icoon zelf: components/layout/Logo.astro */
  logo: '/assets/brand/logo-512.png',
  /** Kleur van de adresbalk op telefoons (= brand-600). */
  themeColor: '#7A01B0',
  // TODO Jordan: echte profielen invullen; lege profielen worden niet getoond.
  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
    linkedin: '',
  },
  slogan: 'Van concept naar content.',
  tagline: 'Vergroot je online zichtbaarheid.',
} as const;

/**
 * Zusterlabel voor de promotieband (LabelBand) en llms.txt, met eigen teksten.
 * De labelwisselaar van AIO Plus gebruikt de centrale lijst: zie src/lib/labels.ts.
 */
export const labels = [
  { id: 'reviewplus', naam: ['Review', 'Plus'], url: 'https://www.reviewplus.io', kleur: 'var(--color-label-reviewplus)', wat: 'Reviews', slogan: 'Meer en betere Google-reviews, automatisch.' },
  { id: 'viewplus', naam: ['View', 'Plus'], url: 'https://www.viewplus.io', kleur: 'var(--color-label-viewplus)', wat: 'Social media', slogan: 'Social media en fotografie, volledig uit handen.' },
] as const;

/** Hoofdmenu: zelfde opbouw als reviewplus.io, met Portfolio erbij. */
export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Diensten', href: '/features' },
  { label: 'Prijzen', href: '/plans' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Over ons', href: '/about' },
  { label: 'Kennisbank', href: '/articles' },
] as const;

type Link = { label: string; href: string };

export const footerNav: { title: string; links: Link[] }[] = [
  {
    title: 'Bedrijf',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Over ons', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Kennisbank', href: '/articles' },
      { label: 'Vacatures', href: '/jobs' },
    ],
  },
  {
    title: 'Diensten',
    links: [
      { label: 'Social media management', href: '/features#social-media' },
      { label: 'Fotografie', href: '/features#fotografie' },
      { label: 'Content & design', href: '/features#content' },
      { label: 'Prijzen', href: '/plans' },
      { label: 'Plan afsluiten', href: '/aanmelden' },
      { label: 'Portfolio', href: '/portfolio' },
      ...(brand.shopUrl ? [{ label: 'Shop', href: brand.shopUrl }] : []),
      { label: 'Inloggen', href: brand.appLoginUrl },
    ],
  },
  {
    title: 'Voor wie',
    links: [
      { label: 'Horeca', href: '/about#voor-wie' },
      { label: 'Winkels', href: '/about#voor-wie' },
      { label: 'Beauty & wellness', href: '/about#voor-wie' },
      { label: 'Lokale ondernemers', href: '/about#voor-wie' },
    ],
  },
  {
    title: 'Wettelijk',
    links: [
      { label: 'Algemene voorwaarden', href: '/term-and-conditions' },
      { label: 'Privacyverklaring', href: '/privacy-policy' },
    ],
  },
];

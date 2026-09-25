/**
 * Merkgegevens van View Plus. Eén bron voor header, footer, schema en formulieren.
 */
export const brand = {
  id: 'viewplus',
  name: 'View Plus',
  legalName: 'View Plus', // TODO Jordan: juridische naam (zoals in KvK) invullen.
  siteUrl: 'https://www.viewplus.io',
  /** Webshop (reseller van o.a. Smiirl-tellers). Leeg = geen "Shop" in menu en footer. */
  shopUrl: '',
  /** Eigen app (later). Leeg = geen "Inloggen". */
  appLoginUrl: '',
  // TODO Jordan: definitief e-mailadres kiezen (bijvoorbeeld info@viewplus.io zodra die mailbox bestaat).
  email: 'support@reviewplus.io',
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
 * Labels van AIO PLUS. De labelschakelaar bovenaan beide sites gebruikt deze lijst, zodat Review Plus en
 * View Plus aanvoelen als één omgeving. Houd deze lijst gelijk met die in reviewplus-site.
 * `url` leeg = label nog niet live (wordt dan niet getoond in de schakelaar).
 */
export const labels = [
  { id: 'reviewplus', naam: ['Review', 'Plus'], url: 'https://www.reviewplus.io', kleur: 'var(--color-label-reviewplus)', wat: 'Reviews' },
  { id: 'viewplus', naam: ['View', 'Plus'], url: 'https://www.viewplus.io', kleur: 'var(--color-label-viewplus)', wat: 'Social media' },
] as const;

/** Pagina's die op beide sites bestaan: de schakelaar blijft dan op dezelfde pagina, anders naar home. */
export const gedeeldePaden: readonly string[] = ['/', '/features', '/plans', '/about', '/contact', '/articles', '/jobs', '/privacy-policy', '/term-and-conditions'];

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
      { label: 'Portfolio', href: '/portfolio' },
      ...(brand.shopUrl ? [{ label: 'Shop', href: brand.shopUrl }] : []),
      ...(brand.appLoginUrl ? [{ label: 'Inloggen', href: brand.appLoginUrl }] : []),
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

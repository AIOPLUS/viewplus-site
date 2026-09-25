import { brand } from './brand';

const env = import.meta.env;

function normBase(raw: string | undefined): string {
  if (!raw || raw === '/') return '/';
  return `/${raw.replace(/^\/+|\/+$/g, '')}`;
}

/** Absolute origin zonder trailing slash, bv. https://www.viewplus.io */
export const SITE_URL = (env.SITE_URL || 'https://www.viewplus.io').replace(/\/+$/, '');
/** "/" op viewplus.io, "/viewplus-site" op de testversie (GitHub Pages zonder eigen domein). */
export const BASE_PATH = normBase(env.BASE_PATH);
/** Concepten (vacatures met `concept: true`, voorbeeldbeelden) zijn alleen zichtbaar op de testversie. */
export const TOON_CONCEPTEN = BASE_PATH !== '/';

/**
 * Formulieren (contact, nieuwsbrief). Gaan later naar het Make-scenario, met `merk: "viewplus"` in de payload.
 * Zolang de webhook leeg is, verwijst het formulier naar het e-mailadres.
 */
export const LEAD = {
  webhookUrl: env.PUBLIC_LEAD_WEBHOOK_URL || '',
  turnstileSiteKey: env.PUBLIC_TURNSTILE_SITE_KEY || '',
  fallbackEmail: brand.email,
};

export const ANALYTICS = {
  provider: (env.PUBLIC_ANALYTICS_PROVIDER || '') as '' | 'plausible' | 'umami',
  domain: env.PUBLIC_ANALYTICS_DOMAIN || new URL(SITE_URL).host,
  scriptUrl: env.PUBLIC_ANALYTICS_SCRIPT_URL || '',
  umamiWebsiteId: env.PUBLIC_UMAMI_WEBSITE_ID || '',
};

export const PIXELS = {
  metaPixelId: env.PUBLIC_META_PIXEL_ID || '',
  gadsId: env.PUBLIC_GADS_ID || '',
  gadsConversionLabel: env.PUBLIC_GADS_CONVERSION_LABEL || '',
};

import { brand } from '@/config/brand';
import { prijzen } from '@/config/content';
import { absoluteUrl } from './url';

type Json = Record<string, unknown>;

const orgId = `${brand.siteUrl}/#organization`;

export function organizationSchema(): Json {
  const sameAs = Object.values(brand.social).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: brand.name,
    url: brand.siteUrl,
    logo: absoluteUrl(brand.logo),
    email: brand.email,
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${brand.siteUrl}/#website`,
    name: brand.name,
    url: brand.siteUrl,
    inLanguage: 'nl-NL',
    publisher: { '@id': orgId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqSchema(faq: readonly { vraag: string; antwoord: string }[]): Json | null {
  if (!faq.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.vraag,
      acceptedAnswer: { '@type': 'Answer', text: f.antwoord },
    })),
  };
}

/** Social media management en fotografie als dienst, met de prijzen als aanbiedingen (excl. btw). */
export function serviceSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Social media management en fotografie',
    serviceType: 'Social media management',
    provider: { '@id': orgId },
    url: absoluteUrl('/features'),
    offers: prijzen.map((p) => ({
      '@type': 'Offer',
      name: p.naam,
      price: p.bedrag,
      priceCurrency: 'EUR',
      url: absoluteUrl('/plans'),
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: p.bedrag,
        priceCurrency: 'EUR',
        ...(p.per === 'week' ? { unitCode: 'WEE' } : { unitText: p.per }),
        valueAddedTaxIncluded: false,
      },
    })),
  };
}

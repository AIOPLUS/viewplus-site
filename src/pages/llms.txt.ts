import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { brand, labels } from '@/config/brand';
import { diensten, faq, pakketten, uitbreidingen } from '@/config/content';
import { absoluteUrl } from '@/lib/url';
import { euro, inclBtwTekst } from '@/lib/prijs';

/** Samenvatting van de site voor AI-assistenten (llmstxt.org). */
export const GET: APIRoute = async () => {
  const artikelen = (await getCollection('articles', (a) => !a.data.concept)).sort((a, b) => b.data.datum.getTime() - a.data.datum.getTime());
  const reviewPlus = labels.find((l) => l.id === 'reviewplus');
  const lines = [
    `# ${brand.name}`,
    '',
    '> View Plus neemt de social media van lokale ondernemers uit handen: professionele fotografie, een contentkalender, 2 tot 3 posts per week met captions en hashtags, en actief reageren op de doelgroep. Voor horeca, winkels, beauty en wellness en andere lokale zaken.',
    '',
    '## Diensten',
    ...diensten.map((d) => `- ${d.label}: ${d.tekst}`),
    ...uitbreidingen.map((u) => `- ${u.titel}: ${u.tekst}`),
    '',
    '## Prijzen (exclusief btw)',
    ...pakketten.flatMap((p) => [
      `### ${p.naam} (${p.ondertitel.toLowerCase()})`,
      ...p.opties.map((o) => `- ${o.label}: € ${euro(o.bedrag)} per ${p.eenheid} (€ ${inclBtwTekst(o.bedrag)} incl. 21% btw); ${o.looptijd}, € ${euro(o.aantal * o.bedrag)} ${p.totaalTekst}.`),
      `Inbegrepen: ${p.kenmerken.join('; ')}.`,
      '',
    ]),
    '',
    "## Pagina's",
    `- [Diensten](${absoluteUrl('/features')})`,
    `- [Prijzen](${absoluteUrl('/plans')})`,
    `- [Portfolio](${absoluteUrl('/portfolio')})`,
    `- [Over ons](${absoluteUrl('/about')})`,
    `- [Contact en kennismaking](${absoluteUrl('/contact')})`,
    ...(reviewPlus?.url ? [`- [Review Plus, het zusterlabel voor reviews](${reviewPlus.url})`] : []),
    '',
    ...(artikelen.length ? ['## Kennisbank', ...artikelen.map((a) => `- [${a.data.titel}](${absoluteUrl(`/articles/${a.id}`)}): ${a.data.beschrijving}`), ''] : []),
    '## Veelgestelde vragen',
    ...faq.flatMap((f) => [`### ${f.vraag}`, f.antwoord, '']),
    `Contact: ${brand.email}`,
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

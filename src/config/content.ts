/**
 * Teksten van viewplus.io, gebaseerd op de View Plus-brochure (september 2026).
 * Er staan bewust geen cijfers over resultaten of klantaantallen in: die voegen we pas toe als Jordan ze kan onderbouwen.
 */

/** De drie pijlers uit de brochure. */
export const pijlers = [
  { titel: 'Fotografie', tekst: 'Beelden die de sfeer en uitstraling van jouw zaak vastleggen.', icoon: 'camera' },
  { titel: 'Content', tekst: 'Content die jouw zaak online tot leven brengt.', icoon: 'telefoon' },
  { titel: 'Engagement', tekst: 'Actieve interactie met jouw doelgroep.', icoon: 'mensen' },
] as const;

/** Diensten, in detail op /features. `id` = anker (#social-media, #fotografie, …). */
export const diensten = [
  {
    id: 'social-media',
    label: 'Social media management',
    titel: 'Wij nemen je social media volledig uit handen',
    tekst: 'We maken vooraf een contentkalender en bepalen samen drie vaste contentpijlers die regelmatig terugkomen, zoals de sfeer in je zaak, je producten en je team. Op basis daarvan maken en plaatsen we elke week je posts.',
    punten: ['2 tot 3 posts per week, inclusief captions en hashtags', 'Contentkalender vooraf, zodat je weet wat er komt', 'Inspelen op actualiteit en lokale gebeurtenissen'],
    beeld: 'feed',
  },
  {
    id: 'fotografie',
    label: 'Fotografie',
    titel: 'Professionele foto’s die passen bij jouw zaak',
    tekst: 'Tijdens een shootdag van ongeveer 2 uur maken we circa 40 bewerkte foto’s. Die mag je vrij gebruiken, voor social media én je website. Eén shootdag is genoeg voor ongeveer 2 tot 3 maanden content.',
    punten: ['Circa 40 bewerkte foto’s per shootdag', 'Vrij te gebruiken voor social media en je website', 'Nieuwe beelden bij bijvoorbeeld een nieuwe (seizoens)kaart'],
    beeld: 'fotos',
  },
  {
    id: 'content',
    label: 'Content & design',
    titel: 'Een herkenbare stijl, post na post',
    tekst: 'Samen kijken we naar grafische elementen die we in je posts verwerken. Zo krijgt je content een persoonlijke en herkenbare uitstraling, die past bij jouw zaak en jouw doelgroep.',
    punten: ['Grafische elementen in jouw huisstijl', 'Drie vaste contentpijlers, samen bepaald', 'Een consistente uitstraling op al je kanalen'],
    beeld: 'kalender',
  },
  {
    id: 'engagement',
    label: 'Engagement',
    titel: 'Actief contact met jouw doelgroep',
    tekst: 'Posten alleen is niet genoeg. We reageren op alle reacties en zoeken actief interactie met relevante accounts in jouw omgeving. Zo bouw je aan bereik en betrokkenheid.',
    punten: ['We reageren op alle reacties', 'Actief interactie met relevante accounts', 'Meer bereik, de juiste doelgroep en meer betrokkenheid'],
    beeld: 'engagement',
  },
] as const;

/** Werkwijze in vier stappen. */
export const werkwijze = [
  { titel: 'Kennismaking', tekst: 'We leren jouw zaak kennen en bepalen samen drie vaste contentpijlers en de stijl van je posts.' },
  { titel: 'Shootdag', tekst: 'In ongeveer 2 uur fotograferen we jouw zaak, producten en team. Je krijgt circa 40 bewerkte foto’s.' },
  { titel: 'Contentkalender', tekst: 'We plannen je posts vooraf en plaatsen er 2 tot 3 per week, met captions en hashtags.' },
  { titel: 'Engagement', tekst: 'We reageren op reacties, zoeken interactie met relevante accounts en spelen in op wat er lokaal gebeurt.' },
] as const;

/** Doelen uit de brochure (bewust zonder percentages). */
export const doelen = [
  { titel: 'Meer bereik', tekst: 'Consistent posten met sterke beelden zorgt dat jouw zaak vaker gezien wordt.' },
  { titel: 'De juiste doelgroep', tekst: 'Content die aansluit bij jouw klanten en jouw omgeving, niet bij iedereen.' },
  { titel: 'Meer betrokkenheid', tekst: 'Door te reageren en interactie te zoeken, bouw je een band op met je volgers.' },
] as const;

/** Doelgroepen (Over ons, #voor-wie). Foto's uit src/assets/img. */
export const doelgroepen = [
  { naam: 'Horeca', tekst: 'Restaurants, cafés en bars', foto: 'foto-gevel.jpg' },
  { naam: 'Winkels', tekst: 'Lokale winkels en boetieks', foto: 'foto-boetiek.jpg' },
  { naam: 'Beauty & wellness', tekst: 'Salons, kappers en sportscholen', foto: 'foto-kapper.jpg' },
  { naam: 'Lokale ondernemers', tekst: 'Elke zaak met een verhaal', foto: 'foto-bakkerij.jpg' },
] as const;

/**
 * Portfolio (/portfolio). TODO Jordan: vervang door eigen werk van klanten die toestemming hebben gegeven,
 * en zet `voorbeeld` dan op false. Zolang `voorbeeld` true is, staat er een melding op de pagina en wordt hij niet geïndexeerd.
 */
export const portfolio = {
  voorbeeld: true,
  categorieen: ['Horeca', 'Winkels', 'Beauty & wellness'],
  items: [
    { foto: 'foto-gerecht-saus.jpg', categorie: 'Horeca', alt: 'Chef giet saus over een opgemaakt gerecht' },
    { foto: 'foto-latte.jpg', categorie: 'Horeca', alt: 'Cappuccino met latte art' },
    { foto: 'foto-boetiek.jpg', categorie: 'Winkels', alt: 'Kledingboetiek met kleding en hoeden' },
    { foto: 'foto-pasta.jpg', categorie: 'Horeca', alt: 'Spaghetti met tomatensaus en peterselie' },
    { foto: 'foto-kapper.jpg', categorie: 'Beauty & wellness', alt: 'Kapper föhnt het haar van een klant' },
    { foto: 'foto-bar.jpg', categorie: 'Horeca', alt: 'Bartender maakt een cocktail' },
    { foto: 'foto-bakkerij.jpg', categorie: 'Winkels', alt: 'Brood en gebak in de vitrine van een bakkerij' },
    { foto: 'foto-cafe.jpg', categorie: 'Horeca', alt: 'Sfeervol café met houten tafels en planten' },
    { foto: 'foto-salon.jpg', categorie: 'Beauty & wellness', alt: 'Interieur van een beautysalon' },
    { foto: 'foto-chef.jpg', categorie: 'Horeca', alt: 'Chef maakt borden op in de keuken' },
    { foto: 'foto-tafel.jpg', categorie: 'Horeca', alt: 'Gedekte tafel met pasta en een glas wijn' },
    { foto: 'foto-gevel.jpg', categorie: 'Horeca', alt: 'Terras en gevel van een restaurant' },
  ],
} as const;

/**
 * Prijzen per dienst, exclusief btw. Elke dienst heeft drie opties, zoals de drie plannen op reviewplus.io.
 * `bedrag` = prijs per eenheid (week of shootdag); `aantal` = aantal eenheden in de looptijd (voor het totaal).
 * De bedragen incl. 21% btw rekent src/lib/prijs.ts uit.
 * TODO Jordan: geldt View Plus Online voor alle platformen samen of per platform? Opzegtermijn na de looptijd?
 */
export type PrijsOptie = { id: string; label: string; looptijd: string; aantal: number; bedrag: number; uitgelicht?: boolean };
export type Pakket = {
  id: string;
  naam: string;
  ondertitel: string;
  eenheid: string;
  eenheidKort: string;
  /** Tekst na het totaalbedrag, bv. "in totaal" of "per jaar". */
  totaalTekst: string;
  kenmerken: readonly string[];
  opties: readonly PrijsOptie[];
};

export const pakketten: readonly Pakket[] = [
  {
    id: 'online',
    naam: 'View Plus Online',
    ondertitel: 'Social media management',
    eenheid: 'week',
    eenheidKort: '/week',
    totaalTekst: 'in totaal',
    kenmerken: [
      'Contentkalender vooraf',
      'Drie vaste contentpijlers, samen bepaald',
      '2 tot 3 posts per week, inclusief captions en hashtags',
      'Inspelen op actualiteit en lokale gebeurtenissen',
      'Reageren op alle reacties',
      'Actief interactie met relevante accounts',
    ],
    opties: [
      { id: 'online-1-maand', label: '1 maand', looptijd: '4 weken', aantal: 4, bedrag: 75 },
      { id: 'online-3-maanden', label: '3 maanden', looptijd: '12 weken', aantal: 12, bedrag: 50 },
      { id: 'online-12-maanden', label: '12 maanden', looptijd: '52 weken', aantal: 52, bedrag: 25, uitgelicht: true },
    ],
  },
  {
    id: 'fotografie',
    naam: 'Fotografie',
    ondertitel: 'Shootdagen',
    eenheid: 'shootdag',
    eenheidKort: '/shoot',
    totaalTekst: 'per jaar',
    kenmerken: [
      'Ongeveer 2 uur fotograferen op locatie',
      'Circa 40 bewerkte foto’s per shootdag',
      'Vrij te gebruiken voor social media en je website',
      'Eén shootdag is genoeg voor ongeveer 2 tot 3 maanden content',
      'Grafische elementen voor een herkenbare stijl',
    ],
    opties: [
      { id: 'fotografie-1-shoot', label: '1 shoot per jaar', looptijd: '1 shootdag per jaar', aantal: 1, bedrag: 475 },
      { id: 'fotografie-2-shoots', label: '2 shoots per jaar', looptijd: '2 shootdagen per jaar', aantal: 2, bedrag: 375 },
      { id: 'fotografie-4-shoots', label: '4 shoots per jaar', looptijd: '4 shootdagen per jaar', aantal: 4, bedrag: 275, uitgelicht: true },
    ],
  },
];

/** Laagste prijs per eenheid van een pakket (voor "vanaf"-teksten). */
export const vanaf = (id: string): number => Math.min(...(pakketten.find((p) => p.id === id)?.opties.map((o) => o.bedrag) ?? [0]));

/** Uitbreidingen (prijs op aanvraag). */
export const uitbreidingen = [
  { titel: 'Videomateriaal', tekst: 'Korte video’s voor Reels, TikTok en Shorts. Prijs op aanvraag.', icoon: 'video' },
  { titel: 'Meer Google-reviews', tekst: 'Met ons zusterlabel Review Plus verzamel je eenvoudig meer reviews en werk je aan een hogere Google-score.', icoon: 'ster', href: 'https://www.reviewplus.io' },
] as const;

/** Platformen in de paarse band op de homepage (iconen uit Simple Icons). */
export const platformen: readonly { naam: string; icoon?: string; woordmerk?: boolean }[] = [
  { naam: 'Instagram', icoon: 'si:instagram' },
  { naam: 'Facebook', icoon: 'si:facebook' },
  { naam: 'TikTok', icoon: 'si:tiktok' },
  { naam: 'LinkedIn', icoon: 'si:linkedin' },
  { naam: 'YouTube', icoon: 'si:youtube' },
  { naam: 'X', icoon: 'si:x' },
  { naam: 'Google Bedrijfsprofiel', icoon: 'si:google' },
];

export const faq = [
  {
    vraag: 'Wat doet View Plus precies?',
    antwoord: 'View Plus neemt je social media uit handen. We fotograferen jouw zaak, maken een contentkalender, plaatsen 2 tot 3 posts per week met captions en hashtags, en reageren op alle reacties. Zo krijg je een consistente en herkenbare online uitstraling, zonder dat je er zelf tijd in hoeft te steken.',
  },
  {
    vraag: 'Wat kost View Plus?',
    antwoord: 'View Plus Online kost € 75 per week bij 1 maand, € 50 per week bij 3 maanden en € 25 per week bij 12 maanden. Een shootdag kost € 475 bij 1 shoot per jaar, € 375 per shoot bij 2 shoots en € 275 per shoot bij 4 shoots per jaar. Alle prijzen zijn exclusief btw.',
  },
  {
    vraag: 'Mag ik de foto’s ook op mijn website gebruiken?',
    antwoord: 'Ja. De circa 40 bewerkte foto’s van een shootdag mag je vrij gebruiken, voor social media én je website.',
  },
  {
    vraag: 'Hoe vaak is een nieuwe shootdag nodig?',
    antwoord: 'Eén shootdag levert genoeg beeld op voor ongeveer 2 tot 3 maanden content. Het is goed om regelmatig nieuw beeld te maken, bijvoorbeeld als je kaart of collectie met het seizoen verandert.',
  },
  {
    vraag: 'Op welke platformen zijn jullie actief?',
    antwoord: 'We werken met de platformen waar jouw klanten zijn, zoals Instagram, Facebook, TikTok, LinkedIn, YouTube, X en je Google Bedrijfsprofiel. In de kennismaking bepalen we samen welke kanalen voor jouw zaak het meest opleveren.',
  },
  {
    vraag: 'Voor wie is View Plus bedoeld?',
    antwoord: 'Voor lokale ondernemers die online zichtbaarder willen worden: horeca, winkels, beauty en wellness, en andere zaken met een eigen verhaal.',
  },
] as const;

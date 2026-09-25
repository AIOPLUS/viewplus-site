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
  { naam: 'Horeca', tekst: 'Restaurants, cafés en bars', foto: 'foto-restaurant.jpg' },
  { naam: 'Winkels', tekst: 'Lokale winkels en boetieks', foto: 'foto-winkel.jpg' },
  { naam: 'Beauty & wellness', tekst: 'Salons, kappers en sportscholen', foto: 'foto-salon.jpg' },
  { naam: 'Lokale ondernemers', tekst: 'Elke zaak met een verhaal', foto: 'foto-hotel.jpg' },
] as const;

/**
 * Portfolio (/portfolio). TODO Jordan: vervang door eigen werk van klanten die toestemming hebben gegeven,
 * en zet `voorbeeld` dan op false. Zolang `voorbeeld` true is, staat er een melding op de pagina en wordt hij niet geïndexeerd.
 */
export const portfolio = {
  voorbeeld: true,
  categorieen: ['Horeca', 'Winkels', 'Beauty & wellness', 'Overig'],
  items: [
    { foto: 'foto-restaurant.jpg', categorie: 'Horeca', alt: 'Restauranthouder in gesprek met gasten' },
    { foto: 'foto-salon.jpg', categorie: 'Beauty & wellness', alt: 'Interieur van een beautysalon' },
    { foto: 'foto-vrije-tijd.jpg', categorie: 'Overig', alt: 'Arcadekasten in een speelhal' },
    { foto: 'foto-winkel.jpg', categorie: 'Winkels', alt: 'Ondernemer aan de toonbank van haar winkel' },
    { foto: 'foto-hotel.jpg', categorie: 'Horeca', alt: 'Gastheer achter de balie' },
    { foto: 'foto-sportschool.jpg', categorie: 'Beauty & wellness', alt: 'Twee mensen trainen in een sportschool' },
    { foto: 'foto-franchise.jpg', categorie: 'Winkels', alt: 'Twee medewerkers in een supermarkt' },
    { foto: 'foto-zorg.jpg', categorie: 'Overig', alt: 'Behandelaar in een praktijk' },
    { foto: 'foto-autobedrijf.jpg', categorie: 'Overig', alt: 'Showroom van een autobedrijf' },
  ],
} as const;

/**
 * Prijzen, exclusief btw (zoals in de brochure). De bedragen incl. 21% btw rekent src/lib/prijs.ts uit.
 * TODO Jordan: geldt € 75 per week voor alle platformen samen of per platform? Is er een minimale looptijd of opzegtermijn?
 */
export const prijzen = [
  {
    id: 'social-media',
    naam: 'Social media management',
    bedrag: '75',
    per: 'week',
    perKort: '/week',
    label: 'Doorlopend',
    uitgelicht: true,
    kenmerken: [
      'Contentkalender vooraf',
      'Drie vaste contentpijlers, samen bepaald',
      '2 tot 3 posts per week, inclusief captions en hashtags',
      'Inspelen op actualiteit en lokale gebeurtenissen',
      'Reageren op alle reacties',
      'Actief interactie met relevante accounts',
    ],
    knop: 'Start met social media',
  },
  {
    id: 'shootdag',
    naam: 'Shootdag',
    bedrag: '475',
    per: 'shootdag',
    perKort: '/shootdag',
    label: 'Fotografie',
    uitgelicht: false,
    kenmerken: [
      'Ongeveer 2 uur fotograferen op locatie',
      'Circa 40 bewerkte foto’s',
      'Vrij te gebruiken voor social media en je website',
      'Genoeg voor ongeveer 2 tot 3 maanden content',
      'Grafische elementen voor een herkenbare stijl',
    ],
    knop: 'Plan een shootdag',
  },
] as const;

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
    vraag: 'Wat kost social media management?',
    antwoord: 'Social media management kost € 75 per week, exclusief btw. Een shootdag kost € 475, exclusief btw. Op de prijzenpagina zie je precies wat erbij zit.',
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

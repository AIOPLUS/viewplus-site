# viewplus.io

De site van View Plus: social media management, fotografie en content voor lokale ondernemers. Gebouwd op dezelfde basis als `AIOPLUS/reviewplus-site` (Astro, statisch, GitHub Pages), zodat Review Plus en View Plus aanvoelen als één omgeving met twee labels.

## Eén systeem, twee labels

- **Zelfde opbouw**: componenten, lettertype (Poppins), radius, schaduwen en URL's (`/features`, `/plans`, `/about`, `/contact`, `/articles`, `/jobs`) zijn gelijk aan reviewplus.io.
- **Eigen branding**: alleen de merkkleur (`src/styles/tokens.css`), het logo en de inhoud verschillen. Review Plus is blauw, View Plus paars.
- **Labelschakelaar**: bovenaan elke pagina (`src/components/layout/LabelSwitch.astro`). Je springt naar dezelfde pagina bij het andere label als die bestaat (`gedeeldePaden` in `src/config/brand.ts`), anders naar de homepage. Houd `labels` en `gedeeldePaden` gelijk in beide repo's.
- **Band naar het zusterlabel**: `src/components/sections/LabelBand.astro`, in de kleur van het andere label.

## Pagina's

| URL | Bestand |
|---|---|
| `/` | `src/pages/index.astro` |
| `/features` (Diensten) | `src/pages/features.astro` |
| `/plans` (Prijzen) | `src/pages/plans.astro` |
| `/portfolio` | `src/pages/portfolio.astro` |
| `/about` (Over ons) | `src/pages/about.astro` |
| `/contact` (Kennismaking) | `src/pages/contact.astro` |
| `/aanmelden` (Plan afsluiten) + `/welkom` | `src/pages/aanmelden.astro`, `src/pages/welkom.astro` |
| `/articles` (Kennisbank) | `src/pages/articles/` + `src/content/articles/*.md` |
| `/jobs` (Vacatures) | `src/pages/jobs/` + `src/content/jobs/*.md` |
| `/privacy-policy`, `/term-and-conditions` | `src/content/legal/*.md` |

## Teksten aanpassen

- Pijlers, diensten, werkwijze, doelen, prijzen (`pakketten`: View Plus Online en Fotografie, elk drie opties), FAQ, portfolio: `src/config/content.ts`
- Menu, footer, labels, e-mail, socials: `src/config/brand.ts`
- Nieuw kennisbankartikel: maak `src/content/articles/<slug>.md` (velden: zie `src/content.config.ts`)
- Nieuwe vacature: maak `src/content/jobs/<slug>.md`; `concept: true` = alleen op de testversie

## Plan online afsluiten (`/aanmelden`)

- Zelfde opbouw als op reviewplus.io: plan kiezen, bedrijfsgegevens, contactpersoon, akkoord (algemene voorwaarden met versie = `ingangsdatum` in `src/content/legal/algemene-voorwaarden.md`, en bevoegdheid), samenvatting met btw (verlegd voor Belgische bedrijven met btw-nummer).
- Je kiest View Plus Online (1, 3 of 12 maanden) en/of Fotografie (1, 2 of 4 shoots per jaar); minstens één.
- De prijskaarten linken naar `/aanmelden?online=<optie>` of `/aanmelden?fotografie=<optie>`.
- Payload: `request_type: "abonnement"`, `merk: "viewplus"`, `plan: { online, fotografie }` (optie-id of null), plus bedrijf, adres, contact, factuur_email en akkoord. Make moet de prijzen zelf opnieuw uitrekenen uit `src/config/content.ts`.
- **Voorwaarden**: de algemene voorwaarden staan online (26-09-2026); de gemaakte keuzes staan in `docs/CONCEPT-ALGEMENE-VOORWAARDEN.md`. Nog toevoegen: juridische naam en KvK-nummer.

## Formulieren

Contact, nieuwsbrief en sollicitaties sturen JSON met `merk: "viewplus"` naar `PUBLIC_LEAD_WEBHOOK_URL`. Zolang die leeg is, verwijst het formulier naar het e-mailadres uit `brand.ts`. De Make-koppeling volgt later (zie `../CLAUDE.md`).

## Lokaal

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # typecheck + lint + build + linkcheck
```

## Variabelen (GitHub → Settings → Secrets and variables → Actions → Variables)

| Naam | Testversie | Live |
|---|---|---|
| `SITE_URL` | leeg (= `https://aioplus.github.io`) | `https://www.viewplus.io` |
| `BASE_PATH` | leeg (= `/viewplus-site`) | `/` |
| `PUBLIC_LEAD_WEBHOOK_URL` | leeg (later Make) | idem |
| `PUBLIC_SHOP_URL` | `https://aioplus.github.io/viewplus-shop` | `https://shop.viewplus.io` |
| `PUBLIC_APP_LOGIN_URL` | leeg (= tijdelijke pagina `/login`) | later het inlogadres van View Plus Online (app.viewplus.io) |
| `PUBLIC_TURNSTILE_SITE_KEY` | leeg (later) | idem |
| `PUBLIC_ANALYTICS_PROVIDER` / `PUBLIC_UMAMI_WEBSITE_ID` | leeg | Umami |

## Live zetten op www.viewplus.io (later)

Volledige checklist voor site én shop: [docs/LIVEGANG.md](docs/LIVEGANG.md).

1. `public/CNAME` met `www.viewplus.io` toevoegen.
2. GitHub-variabelen: `SITE_URL=https://www.viewplus.io`, `BASE_PATH=/`.
3. GitHub → Settings → Pages → Custom domain `www.viewplus.io` → Enforce HTTPS zodra het certificaat er is.
4. DNS bij GoDaddy: A-records van `viewplus.io` (@) naar 185.199.108.153, .109.153, .110.153, .111.153 en `www` als CNAME naar `aioplus.github.io`.
5. Controleer dat support@viewplus.io mail ontvangt.
6. Cloudflare Turnstile: `www.viewplus.io` en `viewplus.io` als hostname toevoegen.
7. In `reviewplus-site/src/data/labels.json`: View Plus op `status: "live"` zetten en de sites opnieuw deployen (labelwisselaar).

## Beelden

- **Merk**: favicon, `logo-icon.svg`, `logo-512.png`, `apple-touch-icon.png` en `og/home.png` zijn gemaakt uit het beeldmerk in `../viewplus-brand/` (beeldmerk paars #7A01B0, woordmerk zwart).
- **Achtergronden** (`bento-bg-*`, `cta-bg`, `hero-kaart-bg`, `pagina-hero-bg`, `uitkomst-bg`): de blauwe versies van reviewplus.io, paars gekleurd.
- **Foto's** (`foto-*.jpg`): tijdelijke voorbeeldfoto's. **Vervang ze door eigen werk** van klanten met toestemming; zet daarna `portfolio.voorbeeld` op `false`.
  - `foto-salon.jpg` komt van reviewplus.io (beeld van de oude Framer-site).
  - De rest komt van Unsplash (gratis, ook commercieel, naamsvermelding niet verplicht; https://unsplash.com/license), gedownload op 25-09-2026:

| Bestand | Unsplash-foto | Fotograaf |
|---|---|---|
| `foto-gerecht-saus.jpg` | https://unsplash.com/photos/chef-pouring-sauce-over-plated-steak-MaWMfm-HCqQ | Urban Gyllström |
| `foto-gerecht.jpg` | https://unsplash.com/photos/meat-and-vegetable-on-plate-Xk0jQPZseMk | Eugene |
| `foto-pasta.jpg` | https://unsplash.com/photos/a-plate-of-spaghetti-with-tomato-sauce-and-parsley-Htb3Neu9Tmg | Mandy Bourke |
| `foto-tafel.jpg` | https://unsplash.com/photos/a-table-with-a-plate-of-food-and-a-glass-of-wine-tuI5Xu4iHUI | Thimotius Timmy |
| `foto-latte.jpg` | https://unsplash.com/photos/cafe-latte-Nw8wbiDE3gU | Phil Desforges |
| `foto-cafe.jpg` | https://unsplash.com/photos/rustic-cafe-interior-with-wooden-furniture-xhKG01FN2uk | Ruben Ramirez |
| `foto-bar.jpg` | https://unsplash.com/photos/a-man-is-making-a-drink-at-a-bar-HN2ukPUF_og | Olena Bohovyk |
| `foto-chef.jpg` | https://unsplash.com/photos/person-putting-food-on-plate-cQbOSRpElxw | Sebastian Coman Photography |
| `foto-fotograaf.jpg` | https://unsplash.com/photos/woman-taking-photo-of-donuts-4LDoRe_Lne8 | Szabo Viktor |
| `foto-telefoon.jpg` | https://unsplash.com/photos/person-holding-black-smartphone-taking-photo-of-pizza-1uQQrwzjKms | Yoav Aziz |
| `foto-kapper.jpg` | https://unsplash.com/photos/hairstylist-blow-drying-client-hair-FkAZqQJTbXM | Adam Winger |
| `foto-boetiek.jpg` | https://unsplash.com/photos/a-clothing-store-with-clothes-and-hats-on-display-2gLL2ZgBlcU | Laura Peruchi |
| `foto-bakkerij.jpg` | https://unsplash.com/photos/breads-in-display-shelf-go3DT3PpIw4 | Yeh Xintong |
| `foto-gevel.jpg` | https://unsplash.com/photos/the-outside-of-a-restaurant-with-tables-and-chairs-OG_fvZHurYw | Alena Torgonskaya |

## Nog te doen (Jordan)

- Mailbox support@viewplus.io activeren (staat al op de site in `brand.email`, maar is nog niet actief) en juridische naam invullen.
- Geldt View Plus Online voor alle platformen samen of per platform? Wat gebeurt er na afloop van de looptijd (verlenging, opzegtermijn)? Hoe factureren we (vooraf per looptijd, per 4 weken)? Die afspraken horen in de algemene voorwaarden en in de akkoordtekst van `/aanmelden`.
- Eigen verhaal op Over ons, echte social-mediaprofielen, eigen foto's en portfolio.
- Algemene voorwaarden opstellen; privacyverklaring laten controleren (staat als concept).

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
| `/articles` (Kennisbank) | `src/pages/articles/` + `src/content/articles/*.md` |
| `/jobs` (Vacatures) | `src/pages/jobs/` + `src/content/jobs/*.md` |
| `/privacy-policy`, `/term-and-conditions` | `src/content/legal/*.md` |

## Teksten aanpassen

- Pijlers, diensten, werkwijze, doelen, prijzen, FAQ, portfolio: `src/config/content.ts`
- Menu, footer, labels, e-mail, socials: `src/config/brand.ts`
- Nieuw kennisbankartikel: maak `src/content/articles/<slug>.md` (velden: zie `src/content.config.ts`)
- Nieuwe vacature: maak `src/content/jobs/<slug>.md`; `concept: true` = alleen op de testversie

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
| `PUBLIC_TURNSTILE_SITE_KEY` | leeg (later) | idem |
| `PUBLIC_ANALYTICS_PROVIDER` / `PUBLIC_UMAMI_WEBSITE_ID` | leeg | Umami |

## Live zetten op www.viewplus.io (later)

1. `public/CNAME` met `www.viewplus.io` toevoegen.
2. GitHub-variabelen: `SITE_URL=https://www.viewplus.io`, `BASE_PATH=/`.
3. GitHub → Settings → Pages → Custom domain `www.viewplus.io` → Enforce HTTPS zodra het certificaat er is.
4. DNS bij GoDaddy: A-records van `viewplus.io` (@) naar 185.199.108.153, .109.153, .110.153, .111.153 en `www` als CNAME naar `aioplus.github.io`.
5. Cloudflare Turnstile: `www.viewplus.io` en `viewplus.io` als hostname toevoegen.
6. In `reviewplus-site`: de labelschakelaar live zetten (zie de branch `labelschakelaar`).

## Beelden

- **Merk**: favicon, `logo-icon.svg`, `logo-512.png`, `apple-touch-icon.png` en `og/home.png` zijn gemaakt uit het beeldmerk in `../viewplus-brand/` (beeldmerk paars #7A01B0, woordmerk zwart).
- **Achtergronden** (`bento-bg-*`, `cta-bg`, `hero-kaart-bg`, `pagina-hero-bg`, `uitkomst-bg`): de blauwe versies van reviewplus.io, paars gekleurd.
- **Foto's** (`foto-*.jpg`): tijdelijk dezelfde foto's als reviewplus.io (eigen beelden van de oude site en Unsplash, zie de README van reviewplus-site). **Vervang ze door eigen werk** van klanten met toestemming; zet daarna `portfolio.voorbeeld` op `false`.

## Nog te doen (Jordan)

- E-mailadres kiezen (`brand.email`, nu support@reviewplus.io) en juridische naam invullen.
- Geldt € 75 per week voor alle platformen of per platform? Minimale looptijd of opzegtermijn?
- Eigen verhaal op Over ons, echte social-mediaprofielen, eigen foto's en portfolio.
- Algemene voorwaarden opstellen; privacyverklaring laten controleren (staat als concept).

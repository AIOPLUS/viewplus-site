# Livegang View Plus (www.viewplus.io en shop.viewplus.io)

Eén checklist voor de site en de shop. Nu draaien ze als testversie:
- https://aioplus.github.io/viewplus-site
- https://aioplus.github.io/viewplus-shop

De testversies staan niet in Google: robots.txt blokkeert ze. Op het echte domein gaat dat vanzelf open.

**Wie doet wat:**
- **J** = Jordan. Het gaat om accounts, betalingen, DNS en juridische teksten.
- **C** = Claude, na akkoord van Jordan.

## 1. Vooraf regelen

| # | Wat | Wie |
|---|---|---|
| 1.1 | Mailbox support@viewplus.io actief. Stuur zelf een testmail. | J |
| 1.2 | Echte algemene voorwaarden (site) en verkoopvoorwaarden (shop). Nu staat er "in voorbereiding". In de verkoopvoorwaarden horen:<br>- de pre-order: vooraf betalen, levering zodra de tellers binnen zijn;<br>- annuleren en retour;<br>- de verlenging en opzegging van View Plus Online. | J |
| 1.3 | Smiirl-resellerafspraken rond. Dit moet klaar zijn voordat de shop pre-orders met betaling aanneemt. | J |
| 1.4 | Eigen foto's (met toestemming van klanten) in plaats van de voorbeeldfoto's. Zet daarna `portfolio.voorbeeld` op `false`. | J levert aan, C plaatst |
| 1.5 | Juridische naam en socials in `src/config/brand.ts` (site en shop). | J levert aan, C zet erin |

## 2. Formulieren en betalen (Make)

| # | Wat | Wie |
|---|---|---|
| 2.1 | Make-routes voor View Plus, met `merk: "viewplus"`:<br>- site: contact, nieuwsbrief, sollicitatie en `/aanmelden`;<br>- shop: pre-order met Mollie (eerst in testmodus).<br>Het scenario "Review Plus - Shop aanvragen" is gedeeld: zorg dat niemand anders tegelijk Make wijzigt. | C, na akkoord |
| 2.2 | Mollie laat na betalen terugkeren naar `https://shop.viewplus.io/bedankt`, niet naar de Review Plus-shop. | C |
| 2.3 | Cloudflare Turnstile krijgt de hostnames `www.viewplus.io`, `viewplus.io` en `shop.viewplus.io`. Voor tests ook `aioplus.github.io`. | J |
| 2.4 | GitHub-variabelen in beide repo's: `PUBLIC_LEAD_WEBHOOK_URL` en `PUBLIC_TURNSTILE_SITE_KEY`. | J (of C met de waarden van J) |
| 2.5 | Testen:<br>- een TEST-bestelling in Mollie-testmodus en een TEST-contactformulier, allebei verstuurd door J;<br>- daarna de runs in Make controleren;<br>- tot slot Mollie op live zetten. | J verstuurt, C controleert |

## 3. Domein (GoDaddy, viewplus.io)

| # | Wat | Wie |
|---|---|---|
| 3.1 | Apex `@`: vier A-records naar 185.199.108.153, 185.199.109.153, 185.199.110.153 en 185.199.111.153. | J (of C in het browserpaneel, met akkoord) |
| 3.2 | `www`: CNAME naar `aioplus.github.io`. | idem |
| 3.3 | `shop`: CNAME naar `aioplus.github.io`. | idem |
| 3.4 | Laat MX-, SPF- en DKIM-records voor de mailbox staan; die horen bij 1.1. | J |

## 4. Repo's omzetten

| # | viewplus-site | viewplus-shop |
|---|---|---|
| 4.1 | `public/CNAME` met `www.viewplus.io` | `public/CNAME` met `shop.viewplus.io` |
| 4.2 | Variabelen:<br>- `SITE_URL=https://www.viewplus.io`<br>- `BASE_PATH=/`<br>- `PUBLIC_SHOP_URL=https://shop.viewplus.io` | Variabelen:<br>- `SITE_URL=https://shop.viewplus.io`<br>- `BASE_PATH=/`<br>- `PUBLIC_HOOFDSITE_URL=https://www.viewplus.io` |
| 4.3 | GitHub → Settings → Pages: Custom domain `www.viewplus.io` en daarna Enforce HTTPS. | idem, met `shop.viewplus.io` |

Na een nieuw custom domain kan het HTTPS-certificaat een tijd duren; een nieuwe deploy helpt soms. Controleer met `?v=<n>` tegen de cache.

## 5. Labelwisselaar en vindbaarheid

| # | Wat | Wie |
|---|---|---|
| 5.1 | Zet in `reviewplus-site/src/data/labels.json` bij View Plus `status: "live"`; de URL `https://www.viewplus.io` staat er al. Deploy daarna eerst reviewplus-site, dan de review plus shop, viewplus-site en viewplus-shop, zodat alle wisselaars View Plus klikbaar maken. | C |
| 5.2 | Google Search Console: voeg `viewplus.io` toe (domeinverificatie via een TXT-record bij GoDaddy) en dien deze sitemaps in:<br>- `https://www.viewplus.io/sitemap-index.xml`<br>- `https://shop.viewplus.io/sitemap-index.xml` | J |
| 5.3 | Optioneel: een Umami-ID per site (`PUBLIC_ANALYTICS_PROVIDER=umami` en `PUBLIC_UMAMI_WEBSITE_ID`). | J maakt aan, C zet erin |

## 6. Na de livegang controleren

- **Adressen:** `https://viewplus.io` stuurt door naar `https://www.viewplus.io`, en beide werken met HTTPS.
- **robots.txt:** op www en shop staat `Allow: /` met een sitemap-regel.
- **Links tussen site en shop:** Shop-knop, menu van de shop en Log in.
- **Labelwisselaar:** View Plus is klikbaar op reviewplus.io en in de Review Plus-shop.
- **Lighthouse:** 100 voor toegankelijkheid en SEO op home, `/plans` en de shop-homepage.

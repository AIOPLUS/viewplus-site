# viewplus-site

Site van View Plus, zustermerk van Review Plus. Nog niet live (testversie op https://aioplus.github.io/viewplus-site zodra de repo bestaat). Het algemene overzicht staat in `../CLAUDE.md` en de structuur in `README.md`.

## Uitgangspunt

Review Plus en View Plus moeten aanvoelen als één omgeving waartussen je wisselt van label. Elk label houdt zijn eigen branding en kleuren.

- Houd componenten, typografie en URL's gelijk aan `reviewplus-site`. Wijzig je een gedeeld onderdeel, overweeg het dan in beide repo's.
- `src/components/layout/LabelSwitch.astro` en de `labels` en `gedeeldePaden` in `src/config/brand.ts` zijn in beide repo's gelijk.

## Waar staat wat

- **Teksten, prijzen, portfolio**: `src/config/content.ts`. Alleen feiten uit de brochure (`../viewplus-brand/`); geen verzonnen cijfers.
- **Menu, footer, labels, e-mail**: `src/config/brand.ts`.
- **Kleuren**: `src/styles/tokens.css` (paarse schaal, WCAG AA gecontroleerd).
- **Logo**: beeldmerk paars (#7A01B0), woordmerk "View Plus" zwart, net als bij Review Plus (keuze Jordan, 25-09-2026). Merkbestanden in `public/` zijn daaruit gegenereerd.
- **Illustraties** (telefoon met feed, contentkalender, fotostapel, reacties): `src/components/mockups/`.
- **Formulieren**: payloads met `merk: "viewplus"`. De Make-koppeling volgt later; wacht op Jordan.

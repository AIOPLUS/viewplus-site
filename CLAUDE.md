# viewplus-site

Site van View Plus, live op https://www.viewplus.io (sinds 26-09-2026). De centrale instructies (bedrijf, labels, tools, werkafspraken) staan in de hub `AIOPLUS/claude`: lokaal `../CLAUDE.md`; in een cloud-chat haalt de SessionStart-hook ze op. Dit bestand bevat alleen wat specifiek is voor deze repo; de structuur staat in `README.md` en de livegang in `docs/LIVEGANG.md`.

**Main staat direct live.** Werk op een branch, draai `npm run check`, open een PR en merge pas na een groene check en Jordans akkoord.

## Uitgangspunt

Review Plus en View Plus moeten aanvoelen als één omgeving waartussen je wisselt van label. Elk label houdt zijn eigen branding en kleuren.

- Houd componenten, typografie en URL's gelijk aan `reviewplus-site`. Wijzig je een gedeeld onderdeel, meld het dan zodat het ook in de Review Plus-repo's kan.
- De labelwisselaar (`LabelSwitcher.astro`, `LabelMark.astro`, `src/lib/labels.ts`) is in alle repo's gelijk; de lijst komt uit `reviewplus-site/src/data/labels.json`.

## Waar staat wat

- **Teksten, prijzen, portfolio**: `src/config/content.ts`. Alleen feiten uit de brochure (hub: `merk/`); geen verzonnen cijfers.
- **Menu, footer, e-mail**: `src/config/brand.ts`.
- **Kleuren**: `src/styles/tokens.css` (paarse schaal, WCAG AA gecontroleerd).
- **Logo**: beeldmerk paars (#7A01B0), woordmerk "View Plus" zwart, net als bij Review Plus (keuze Jordan, 25-09-2026). Merkbestanden in `public/` zijn daaruit gegenereerd (bron: hub `merk/viewplus/`).
- **Illustraties** (telefoon met feed, contentkalender, fotostapel, reacties): `src/components/mockups/`.
- **Formulieren**: payloads met `merk: "viewplus"` (contract: `reviewplus-shop/docs/LEAD-PAYLOAD.md`). De GitHub-variabele `PUBLIC_LEAD_WEBHOOK_URL` is nog niet gezet; tot dan verwijzen de formulieren naar het e-mailadres.
- **CI**: `.github/workflows/ci.yml` draait `npm run check` op elke pull request.

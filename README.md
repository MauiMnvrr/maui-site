# maui-site

Site perso de Maui Manavarere : one-page bilingue FR/EN pour recruteurs et prospects.

## Stack

- Next.js 16 (App Router, statique) + React 19 + TypeScript
- Tailwind CSS v4 (thème auto light/dark via `prefers-color-scheme`)
- Motion (`motion/react`) pour les animations, `@phosphor-icons/react` pour les icônes
- Police : Outfit via `next/font/google`

## Commandes

```bash
npm run dev      # serveur de dev sur :3000
npm run build    # build de production (statique)
npm run lint     # eslint
```

## Structure

- `app/layout.tsx` : métadonnées, police, thème
- `app/page.tsx` : rend `components/site.tsx` (arbre client unique)
- `lib/i18n.tsx` : dictionnaires FR/EN complets + `LangProvider` (toggle nav, persistance localStorage, détection navigateur)
- `components/` : une section par fichier (hero, boumrank, projects, experience, skills, education, method, contact) + nav, footer, reveal
- `public/portrait.png` : portrait (copié depuis « Profil pro.png »)
- `public/projects/` : captures réelles de boumrank.com et de la roue (app.boumrank.com)

## Conventions verrouillées

- Accent unique : teal (teal-700 en light, teal-300 en dark). Neutres : zinc.
- Rayons : boutons/pills en `rounded-full`, médias/tuiles en `rounded-2xl`.
- Tiret cadratin interdit dans toute copy (règle également en vigueur côté Boumrank).
- Espaces insécables avant `:` et `?` dans les chaînes françaises.

## À faire avant mise en ligne

- Remplacer `metadataBase` dans `app/layout.tsx` par le domaine final (placeholder actuel : maui-manavarere.vercel.app).
- Choisir le domaine et déployer (Vercel recommandé : `vercel deploy`).
- Le numéro de téléphone du CV n'est volontairement pas publié (anti-spam) ; l'ajouter dans `lib/i18n.tsx` si souhaité.

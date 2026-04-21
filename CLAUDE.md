@AGENTS.md

# La Caz Kréol — Contexte projet

Site vitrine pour une cuisinière proposant des plats réunionnais en livraison et vente à emporter.

---

## Stack
- Next.js 16+ (App Router, `src/` dir)
- TypeScript strict
- Tailwind CSS v4
- shadcn/ui basé sur `@base-ui/react` — **pas de prop `asChild`**, utiliser `buttonVariants` + `<Link>` directement
- Déploiement : Vercel

## Conventions
- Composants : PascalCase dans `src/components/`
- Pages : `src/app/<route>/page.tsx`
- Données statiques : `src/data/`
- Pas de `use client` sauf si nécessaire (formulaire, interactions)
- Imports via alias `@/*`
- Boutons-liens : `<Link className={cn(buttonVariants({...}), "classes")}>` — ne jamais faire `<Button asChild>`

---

## Routes
| Route | Statut | Description |
|---|---|---|
| `/` | ✅ Fait | Homepage : hero, services, menus, cuisinière, avis, footer |
| `/menu` | ⏳ À faire | Menu complet détaillé par catégorie |
| `/commander` | ⏳ À faire | Formulaire de commande avec Resend |

---

## Avancement

### Fait
- [x] Repo GitHub créé et pushé (`fredericVannier/la-caz-creole`)
- [x] Next.js 16 + TypeScript + Tailwind v4 + shadcn/ui initialisé
- [x] `CLAUDE.md` et `AGENTS.md` en place
- [x] `src/data/menu.ts` — données statiques complètes (plats + apéritifs, 2 formules)
- [x] `src/app/layout.tsx` — fonts Fraunces (variable) + Inter Tight, metadata FR
- [x] Palette "Vacoa" appliquée (vert botanique + safran + blanc cassé)
- [x] Composants homepage assemblés et validés :
  - `Navbar` — logo Fraunces, lien Menu, CTA Commander
  - `Hero` — layout asymétrique texte/photo, parallax Framer Motion, image cuisinière
  - `Services` — image carry en fond plein écran, parallax accentué (±25%), blur(5px) + overlay dégradé brun chaud + text-shadow
  - `Menus` — traitement éditorial liste magazine, bg-secondary
  - `Cuisiniere` — photo + parallax, texte + grille détails
  - `Avis` — notes en tirets safran, citations Fraunces
  - `Footer` — fond foreground (vert-vacoa), icônes Lucide stroke
- [x] `src/hooks/useParallax.ts` — hook réutilisable Framer Motion
- [x] `src/components/ParallaxTitle.tsx` — titres de section avec reveal au scroll
- [x] Images intégrées : `public/images/cuisiniere.png` + `public/images/carry.webp`
- [x] Framer Motion installé et utilisé sur Hero, Services, Cuisiniere, titres de section
- [x] Icônes Lucide stroke partout, zéro emoji dans le texte

### À faire
- [ ] Page `/menu` — liste des plats par catégorie avec filtres
- [ ] Page `/commander` — formulaire de commande avec Resend
- [ ] Intégration Resend pour envoi email
- [ ] `.env.local.example` + `vercel.json`
- [ ] Premier déploiement Vercel
- [ ] Liaison repo GitHub → Vercel

---

## Identité visuelle — Palette "Vacoa" (validée)

Direction artistique : **"Authenticité contemporaine"** — univers éditorial culinaire, fuir les clichés créoles (hibiscus, palmiers, rasta). Référence : magazines *Kinfolk*, *Apartamento food*.

Contraintes design validées :
- Pas de marron, pas de gros fonds de couleur pleine
- Pas de formes décoratives (vagues, blobs) — lignes droites ou rien
- Zéro emoji dans le texte — icônes Lucide stroke uniquement
- Boutons `rounded-md`, uppercase Inter Tight, sobre

### Tokens couleurs (oklch Tailwind v4)
```css
--background:           oklch(0.985 0.005 95);   /* blanc cassé chaud */
--foreground:           oklch(0.22 0.025 155);   /* vert-noir profond */
--primary:              oklch(0.42 0.085 155);   /* vert botanique mat */
--primary-foreground:   oklch(0.985 0.005 95);
--secondary:            oklch(0.96 0.012 90);    /* crème, presque blanc */
--muted:                oklch(0.955 0.008 95);   /* gris chaud très clair */
--muted-foreground:     oklch(0.48 0.015 145);
--accent:               oklch(0.72 0.18 55);     /* safran — accent ponctuel (prix, hover) */
--border:               oklch(0.91 0.008 95);
```

### Typographie
- **Fraunces** (Google Fonts, serif variable, axes `opsz SOFT WONK`) — titres, moments éditoriaux, italique sur mots-clés
- **Inter Tight** (Google Fonts, 400/500/600) — corps, UI, boutons uppercase

### Parallax (Framer Motion)
- `src/hooks/useParallax.ts` — hook générique réutilisable
- `src/components/ParallaxTitle.tsx` — reveal au scroll (`y: 32px→0`, opacity 0→1)
- Hero : texte `y: 0→-40px` + opacity fade, photo `y: 0→+80px` scale 1.12
- Services : image fond plein écran `y: -25%→+25%` scale 1.6, `blur(5px)`, overlay dégradé brun chaud vertical, `text-shadow`
- Cuisiniere : photo `y: ±40px` scale 1.1

### Images
- `public/images/cuisiniere.png` — portrait cuisinière (hero + section cuisinière)
- `public/images/carry.webp` — carry poulet (fond section services)

---

## Données menu
- Fichier source : `src/data/menu.ts`
- Deux catégories : plats principaux + apéritifs/petits fours
- Deux formules : "Menu du mois" (fixe) + "Menu à la demande"

---

## Formulaire de commande (`/commander`)
- Envoi par email via **Resend** (API Route Next.js)
- Champs : nom, téléphone, email, date souhaitée, sélection plats + quantités
- Section optionnelle : demandes spéciales / plats non listés
- Variable d'env : `RESEND_API_KEY`, `NEXT_PUBLIC_CONTACT_EMAIL`

---

## MCP disponibles
- `sequential-thinking` : pour décomposer les tâches complexes
- `Atlassian Rovo` : Jira/Confluence si besoin
- `Gmail` : envoi/lecture emails si besoin

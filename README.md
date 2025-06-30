# D-LOU Legal Consulting

## 📋 Description

D-LOU Legal Consulting est un site web professionnel dédié à l'accompagnement juridique des investisseurs étrangers, en particulier les Sénégalais de la diaspora, dans leurs projets d'investissement et d'installation au Sénégal.

## 🎯 Objectif

Offrir un accompagnement personnalisé et multidimensionnel pour sécuriser et faciliter chaque étape des projets d'investissement au Sénégal, avec des solutions juridiques claires, efficaces et sur mesure.

## 🛠️ Technologies Utilisées

- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Cabin)
- **Runtime**: React 19

## 📦 Dépendances Principales

```json
{
  "@radix-ui/react-navigation-menu": "^1.2.13",
  "@radix-ui/react-slot": "^1.2.3",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.525.0",
  "next": "15.3.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwind-merge": "^3.3.1"
}
```

## 🏗️ Structure du Projet

```
d-lou/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About.tsx          # Section À propos
│   │   ├── Footer.tsx         # Pied de page
│   │   ├── Header.tsx         # En-tête et navigation
│   │   ├── Hero.tsx           # Section héro principale
│   │   ├── LegalHero.tsx      # Section héro juridique
│   │   ├── Process.tsx        # Processus de conseil
│   │   ├── Services.tsx       # Services offerts
│   │   ├── Testimonials.tsx   # Témoignages clients
│   │   └── ui/                # Composants UI réutilisables
│   └── lib/
│       └── utils.ts           # Utilitaires
├── public/                    # Assets statiques
├── package.json
└── README.md
```

## 🎨 Sections du Site

### 1. **Header**
- Logo D-LOU avec navigation
- Menu principal (Accueil, À Propos, Nos services)
- Bouton de contact

### 2. **Hero Section**
- Message principal d'accueil
- Présentation de la mission
- Boutons d'action (En savoir plus, Contactez-nous)

### 3. **Services**
- **Droit des Affaires**: Accompagnement juridique pour projets d'entreprise
- **Gestion des Litiges**: Résolution de conflits juridiques
- **Transactions Immobilières**: Expertise en immobilier

### 4. **À Propos**
- Avantages de choisir D-LOU
- Expertise locale
- Accompagnement personnalisé
- Réseau professionnel

### 5. **Processus**
- Consultation initiale
- Solutions sur mesure
- Suivi et accompagnement

### 6. **Témoignages**
- Retours d'expérience clients
- Preuves de satisfaction

### 7. **Legal Hero**
- Appel à l'action pour conseils juridiques
- Section de contact

### 8. **Footer**
- Informations de contact
- Liens utiles

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd d-lou

# Installer les dépendances
npm install
# ou
yarn install
```

### Démarrage en mode développement

```bash
# Démarrer le serveur de développement avec Turbopack
npm run dev
# ou
yarn dev
```

Le site sera accessible à l'adresse: `http://localhost:3000`

### Build de production

```bash
# Construire l'application
npm run build

# Démarrer en mode production
npm run start
```

## 🎨 Design System

### Couleurs Principales
- **Vert principal**: `#04692F`
- **Texte principal**: `#1E1E1E`
- **Blanc**: `#FFFFFF`
- **Gris**: `#CCCCCC`

### Typographie
- **Titres**: Poppins (300, 400, 500, 600, 700, 800)
- **Corps de texte**: Cabin (400, 500, 600, 700)

### Composants UI
- Utilisation de Radix UI pour l'accessibilité
- Composants personnalisés avec Tailwind CSS
- Design responsive et moderne

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour:
- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🔧 Scripts Disponibles

```bash
npm run dev      # Développement avec Turbopack
npm run build    # Build de production
npm run start    # Démarrage en production
npm run lint     # Vérification ESLint
```

## 🌟 Fonctionnalités

- ✅ Design moderne et professionnel
- ✅ Navigation fluide
- ✅ Animations CSS
- ✅ Images optimisées (Unsplash)
- ✅ SEO optimisé
- ✅ Performance optimisée avec Next.js
- ✅ TypeScript pour la sécurité du code
- ✅ Composants réutilisables

## 🎯 Public Cible

- Investisseurs étrangers
- Sénégalais de la diaspora
- Entrepreneurs souhaitant s'installer au Sénégal
- Entreprises nécessitant un accompagnement juridique

## 📞 Contact

Pour plus d'informations sur D-LOU Legal Consulting, utilisez les boutons de contact présents sur le site.

## 📄 Licence

Ce projet est privé et propriétaire de D-LOU Legal Consulting.

---

**D-LOU Legal Consulting** - Votre partenaire pour investir et s'installer au Sénégal 🇸🇳

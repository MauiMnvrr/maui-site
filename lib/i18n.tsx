"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";

const fr = {
  nav: {
    boumrank: "Boumrank",
    projects: "Projets",
    experience: "Parcours",
    contact: "Contact",
    langLabel: "Langue",
  },
  hero: {
    title1: "Je conçois la stratégie.",
    title2: "Je code l'outil.",
    sub: "SEO, acquisition, data et IA. Marketeur formé à KEDGE, je développe moi-même les produits que j'imagine. Basé à Marseille.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Contact",
    portraitAlt: "Portrait de Maui Manavarere",
  },
  boumrank: {
    title: "Boumrank : conçu, codé, déployé.",
    lead: "Un QR code en boutique, un mini-jeu, une récompense : Boumrank transforme le passage en caisse en avis Google et en clients fidèles.",
    role: "J'ai conçu et développé l'intégralité du produit : parcours de jeu, logique utilisateur, automatisations. Il tourne aujourd'hui chez plusieurs commerçants marseillais.",
    facts: [
      {
        title: "Statut national d'étudiant-entrepreneur",
        desc: "Projet reconnu via le dispositif Pépite France.",
      },
      {
        title: "Incubé à Pépite Provence",
        desc: "Accompagné au sein d'Aix-Marseille Université.",
      },
      {
        title: "En production",
        desc: "Utilisé en boutique, en conditions réelles, tous les jours.",
      },
    ],
    link: "Visiter boumrank.com",
    altHome: "Page d'accueil du site boumrank.com",
    altWheel: "Roue de la chance Boumrank sur mobile",
  },
  projects: {
    title: "Autres projets",
    visit: "Voir le site",
    featured: [
      {
        name: "Tahiti Smoothies",
        desc: "Site vitrine d'une enseigne de smoothies en Polynésie, conçu en appui du lancement d'un second point de vente.",
        tech: "React, Vite",
        url: "https://www.tahitismoothies.pf/",
        image: "/projects/tahiti-smoothies.jpg",
        alt: "Page d'accueil du site Tahiti Smoothies",
      },
      {
        name: "Bored Lama Yacht Club",
        desc: "Landing et mint d'une collection NFT de 10 000 lamas sur un thème Machu Picchu, avec connexion wallet.",
        tech: "Next.js, Web3",
        url: "https://boredlamayachtclub.vercel.app/",
        image: "/projects/bored-lama.jpg",
        alt: "Page d'accueil du site Bored Lama Yacht Club",
      },
    ],
    more: [
      {
        name: "Réponses IA aux avis Google",
        desc: "SaaS qui rédige et publie des réponses aux avis Google des PME locales. En développement.",
        tech: "React, Supabase, Claude",
      },
      {
        name: "Murmure",
        desc: "App macOS de dictée vocale : transcription locale, insertion du texte dans n'importe quelle app.",
        tech: "Swift",
      },
    ],
  },
  experience: {
    title: "Parcours",
    entries: [
      {
        dates: "Oct. 2025 - aujourd'hui",
        role: "Concepteur & développeur produit",
        org: "Boumrank, Marseille",
        desc: "SaaS de gamification pour commerçants locaux, du concept au déploiement.",
      },
      {
        dates: "Avr. 2024 - Déc. 2025",
        role: "Responsable marketing digital",
        org: "Kodibuild, Marseille",
        desc: "Stratégie SEO, SEA, réseaux sociaux et contenu pour un SaaS du BTP.",
      },
      {
        dates: "Janv. - Juil. 2025",
        role: "Chef de projet, stage",
        org: "B One Consulting, Indonésie",
        desc: "Conception de solutions sur mesure avec développeurs et designers, suivi client en agile.",
      },
      {
        dates: "Mai - Déc. 2024",
        role: "Responsable de développement",
        org: "Tahiti Smoothies, Polynésie française",
        desc: "Site web, ouverture d'un second point de vente et image de marque.",
      },
      {
        dates: "Juin 2020 - Août 2021",
        role: "Chef de projet numérique",
        org: "Pitaya, Papeete",
        desc: "Campagnes digitales et partenariat stratégique avec une compagnie aérienne.",
      },
    ],
  },
  skills: {
    title: "Compétences",
    groups: [
      {
        name: "Acquisition & growth",
        items: [
          "SEO",
          "SEA / Google Ads",
          "Meta Ads",
          "Content marketing",
          "Brand management",
        ],
      },
      {
        name: "Data & analytics",
        items: [
          "Google Analytics",
          "Web analytics",
          "UX & ergonomie",
          "CRM HubSpot",
        ],
      },
      {
        name: "Développement produit",
        items: ["React", "TypeScript", "Supabase", "WordPress", "HTML / CSS / JS"],
      },
      {
        name: "IA & automatisation",
        items: [
          "API Claude",
          "Agents & MCP",
          "Prompt engineering",
          "Automatisations",
        ],
      },
    ],
  },
  education: {
    title: "Formation",
    degrees: [
      {
        degree: "MSc Digital Marketing & Sales",
        school: "KEDGE Business School, Marseille",
        years: "2023 - 2025",
      },
      {
        degree: "Bachelor of Commerce, Finance",
        school: "Université Concordia, Montréal",
        years: "2019 - 2023",
      },
    ],
    certsTitle: "Certifications",
    certs: [
      "Google Ads",
      "HubSpot Reporting",
      "SEO & HTML/CSS, OpenClassrooms",
      "IA & Prompt Engineering, Anthropic",
    ],
    langsTitle: "Langues",
    langs: ["Français, langue maternelle", "Anglais, professionnel (C1)"],
  },
  method: {
    title: "Ma méthode",
    items: [
      {
        title: "La stratégie d'abord",
        desc: "Chaque projet part d'un objectif business clair, pas d'une maquette.",
      },
      {
        title: "L'exécution en code",
        desc: "Je développe moi-même : rien ne se perd entre l'idée et le produit.",
      },
      {
        title: "La mesure ensuite",
        desc: "Analytics et SEO guident chaque itération après la mise en ligne.",
      },
    ],
  },
  contact: {
    title: "Un poste, une mission, un projet ?",
    sub: "Parlons-en. Réponse rapide, en français ou en anglais.",
    linkedin: "LinkedIn",
  },
  footer: {
    made: "Conçu et codé par mes soins.",
    location: "Marseille, France",
  },
};

const en: typeof fr = {
  nav: {
    boumrank: "Boumrank",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    langLabel: "Language",
  },
  hero: {
    title1: "I design the strategy.",
    title2: "I build the tool.",
    sub: "SEO, acquisition, data and AI. A KEDGE-trained marketer, I build my own products, end to end. Based in Marseille, France.",
    ctaProjects: "View my projects",
    ctaContact: "Contact",
    portraitAlt: "Portrait of Maui Manavarere",
  },
  boumrank: {
    title: "Boumrank: designed, built, shipped.",
    lead: "A QR code at the counter, a mini-game, a reward: Boumrank turns checkout moments into Google reviews and repeat customers.",
    role: "I designed and built the entire product: game flows, user logic, automations. It now runs in several shops across Marseille.",
    facts: [
      {
        title: "National Student-Entrepreneur Status",
        desc: "Recognized through France's Pépite program.",
      },
      {
        title: "Incubated at Pépite Provence",
        desc: "Supported within Aix-Marseille University.",
      },
      {
        title: "In production",
        desc: "Used in real shops, in real conditions, every day.",
      },
    ],
    link: "Visit boumrank.com",
    altHome: "Homepage of boumrank.com",
    altWheel: "Boumrank prize wheel on mobile",
  },
  projects: {
    title: "Other projects",
    visit: "Visit site",
    featured: [
      {
        name: "Tahiti Smoothies",
        desc: "Storefront site for a French Polynesian smoothie brand, built to support the launch of a second location.",
        tech: "React, Vite",
        url: "https://www.tahitismoothies.pf/",
        image: "/projects/tahiti-smoothies.jpg",
        alt: "Tahiti Smoothies website home page",
      },
      {
        name: "Bored Lama Yacht Club",
        desc: "Landing and mint page for a 10,000-piece NFT collection on a Machu Picchu theme, with wallet connect.",
        tech: "Next.js, Web3",
        url: "https://boredlamayachtclub.vercel.app/",
        image: "/projects/bored-lama.jpg",
        alt: "Bored Lama Yacht Club website home page",
      },
    ],
    more: [
      {
        name: "AI replies to Google reviews",
        desc: "SaaS that drafts and publishes replies to local businesses' Google reviews. In development.",
        tech: "React, Supabase, Claude",
      },
      {
        name: "Murmure",
        desc: "macOS dictation app: local transcription that types into any application.",
        tech: "Swift",
      },
    ],
  },
  experience: {
    title: "Experience",
    entries: [
      {
        dates: "Oct. 2025 - present",
        role: "Product designer & developer",
        org: "Boumrank, Marseille",
        desc: "Gamification SaaS for local merchants, from concept to deployment.",
      },
      {
        dates: "Apr. 2024 - Dec. 2025",
        role: "Digital marketing manager",
        org: "Kodibuild, Marseille",
        desc: "SEO, paid search, social and content strategy for a construction SaaS.",
      },
      {
        dates: "Jan. - Jul. 2025",
        role: "Project manager, internship",
        org: "B One Consulting, Indonesia",
        desc: "Custom solution design with developers and designers, agile client delivery.",
      },
      {
        dates: "May - Dec. 2024",
        role: "Business development manager",
        org: "Tahiti Smoothies, French Polynesia",
        desc: "Website, second location opening and brand building.",
      },
      {
        dates: "Jun. 2020 - Aug. 2021",
        role: "Digital project manager",
        org: "Pitaya, Papeete",
        desc: "Digital campaigns and a strategic partnership with an airline.",
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      {
        name: "Acquisition & growth",
        items: [
          "SEO",
          "SEA / Google Ads",
          "Meta Ads",
          "Content marketing",
          "Brand management",
        ],
      },
      {
        name: "Data & analytics",
        items: [
          "Google Analytics",
          "Web analytics",
          "UX & usability",
          "HubSpot CRM",
        ],
      },
      {
        name: "Product development",
        items: ["React", "TypeScript", "Supabase", "WordPress", "HTML / CSS / JS"],
      },
      {
        name: "AI & automation",
        items: [
          "Claude API",
          "Agents & MCP",
          "Prompt engineering",
          "Automations",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    degrees: [
      {
        degree: "MSc Digital Marketing & Sales",
        school: "KEDGE Business School, Marseille",
        years: "2023 - 2025",
      },
      {
        degree: "Bachelor of Commerce, Finance",
        school: "Concordia University, Montreal",
        years: "2019 - 2023",
      },
    ],
    certsTitle: "Certifications",
    certs: [
      "Google Ads",
      "HubSpot Reporting",
      "SEO & HTML/CSS, OpenClassrooms",
      "AI & Prompt Engineering, Anthropic",
    ],
    langsTitle: "Languages",
    langs: ["French, native", "English, professional (C1)"],
  },
  method: {
    title: "How I work",
    items: [
      {
        title: "Strategy first",
        desc: "Every project starts from a clear business goal, not a mockup.",
      },
      {
        title: "Execution in code",
        desc: "I build it myself: nothing gets lost between the idea and the product.",
      },
      {
        title: "Then measurement",
        desc: "Analytics and SEO drive every iteration after launch.",
      },
    ],
  },
  contact: {
    title: "A role, a contract, a project?",
    sub: "Let's talk. Quick reply, in French or English.",
    linkedin: "LinkedIn",
  },
  footer: {
    made: "Designed and coded by me.",
    location: "Marseille, France",
  },
};

export type Dict = typeof fr;

export const dictionaries: Record<Lang, Dict> = { fr, en };

export const EMAIL = "mauimanavarere@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/mauimanavarere";
export const BOUMRANK_URL = "https://boumrank.com";

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
} | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    // Lecture client-only (localStorage / navigator) : le premier rendu sert "fr"
    // côté serveur et client, puis on aligne sur la préférence réelle après montage.
    const stored = window.localStorage.getItem("lang");
    if (stored === "fr" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
    } else if (!navigator.language.toLowerCase().startsWith("fr")) {
      setLangState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("lang", next);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

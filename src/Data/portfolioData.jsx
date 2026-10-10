import { assets } from "../assets/assets";

export const portfolioProjects = [
  // NOVAGRAPH
  {
    slug: "novagraph",

    title: "NovaGraph",

    heroBackground: assets.Portfolio_bg,

    projectInfo: [
      { title: "Client", value: "Steve John" },
      { title: "Company", value: "NovaGraph" },
      { title: "Category", value: "SaaS Platform" },
      { title: "Timeline", value: "2 Months" },
      { title: "Tools", value: "Figma" },
    ],
    
    styleGuide: [
      "Ellipy’s design follows a clean, modern, and user-friendly aesthetic, with a focus on dark mode for a sleek and professional feel.",
      "The primary color palette includes shades of green for financial growth and positivity, yellow for highlights and warnings, and pink for accents and calls to action."
    ],

    images: {
      main: assets.Portfolio_Nova4,
      problems: assets.Portfolio_Nova3,
      styleGuide: assets.Portfolio_Nova2,
      features: assets.Portfolio_Nova1,
      desktop1: assets.Portfolio_Nova_Des1,
      desktop2: assets.Portfolio_Nova_Des2,
    },

    description: [
      "NovaGraph It allows users to track expenses, set budgets, monitor financial goals, and make secure transactions, all from a single, user-friendly platform.",
      "The app integrates with bank accounts, credit cards, and other financial tools, providing a centralized view of the user's economic health."
    ],

    problems: [
      "Many people struggle with managing their finances due to.",
      "Lack of a centralized platform to track expenses and income.",
      "Poor visibility into spending patterns and budgeting goals.",
      "The overwhelming complexity of existing finance apps.",
      "Security concerns when connecting financial accounts."
    ],

    solutions: [
      "Seamless Integration – Connect bank accounts, credit cards, and payment platforms easily.",
      "Intuitive Expense Tracking – Automatically categorize expenses and visualize spending.",
      "Smart Budgeting – Set and adjust budgets based on spending patterns.",
      "Goal-Oriented Approach – Set savings goals and track progress.",
      "Security First – End-to-end encryption and secure login methods (biometrics, 2FA)."
    ],

    features: [
      " Dashboard: Centralized view of finances.",
      "Transaction Tracking: Automatic categorization and manual adjustments.",
      "Budgeting: Create custom budgets and receive notifications when nearing limits.",
      "Reports: Monthly and yearly spending insights.",
      "Savings Goals: Set, track, and adjust financial goals.",
      "Secure Payments: Peer-to-peer and merchant payments."
    ]
  },
  // MOOD-AI
  {
    slug: "mood_ai",

    title: "Mood-AI",

    heroBackground: assets.Portfolio_bg,

    projectInfo: [
      { title: "Client", value: "Triple Jis" },
      { title: "Company", value: "MoodAI" },
      { title: "Category", value: "HealthCare & AI" },
      { title: "Timeline", value: "2 Months" },
      { title: "Tools", value: "Figma" },
    ],
    
    styleGuide: [
      "The palette is soft and grounded, muted purples, warm neutrals, and gentle gradients that signal calm without feeling passive. Color shifts subtly across mood states to reinforce emotional context.",
      "Typography is rounded and approachable, with generous line heights and soft weight contrast between headings and body. Nothing feels sharp or clinical.",
    ],

    images: {
      main: assets.portfolio_moodai1,
      problems: assets.portfolio_moodai2,
      styleGuide: assets.portfolio_moodai3,
      features: assets.portfolio_moodai4,
      desktop1: assets.portfolio_moodai_des1,
      desktop2: assets.portfolio_moodai_des2,
    },

    description: [
      "MoodAI is an AI-powered mobile app designed to help users track, understand, and improve their emotional well-being. It turns daily mood inputs into meaningful patterns,  giving users a clearer picture of how they feel and why.",
      "AI sits quietly in the background; analyzing, learning, and surfacing insights without ever feeling intrusive or overwhelming.."
    ],
    
    problems: [
      " Users had no reliable way to track emotional patterns over time",
      "Existing wellness apps felt generic — no personalization based on individual behavior",
      "AI-driven features were either hidden or too complex to engage with",
      "Check-in flows were lengthy, causing users to abandon before completing",
      "Insights were data-heavy and failed to translate into actionable guidance"
    ],
   
    solutions: [
      "Designed a daily mood logging system with minimal input required",
      "Built a personalization layer that adapts recommendations to individual mood history.",
      "Surfaced AI insights progressively — simple first, deeper on demand",
      "Reduced check-in flow to under 60 seconds with gesture-based interactions",
      "Translated mood data into plain-language insights with clear next steps"
    ],

    features: [
      " AI-powered mood pattern detection built from daily user inputs.",
      "Personalized recommendations that evolve with the user's emotional history.",
      "60-second check-in flow with gesture-based interaction design.",
      "Progressive insight disclosure, surface-level summaries with deeper drill-down available",
      "Mood-responsive UI that shifts visual tone based on the user's current emotional state.",
    ]
  },
  //  COMP-HEALTH
  {
    slug: "Comp-Health",

    title: "CompHealth",

    heroBackground: assets.Portfolio_bg,

    projectInfo: [
      { title: "Client", value: "Maria Tedi" },
      { title: "Company", value: "CompHealth" },
      { title: "Category", value: "HealthCare" },
      { title: "Timeline", value: "2 Months" },
      { title: "Tools", value: "Figma" },
    ],
    
    styleGuide: [
      " The palette draws from clinical blue tones, reliability and credibility, offset by white space that lets content breathe. Accents are used only to direct attention toward actionable elements.",
      "Typography follows a strict modular scale with clear weight differentiation between headings and body copy. Line heights are generous — readability over compactness, always."
    ],

    images: {
      main: assets.Portfolio_health1,
      problems: assets.Portfolio_health2,
      styleGuide: assets.Portfolio_health3,
      features: assets.Portfolio_health4,
      desktop1: assets.Portfolio_health_des1,
      desktop2: assets.Portfolio_health_des2,
    },

    description: [
      " CompHealth is a healthcare staffing platform built to connect medical professionals with the right job opportunities; fast, clearly, and without friction. ",
      "The landing page design was approached as a conversion system, not just a visual layout. Every element, from the hero section to the CTA placements."
    ],
   
    problems: [
      "Fragmented interfaces with no role-specific filtering",
      "Critical info buried behind multiple interaction layers",
      "Trust signals absent at high drop-off points",
      "Poor mobile experience for on-the-go professionals",
      "Navigation required self-orientation instead of guided flow"
    ],

    solutions: [
      "Role-first search architecture surfaced immediately on landing",
      "Specialty, location, and contract type visible without secondary navigation",
      "Trust indicators placed at key exit points across the page",
      "Mobile-first layout with touch-optimized interaction targets",
      "Navigation mapped to actual user decision patterns"
    ],

    features: [
      "Role-first search with specialty and location filters at the top of the hierarchy",
      "Trust signals — stats, credentials, testimonials, at strategic scroll depths",
      "Mobile-first responsive layout built for touch and on-the-go use",
      "Conversion-mapped CTAs that reduce steps between discovery and application",
      "WCAG-compliant design system with scalable type and keyboard navigation",
    ]
  },
  //  PROP-VISTA
  {
    slug: "Prop-Vista",

    title: "PropVista",

    heroBackground: assets.Portfolio_bg,
    projectInfo: [
      { title: "Client", value: "Jerry" },
      { title: "Company", value: "Propvista" },
      { title: "Category", value: "Real Estate" },
      { title: "Timeline", value: "2 Months" },
      { title: "Tools", value: "Figma" },
    ],
    
    styleGuide: [
      "The palette is refined and authoritative; deep neutrals, warm whites, and premium accent tones that communicate property value without feeling flashy. Every color choice reinforces credibility.",
      "Typography is clean and structured, with strong weight contrast between headings and supporting copy. The type system signals professionalism at first glance."
    ],

    images: {
      main: assets.Portfolio_propvista1,
      problems: assets.Portfolio_propvista2,
      // styleGuide: assets,
      features: assets.Portfolio_propvista3,
      desktop1: assets.Portfolio_propvista_des,
      desktop2: assets.Portfolio_propvista_des2,
    },

    description: [
      "Provista is a modern real estate landing page designed to make property browsing feel effortless and conversion-ready. The project focused on building a visual hierarchy that guides users from discovery to inquiry without friction.",
      "The result is a professional, engagement-driven UI tailored for modern real estate platforms; precise in structure, strong in presence."
    ],
    
    problems: [
      "Real estate platforms overwhelmed users with listings before establishing trust or context",
      "Property details were poorly organized, forcing users to hunt for critical information",
      "Visual hierarchy was weak, everything competed for attention equally",
      "Navigation lacked logical flow from browsing to inquiry or booking",
      "Conversion points were buried or inconsistently placed across the page "
    ],

    solutions: [
      "Designed a trust-first entry sequence before surfacing property listings",
      "Structured property detail layout with clear information priority and scannable hierarchy",
      "Applied strict typographic and spatial hierarchy to guide visual attention deliberately",
      "Built a navigation flow that moves users naturally from browse to inquiry",
      "Placed conversion CTAs at high-intent moments mapped to the user decision journey"
    ],
    
    features: [
      "Trust-first page architecture that builds credibility before presenting listings",
      "Scannable property detail layout with deliberate information hierarchy",
      "Conversion-mapped CTA placement aligned to user decision moments",
      "Clean, photography-forward UI that frames listings without visual interference",
      "Intuitive navigation flow structured from property discovery through to inquiry",
    ]
  },
  //  ANTIQO
  {
    slug: "Antiqo",

    title: "Antiqo",

    heroBackground: assets.Portfolio_bg,

    projectInfo: [
      { title: "Client", value: "Mahmood" },
      { title: "Company", value: "Antiqo" },
      { title: "Category", value: "E-Commerce" },
      { title: "Timeline", value: "2 Months" },
      { title: "Tools", value: "Figma" },
    ],
    
    styleGuide: [
      "The palette draws from aged warmth — earthy tones, warm creams, and muted golds that echo the character of vintage goods without feeling dated. Every color.",
      "Typography is elegant and considered, blending serif display headings with clean sans-serif body copy. The contrast between old and modern communicates Antiqo's core positioning."
    ],


    images: {
      main: assets.portfolio_antiqo1,
      problems: assets.portfolio_antiqo2,
      styleGuide: assets.portfolio_antiqo3,
      features: assets.portfolio_antiqo4,
      desktop1: assets.portfolio_antiqo_des1,
      desktop2: assets.portfolio_antiqo_des12,
    },

    description: [
      "   Antiqo is a modern mobile marketplace built for discovering and purchasing unique antiques and vintage collectibles. The project focused on translating the tactile, trust-driven nature of antique shopping into a seamless digital experience.",
      "The result is an intuitive, trust-forward marketplace that respects the uniqueness of every listing and guides users from discovery to secure purchase without friction."
    ],
 
    problems: [
      "Existing antique platforms felt generic, no design language reflecting the nature of vintage goods",
      "Product discovery lacked curation, surfacing irrelevant listings alongside high-value finds",
      "Trust signals were absent, making users hesitant before committing to a purchase",
      "Browsing and purchasing lived in disconnected flows with no continuity"
    ],

    solutions: [
      "Designed a visual language rooted in warmth and authenticity to reflect the antique category",
      "Built a curated discovery system with category-first filtering and condition-based sorting",
      "Integrated trust signals, seller credentials, item provenance, and buyer reviews",
      "Unified browsing and purchasing into a single continuous mobile flow"
    ],

    features: [
      "Curated discovery system with category-first filtering and condition-based sorting",
      "Trust architecture, seller credentials, provenance details, and buyer reviews at purchase decision points",
      "Unified browse-to-purchase flow built as a single continuous mobile journey",
      "Thumb-first mobile layout with touch-optimized components and gesture navigation"
    ]
    
  },
  //   EON-NIGHT
  {
    slug: "EON-Night",

    title: "EON Night",

    heroBackground: assets.Portfolio_bg,

    projectInfo: [
      { title: "Client", value: "Nicole R" },
      { title: "Company", value: "Eon Night" },
      { title: "Category", value: "Event" },
      { title: "Timeline", value: "2 Months" },
      { title: "Tools", value: "Figma" },
    ],
    
    styleGuide: [
      "The palette is dark and electric; deep blacks, intense neons, and high-contrast accents that pulse with energy. Color is used to create atmosphere, not organize information.",
      "Typography is bold and unapologetic, heavy display fonts with tight tracking and aggressive scale contrast. Every heading commands attention before anything else on the page does."
    ],

    images: {
      main: assets.Portfolio_EonNite_1,
      problems: assets.Portfolio_EonNite_2,
      styleGuide: assets.Portfolio_EonNite_3,
      features: assets.Portfolio_EonNite_4,
      desktop1: assets.Portfolio_EonNite_des1,
      desktop2: assets.Portfolio_EonNite_des2,
    },

    description: [
      "   Eon Night is a bold, immersive website built to showcase high-energy nightlife events and capture the culture surrounding them. The project focused on translating.",
      "The result is a platform that feels like the event itself; electric, exclusive, and impossible to ignore."
    ],
 
    problems: [
      "Event discovery was flat and list-based, stripping context and excitement from the experience",
      "Navigation interruptions broke immersion, pulling users out of the brand world",
      "Dynamic content; lineups, visuals, countdowns, was treated as secondary rather than central",
      "Mobile experience failed to translate the energy of the desktop design",
    ],
    
    solutions: [
      "Designed an immersive event discovery flow with full-bleed visuals",
      "Kept navigation minimal and overlay-based to preserve immersion throughout the experience",
      "Elevated dynamic content, lineups, countdowns, and visuals, to primary hierarchy across all sections",
      "Designed mobile-first with full-bleed layouts and gesture interactions that carry.",
    ],
  
    features: [
      "Dark, high-contrast visual system built to communicate exclusivity and atmosphere immediately",
      "Immersive event discovery with full-bleed visuals and dynamic atmospheric context",
      "Overlay-based navigation that maintains immersion without breaking the brand experience",
      "Dynamic content hierarchy; lineups, countdowns, and visuals treated.",
    ]
  },
  // TRAVIOS
  {
    slug: "Travios",

    title: "Travios",

    heroBackground: assets.Portfolio_bg,

    projectInfo: [
      { title: "Client", value: "Robert Tim" },
      { title: "Company", value: "Travious" },
      { title: "Category", value: "Travel" },
      { title: "Timeline", value: "2 Months" },
      { title: "Tools", value: "Figma" },
    ],
    
    styleGuide: [
      "The palette is clean and aspirational, warm whites, soft neutrals, and vivid accent tones drawn from travel photography. Color is used to evoke destination, not decorate interface.",
      "Typography is modern and open, with wide tracking on headings and comfortable line heights on body copy. The type system creates energy without sacrificing readability."
    ],
    
    images: {
      main: assets.Portfolio_travios1,
      problems: assets.Portfolio_travios2,
      styleGuide: assets.Portfolio_travios3,
      features: assets.Portfolio_travios4,
      desktop1: assets.Portfolio_travios_des1,
      desktop2: assets.Portfolio_travios_des2,
    },

    description: [
      "Travios is a modern travel website designed to simplify discovery, booking, and trip planning into one seamless experience. The project focused on eliminating.",
      "The result is a minimal, engagement-driven design system that makes the journey from inspiration to booking feel effortless."
    ],
    
    problems: [
      "Travel platforms overwhelmed users with information before establishing destination intent",
      "Discovery, booking, and planning lived in separate flows with no continuity",
      "UI was visually cluttered, competing with the content users actually cared about",
      "Navigation didn't reflect the natural progression of a traveler's decision process",
      "No consistent design language, pages felt disconnected from each other"
    ],
    
    solutions: [
      "Designed a destination-first entry flow that anchors users before surfacing details",
      "Unified discovery, booking, and planning into a single continuous user journey",
      "Applied a minimal UI approach, content leads, chrome stays invisible",
      "Restructured navigation to mirror the natural traveler decision sequence",
      "Built a consistent design system with shared tokens across all page templates"
    ],
    
    features: [
      "Destination-first search flow that establishes intent before surfacing options",
      "Unified trip planning system combining discovery, booking, and itinerary in one flow",
      "Minimal UI framework that keeps content central and interface invisible",
      "Consistent design system with reusable components across all page types",
      "Navigation architecture mapped to the natural traveler decision sequenc",
    ]
    
  }
//     ADYNRA - AI
   ,{
    slug: "Adynra-AI",

    title: "Adynra AI",

    heroBackground: assets.Portfolio_bg,

    projectInfo: [
      { title: "Client", value: "Jamal A" },
      { title: "Company", value: "Adynra AI" },
      { title: "Category", value: "SaaS Platform" },
      { title: "Timeline", value: "2 Months" },
      { title: "Tools", value: "Figma" },
    ],
    
    styleGuide: [
      "The palette is dark and high-contrast, deep backgrounds with vivid accent tones that signal energy, speed, and creative power. Color is used to direct focus, not decorate surface.",
      "Typography is bold and modern, with tight tracking on headings and sharp weight contrast throughout. The type system communicates confidence and technical precision"
    ],
  


    images: {
      main: assets.Portfolio_Adynra1,
      problems: assets.Portfolio_Adynra2,
      styleGuide: assets.Portfolio_Adynra3,
      features: assets.Portfolio_Adynra4,
      desktop1: assets.Portfolio_Adynra_des1,
      desktop2: assets.Portfolio_Adynra1_des2,
    },

    description: [
      "Adynra is an AI-powered platform designed to help marketers and creators produce high-impact video ads without the complexity of traditional tools. The project focused on making powerful AI automation feel simple and immediately usable.",
      "The result is a UI that makes AI feel like a collaborator, not a barrier; fast, intuitive, and built for creative output at scale."
    ],
   
    problems: [
      "AI-powered tools felt technically intimidating, creating friction before users.",
      "Video ad creation workflows had too many steps with no clear progression",
      "Automation features were buried, requiring users to manually handle what AI should handle",
      "The interface didn't distinguish between beginner and power-user needs",
      "Creative output felt disconnected from the inputs, no real-time feedback."
    ],
  
    solutions: [
      "Designed an onboarding flow that makes AI capabilities immediately accessible",
      "Compressed the creation workflow into a linear, step-by-step progression with clear milestones",
      "Surfaced automation at every relevant touchpoint; defaults are smart, overrides are optional",
      "Integrated real-time preview feedback so users see output evolve as they build",
    ],

    features: [
      "Simplified AI-powered creation flow compressed into a clear, linear step-by-step progression",
      "Smart automation defaults that handle complexity without requiring manual configuration",
      "Real-time preview system that reflects output changes as users build",
      "Adaptive interface that scales depth and complexity based on user intent",
  
    ]
  },
    //   ORBATRIC  
  {
    slug: "Orbatric",

    title: "Orbatric",

    heroBackground: assets.Portfolio_bg,

    projectInfo: [
      { title: "Client", value: "Christina B" },
      { title: "Company", value: "Orbatric" },
      { title: "Category", value: "AI" },
      { title: "Timeline", value: "2 Months" },
      { title: "Tools", value: "Figma" },
    ],
    
    styleGuide: [
      "Orbatric's design language is bold and futuristic — dark, immersive backgrounds with sharp UI elements that feel cutting-edge without sacrificing readability. Typography is modern and confident, built for strong visual hierarchy across every section.",
      "The color palette leans into deep tones with vibrant accent colors that signal innovation and reinforce brand credibility."
    ],
    
    images: {
      main: assets.Portfolio_Orbatric1,
      problems: assets.Portfolio_Orbatric2,
      styleGuide: assets.Portfolio_Orbatric3,
      features: assets.Portfolio_Orbatric4,
      desktop1: assets.Portfolio_Orbatric_des_1,
      desktop2: assets.Portfolio_Orbatric1_des_2,
    },

    description: [
      "Orbatric is an AI-powered platform that needed a landing page as forward-thinking as the technology behind it. We designed a modern, conversion-driven website experience focused on communicating innovation and trust from the very first impression.",
      "Blending futuristic aesthetics with clean usability to keep the user journey simple, engaging, and purposeful."
    ],
    
    problems: [
      "Orbatric had a powerful product but no landing page that could do it justice. The key challenges were:",
      "No design direction that reflected the AI-forward nature of the brand",
      "Complex capabilities with no clear, digestible way to present them",
      "Missing visual hierarchy that could guide users through the page naturally",
      "Weak first impression that failed to build trust or drive conversions"
    ],

    solutions: [
      "We built a full landing page UI/UX designed around clarity, confidence, and conversion:",
      "Futuristic yet clean visual language that positions Orbatric as an innovative AI brand",
      "Smart visual hierarchy guiding users from awareness to understanding to action",
      "Intuitive layouts that break down complex AI capabilities into digestible sections",
      "Conversion-focused structure with clear CTAs placed at every key decision point"
    ],
    
    features: [
      "Full landing page UI/UX design from scratch",
      "Futuristic aesthetic paired with clean, usable layouts",
      "Smart visual hierarchy for intuitive user journeys",
      "AI capability sections designed for clarity and engagement",
      "Conversion-focused structure with strategic CTA placement",
      "Mobile-responsive design across all screen sizes"
    ]

  },
  //  NIBOTECH
  {
    slug: "Nibotech",

    title: "Nibotech",

    heroBackground: assets.Portfolio_bg,

    projectInfo: [
      { title: "Client", value: "Tom Mith" },
      { title: "Company", value: "NiboTech" },
      { title: "Category", value: "Technology" },
      { title: "Timeline", value: "2 Months" },
      { title: "Tools", value: "Figma" },
    ],
    
    styleGuide: [
      "The visual language is sharp, structured, and technical. A dark-dominant palette with high-contrast accents communicates precision and forward-thinking without feeling cold." ,
      "Typography is geometric and modern, tight tracking on headings, clean line heights on body copy. Weight contrast is used aggressively to create immediate scanability."
    ],
    
    images: {
      main: assets.Portfolio_health1,
      problems: assets.Portfolio_health2,
      styleGuide: assets.Portfolio_health3,
      features: assets.Portfolio_health4,
      desktop1: assets.Portfolio_health_des1,
      desktop2: assets.Portfolio_health_des2,
    },

    description: [
      "Nibotec is a full end-to-end website redesign for a modern technology brand. The project focused on rebuilding usability, visual hierarchy, and user flow from the ground up — not just reskinning what existed.",
      "The result is a scalable UI system built for a tech-savvy audience; precise, intentional, and designed to grow with the brand."
    ],
   


    problems: [
      "Existing site lacked clear visual hierarchy, making content hard to scan",
      "User flow was disjointed, no logical path from landing to conversion",
      "Navigation structure didn't reflect how users actually explored the product",
      "UI components were inconsistent, creating a fragmented brand experience",
      "The design system had no scalability, every new page required rebuilding from scratch"
    ],

    solutions: [
      "Established a strict typographic and spatial hierarchy across all page templates",
      "Mapped and restructured user flow based on research and behavioral patterns",
      "Redesigned navigation around user mental models, not internal site architecture",
      "Built a unified component library ensuring visual consistency at every touchpoint",
      "Delivered a scalable UI system with reusable tokens, components, and layout grids"
    ],

    features: [
      "Research-driven information architecture restructured around actual user behavior",
      "End-to-end wireframe system validated before visual design execution",
      "Unified component library with consistent tokens across all page types",
      "Scalable UI system built for long-term brand and product growth",
      "Conversion-focused user flow with clear entry points and guided navigation paths",
    ]
    
  },
];
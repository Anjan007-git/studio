export interface Project {
  slug: string;
  number: string;
  title: string;
  fullTitle: string;
  category: string;
  type: string;
  year: string;
  date: string;
  client: string;
  industry: string;
  timeline: string;
  liveUrl: string;
  coverImage: string;
  logo: string;
  description: string;
  services: string[];
  stats: Array<{ value: string; unit: string; label: string }>;
  challenge: { subtitle: string; paragraphs: string[] };
  solution: { subtitle: string; paragraphs: string[] };
  process: { subtitle: string; paragraphs: string[] };
  testimonial: { quote: string; author: string; role: string };
  galleryImages: string[];
}

export const allProjects: Project[] = [
  {
    "slug": "quantum",
    "number": "[01]",
    "title": "Quantum",
    "fullTitle": "Demystifying AI through thoughtful design.",
    "category": "Brand Strategy & Product Design",
    "type": "Product Design",
    "year": "2025",
    "date": "Aug 2025",
    "client": "Quantum",
    "industry": "AI / Machine Learning",
    "timeline": "24 Months",
    "liveUrl": "https://quantum.ai",
    "coverImage": "/images/1K1GhaYYAWsk6blrw0x1GrQp18.jpg",
    "logo": "/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg",
    "stats": [
      {
        "value": "85",
        "unit": "%",
        "label": "Non-technical stakeholder comprehension"
      },
      {
        "value": "3",
        "unit": "x",
        "label": "Investor meeting success rate"
      },
      {
        "value": "4.2",
        "unit": "x",
        "label": "AI adoption acceleration"
      }
    ],
    "description": "Quantum's breakthrough AI needed a brand that balanced cutting-edge technology with human understanding.",
    "services": [
      "Brand positioning",
      "Visual identity"
    ],
    "challenge": {
      "subtitle": "Quantum is solving problems most people don't understand with technology few can explain. Our challenge was creating a brand that conveys sophisticated AI capabilities while remaining approachable to non-technical stakeholders.",
      "paragraphs": [
        "In the AI gold rush, most companies compete on technical complexity and jargon-heavy messaging that alienates decision-makers outside engineering teams. Quantum needed to stand out by being genuinely comprehensible—translating breakthrough machine learning capabilities into language and visuals that resonate with investors, partners, and customers who don't speak algorithm."
      ]
    },
    "solution": {
      "subtitle": "We developed a visual language inspired by neural networks and data flows, but rendered with warmth and clarity that helps Quantum stand out by being genuinely comprehensible.",
      "paragraphs": [
        "We created a brand system that demystifies AI through thoughtful design, balancing cutting-edge technology with human understanding. The visual identity draws from neural network patterns and data visualization principles while maintaining accessibility and warmth. Every touchpoint reinforces that advanced AI should enhance human capability, not replace human judgment."
      ]
    },
    "process": {
      "subtitle": "Brand positioning, visual identity, platform design, data visualization system, marketing website, and investor deck delivered over 24 weeks.",
      "paragraphs": [
        "Through extensive stakeholder interviews and AI industry research, we developed messaging frameworks that translate complex capabilities into clear benefits. The platform design emphasizes transparency and interpretability, showing users how AI reaches its conclusions. We also created comprehensive guidelines for communicating technical concepts across different audience sophistication levels."
      ]
    },
    "testimonial": {
      "quote": "Quantum is solving problems most people don't understand with technology few can explain. Our challenge was creating a brand that conveys sophisticated AI capabilities while remaining approachable to non-technical stakeholders.",
      "author": "Quantum Leadership",
      "role": "The Solution"
    },
    "galleryImages": [
      "/images/y9RJCiqg0HYvKK8IYgAAHJpKI38.jpg",
      "/images/UXoL0xgjNH32fDT6vLFVr40wPsg.jpg",
      "/images/H25SeFLfd6ZdxBHRuXcfPxR3PFw.jpg",
      "/images/xcq3oK7d6SyCPzqFFL4hyUSf8U.jpg",
      "/images/MWOVzRQuHstfEpeSkJsegoFS3yI.jpg",
      "/images/MwyyLodTde1OLv9Mih4na40QdWw.png"
    ]
  },
  {
    "slug": "cubekit",
    "number": "[02]",
    "title": "Cubekit",
    "fullTitle": "Dimensionalizing Cubekit's creative toolkit.",
    "category": "Brand Identity & Product Design",
    "type": "Brand Identity",
    "year": "2024",
    "date": "Dec 2024",
    "client": "Cubekit",
    "industry": "3D Software / Creative Tools",
    "timeline": "20 Months",
    "liveUrl": "https://cubekit.io",
    "coverImage": "/images/6RfCJSn8TD3btNcHJPZjWjNVOo.jpeg",
    "logo": "/images/4SXU5NecY5nX7I0EIxv06SjxME.svg",
    "stats": [
      {
        "value": "92",
        "unit": "%",
        "label": "Feature discovery improvement"
      },
      {
        "value": "3.5",
        "unit": "hrs",
        "label": "Daily workflow time saved"
      },
      {
        "value": "4.9",
        "unit": "/5",
        "label": "User satisfaction rating"
      }
    ],
    "description": "We transformed Cubekit from a niche 3D tool into a creative platform that inspires artists and powers professionals.",
    "services": [
      "Complete rebrand",
      "application UI/UX"
    ],
    "challenge": {
      "subtitle": "Cubekit had quietly become the secret weapon of 3D artists worldwide, but their dated interface was limiting growth. They needed a transformation that would unlock their potential for broader creative adoption.",
      "paragraphs": [
        "Despite powerful 3D capabilities that artists loved, Cubekit's interface felt like it belonged in the early 2000s. The complexity that made it powerful also made it intimidating to newcomers, while established users were frustrated by inefficient workflows. The community was passionate but small, held back by barriers that had nothing to do with the underlying technology."
      ]
    },
    "solution": {
      "subtitle": "We approached the redesign like architects, creating a spatial interface that mirrors the 3D workflows it enables. Every interaction reinforces the precision and possibility of 3D creation.",
      "paragraphs": [
        "We transformed Cubekit from a niche 3D tool into a creative platform that inspires artists and powers professionals. The new interface uses smart color coding and contextual tools to keep complexity manageable while making advanced features discoverable. The result feels like working in three dimensions even when managing two-dimensional interfaces."
      ]
    },
    "process": {
      "subtitle": "Complete rebrand, application UI/UX, plugin ecosystem design, documentation site, and community platform delivered over 20 weeks.",
      "paragraphs": [
        "Through extensive user research with 3D artists and workflow analysis, we redesigned every aspect of the creative process. The new interface progressively reveals advanced tools while keeping core functions accessible, and the spatial design language helps users think dimensionally. The community called it 'the update that changed everything.'"
      ]
    },
    "testimonial": {
      "quote": "We approached the redesign like architects, creating a spatial interface that mirrors the 3D workflows it enables. Every interaction reinforces the precision and possibility of 3D creation.",
      "author": "Cubekit Leadership",
      "role": "UI/UX"
    },
    "galleryImages": [
      "/images/uC3DPDrBdJCZlHMQcaazSdNDaHM.jpg",
      "/images/tFCFQAW8AwtkXS8nFeTb8GbE6s.jpg",
      "/images/vKQV2NUpWyS58tGOz90qMcw8yU.jpeg",
      "/images/Rkl08UGfkYj0XdxZZ8h4d04KowA.jpeg",
      "/images/uDKj6X3ze5cVzKwJIBrayncA6M.jpeg",
      "/images/P6F00YqPm2GNM9Wu21dRM3HDIjs.jpeg"
    ]
  },
  {
    "slug": "ephemeral",
    "number": "[03]",
    "title": "Ephemeral",
    "fullTitle": "Crafting intimacy in the age of permanent records.",
    "category": "Brand Identity & Product Design",
    "type": "Brand Identity",
    "year": "2024",
    "date": "Nov 2024",
    "client": "Ephemeral",
    "industry": "Social Media / Tech",
    "timeline": "15 Months",
    "liveUrl": "https://ephemeral.app",
    "coverImage": "/images/WESeNdvPCpvuLT7oqkMfp8VbxXU.jpeg",
    "logo": "/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg",
    "stats": [
      {
        "value": "78",
        "unit": "%",
        "label": "Reduction in permanent message anxiety"
      },
      {
        "value": "4",
        "unit": "x",
        "label": "Authentic conversation frequency"
      },
      {
        "value": "1.8",
        "unit": "sec",
        "label": "Average response time"
      }
    ],
    "description": "We designed Ephemeral to make digital conversations feel human again—private fleeting and real.",
    "services": [
      "Brand strategy",
      "Mobile app design"
    ],
    "challenge": {
      "subtitle": "Ephemeral came to us with a radical vision: a communication platform where messages naturally fade, conversations stay private, and users feel safe being authentic.",
      "paragraphs": [
        "In a world where every message lives forever, Ephemeral dared to forget. They needed a brand that could make impermanence feel like a feature, not a bug—convincing users that disappearing messages create more meaningful connections, not less. The challenge was designing for intimacy in an age of permanent records."
      ]
    },
    "solution": {
      "subtitle": "We created a brand that whispers instead of shouts, designing interfaces that feel like passing notes rather than broadcasting to the world.",
      "paragraphs": [
        "We developed a visual identity and app experience that prioritizes privacy and authenticity over virality and engagement metrics. Every design decision reinforced the core promise: digital conversations that feel human again. The brand system celebrates the beauty of temporary moments while building trust in the technology that makes them possible."
      ]
    },
    "process": {
      "subtitle": "Brand strategy, visual identity, mobile app design, web platform, onboarding experience, and social features delivered over 15 weeks.",
      "paragraphs": [
        "Through user research and privacy-first design principles, we crafted an experience that makes ephemeral messaging feel natural and desirable. The interface design emphasizes calm over stimulation, with subtle animations and gentle typography that encourage thoughtful communication rather than rapid-fire exchanges."
      ]
    },
    "testimonial": {
      "quote": "In a world where every message lives forever, Ephemeral dared to forget. They needed a brand that could make impermanence feel like a feature, not a bug—convincing users that disappearing messages create more meaningful connections, not less. The challenge was designing for intimacy in an age of permanent records.",
      "author": "Web platform",
      "role": "The Solution"
    },
    "galleryImages": [
      "/images/6RfCJSn8TD3btNcHJPZjWjNVOo.jpeg",
      "/images/ZD1teexVODpnnttjRaHdsxfFJI.jpg",
      "/images/Y7bSEY7h4Q63yJom6O4AnZ4xvPc.jpg",
      "/images/5vKRmTPnpZTepPzWxWV4sV9Zhg.jpg",
      "/images/HiiMokcrCSFP43HtrAzdAZinXRI.jpg",
      "/images/78QP0vl8YmtYo1NEWIv4vCSGI.jpg"
    ]
  },
  {
    "slug": "warpspeed",
    "number": "[04]",
    "title": "Warpspeed",
    "fullTitle": "Accelerating Warpspeed's journey to enterprise.",
    "category": "Brand Identity & Product Design",
    "type": "Product Design",
    "year": "2024",
    "date": "Sep 2024",
    "client": "Warpspeed",
    "industry": "Technology / SaaS",
    "timeline": "12 Months",
    "liveUrl": "https://warpspeed.dev",
    "coverImage": "/images/Rkl08UGfkYj0XdxZZ8h4d04KowA.jpeg",
    "logo": "/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg",
    "stats": [
      {
        "value": "140",
        "unit": "%",
        "label": "Increase in enterprise client acquisition"
      },
      {
        "value": "65",
        "unit": "%",
        "label": "Reduction in developer onboarding time"
      },
      {
        "value": "6",
        "unit": "Weeks",
        "label": "Time to complete full rebrand"
      }
    ],
    "description": "We transformed Warpspeed from a developer tool into an enterprise-ready platform that commands attention.",
    "services": [
      "Complete rebrand",
      "Product UI/UX redesign"
    ],
    "challenge": {
      "subtitle": "Warpspeed had powerful technology hidden behind an interface only engineers could love. Their ambitious growth plans meant appealing to CTOs and developers alike.",
      "paragraphs": [
        "As they pursued enterprise clients, Warpspeed faced the classic developer tool dilemma: amazing technology wrapped in an experience that screamed \"built by engineers, for engineers.\" They needed to win over CTOs who care about aesthetics and developers who care about function—without sacrificing credibility with either audience."
      ]
    },
    "solution": {
      "subtitle": "We crafted a brand that speaks to technical excellence while embracing executive expectations, creating a visual language that scales from GitHub to the boardroom.",
      "paragraphs": [
        "Through comprehensive rebranding and product redesign, we developed a dual-personality system that adapts its voice without losing its core identity. Technical depth when developers need it, executive confidence when leadership demands it—all from a cohesive visual foundation that commands respect in both engineering meetings and C-suite presentations."
      ]
    },
    "process": {
      "subtitle": "Complete rebrand, product UI/UX redesign, design system, marketing website, and sales collateral delivered over 12 weeks.",
      "paragraphs": [
        "Starting with stakeholder interviews across both technical and executive audiences, we created brand guidelines that scale appropriately, redesigned the product interface for broader appeal, and developed marketing materials that convert at every level of the organization. The result positions Warpspeed as the sophisticated choice for serious development teams."
      ]
    },
    "testimonial": {
      "quote": "We crafted a brand that speaks to technical excellence while embracing executive expectations, creating a visual language that scales from GitHub to the boardroom.",
      "author": "Warpspeed Leadership",
      "role": "Design System"
    },
    "galleryImages": [
      "/images/lNsXsdGe1fN71gd9170nua6UU4.jpg",
      "/images/nW55pvF1IYd0aHD4mng5Hy9xrc.jpg",
      "/images/jBKPo9ntJvigjmrdu4jYtf5QmGU.jpg",
      "/images/njaWTjW8661BoaUfl0gjVYUsi4.png",
      "/images/ExnWswKvkxjCoWhWysBVfCgWfnI.jpg",
      "/images/7JjbbUmcogKMTUyPBHVHyw54.jpg"
    ]
  },
  {
    "slug": "magnolia",
    "number": "[05]",
    "title": "Magnolia",
    "fullTitle": "Cultivating Magnolia's digital-first retail experience.",
    "category": "Brand Strategy & Web Design",
    "type": "Web Design",
    "year": "2024",
    "date": "Jun 2024",
    "client": "Magnolia",
    "industry": "E-commerce / Retail",
    "timeline": "16 Months",
    "liveUrl": "https://magnolia.store",
    "coverImage": "/images/uDKj6X3ze5cVzKwJIBrayncA6M.jpeg",
    "logo": "/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg",
    "stats": [
      {
        "value": "165",
        "unit": "%",
        "label": "Online revenue increase in 6 months"
      },
      {
        "value": "9.4",
        "unit": "/10",
        "label": "Customer experience rating"
      },
      {
        "value": "45",
        "unit": "sec",
        "label": "Average site engagement time increase"
      }
    ],
    "description": "Magnolia needed a digital presence as refined as their physical stores. We delivered an experience that feels like luxury.",
    "services": [
      "Brand positioning",
      "Visual identity refresh"
    ],
    "challenge": {
      "subtitle": "Known for their impeccable retail spaces, Magnolia faced a challenge: their online presence felt disconnected from the in-store magic. They needed a digital presence as refined as their physical stores.",
      "paragraphs": [
        "Magnolia had mastered the art of physical retail, creating spaces that felt warm, sophisticated, and premium. But their e-commerce experience was generic and transactional, failing to capture the carefully curated atmosphere that made their stores destinations. Online customers weren't experiencing the brand that had built such strong in-person loyalty.",
        "Ecommerce platform design"
      ]
    },
    "solution": {
      "subtitle": "We bridged that gap by translating their physical warmth into pixels, creating an e-commerce experience that maintains their premium positioning while embracing the efficiency modern shoppers demand.",
      "paragraphs": [
        "We developed a digital experience that feels like luxury, translating the sensory richness of Magnolia's physical spaces into a compelling online environment. The new platform captures the boutique shopping experience through thoughtful product presentation, curated collections, and premium user flows that make browsing feel like discovery rather than searching."
      ]
    },
    "process": {
      "subtitle": "Brand positioning, visual identity refresh, e-commerce platform design, packaging design system, and photography direction delivered over 16 weeks.",
      "paragraphs": [
        "Through retail experience audits and customer journey mapping, we identified the key emotional touchpoints that made Magnolia's physical stores successful. The digital platform recreates these moments through sophisticated visual design, intuitive navigation, and premium interactions. The result delivered a 300% increase in online revenue within six months of launch."
      ]
    },
    "testimonial": {
      "quote": "Magnolia had mastered the art of physical retail, creating spaces that felt warm, sophisticated, and premium. But their e-commerce experience was generic and transactional, failing to capture the carefully curated atmosphere that made their stores destinations. Online customers weren't experiencing the brand that had built such strong in-person loyalty.",
      "author": "Ecommerce platform design",
      "role": "The Solution"
    },
    "galleryImages": [
      "/images/1K1GhaYYAWsk6blrw0x1GrQp18.jpg",
      "/images/VCks4k1H7u2JjtkZqGNk36MY.jpg",
      "/images/NcfQ3LFrENbvtVujcDQ9deQLqY.jpg",
      "/images/UrJD54GlRdCsgnwvlGhoK0gUzoI.jpg",
      "/images/53zzyqij0fCv1wb7qCNq7kgvvc.jpg",
      "/images/bhcBgXjVzGT83YgFNXz4qi7Yfgc.jpg"
    ]
  },
  {
    "slug": "global-bank",
    "number": "[06]",
    "title": "Global Bank",
    "fullTitle": "Making global finance feel local and human.",
    "category": "Digital Transformation & Design System",
    "type": "Product Design",
    "year": "2024",
    "date": "Mar 2024",
    "client": "Global Bank",
    "industry": "Financial Services",
    "timeline": "26 Months",
    "liveUrl": "https://globalbank.com",
    "coverImage": "/images/nUz9PQlnVFREjBvNToIeGovBXI.jpeg",
    "logo": "/images/c6N9oEQ13bXzmoFxh74nyZoX8.svg",
    "stats": [
      {
        "value": "28",
        "unit": "Countries",
        "label": "Simultaneous digital transformation"
      },
      {
        "value": "50",
        "unit": "Years",
        "label": "Institution's largest modern rebrand"
      },
      {
        "value": "42",
        "unit": "%",
        "label": "Task completion time reduction"
      }
    ],
    "description": "We transformed Global Bank from a faceless institution into a trusted financial partner for the digital age.",
    "services": [
      "Digital banking redesign",
      "Design system"
    ],
    "challenge": {
      "subtitle": "Global Bank had a problem: despite operations in 47 countries, they felt cold and corporate everywhere. Customers saw them as necessary but unloved—a place to store money, not a partner in financial growth.",
      "paragraphs": [
        "After 150 years in business, Global Bank was facing a crisis of relevance. Digital-first competitors were winning customers with human-centered experiences while Global Bank remained trapped in institutional thinking. They needed to transform from a faceless institution into a trusted financial partner without losing the stability that made them successful."
      ]
    },
    "solution": {
      "subtitle": "We embarked on their largest rebrand in 150 years, creating a system flexible enough to feel local in Lagos and London while maintaining global consistency.",
      "paragraphs": [
        "We developed a comprehensive digital transformation that made global finance feel local and human. The new identity system adapts to cultural nuances while maintaining brand integrity, and the digital banking experience prioritizes user needs over internal processes. Every touchpoint was redesigned to feel surprisingly friendly while remaining professionally trustworthy."
      ]
    },
    "process": {
      "subtitle": "Digital banking redesign, mobile apps, design system, accessibility compliance, branch digital experiences, and employee tools delivered over 26 weeks.",
      "paragraphs": [
        "Through extensive user research across multiple markets, we created a design system that works seamlessly across cultures and languages. The new digital banking experience reduced task completion time by 70% while making finance feel approachable. We also ensured full accessibility compliance and trained internal teams to maintain the new standards."
      ]
    },
    "testimonial": {
      "quote": "We embarked on their largest rebrand in 150 years, creating a system flexible enough to feel local in Lagos and London while maintaining global consistency.",
      "author": "Global Bank Leadership",
      "role": "Digital experience"
    },
    "galleryImages": [
      "/images/uhZaPfIrCFAy4Kx7PfKvzv8r8q8.jpg",
      "/images/kehz6iq53DNg6gWi5KLf0IM2SQ.jpg",
      "/images/flNphH0MzMqEGicePNHd5fXRQaI.jpg",
      "/images/ky4VW4Y2E4Isb6CiT4mMdUp5Y.jpg",
      "/images/lLKqFGcjS8qDPdo1ZdOMagyK2A.jpg",
      "/images/qntxXmNj5h7f1ln0DvADRhqp0X0.jpeg"
    ]
  },
  {
    "slug": "lightspeed",
    "number": "[07]",
    "title": "Lightspeed",
    "fullTitle": "Energizing Lightspeed's next chapter in payments.",
    "category": "High-Frequency Trading Console",
    "type": "Product Design",
    "year": "2024",
    "date": "Jul 2021",
    "client": "Lightspeed",
    "industry": "FinTech / Payments",
    "timeline": "8 Months",
    "liveUrl": "https://lightspeed.pay",
    "coverImage": "/images/EoBMupP4sDoc2Zgcjt3OXKz2mg.jpg",
    "logo": "/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg",
    "stats": [
      {
        "value": "10",
        "unit": "Years",
        "label": "Brand equity preserved during refresh"
      },
      {
        "value": "210",
        "unit": "%",
        "label": "Payment processing growth"
      },
      {
        "value": "0.2",
        "unit": "sec",
        "label": "Transaction speed improvement"
      }
    ],
    "description": "Lightspeed needed a brand refresh that signaled innovation while maintaining the trust they'd earned over a decade.",
    "services": [
      "Logo evolution",
      "Brand guidelines update"
    ],
    "challenge": {
      "subtitle": "After ten years of steady growth, Lightspeed's brand was showing its age in a rapidly evolving payments landscape. They needed a brand refresh that signaled innovation while maintaining the trust they'd earned over a decade.",
      "paragraphs": [
        "Lightspeed faced the classic established company dilemma: how to feel fresh and forward-thinking without alienating existing customers who chose them for stability. The payments industry was being disrupted by fintech startups with bold brands, but Lightspeed couldn't afford to look experimental. They needed evolution, not revolution.",
        "Product onboarding flow"
      ]
    },
    "solution": {
      "subtitle": "Rather than a complete overhaul, we orchestrated a strategic evolution that honored their equity while injecting fresh energy. The refined identity system adapts seamlessly from payment terminals to billboard campaigns.",
      "paragraphs": [
        "We developed a brand refresh that customers barely notice—they just feel better. The updated visual system maintains familiar equity while introducing contemporary elements that signal innovation and growth. Every design decision balanced heritage with progression, proving that sometimes the best rebrands strengthen what's already working rather than starting from scratch."
      ]
    },
    "process": {
      "subtitle": "Logo evolution, brand guidelines update, marketing website, product onboarding flow, and sales materials delivered over 8 weeks.",
      "paragraphs": [
        "Through brand equity research and stakeholder alignment, we identified which elements to preserve and which to evolve. The streamlined process focused on high-impact touchpoints that would immediately signal the brand's evolution while maintaining operational continuity. The result refreshes Lightspeed's presence without disrupting their market position or customer relationships."
      ]
    },
    "testimonial": {
      "quote": "After ten years of steady growth, Lightspeed's brand was showing its age in a rapidly evolving payments landscape. They needed a brand refresh that signaled innovation while maintaining the trust they'd earned over a decade.",
      "author": "Lightspeed Leadership",
      "role": "Product onboarding flow"
    },
    "galleryImages": [
      "/images/M61QrITUPwhGolIvRwg2qyc2w.png",
      "/images/5RAXOs77jRfo5pbo3CpHx3Cl9rw.jpg",
      "/images/0mWPKF0EXYmBwvcSZOgl4lvkY4.jpeg",
      "/images/lFVaSt1XWB4rGtcB4gyCxQdOPk.jpeg",
      "/images/mI32je4NbJ7bAzAfmC93TqhXcw.jpeg",
      "/images/lznB8KhPDXYTm6OknQbbVBgpFeU.jpeg"
    ]
  },
  {
    "slug": "clandestine",
    "number": "[08]",
    "title": "Clandestine",
    "fullTitle": "Revealing Clandestine's mysterious luxury aesthetic.",
    "category": "Brand Identity & Spatial Experience",
    "type": "Brand Identity",
    "year": "2024",
    "date": "Jun 2022",
    "client": "Clandestine",
    "industry": "Fashion / Lifestyle",
    "timeline": "14 Months",
    "liveUrl": "https://clandestine.co",
    "coverImage": "/images/uhZaPfIrCFAy4Kx7PfKvzv8r8q8.jpg",
    "logo": "/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg",
    "stats": [
      {
        "value": "0.8",
        "unit": "sec",
        "label": "Average product page load time"
      },
      {
        "value": "99.9",
        "unit": "%",
        "label": "Drop-day server uptime achievement"
      },
      {
        "value": "5.2",
        "unit": "x",
        "label": "Social media engagement boost"
      }
    ],
    "description": "We created an enigmatic brand experience that turns browsing into discovery and customers into collectors.",
    "services": [
      "Brand strategy",
      "Visual identity",
      "E-commerce platform"
    ],
    "challenge": {
      "subtitle": "Clandestine operates at the intersection of streetwear and high fashion, releasing limited drops to a devoted following. They needed a digital presence that captured their elusive nature while functioning flawlessly during high-traffic releases.",
      "paragraphs": [
        "The brand thrived on exclusivity and mystery, but their online experience was failing to match the energy of their physical drops. They needed a platform that balanced mystique with usability—creating anticipation through design while ensuring smooth transactions when drops go live. The challenge was making scarcity feel intentional rather than accidental."
      ]
    },
    "solution": {
      "subtitle": "We designed a platform that balances mystique with usability, creating anticipation through design while ensuring smooth transactions when drops go live.",
      "paragraphs": [
        "We created an enigmatic brand experience that turns browsing into discovery and customers into collectors. The visual system plays with hidden elements and progressive revelation, making each interaction feel like uncovering a secret. Strategic use of negative space and minimal typography reinforces the exclusive positioning while smart information architecture ensures seamless shopping when it matters most."
      ]
    },
    "process": {
      "subtitle": "Brand strategy, visual identity, e-commerce platform, lookbook design, and social media templates delivered over 14 weeks.",
      "paragraphs": [
        "Through drop analysis and customer journey mapping, we designed an experience that builds tension before releases and delivers satisfaction during purchase. The platform includes features like countdown timers, exclusive previews for members, and queue systems that maintain site performance during high-demand launches. Every touchpoint reinforces the brand's mysterious luxury aesthetic.RetryClaude can make mistakes. Please double-check responses."
      ]
    },
    "testimonial": {
      "quote": "The brand thrived on exclusivity and mystery, but their online experience was failing to match the energy of their physical drops. They needed a platform that balanced mystique with usability—creating anticipation through design while ensuring smooth transactions when drops go live. The challenge was making scarcity feel intentional rather than accidental.",
      "author": "The Solution",
      "role": "Co-Founder"
    },
    "galleryImages": [
      "/images/QZx6jJNdVn8KylAh4qe6ByOAMA.jpg",
      "/images/QvTsIIsuiB2RGmvrcG9mLp04amM.jpg",
      "/images/6wsG4MpppSyNZTEfjXgD3UY6jM.jpg",
      "/images/LNs0tu1R4ohNJUfPqzPpt4tK8.jpg",
      "/images/1A9pV4bYNdpUDPD8gHeKkRxZGU.jpg",
      "/images/omXJcL2e4NPXETOsUeDKxpOCjQo.jpg"
    ]
  },
  {
    "slug": "flora-and-fauna",
    "number": "[09]",
    "title": "Flora & Fauna",
    "fullTitle": "Growing beauty that gives back to nature.",
    "category": "Sustainable Luxury E-Commerce",
    "type": "Web Design",
    "year": "2024",
    "date": "Feb 2020",
    "client": "Flora & Fauna",
    "industry": "Sustainable Beauty",
    "timeline": "13 Months",
    "liveUrl": "https://florafauna.eco",
    "coverImage": "/images/sirR5Knxvy6H4B4c8ceh6eTMMpc.jpeg",
    "logo": "/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg",
    "stats": [
      {
        "value": "0",
        "unit": "% Waste",
        "label": "Circular packaging system"
      },
      {
        "value": "2.4",
        "unit": "$M",
        "label": "Wildflowers grown from packages"
      },
      {
        "value": "88",
        "unit": "%",
        "label": "Customer retention rate"
      }
    ],
    "description": "We helped Flora & Fauna bloom into a beauty brand that's as kind to the planet as it is to your skin.",
    "services": [
      "Brand positioning",
      "Packaging design system"
    ],
    "challenge": {
      "subtitle": "Flora & Fauna approached us with a mission: create the first truly circular beauty brand. Every product would be biodegradable, every package plantable, every purchase contributing to reforestation.",
      "paragraphs": [
        "Sustainable beauty brands often sacrifice desirability for worthiness, positioning eco-consciousness as a compromise rather than an enhancement. Flora & Fauna refused that trade-off—they needed a brand that felt luxurious because it's sustainable, not despite it. The challenge was making environmental responsibility feel aspirational rather than obligatory."
      ]
    },
    "solution": {
      "subtitle": "We created a brand that feels luxurious because it's sustainable, not despite it. The packaging system we designed literally grows into wildflowers, turning customers into gardeners.",
      "paragraphs": [
        "We developed a complete brand ecosystem where sustainability enhances rather than limits the beauty experience. Every design decision reinforced the circular economy concept, from plantable packaging that blooms after use to visual systems inspired by natural growth cycles. The result positions environmental consciousness as the ultimate luxury—beauty that gives back to the world."
      ]
    },
    "process": {
      "subtitle": "Brand positioning, visual identity, packaging design system, e-commerce platform, subscription experience, and retail partnerships delivered over 13 weeks.",
      "paragraphs": [
        "Through biomimicry research and sustainable packaging innovation, we created a brand system that makes environmental impact visible and beautiful. The packaging design includes embedded wildflower seeds, transforming waste into gardens. We also developed a subscription model that reinforces the brand's circular philosophy while building lasting customer relationships."
      ]
    },
    "testimonial": {
      "quote": "Flora & Fauna approached us with a mission: create the first truly circular beauty brand. Every product would be biodegradable, every package plantable, every purchase contributing to reforestation.",
      "author": "Flora & Fauna Leadership",
      "role": "Visual identity"
    },
    "galleryImages": [
      "/images/ZekAo0dewpzjzyzd9kAGHpTg24.jpg",
      "/images/QFjWTntVKty9UweK2uonoNVQieI.jpg",
      "/images/8nK8HQVN7yANmlPF2SOKU7eq8.jpg",
      "/images/mmuPjidgf940xcyUm3v8OkqTHc.jpeg",
      "/images/MuR0YIaBeGpnAvxDcfSukgZq8E.jpg",
      "/images/HhHJl7X2mW0xexx2rKh6sKFWw.jpg"
    ]
  },
  {
    "slug": "boltshift",
    "number": "[10]",
    "title": "Boltshift",
    "fullTitle": "Streamlining supply chain complexity through intuitive design.",
    "category": "Developer Platform & Design Tokens",
    "type": "Product Design",
    "year": "2024",
    "date": "Sep 2023",
    "client": "Boltshift",
    "industry": "Logistics / Supply Chain",
    "timeline": "18 Months",
    "liveUrl": "https://boltshift.com",
    "coverImage": "/images/d0BwZFrtELCoWDdpc1wN5g0q070.jpeg",
    "logo": "/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg",
    "stats": [
      {
        "value": "70",
        "unit": "%",
        "label": "Training time reduction"
      },
      {
        "value": "1.8",
        "unit": "$M",
        "label": "Annual efficiency savings"
      },
      {
        "value": "320",
        "unit": "%",
        "label": "Daily active user growth"
      }
    ],
    "description": "Boltshift's powerful logistics platform was held back by overwhelming complexity. We made the complicated feel simple.",
    "services": [
      "Platform redesign",
      "Mobile apps"
    ],
    "challenge": {
      "subtitle": "Managing global supply chains involves thousands of data points and critical decisions. Boltshift's platform was powerful but impenetrable, causing user frustration and limiting adoption.",
      "paragraphs": [
        "Boltshift had built sophisticated logistics technology that could optimize complex supply chains, but their interface overwhelmed users with information density. Operations managers were abandoning the platform mid-task, and new user onboarding required extensive training. The powerful capabilities were hidden behind walls of complexity that made simple tasks feel impossible."
      ]
    },
    "solution": {
      "subtitle": "We reimagined their interface through the lens of progressive disclosure, showing users exactly what they need when they need it. The new design reduced training time by 60% while increasing platform engagement by 150%.",
      "paragraphs": [
        "We made the complicated feel simple by restructuring information hierarchy and introducing smart contextual interfaces. The redesigned platform guides users through complex workflows step-by-step, surfacing relevant data at decision points rather than overwhelming them upfront. Critical supply chain insights are now accessible to users regardless of their technical expertise."
      ]
    },
    "process": {
      "subtitle": "Platform redesign, mobile apps, design system, data visualization framework, and training materials delivered over 18 weeks.",
      "paragraphs": [
        "Through extensive user research and workflow analysis, we mapped the actual decision-making processes of supply chain professionals. The new interface design prioritizes task completion over feature demonstration, with intelligent dashboards that adapt to user roles and responsibilities. We also created a comprehensive design system that scales across desktop, mobile, and future platform extensions."
      ]
    },
    "testimonial": {
      "quote": "We reimagined their interface through the lens of progressive disclosure, showing users exactly what they need when they need it. The new design reduced training time by 60% while increasing platform engagement by 150%.",
      "author": "Boltshift Leadership",
      "role": "The Process"
    },
    "galleryImages": [
      "/images/FsjhXR0DnPcxonEYOawpX1OvULI.jpg",
      "/images/pk6JiOBg5vmVOklp6B6xwKbVBxo.jpg",
      "/images/HcAP5UURabV3uZNuoTe0CpipVk.jpg",
      "/images/HTIzWyMisoPGQh6rvNUSwIJyL0.jpeg",
      "/images/hIaUt3K531gmf8020cg2ZFWZc2g.jpg",
      "/images/r1YWmx1a7VTADjQrEakGoWgLzXE.jpg"
    ]
  },
  {
    "slug": "solaris-energy",
    "number": "[11]",
    "title": "Solaris Energy",
    "fullTitle": "Energizing the future of sustainable power.",
    "category": "Clean Tech Brand & Investor Portal",
    "type": "Brand Identity",
    "year": "2023",
    "date": "Jan 2024",
    "client": "Solaris Energy",
    "industry": "Renewable Energy",
    "timeline": "22 Months",
    "liveUrl": "https://solarispower.com",
    "coverImage": "/images/jMyKum9tkI3nlZlUp5RZLjnTPU.jpg",
    "logo": "/images/MMLdIlzrdoGIlBjQHNOfvGYfVA.svg",
    "stats": [
      {
        "value": "14",
        "unit": "Countries",
        "label": "Global brand consistency achieved"
      },
      {
        "value": "45",
        "unit": "$M",
        "label": "Investment funding secured"
      },
      {
        "value": "94",
        "unit": "%",
        "label": "Renewable energy trust score"
      }
    ],
    "description": "Solaris Energy needed a brand as innovative as their technology. We delivered an identity that makes renewable energy feel inevitable.",
    "services": [
      "Complete rebrand",
      "Corporate identity"
    ],
    "challenge": {
      "subtitle": "Solaris Energy was revolutionizing solar technology but their brand still looked like a traditional utility company. They needed an identity that could speak to homeowners, businesses, and investors simultaneously.",
      "paragraphs": [
        "Despite breakthrough innovations in renewable energy, Solaris was struggling to differentiate themselves in a crowded market. Their existing brand conveyed reliability but lacked the forward-thinking energy needed to position solar as inevitable rather than alternative. They needed to appeal to three distinct audiences without diluting their message or compromising their credibility."
      ]
    },
    "solution": {
      "subtitle": "We delivered an identity that makes renewable energy feel inevitable, developing a visual system inspired by light itself that positions Solaris as the Apple of renewable energy.",
      "paragraphs": [
        "We created dynamic gradients and patterns that shift like sunlight throughout the day, bringing the energy source directly into the brand experience. The new identity system balances cutting-edge innovation with rock-solid reliability, speaking the language of sustainability without sacrificing sophistication. Every touchpoint reinforces that clean energy isn't just better for the planet—it's better business."
      ]
    },
    "process": {
      "subtitle": "Complete rebrand, corporate identity, website redesign, investor materials, sustainability report design, and employee portal delivered over 22 weeks.",
      "paragraphs": [
        "Through stakeholder workshops and market research, we developed a brand architecture that scales from residential marketing to institutional presentations. The visual system adapts seamlessly across all applications while maintaining the core promise of energy transformation. We also created comprehensive guidelines to ensure consistency as Solaris continues expanding into new markets."
      ]
    },
    "testimonial": {
      "quote": "Solaris Energy was revolutionizing solar technology but their brand still looked like a traditional utility company. They needed an identity that could speak to homeowners, businesses, and investors simultaneously.",
      "author": "Solaris Energy Leadership",
      "role": "Website redesign"
    },
    "galleryImages": [
      "/images/cZZFNaMTAm5LIr3FwtOY6px2R6I.jpg",
      "/images/EfJDbCvPOzZpbUMzfuZ3o2qbAM.jpg",
      "/images/E6jYkW4WLrblWPw9cYEnsBl2TF0.jpeg",
      "/images/EJONVqcr90vzYtyJ1K6npBNe8.jpg",
      "/images/VRcu1K71xVQD7B6jWB5r7Eebrc.jpg",
      "/images/ki7SViDT9cEaiiO8eXKvW1lSgE.jpeg"
    ]
  },
  {
    "slug": "codecraft",
    "number": "[12]",
    "title": "Codecraft",
    "fullTitle": "Making developer tools that developers actually love.",
    "category": "AI IDE Interface & Design System",
    "type": "Product Design",
    "year": "2023",
    "date": "Nov 2023",
    "client": "Codecraft",
    "industry": "Developer Tools",
    "timeline": "10 Months",
    "liveUrl": "https://codecraft.dev",
    "coverImage": "/images/uC3DPDrBdJCZlHMQcaazSdNDaHM.jpg",
    "logo": "/images/XeOUaC43OnA1DfZRH6vXJAYEGpE.svg",
    "stats": [
      {
        "value": "3.8",
        "unit": "x",
        "label": "Developer tool adoption rate"
      },
      {
        "value": "85",
        "unit": "%",
        "label": "Technical documentation engagement"
      },
      {
        "value": "15",
        "unit": "Min",
        "label": "Reduction in environment setup time"
      }
    ],
    "description": "Codecraft wanted to stand out in the crowded DevOps space. We gave them a brand that developers trust and admire.",
    "services": [
      "Logo design",
      "Brand system"
    ],
    "challenge": {
      "subtitle": "Cubekit had quietly become the secret weapon of 3D artists worldwide, but their dated interface was limiting growth. They needed a transformation that would unlock their potential for broader creative adoption.",
      "paragraphs": [
        "Despite powerful 3D capabilities that artists loved, Cubekit's interface felt like it belonged in the early 2000s. The complexity that made it powerful also made it intimidating to newcomers, while established users were frustrated by inefficient workflows. The community was passionate but small, held back by barriers that had nothing to do with the underlying technology.",
        "Documentation website"
      ]
    },
    "solution": {
      "subtitle": "We approached the redesign like architects, creating a spatial interface that mirrors the 3D workflows it enables. Every interaction reinforces the precision and possibility of 3D creation.",
      "paragraphs": [
        "We transformed Cubekit from a niche 3D tool into a creative platform that inspires artists and powers professionals. The new interface uses smart color coding and contextual tools to keep complexity manageable while making advanced features discoverable. The result feels like working in three dimensions even when managing two-dimensional interfaces."
      ]
    },
    "process": {
      "subtitle": "Complete rebrand, application UI/UX, plugin ecosystem design, documentation site, and community platform delivered over 20 weeks.",
      "paragraphs": [
        "Through extensive user research with 3D artists and workflow analysis, we redesigned every aspect of the creative process. The new interface progressively reveals advanced tools while keeping core functions accessible, and the spatial design language helps users think dimensionally. The community called it 'the update that changed everything.'"
      ]
    },
    "testimonial": {
      "quote": "We approached the redesign like architects, creating a spatial interface that mirrors the 3D workflows it enables. Every interaction reinforces the precision and possibility of 3D creation.",
      "author": "Codecraft Leadership",
      "role": "The Process"
    },
    "galleryImages": [
      "/images/e2v2lPYF5BZiZDeiEFptTSeZC1c.jpg",
      "/images/irFyXiQMKBFpGK4Bw1Dk4XjjZM.jpg",
      "/images/FNEqOQrC3BjiQDRJUIsFWiXXUg.jpg",
      "/images/9PPDDwWp3AekTq6fgOmV1nH05A.jpeg",
      "/images/75i8Q2ywq53c5fxbFh3dQpM.jpeg",
      "/images/lCJQHiWzHprMAMy2XMQiDmLIU4.jpg"
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project {
  const index = allProjects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (index + 1) % allProjects.length;
  return allProjects[nextIndex];
}

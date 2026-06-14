import { ServiceCategory, Project, Testimonial, Stat } from './types';

export const servicesCategories: ServiceCategory[] = [
  {
    id: 'ecommerce',
    name: 'E-Commerce Channel Management',
    description: 'Maximize your digital storefront returns. We provide end-to-end management, channel optimization, product listing design, and conversion-focused growth strategy across leading global retail, social, and digital commerce channels.',
    services: [
      {
        id: 'amazon',
        title: 'Amazon FBA & FBM Solutions',
        description: 'Elite A+ content creation, PPC optimization, SEO keyword targeting, and comprehensive inventory management to dominate the world\'s largest marketplace.',
        icon: 'ShoppingBag'
      },
      {
        id: 'walmart',
        title: 'Walmart Seller Growth',
        description: 'Full-store setup, listing synchronization, advertisement bidding, and algorithmic optimization for Walmart\'s rapidly growing multi-channel catalog.',
        icon: 'TrendingUp'
      },
      {
        id: 'ebay',
        title: 'eBay Channel Strategy',
        description: 'Professional template design, dynamic listing management, pricing automation policies, and high-volume cross-border fulfillment consultation.',
        icon: 'Globe'
      },
      {
        id: 'shopify',
        title: 'Premium Shopify Storefronts',
        description: 'Bespoke Liquid editing, conversion rate optimization (CRO), speed optimization, checkout adjustments, and native Shopify app integrations.',
        icon: 'Sparkles'
      },
      {
        id: 'fb-marketplace',
        title: 'Facebook Marketplace & Shops',
        description: 'Social-first listing syndication, automated listing utilities, direct shipping integrations, and custom Facebook Shop layouts for instant social ordering.',
        icon: 'Users'
      }
    ]
  },
  {
    id: 'tech',
    name: 'Tech Department Services',
    description: 'Engineered solutions from concept to deployment. Our expert technical team delivers custom, high-performance web applications, hybrid mobile ecosystems, robust cloud architecture, and modern visual-first design.',
    services: [
      {
        id: 'mobile-app',
        title: 'Mobile App Development',
        description: 'Cross-platform iOS and Android performance assets, utilizing native performance integrations, offline storage, and responsive design systems.',
        icon: 'Smartphone'
      },
      {
        id: 'web-dev',
        title: 'Website Development',
        description: 'Stunning high-speed React, Next.js, and Vite web applications designed with semantic typography, pixel-perfect margins, and robust type safety.',
        icon: 'Code'
      },
      {
        id: 'software-dev',
        title: 'Custom Software Development',
        description: 'End-to-end bespoke enterprise platforms, multi-user workspace modules, RESTful API structures, and dedicated database integrations.',
        icon: 'Cpu'
      },
      {
        id: 'wordpress',
        title: 'WordPress Development',
        description: 'Custom theme developments from UI sketch mockups, Gutenberg custom blocks, secure plugin configurations, and WooCommerce scale engineering.',
        icon: 'Grid'
      },
      {
        id: 'ui-ux',
        title: 'UI/UX Design',
        description: 'Modern Figma interactive prototypes, brand styling guides, accessible low & high fidelity wireframes, and responsive user journey blueprints.',
        icon: 'Layers'
      },
      {
        id: 'video-editing',
        title: 'Video Editing & Production',
        description: 'High-retention commercial ads, brand explainer reels, motion typography assets, and pristine color grading tailored for high-converting social channels.',
        icon: 'Video'
      },
      {
        id: 'graphic-design',
        title: 'Graphic & Brand Designing',
        description: 'Stunning visual identities, custom vector layouts, modern digital flyers, and unified brand collateral matching the highest industry guidelines.',
        icon: 'Palette'
      },
      {
        id: 'aws',
        title: 'AWS Cloud Services',
        description: 'Secure server setups, AWS auto-scaling protocols, CDN integrations (CloudFront), and cost-efficient cloud storage engineering for instant static serving.',
        icon: 'Cloud'
      }
    ]
  }
];

export const portfolioProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Aura Cosmetics Global Shopify & Brand Ecosystem',
    category: 'ecommerce',
    serviceType: 'Shopify Store Development & Digital Strategy',
    description: 'We built a high-converting, blazing-fast headless Shopify experience with integrated custom recommendation mechanics and luxury brand elements.',
    longDescription: 'A custom, lightning-fast Shopify headless store utilizing high-end premium styling. Our team spearheaded the entire design system, custom liquid layouts, and cart speed optimization. By redesigning user pathways, we achieved significant gains in user session value and checkout velocity. The solution integrates real-time inventory syndication across Amazon and US/EU fulfillment hubs, reducing order management complexity by 60%.',
    image: '/src/assets/images/ecommerce_shop_1779270450789.png',
    stats: [
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Average Order Value', value: '+$14.50' },
      { label: 'Page Load Speed', value: '1.2s' }
    ],
    technologies: ['Shopify Liquid', 'ConvertRO', 'Tailwind CSS', 'FBA Integration', 'Figma UX'],
    client: 'Aura Cosmetics LLC',
    link: 'https://ecommerce_shop_1779270450789.png'
  },
  {
    id: 'proj-2',
    title: 'PulseFit Interactive Wellness Platform',
    category: 'tech',
    serviceType: 'Mobile App & Custom Web Platform',
    description: 'A beautiful, cross-platform fitness hub connecting users with trainers, tracking key metrics, and rendering custom analytical charts.',
    longDescription: 'PulseFit contracted us to upgrade their fragmented consumer wellness offering into a seamless native-like ecosystem. We constructed an interactive mobile coaching application using modern state synchronization, paired with a web-based dashboard utilizing animated widgets, interactive calendars, and offline-first database caches. Our AWS experts structured serverless API nodes ensuring low latency and high availability.',
    image: '/src/assets/images/mobile_app_tech_1779270470217.png',
    stats: [
      { label: 'App Store Rating', value: '4.9★' },
      { label: 'Active Users', value: '120,000+' },
      { label: 'AWS Server Latency', value: '<50ms' }
    ],
    technologies: ['React Native', 'Tailwind CSS', 'Node.js', 'Amazon DynamoDB', 'AWS Cloudfront'],
    client: 'PulseFit Global Inc.',
    link: 'https://mobile_app_tech_1779270470217.png'
  },
  {
    id: 'proj-3',
    title: 'VeloBI Enterprise Analytics Workspace',
    category: 'tech',
    serviceType: 'Custom SaaS Platform & UI/UX Design',
    description: 'An exceptionally polished enterprise business intelligence dashboard tailored for corporate data analysis and decision workflows.',
    longDescription: 'Designed with a beautiful, high-contrast, modern clean theme, VeloBI handles multi-tenant data parsing across global units. We created bespoke SVG data tables, custom draggable workspace widgets, and micro-interactions leveraging motion frameworks. It incorporates interactive charts, automated report compilers, and absolute type safety across the complete React layout structure.',
    image: '/src/assets/images/saas_dashboard_1779270491850.png',
    stats: [
      { label: 'Data Points Processed', value: '2.5B+' },
      { label: 'Daily Active Businesses', value: '450+' },
      { label: 'Client Retention Rate', value: '99.4%' }
    ],
    technologies: ['React SPA', 'Tailwind CSS', 'TypeScript', 'D3.js Visualization', 'Express Middleware'],
    client: 'VeloBI Technologies',
    link: 'https://saas_dashboard_1779270491850.png'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'CEO & Founder',
    company: 'Aura Cosmetics LLC',
    content: 'They completely transformed our digital presence. By rewriting our storefront and optimizing our entire Amazon & Walmart syndication channels, our revenues went up by double-digits within the first two quarters. The attention to detail, custom assets, and responsive communication are stellar.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'test-2',
    name: 'Marcus Thorne',
    role: 'Chief Technology Officer',
    company: 'PulseFit Wellness LLC',
    content: 'An absolute power-house engineering team. They delivered our iOS and Android mobile applications fully typed, beautifully styled, and optimized for serverless performance. Their expert handling of modern cloud systems saved us months of developmental time.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'VP of Product Experience',
    company: 'VeloBI Ventures',
    content: 'Their design team understands typography, spacing, and rhythm unlike anyone else. The custom SaaS design is gorgeous, high-contrast, exceptionally easy to navigate, and our corporate clients are constantly praising how intuitive the data workspace is.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const companyStats: Stat[] = [
  { label: 'Projects Completed', value: '250+', description: 'Enterprise web systems & global storefront channels launched successfully.' },
  { label: 'Client Satisfaction', value: '99.6%', description: 'Long-term collaborative partnerships based on concrete engineering outcomes.' },
  { label: 'Niches covered', value: '15+', description: 'Across intensive programmatic tech stacks & e-commerce scaling systems.' },
  { label: 'Team of Experts', value: '25+', description: 'Elite UI/UX creatives, cloud engineers, and growth marketing strategists.' }
];

export const privacyPolicyContent = {
  effectiveDate: 'May 20, 2026',
  introduction: 'At Digital Agency Portfolio Co., we prioritize protecting your enterprise data and corporate privacy. This Privacy Policy details the metrics, procedures, and terms governing the acquisition, processing, and storage of inquiries and contact requests formulated through our public portfolio website.',
  sections: [
    {
      title: '1. Information Acquisition Policies',
      content: 'We acquire minimal professional details necessary to formulate corporate project proposals. This is strictly constrained to standard contact parameters (name, corporate email, target channel category, and project specifications) manually declared by users inside our interactive client intake form.'
    },
    {
      title: '2. Processing & Utilization Strategies',
      content: 'All details shared through our interactive channel intake are utilized strictly to evaluate project parameters, draft tailored business proposals, scale service capacities, and securely communicate regarding inquiries. We never syndicate digital parameters with third-party aggregators, brokers, or external entities.'
    },
    {
      title: '3. Data Security Measures',
      content: 'We apply industry-standard transport security (HTTPS/TLS) across all contact pipelines. Information saved in connection to active business proposals is maintained inside isolated, restricted-access corporate vaults backed by advanced encryption standards.'
    },
    {
      title: '4. Cookies & Web Measurements',
      content: 'To enhance user navigation, analyze client flow metrics, and track user click parameters, we process anonymous telemetry nodes, page stay times, and selection coordinates. No personal identifiability tokens are bound to these telemetry data logs.'
    },
    {
      title: '5. Corporate Governance and Contact',
      content: 'For questions, requests for information deletion, or details regarding global business compliance framework parameters, you are welcome to contact our legal representation officer directly at compliance@digitalagencyportfolio.co.'
    }
  ]
};

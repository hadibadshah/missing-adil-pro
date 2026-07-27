/**
 * MissingAdil Store - Official E-Commerce Script
 * Domain: missingadil.store
 */

// --- GLOBAL PRODUCTS DATABASE ---
const PRODUCTS_DATA = [
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus & Team (GPT-4o & o3-mini)",
    category: "AI Tools",
    badge: "Best Seller",
    type: "Shared / Private Account",
    rating: 4.9,
    reviewsCount: 342,
    shortDesc: "Full access to GPT-4o, OpenAI o3-mini, DALL-E 3, Canvas, and Custom GPTs with 100% uptime guarantee.",
    description: "Get instant access to OpenAI's top tier ChatGPT Plus and Team workspace. Access GPT-4o, Canvas coding workspace, o3-mini reasoning model, real-time web browsing, data analysis, and unlimited custom GPTs. Includes 100% instant auto-replacement warranty.",
    plans: {
      "1m": { usd: 4.99, pkr: 1400, inr: 420, eur: 4.60 },
      "3m": { usd: 12.99, pkr: 3600, inr: 1090, eur: 12.00 },
      "1y": { usd: 44.99, pkr: 12500, inr: 3750, eur: 41.50 }
    },
    types: [
      { id: "shared", label: "Shared Private Screen", extra: 0 },
      { id: "private", label: "Dedicated Private Login", extra: 3.00 },
      { id: "email", label: "Personal Email Activation", extra: 5.00 }
    ],
    features: [
      "Access to GPT-4o, GPT-4 Turbo & OpenAI o3-mini",
      "DALL-E 3 HD Image Generation & Canvas Editor",
      "Code Interpreter & Advanced Data Analytics",
      "Upload Files, PDFs, Screenshots & Datasets",
      "Fast 24/7 Response Speed with No Downtime",
      "30-Day Auto Replacement Warranty"
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    gradient: "from-emerald-500/20 to-teal-500/10",
    inStock: true,
    deliveryTime: "< 5 Minutes Instant",
    featured: true
  },
  {
    id: "capcut-pro",
    name: "CapCut Pro Desktop & Mobile",
    category: "Video Editing",
    badge: "Instant Delivery",
    type: "Shared / Private Account",
    rating: 4.95,
    reviewsCount: 512,
    shortDesc: "Unlock all Pro video transitions, AI auto-captions, 4K export, background removal, and AI effects.",
    description: "Upgrade your video creation with CapCut Pro! Access premium video editing effects, AI body tracking, auto-captions with 50+ languages, 4K 60fps export without watermarks, cloud storage space, and advanced color grading presets.",
    plans: {
      "1m": { usd: 3.49, pkr: 980, inr: 290, eur: 3.20 },
      "3m": { usd: 8.99, pkr: 2500, inr: 750, eur: 8.30 },
      "1y": { usd: 29.99, pkr: 8400, inr: 2500, eur: 27.50 }
    },
    types: [
      { id: "shared", label: "Shared Pro Login", extra: 0 },
      { id: "private", label: "Private Email Login", extra: 2.50 }
    ],
    features: [
      "No Watermark & Full 4K 60FPS Export",
      "AI Auto Subtitles & Voice-to-Text Generator",
      "AI Background Removal & Smart Cutout",
      "100,000+ Pro Transitions, Text Templates & Sound FX",
      "Works on PC, Mac, iOS & Android simultaneously",
      "Instant Credentials Delivery & Warranty"
    ],
    icon: "https://images.icon-icons.com/3914/PNG/512/capcut_logo_icon_249053.png",
    gradient: "from-cyan-500/20 to-blue-500/10",
    inStock: true,
    deliveryTime: "Instant < 3 Mins",
    featured: true
  },
  {
    id: "gemini-advanced",
    name: "Gemini Advanced & Google One AI",
    category: "AI Tools",
    badge: "Google Cloud",
    type: "Private Email Activation",
    rating: 4.88,
    reviewsCount: 198,
    shortDesc: "Powered by Gemini 1.5 Pro & 2.0 Flash with 2 Million Token Context Window & 2TB Google One Cloud.",
    description: "Experience Google's top-tier Gemini Advanced powered by Gemini 1.5 Pro and Gemini 2.0 Flash with an unprecedented 2M token context window. Includes 2TB Google One Storage across Drive, Photos, and Gmail, integrated directly into Google Docs and Gmail.",
    plans: {
      "1m": { usd: 5.99, pkr: 1680, inr: 500, eur: 5.50 },
      "3m": { usd: 14.99, pkr: 4200, inr: 1250, eur: 13.80 },
      "1y": { usd: 49.99, pkr: 14000, inr: 4150, eur: 46.00 }
    },
    types: [
      { id: "email", label: "Upgrade Your Personal Gmail", extra: 0 },
      { id: "private", label: "Fresh Google Account", extra: 1.00 }
    ],
    features: [
      "Gemini 1.5 Pro with 2M Token Context Window",
      "2TB Google One Storage across Gmail & Drive",
      "Deeply Integrated into Google Docs, Gmail & Sheets",
      "Python Code Execution & Advanced Data Visualization",
      "Image Generation powered by Imagen 3",
      "100% Genuine Upgrade Guaranteed"
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    gradient: "from-blue-600/20 to-purple-600/10",
    inStock: true,
    deliveryTime: "5 - 15 Mins",
    featured: true
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs Voice AI Starter & Creator",
    category: "Voice & Audio",
    badge: "High Demand",
    type: "Shared / Private Activation",
    rating: 4.92,
    reviewsCount: 275,
    shortDesc: "Ultra-realistic AI Voice Cloning & Text-to-Speech with 100,000+ characters & multi-language support.",
    description: "Generate natural, hyper-realistic human speech in 29+ languages. Clone any voice with just 1 minute of audio, create expressive audiobooks, viral video voiceovers, and dynamic podcasts.",
    plans: {
      "1m": { usd: 6.99, pkr: 1950, inr: 580, eur: 6.40 },
      "3m": { usd: 18.99, pkr: 5300, inr: 1580, eur: 17.50 },
      "1y": { usd: 59.99, pkr: 16800, inr: 5000, eur: 55.00 }
    },
    types: [
      { id: "shared", label: "Shared High-Volume Key", extra: 0 },
      { id: "private", label: "Private Creator Account (100k Chars)", extra: 4.00 }
    ],
    features: [
      "100,000 Characters Monthly Allowance",
      "Instant & Professional Voice Cloning",
      "Supports English, Urdu, Hindi, Spanish & 26+ Languages",
      "Voice Library with 1,000+ Premium Accents",
      "Commercial Rights Included",
      "Full API Key Access Available"
    ],
    icon: "https://elevenlabs.io/favicon.ico",
    gradient: "from-amber-500/20 to-orange-500/10",
    inStock: true,
    deliveryTime: "< 10 Mins",
    featured: true
  },
  {
    id: "midjourney-pro",
    name: "Midjourney v6.1 Pro & Fast Hours",
    category: "Graphic Design",
    badge: "Top Rated",
    type: "Private Discord Server / Shared Bot",
    rating: 4.97,
    reviewsCount: 410,
    shortDesc: "Photorealistic AI Art & Design Generator with Fast GPU Hours, Stealth Mode, and Web Interface.",
    description: "Create breathtaking, hyper-realistic digital artwork, logos, brand assets, product mockups, and architectural renders using Midjourney v6.1. Includes private Discord channel access and web dashboard access.",
    plans: {
      "1m": { usd: 7.99, pkr: 2240, inr: 660, eur: 7.30 },
      "3m": { usd: 21.99, pkr: 6150, inr: 1830, eur: 20.20 },
      "1y": { usd: 69.99, pkr: 19500, inr: 5800, eur: 64.00 }
    },
    types: [
      { id: "shared", label: "Shared Private Bot Channel", extra: 0 },
      { id: "private", label: "Private Account (Fast Hours)", extra: 6.00 }
    ],
    features: [
      "Midjourney v6.1, Niji 6 & Style Reference Models",
      "Stealth Mode (Keep your prompts private)",
      "Web Dashboard & Midjourney Alpha Access",
      "Fast GPU Generation Hours included",
      "High Resolution Upscaling & Variations",
      "Full Commercial License for Designs"
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    gradient: "from-purple-500/20 to-pink-500/10",
    inStock: true,
    deliveryTime: "Instant < 5 Mins",
    featured: true
  },
  {
    id: "grok-3",
    name: "Grok 3 & xAI SuperGrok Access",
    category: "AI Tools",
    badge: "New Release 2026",
    type: "Shared / Private Account",
    rating: 4.91,
    reviewsCount: 164,
    shortDesc: "Uncensored Reasoning, Real-Time X Data Feed, DeepSearch, and Visual Generation.",
    description: "Unlock xAI's flagship Grok 3 AI model. Featuring unmatched real-time intelligence directly connected to global news streams, advanced mathematical reasoning, coding superpowers, and image analysis.",
    plans: {
      "1m": { usd: 5.49, pkr: 1540, inr: 460, eur: 5.00 },
      "3m": { usd: 14.49, pkr: 4050, inr: 1200, eur: 13.30 },
      "1y": { usd: 46.99, pkr: 13100, inr: 3900, eur: 43.00 }
    },
    types: [
      { id: "shared", label: "Shared Screen Access", extra: 0 },
      { id: "private", label: "Private Dedicated Account", extra: 3.50 }
    ],
    features: [
      "Grok 3 DeepSearch & Reasoning Engine",
      "Real-time X (Twitter) Global Data Pipeline",
      "Uncensored Knowledge Base & Code Generator",
      "High Speed Image & Diagram Analysis",
      "24/7 Dedicated Uptime Guarantee",
      "Full Replacement Warranty"
    ],
    icon: "https://abs.twimg.com/favicons/twitter.3.ico",
    gradient: "from-zinc-500/20 to-neutral-500/10",
    inStock: true,
    deliveryTime: "Instant < 5 Mins",
    featured: true
  },
  {
    id: "veo3-ai-video",
    name: "Veo3 AI Video & Runway Gen-3 Combo",
    category: "Video Editing",
    badge: "AI Video",
    type: "Private Studio Credits",
    rating: 4.89,
    reviewsCount: 142,
    shortDesc: "Generate cinematic 1080p photorealistic videos from text & images with high temporal consistency.",
    description: "Create movie-quality AI video clips with Veo3 and Runway Gen-3 Alpha. Generate fluid camera motions, lip-syncing characters, special effects, and cinematic commercials in 1080p HD.",
    plans: {
      "1m": { usd: 8.99, pkr: 2500, inr: 750, eur: 8.20 },
      "3m": { usd: 23.99, pkr: 6700, inr: 2000, eur: 22.00 },
      "1y": { usd: 79.99, pkr: 22400, inr: 6600, eur: 73.00 }
    },
    types: [
      { id: "shared", label: "Shared Studio Pool (500 Credits)", extra: 0 },
      { id: "private", label: "Private Account ( Unlimited Fast )", extra: 7.00 }
    ],
    features: [
      "Cinematic 1080p 60FPS AI Video Generation",
      "Text-to-Video, Image-to-Video & Motion Control",
      "Realistic Physics, Camera Panning & Zoom Control",
      "Export MP4 without Watermarks",
      "Commercial Usage Authorized",
      "Fast Generation Speed"
    ],
    icon: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=120&auto=format&fit=crop&q=80",
    gradient: "from-red-500/20 to-rose-500/10",
    inStock: true,
    deliveryTime: "< 10 Mins",
    featured: true
  },
  {
    id: "canva-pro",
    name: "Canva Pro Lifetime / 1 Year Team",
    category: "Graphic Design",
    badge: "Must Have",
    type: "Personal Brand Activation",
    rating: 4.99,
    reviewsCount: 820,
    shortDesc: "100M+ Stock Photos, Magic Studio AI, Brand Kit, Background Remover, and Premium Templates.",
    description: "Upgrade your existing Canva account to Canva Pro! Enjoy 100 Million+ premium stock photos, videos, audio tracks, fonts, Magic Resize, Magic Studio AI tools, and unlimited folder organization.",
    plans: {
      "1m": { usd: 1.99, pkr: 550, inr: 160, eur: 1.80 },
      "3m": { usd: 4.99, pkr: 1400, inr: 420, eur: 4.60 },
      "1y": { usd: 12.99, pkr: 3600, inr: 1080, eur: 12.00 }
    },
    types: [
      { id: "email", label: "Invite to Your Personal Canva Email", extra: 0 }
    ],
    features: [
      "Activated directly on YOUR personal email",
      "Magic Studio AI & Magic Eraser Tool",
      "100M+ Premium Stock Photos, Videos & Vectors",
      "One-click Background Removal",
      "Brand Kits, Custom Fonts & SVG Export",
      "100% Private Cloud Storage for your designs"
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    gradient: "from-cyan-400/20 to-emerald-400/10",
    inStock: true,
    deliveryTime: "Instant < 2 Mins",
    featured: true
  },
  {
    id: "claude-pro",
    name: "Claude 3.5 Sonnet & Opus Pro",
    category: "AI Tools",
    badge: "Developer Choice",
    type: "Shared / Private Account",
    rating: 4.94,
    reviewsCount: 230,
    shortDesc: "Superior Coding, Complex Document Analysis, Artifacts Interactive Preview, and Long Context.",
    description: "Access Anthropic's state-of-the-art AI model Claude 3.5 Sonnet. Best-in-class coding capabilities, complex logic, interactive Artifacts visual component preview, and long PDF analysis.",
    plans: {
      "1m": { usd: 5.99, pkr: 1680, inr: 500, eur: 5.50 },
      "3m": { usd: 15.99, pkr: 4480, inr: 1330, eur: 14.60 },
      "1y": { usd: 49.99, pkr: 14000, inr: 4150, eur: 46.00 }
    },
    types: [
      { id: "shared", label: "Shared Pro Login", extra: 0 },
      { id: "private", label: "Private Dedicated Account", extra: 3.50 }
    ],
    features: [
      "Claude 3.5 Sonnet & Claude 3 Opus Models",
      "Live Artifacts Interactive App/Code Builder",
      "200K Context Window (Analyze entire codebases)",
      "5x Higher Usage Limits than Free Tier",
      "PDF, Image & Data Sheet Multi-modal Uploads",
      "30-Day Auto Replacement Warranty"
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/70/Anthropic_logo.svg",
    gradient: "from-orange-500/20 to-amber-500/10",
    inStock: true,
    deliveryTime: "Instant < 5 Mins",
    featured: false
  },
  {
    id: "adobe-cc",
    name: "Adobe Creative Cloud All Apps (80GB)",
    category: "Graphic Design",
    badge: "Official License",
    type: "Personal Adobe Account Upgrade",
    rating: 4.96,
    reviewsCount: 310,
    shortDesc: "Photoshop, Premiere Pro, Illustrator, After Effects, Acrobat Pro, Firefly AI & 80GB Cloud.",
    description: "Get genuine Adobe Creative Cloud All Apps subscription activated on your own personal Adobe account. Includes 20+ desktop & mobile apps, Generative Fill Firefly credits, Typekit fonts, and Cloud storage.",
    plans: {
      "1m": { usd: 9.99, pkr: 2800, inr: 830, eur: 9.10 },
      "3m": { usd: 26.99, pkr: 7550, inr: 2250, eur: 24.80 },
      "1y": { usd: 89.99, pkr: 25200, inr: 7500, eur: 82.50 }
    },
    types: [
      { id: "email", label: "Redeem on Personal Adobe ID", extra: 0 }
    ],
    features: [
      "Photoshop, Premiere, Illustrator, After Effects, InDesign",
      "Adobe Firefly AI Generative Fill & Generative Expand",
      "80GB Official Adobe Cloud Storage",
      "Adobe Fonts (1000s of licensed fonts)",
      "Updates straight from official Creative Cloud Desktop App",
      "Genuine Enterprise/Redemption Key"
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Cloud.svg",
    gradient: "from-red-600/20 to-pink-600/10",
    inStock: true,
    deliveryTime: "10 - 20 Mins",
    featured: false
  }
];

// --- ARTICLES / BLOG DATABASE ---
const ARTICLES_DATA = [
  {
    id: "safe-shared-chatgpt-guide",
    title: "How to Use Shared ChatGPT Plus Safely in 2026: Complete Security Guide",
    category: "Tutorials & Safety",
    readTime: "4 min read",
    date: "July 24, 2026",
    author: "MissingAdil Tech Team",
    summary: "Learn essential tips to protect your privacy, export conversations, and maximize your productivity when using shared ChatGPT Plus & Team accounts.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    content: `
      <h2>Why Shared Accounts Are the Most Cost-Effective Choice</h2>
      <p>Subscribing directly to every top AI tool can easily cost over $200 per month. Shared accounts offer a 75% to 85% discount while giving you the exact same model performance (GPT-4o, o3-mini, and DALL-E 3).</p>
      
      <h3>1. Turn Off Chat History for Sensitive Data</h3>
      <p>Inside ChatGPT Settings > Data Controls, you can easily toggle off "Data Training". This prevents your private prompts from being used to train the global model and keeps your personal workflow private.</p>

      <h3>2. Use Separate Custom GPT Workspaces</h3>
      <p>When generating custom code or blog drafts, create isolated Custom GPTs or use the Canvas workspace. Canvas allows side-by-side editing without cluttering the main conversation feed.</p>

      <h3>3. Why Buy From MissingAdil.store?</h3>
      <p>Unlike random sellers on Telegram or social media, missingadil.store provides automated credentials, dedicated screen isolation, and a 100% instant replacement warranty if OpenAI updates account policies.</p>
    `
  },
  {
    id: "top-ai-video-generators-2026",
    title: "Top 5 AI Video Generators in 2026: Veo3 vs Sora vs Runway Gen-3 vs CapCut Pro",
    category: "AI Video",
    readTime: "6 min read",
    date: "July 20, 2026",
    author: "MissingAdil Reviewer",
    summary: "A breakdown of rendering speed, video realism, camera controls, and pricing across the best AI video tools in 2026.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80",
    content: `
      <h2>The Revolution of AI Video Creation</h2>
      <p>Video content dominates YouTube Shorts, TikTok, and Instagram Reels. Having access to high-end AI video synthesis tools allows creators to produce high-budget video clips in seconds.</p>

      <h3>1. Veo3 AI Video</h3>
      <p>Google's Veo3 delivers incredible 1080p 60fps physics accuracy and understands complex camera movements like sweeping cinematic dollies and drone pans.</p>

      <h3>2. CapCut Pro Auto-Captions & FX</h3>
      <p>While generative video creates clips, CapCut Pro is the essential tool for editing, auto-generating multi-lingual animated subtitles, and applying trending audio filters.</p>
    `
  },
  {
    id: "capcut-pro-vs-free-comparison",
    title: "CapCut Pro vs Free Version: Is the Upgrade Worth It for Content Creators?",
    category: "Software Review",
    readTime: "5 min read",
    date: "July 18, 2026",
    author: "MissingAdil Media Team",
    summary: "Detailed comparison of CapCut Pro features including AI noise reduction, 4K export, body effects, auto-subtitles, and cloud sync.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80",
    content: `
      <h2>Why CapCut Pro Has Become the #1 Video Editor Globally</h2>
      <p>CapCut Pro is no longer just a mobile app; its desktop application competes directly with Adobe Premiere Pro and Final Cut Pro for short-form video producers.</p>

      <h3>Key Pro Features You Unlock:</h3>
      <ul>
        <li><strong>AI Auto Captions:</strong> Automatically transcribes spoken voiceovers into stylish kinetic text presets.</li>
        <li><strong>AI Background Remover:</strong> One-click background removal for green-screen free editing.</li>
        <li><strong>4K 60FPS Crisp Export:</strong> Zero watermark, maximum bitrate for viral TikToks and YouTube Shorts.</li>
      </ul>
    `
  }
];

// --- STATE MANAGER ---
let currentCurrency = localStorage.getItem('mas_currency') || 'USD';
const currencySymbols = { USD: '$', PKR: '₨', INR: '₹', EUR: '€' };

// --- UTILITY FUNCTIONS ---
function formatPrice(plans, duration = '1m') {
  if (!plans || !plans[duration]) return '$0.00';
  const priceObj = plans[duration];
  if (currentCurrency === 'PKR') return `₨ ${priceObj.pkr.toLocaleString()}`;
  if (currentCurrency === 'INR') return `₹ ${priceObj.inr.toLocaleString()}`;
  if (currentCurrency === 'EUR') return `€ ${priceObj.eur.toFixed(2)}`;
  return `$${priceObj.usd.toFixed(2)}`;
}

function getNumericPrice(plans, duration = '1m') {
  if (!plans || !plans[duration]) return 0;
  const priceObj = plans[duration];
  if (currentCurrency === 'PKR') return priceObj.pkr;
  if (currentCurrency === 'INR') return priceObj.inr;
  if (currentCurrency === 'EUR') return priceObj.eur;
  return priceObj.usd;
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-md text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${
    type === 'success' 
      ? 'bg-slate-900/95 border-emerald-500/50 text-emerald-400' 
      : 'bg-slate-900/95 border-cyan-500/50 text-cyan-400'
  }`;

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full ${type === 'success' ? 'bg-emerald-400 animate-ping' : 'bg-cyan-400'}"></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- WHATSAPP ORDER GENERATOR ---
function buildWhatsAppUrl(product, planKey = '1m', accountTypeLabel = 'Shared') {
  const phone = '923000000000'; // Target seller WhatsApp
  const planNames = { '1m': '1 Month', '3m': '3 Months', '1y': '1 Year' };
  const formattedPrice = formatPrice(product.plans, planKey);
  
  const text = `Hello MissingAdil Store! 👋\n\n` +
    `I would like to order:\n` +
    `🛒 *Tool:* ${product.name}\n` +
    `⏱️ *Duration:* ${planNames[planKey] || '1 Month'}\n` +
    `👤 *Account Type:* ${accountTypeLabel}\n` +
    `💰 *Price:* ${formattedPrice}\n` +
    `🌐 *Store:* missingadil.store\n\n` +
    `Please provide payment details & instant credentials. Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// --- RENDER PRODUCTS GRID ---
function renderProductsGrid(containerId, productsList) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (productsList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
        <div class="text-4xl mb-3">🔍</div>
        <h3 class="text-xl font-bold text-slate-200">No tools found</h3>
        <p class="text-slate-400 text-sm mt-1">Try adjusting your search terms or filter category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = productsList.map(p => {
    const priceText = formatPrice(p.plans, '1m');
    const waUrl = buildWhatsAppUrl(p, '1m', p.types[0]?.label || 'Shared');

    return `
      <div class="group relative bg-[#0F172A] hover:bg-[#0F172A]/90 border border-slate-800 hover:border-purple-500 rounded-xl p-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] flex flex-col justify-between overflow-hidden cursor-pointer">
        <!-- Glow accent background -->
        <div class="absolute -top-24 -right-24 w-40 h-40 bg-gradient-to-br ${p.gradient} rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
        
        <div>
          <!-- Header info -->
          <div class="flex items-center justify-between mb-4">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20 uppercase tracking-wider">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              ${p.badge}
            </span>
            <div class="flex items-center gap-1 text-amber-400 text-xs font-semibold">
              ★ <span>${p.rating}</span>
              <span class="text-slate-500">(${p.reviewsCount})</span>
            </div>
          </div>

          <!-- Logo & Title -->
          <div class="flex items-start gap-3.5 mb-3">
            <div class="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img src="${p.icon}" alt="${p.name}" class="w-full h-full object-contain" referrerPolicy="no-referrer" onerror="this.src='https://picsum.photos/seed/${p.id}/100/100'" />
            </div>
            <div>
              <h3 class="font-bold text-white group-hover:text-purple-400 transition-colors text-base leading-snug">
                <a href="product-detail.html?id=${p.id}">${p.name}</a>
              </h3>
              <p class="text-xs text-slate-400 mt-0.5">${p.type}</p>
            </div>
          </div>

          <!-- Short description -->
          <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
            ${p.shortDesc}
          </p>

          <!-- Key features badges -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${p.features.slice(0, 3).map(f => `
              <span class="text-[11px] px-2 py-0.5 rounded-md bg-slate-900/80 text-slate-300 border border-slate-800">
                ✓ ${f}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Footer Pricing & CTA -->
        <div class="pt-4 border-t border-slate-800">
          <div class="flex items-center justify-between mb-3">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Starting From</span>
              <div class="flex items-baseline gap-1">
                <span class="text-xl font-extrabold text-white">${priceText}</span>
                <span class="text-xs text-slate-500 font-normal">/mo</span>
              </div>
            </div>
            <span class="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
              ⚡ ${p.deliveryTime}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <a href="product-detail.html?id=${p.id}" class="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center transition-colors">
              Details
            </a>
            <button onclick="openQuickBuyModal('${p.id}')" class="w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- QUICK BUY MODAL ---
function openQuickBuyModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-buy-modal');
  const content = document.getElementById('quick-buy-content');
  if (!modal || !content) return;

  let selectedPlan = '1m';
  let selectedType = product.types[0]?.label || 'Shared';

  function updateModalUI() {
    const formattedPrice = formatPrice(product.plans, selectedPlan);
    const waUrl = buildWhatsAppUrl(product, selectedPlan, selectedType);

    content.innerHTML = `
      <div class="flex items-center justify-between pb-4 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 p-2 flex items-center justify-center">
            <img src="${product.icon}" alt="${product.name}" class="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h3 class="font-bold text-white text-base">${product.name}</h3>
            <p class="text-xs text-cyan-400">missingadil.store Guarantee</p>
          </div>
        </div>
        <button onclick="closeQuickBuyModal()" class="text-slate-400 hover:text-white p-1 rounded-lg">✕</button>
      </div>

      <!-- Plan Duration Selection -->
      <div class="my-5">
        <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Select Duration</label>
        <div class="grid grid-cols-3 gap-2">
          ${Object.keys(product.plans).map(key => {
            const planNames = { '1m': '1 Month', '3m': '3 Months', '1y': '1 Year' };
            const isActive = selectedPlan === key;
            return `
              <button onclick="selectModalPlan('${productId}', '${key}')" class="py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                isActive 
                  ? 'bg-purple-500/20 border-purple-500 text-purple-300 shadow-lg shadow-purple-500/10' 
                  : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-slate-600'
              }">
                ${planNames[key]}
                <span class="block text-[11px] font-normal text-slate-400 mt-0.5">${formatPrice(product.plans, key)}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Account Type Selection -->
      <div class="mb-5">
        <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Select Access Type</label>
        <div class="space-y-2">
          ${product.types.map(t => {
            const isActive = selectedType === t.label;
            return `
              <button onclick="selectModalType('${productId}', '${t.label}')" class="w-full py-2.5 px-3 rounded-xl text-xs font-semibold border flex items-center justify-between transition-all ${
                isActive 
                  ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300' 
                  : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-slate-600'
              }">
                <span>✓ ${t.label}</span>
                <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Included</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Summary & Order CTA -->
      <div class="pt-4 border-t border-slate-800 bg-slate-900/60 p-4 rounded-xl">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs text-slate-400">Total Price:</span>
          <span class="text-2xl font-black text-white">${formattedPrice}</span>
        </div>

        <a href="${waUrl}" target="_blank" onclick="showToast('Connecting to WhatsApp agent...', 'info')" class="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.12-1.332a9.92 9.92 0 0 0 4.891 1.282h.004c5.506 0 9.99-4.478 9.99-9.984 0-2.668-1.039-5.176-2.927-7.062A9.919 9.919 0 0 0 12.012 2zm0 18.128h-.003a8.212 8.212 0 0 1-4.188-1.152l-.301-.179-3.111.81.826-3.033-.197-.313a8.232 8.232 0 0 1-1.265-4.303c0-4.551 3.703-8.253 8.258-8.253 2.206 0 4.28.86 5.839 2.42 1.558 1.559 2.416 3.633 2.416 5.838 0 4.552-3.703 8.255-8.254 8.255z"/></svg>
          Order via WhatsApp
        </a>
        <p class="text-[11px] text-slate-400 text-center mt-2.5">
          🔒 Instant delivery via WhatsApp & Email • 100% Replacement Warranty
        </p>
      </div>
    `;
  }

  window.selectModalPlan = (pid, plan) => {
    selectedPlan = plan;
    updateModalUI();
  };

  window.selectModalType = (pid, type) => {
    selectedType = type;
    updateModalUI();
  };

  updateModalUI();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeQuickBuyModal() {
  const modal = document.getElementById('quick-buy-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// --- DYNAMIC PRODUCT DETAIL PAGE RENDERER ---
function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id') || 'chatgpt-plus';
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];

  const container = document.getElementById('product-detail-container');
  if (!container) return;

  let activePlan = '1m';
  let activeType = product.types[0]?.label || 'Shared';

  function render() {
    const formattedPrice = formatPrice(product.plans, activePlan);
    const waUrl = buildWhatsAppUrl(product, activePlan, activeType);

    container.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left Column: Tool Details -->
        <div class="lg:col-span-7 space-y-6">
          <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
            <div class="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br ${product.gradient} rounded-full blur-3xl opacity-40"></div>

            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                ${product.badge}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                In Stock & Ready
              </span>
            </div>

            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 p-3 flex items-center justify-center shrink-0">
                <img src="${product.icon}" alt="${product.name}" class="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h1 class="text-2xl lg:text-3xl font-extrabold text-white">${product.name}</h1>
                <p class="text-sm text-cyan-400 font-medium">${product.category} • missingadil.store</p>
              </div>
            </div>

            <p class="text-slate-300 text-sm leading-relaxed mb-6">
              ${product.description}
            </p>

            <div class="border-t border-slate-800 pt-5">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Features & Benefits</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${product.features.map(f => `
                  <div class="flex items-center gap-2 text-xs text-slate-200 bg-slate-800/40 p-2.5 rounded-xl border border-slate-800">
                    <span class="text-emerald-400 font-bold">✓</span>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Login Instructions & Replacement Warranty -->
          <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <span>🛡️</span> MissingAdil Replacement Warranty & Delivery
            </h3>
            <div class="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>• <strong>Delivery Speed:</strong> Your account details/invite link are delivered within 2 to 15 minutes via WhatsApp or Email after order confirmation.</p>
              <p>• <strong>30-Day Auto Replacement Guarantee:</strong> If any technical issue occurs with your account during your subscription period, our support team replaces your login within 1 hour!</p>
              <p>• <strong>Private & Secure:</strong> All shared accounts feature dedicated user screens to ensure your prompts remain private.</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Order Card -->
        <div class="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-24 shadow-2xl">
          <h2 class="text-lg font-bold text-white mb-4">Configure Your Order</h2>

          <!-- Duration Picker -->
          <div class="mb-5">
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Choose Plan Duration</label>
            <div class="grid grid-cols-3 gap-2">
              ${['1m', '3m', '1y'].map(key => {
                const labels = { '1m': '1 Month', '3m': '3 Months', '1y': '1 Year' };
                const isActive = activePlan === key;
                return `
                  <button onclick="setDetailPlan('${key}')" class="py-3 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                    isActive 
                      ? 'bg-purple-500/20 border-purple-500 text-purple-300 shadow-lg shadow-purple-500/10' 
                      : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:border-slate-600'
                  }">
                    ${labels[key]}
                    <span class="block text-[11px] font-normal text-slate-300 mt-0.5">${formatPrice(product.plans, key)}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Account Type Picker -->
          <div class="mb-6">
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Access Type</label>
            <div class="space-y-2">
              ${product.types.map(t => {
                const isActive = activeType === t.label;
                return `
                  <button onclick="setDetailType('${t.label}')" class="w-full py-3 px-3.5 rounded-xl text-xs font-semibold border flex items-center justify-between transition-all ${
                    isActive 
                      ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300' 
                      : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:border-slate-600'
                  }">
                    <span>${t.label}</span>
                    <span class="text-[10px] font-bold text-emerald-400">AVAILABLE</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Pricing Breakdown & Checkout -->
          <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 mb-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs text-slate-400">Total Selected Price:</span>
              <span class="text-3xl font-black text-white">${formattedPrice}</span>
            </div>
            <p class="text-[11px] text-emerald-400 font-medium">✓ Instant WhatsApp Credentials Delivery Included</p>
          </div>

          <a href="${waUrl}" target="_blank" onclick="showToast('Connecting to WhatsApp checkout...', 'success')" class="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 transition-all">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.12-1.332a9.92 9.92 0 0 0 4.891 1.282h.004c5.506 0 9.99-4.478 9.99-9.984 0-2.668-1.039-5.176-2.927-7.062A9.919 9.919 0 0 0 12.012 2zm0 18.128h-.003a8.212 8.212 0 0 1-4.188-1.152l-.301-.179-3.111.81.826-3.033-.197-.313a8.232 8.232 0 0 1-1.265-4.303c0-4.551 3.703-8.253 8.258-8.253 2.206 0 4.28.86 5.839 2.42 1.558 1.559 2.416 3.633 2.416 5.838 0 4.552-3.703 8.255-8.254 8.255z"/></svg>
            Order via WhatsApp Now
          </a>
        </div>
      </div>
    `;
  }

  window.setDetailPlan = (plan) => {
    activePlan = plan;
    render();
  };

  window.setDetailType = (type) => {
    activeType = type;
    render();
  };

  render();
}

// --- DYNAMIC ARTICLE DETAIL PAGE RENDERER ---
function initArticleDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get('id') || 'safe-shared-chatgpt-guide';
  const article = ARTICLES_DATA.find(a => a.id === articleId) || ARTICLES_DATA[0];

  const container = document.getElementById('article-detail-container');
  if (!container) return;

  container.innerHTML = `
    <article class="max-w-3xl mx-auto bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-10 space-y-6">
      <div class="flex items-center gap-3 text-xs text-cyan-400 font-semibold">
        <span class="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">${article.category}</span>
        <span>•</span>
        <span>${article.date}</span>
        <span>•</span>
        <span>${article.readTime}</span>
      </div>

      <h1 class="text-2xl md:text-4xl font-extrabold text-white leading-tight">${article.title}</h1>

      <div class="flex items-center gap-3 pt-2 border-t border-slate-800">
        <div class="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm">
          MA
        </div>
        <div>
          <div class="text-xs font-bold text-white">${article.author}</div>
          <div class="text-[11px] text-slate-400">Official MissingAdil Store Contributor</div>
        </div>
      </div>

      <div class="rounded-2xl overflow-hidden border border-slate-800 my-6">
        <img src="${article.image}" alt="${article.title}" class="w-full h-64 md:h-80 object-cover" referrerPolicy="no-referrer" />
      </div>

      <div class="prose prose-invert max-w-none text-slate-300 text-sm md:text-base leading-relaxed space-y-4">
        ${article.content}
      </div>

      <div class="pt-8 border-t border-slate-800 flex items-center justify-between">
        <a href="articles.html" class="text-xs font-bold text-cyan-400 hover:underline">← Back to Articles</a>
        <a href="products.html" class="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors">
          Explore Digital Tools →
        </a>
      </div>
    </article>
  `;
}

// --- GLOBAL EVENT LISTENERS & INITIALIZERS ---
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Currency Switcher
  const currencySelects = document.querySelectorAll('.currency-select');
  currencySelects.forEach(select => {
    select.value = currentCurrency;
    select.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      localStorage.setItem('mas_currency', currentCurrency);
      showToast(`Currency changed to ${currentCurrency}`);
      
      // Re-render active views
      if (document.getElementById('featured-products-grid')) {
        const featured = PRODUCTS_DATA.filter(p => p.featured);
        renderProductsGrid('featured-products-grid', featured);
      }
      if (document.getElementById('all-products-grid')) {
        renderProductsGrid('all-products-grid', PRODUCTS_DATA);
      }
      if (document.getElementById('product-detail-container')) {
        initProductDetailPage();
      }
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuDrawer.classList.toggle('hidden');
    });
  }

  // Home Page Featured Products
  if (document.getElementById('featured-products-grid')) {
    const featured = PRODUCTS_DATA.filter(p => p.featured);
    renderProductsGrid('featured-products-grid', featured);
  }

  // Catalog Products Page Search & Filter
  if (document.getElementById('all-products-grid')) {
    let currentFilter = 'All';
    let searchQuery = '';

    const searchInput = document.getElementById('catalog-search-input');
    const filterButtons = document.querySelectorAll('.category-filter-btn');

    function applyCatalogFilters() {
      const filtered = PRODUCTS_DATA.filter(p => {
        const matchesCategory = currentFilter === 'All' || p.category.toLowerCase() === currentFilter.toLowerCase();
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || 
                              p.description.toLowerCase().includes(searchQuery) || 
                              p.category.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
      });
      renderProductsGrid('all-products-grid', filtered);
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyCatalogFilters();
      });
    }

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('bg-purple-600', 'text-white', 'shadow-[0_0_15px_rgba(147,51,234,0.3)]', 'font-bold');
          b.classList.add('bg-slate-900', 'text-slate-300', 'border', 'border-slate-800');
        });
        
        btn.classList.remove('bg-slate-900', 'text-slate-300', 'border', 'border-slate-800');
        btn.classList.add('bg-purple-600', 'text-white', 'shadow-[0_0_15px_rgba(147,51,234,0.3)]', 'font-bold');

        currentFilter = btn.dataset.category || 'All';
        applyCatalogFilters();
      });
    });

    renderProductsGrid('all-products-grid', PRODUCTS_DATA);
  }

  // Initialize Product Detail Page if on product-detail.html
  if (document.getElementById('product-detail-container')) {
    initProductDetailPage();
  }

  // Initialize Articles List Page
  if (document.getElementById('articles-grid')) {
    const container = document.getElementById('articles-grid');
    container.innerHTML = ARTICLES_DATA.map(a => `
      <div class="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300">
        <img src="${a.image}" alt="${a.title}" class="w-full h-48 object-cover" referrerPolicy="no-referrer" />
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-2">
              <span>${a.category}</span>
              <span>•</span>
              <span>${a.readTime}</span>
            </div>
            <h3 class="text-base font-bold text-white mb-2 leading-snug">
              <a href="article-detail.html?id=${a.id}" class="hover:text-cyan-300 transition-colors">${a.title}</a>
            </h3>
            <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">${a.summary}</p>
          </div>
          <a href="article-detail.html?id=${a.id}" class="text-xs font-bold text-cyan-400 hover:underline">Read Article →</a>
        </div>
      </div>
    `).join('');
  }

  // Initialize Article Detail Page if on article-detail.html
  if (document.getElementById('article-detail-container')) {
    initArticleDetailPage();
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-content');
    if (btn && content) {
      btn.addEventListener('click', () => {
        content.classList.toggle('hidden');
        const icon = btn.querySelector('.faq-icon');
        if (icon) icon.classList.toggle('rotate-180');
      });
    }
  });
});

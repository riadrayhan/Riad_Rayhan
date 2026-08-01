// ==========================================
// PROJECTS DATA
// Single source of truth for the Projects grid — add a new project by
// pushing an object here instead of hand-writing a project-card block.
// ==========================================
const projectsData = [
    // ----- Featured -----
    {
        featured: true,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop',
        alt: 'CyberEye AI - Intelligent Crime Detection System',
        tags: ['Python', 'YOLO11', 'FastAPI', 'AI Agent'],
        title: 'CyberEye AI — Crime Detection System',
        description: `Real-time, edge-friendly crime detection over CCTV/webcam feeds. Combines YOLO11 object + pose
            detection with a rule-based AI Agent that fuses weapon, fire, fight, running, loitering, and
            crowd anomaly signals into severity-coded alerts. FastAPI + WebSocket dashboard, fully offline.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/ICDS' }],
        btnUrl: 'https://github.com/riadrayhan/ICDS',
        btnText: 'View Project'
    },
    {
        featured: true,
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
        alt: 'RR Locker - EMI Phone Locker',
        tags: ['Full-stack', 'EMI Phone Locker', 'Device Management', 'REST API'],
        title: 'RR Locker — EMI Phone Locker',
        description: `A full-stack EMI phone locker solution for mobile device financing. Remotely locks a customer's
            phone when EMI installments are overdue and automatically unlocks it once payment clears.
            Features admin dashboard, device registration, scheduled lock/unlock rules, push notifications,
            and a secure REST API backend for installment tracking.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/RR-Locker' }],
        btnUrl: 'https://github.com/riadrayhan/RR-Locker',
        btnText: 'View Project'
    },
    {
        featured: true,
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        alt: 'Mirror - Screen Mirroring Platform',
        tags: ['Full-stack', 'Android', 'Admin Panel', 'WebSocket'],
        title: 'Mirror — Screen Mirroring Platform',
        description: `A full-stack screen-mirroring system built from three coordinated components: a native
            Android client (ScreenMirrorApp) that captures and streams frames, a Node.js backend that
            handles authentication, persistence, and real-time relay, and a web admin panel for user
            management and live monitoring. Includes permissions gating, auto-reconnect handling, and
            auto-switching to the active streaming device.`,
        overlay: [
            { type: 'github', url: 'https://github.com/riadrayhan/Mirror' },
            { type: 'external', url: 'https://mirror-roan.vercel.app/' }
        ],
        btnUrl: 'https://github.com/riadrayhan/Mirror',
        btnText: 'View Project'
    },
    {
        featured: true,
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop',
        alt: 'AutoCall - Smart Customer Support System',
        tags: ['Full-stack', 'WebRTC', 'Node.js', 'Flutter'],
        title: 'AutoCall — Smart Customer Support',
        description: `A full-stack system for real two-way internet calls (WebRTC) triggered from an admin panel to
            Flutter mobile users. Built for automated EMI payment reminders in Bangla — admin clicks "Call",
            the user's phone rings, and live audio flows peer-to-peer. Features JWT auth, Socket.io signaling,
            auto-call for EMI-due users, retry queues, call history, and STUN/TURN NAT traversal.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/customer-care-autocall' }],
        btnUrl: 'https://github.com/riadrayhan/customer-care-autocall',
        btnText: 'View Project'
    },
    {
        featured: true,
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
        alt: 'RR Auto Downloader - Chrome Extension',
        tags: ['Chrome Extension', 'JavaScript', 'Manifest V3', 'Automation'],
        title: 'RR Auto Downloader',
        description: `A Chrome / Edge (Manifest V3) extension that automatically clicks every download icon on a
            CloudPBX Incoming CDR page — top to bottom, with safe delays and auto-scrolling for off-screen
            rows. Features Start / Pause / Resume / Stop controls, live progress tracking, error logging,
            and session-persistent state, using a service worker, content script, and popup UI.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan1/RR-Auto-Clicker' }],
        btnUrl: 'https://github.com/riadrayhan1/RR-Auto-Clicker',
        btnText: 'View Project'
    },
    {
        featured: true,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop',
        alt: 'Voice Clone Studio - Voice Cloning Toolkit',
        tags: ['Python', 'XTTS v2', 'OpenVoice V2', 'FastAPI'],
        title: 'Voice Clone Studio',
        description: `A CPU-only, production-grade voice-cloning toolkit with two engines — XTTS v2 and OpenVoice V2 —
            supporting 17+ languages plus a Bengali fallback. Includes a FastAPI backend, Gradio UI, CLI,
            Docker support, a speaker library with cached embeddings, long-text chunking, and audio
            preprocessing tuned to preserve voice identity.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan1/voice-clone-studio' }],
        btnUrl: 'https://github.com/riadrayhan1/voice-clone-studio',
        btnText: 'View Project'
    },
    {
        featured: true,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop',
        alt: 'PinkYue Live - Dating App',
        tags: ['Flutter', 'Dating App', 'Live Video Chat', 'Dart'],
        title: 'PinkYue Live — Dating App',
        description: `A cross-platform dating application built with Flutter, featuring live video chat, match
            discovery, swipe-to-like profiles, real-time messaging, and built-in beauty filters. Offers
            a polished, production-ready UI across Android, iOS, Web, and Windows.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/pink-yue-live' }],
        btnUrl: 'https://github.com/riadrayhan/pink-yue-live',
        btnText: 'View Project'
    },
    {
        featured: true,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        alt: 'SahajMobile - Customer EMI App',
        tags: ['Flutter', 'EMI App', 'Localization', 'Provider'],
        title: 'SahajMobile — Customer App',
        description: `A Flutter mobile app for Sahaj Mobile BD customers to manage their EMI accounts. Customers
            can view their ledger, make repayments via in-app payment (bKash, Nagad, Bank, Card), track
            payment history, get support, and submit feedback surveys — with full English & Bangla
            (বাংলা) localization, OTP login, in-app tutorials, and forced update support.`,
        overlay: [{ type: 'github', url: 'https://github.com/sahajmobile/sm-customer' }],
        btnUrl: 'https://github.com/sahajmobile/sm-customer',
        btnText: 'View Project'
    },
    {
        featured: true,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop',
        alt: 'SahajMobile Shop Manager - Agent EMI App',
        tags: ['Flutter', 'Riverpod', 'ML Kit OCR', 'GoRouter'],
        title: 'SahajMobile — Shop Manager',
        description: `A Flutter app for agents to manage mobile device financing and installments. Handles the full
            flow — product selection, installment calculation, ID card OCR via Google ML Kit, document
            verification, digital contract signing, and QR-based device activation. Built with Riverpod 3.0,
            GoRouter, and secure token-based authentication.`,
        overlay: [{ type: 'play', url: 'https://play.google.com/store/apps/details?id=com.sahajmobile.sahajmobile' }],
        btnUrl: 'https://play.google.com/store/apps/details?id=com.sahajmobile.sahajmobile',
        btnText: 'View Project'
    },

    // ----- New additions -----
    {
        featured: true,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop',
        alt: "Parkinson's Disease Detection - Multi-modal Screening Tool",
        tags: ['Flask', 'scikit-learn', 'PyTorch', 'Multi-modal ML'],
        title: "Parkinson's Disease Detection",
        description: `A research-grade, multi-modal Parkinson's screening tool combining a symptom checklist with
            three independent ML analyses — voice (jitter/shimmer extracted via Praat), handwriting
            (ResNet18 features + Logistic Regression on spiral/wave drawings), and gait (stride variability
            from a walking video) — merged into one weighted verdict. Every step gates its input for
            plausibility first, so a non-vowel recording or a non-drawing photo is rejected before scoring.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/parkinson_diseases' }],
        btnUrl: 'https://github.com/riadrayhan/parkinson_diseases',
        btnText: 'View Project'
    },
    {
        featured: true,
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop',
        alt: 'AI Agent Bridge - VS Code Extension',
        tags: ['TypeScript', 'VS Code Extension', 'OpenRouter API', 'Agent Tools'],
        title: 'AI Agent Bridge',
        description: `A standalone VS Code extension that brings free OpenRouter-hosted AI models into an in-editor
            Agent Mode, similar to Kilo Code or Cline. Ships a dark-themed chat panel plus five built-in
            agent tools — read/write/list files, execute terminal commands, and search the workspace — with
            API keys stored in VS Code's encrypted global state and file access sandboxed to the workspace root.`,
        overlay: [],
        btnUrl: null,
        btnText: 'Private Project'
    },
    {
        featured: true,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
        alt: 'Air Gesture Gravity - Webcam Hand Gesture Desktop',
        tags: ['Python', 'MediaPipe', 'Computer Vision', 'OpenCV'],
        title: 'Air Gesture Gravity',
        description: `A webcam-controlled virtual desktop driven entirely by hand gestures. MediaPipe hand-landmark
            tracking recognizes point, pinch, 'L', and fist gestures to open real mini web-apps — YouTube,
            Maps, a voice-typing Notepad, Calculator, Paint — inside a gravity-physics UI where cards drop,
            bounce, and fall away. Includes voice search/dictation and a full point → expand → active state machine.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Air-Gesture-Gravity' }],
        btnUrl: 'https://github.com/riadrayhan/Air-Gesture-Gravity',
        btnText: 'View Project'
    },
    {
        featured: true,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop',
        alt: 'AI Auto-Reply Bot - WhatsApp and Messenger Automation',
        tags: ['Node.js', 'Python', 'Playwright', 'Claude API'],
        title: 'AI Auto-Reply Bot',
        description: `A dual-channel AI auto-reply system — a Node.js bot for WhatsApp (QR login, session-persistent)
            and a Python/Playwright bot for Messenger (headless Facebook login) — both wired to the Claude
            API to generate context-aware replies with a configurable persona, including Bangla-language
            responses, plus per-channel controls like group-reply toggles and check-interval tuning.`,
        overlay: [],
        btnUrl: null,
        btnText: 'Private Project'
    },
    {
        featured: true,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
        alt: 'DermaScan AI - Skin Analysis Android App',
        tags: ['Kotlin', 'Jetpack Compose', 'TensorFlow Lite', 'Groq Vision API'],
        title: 'DermaScan AI — Skin Analysis',
        description: `An Android (Kotlin + Jetpack Compose) skin-analysis app that runs two engines on every photo:
            an on-device TensorFlow Lite EfficientNetV2 classifier for named dermatological conditions, and
            a Groq vision LLM for skin type, a 0–100 health score, and personalized recommendations. Includes
            an image-quality gate, uncertainty handling that asks users to retake low-confidence shots, scan
            history (Room), and English/Bengali localization.`,
        overlay: [],
        btnUrl: null,
        btnText: 'Private Project'
    },
    {
        featured: true,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
        alt: 'Asthma and TB Screening - Bilingual Flutter App',
        tags: ['Flutter', 'Dart', 'Audio DSP', 'Bilingual'],
        title: 'Asthma & TB Screening',
        description: `A bilingual (English/বাংলা) Flutter screening prototype for asthma and tuberculosis with
            deliberately conservative, deterministic triage rules — a single acute cough can never trigger a
            TB referral, DSP checks reject non-tonal blowing before scoring a wheeze signal, and results are
            phrased as "clinical review recommended" rather than a diagnosis. All recordings and symptom
            data stay on-device.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Asthma-TB_Detection' }],
        btnUrl: 'https://github.com/riadrayhan/Asthma-TB_Detection',
        btnText: 'View Project'
    },

    // ----- More projects -----
    {
        featured: false,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
        alt: 'Breast Cancer Detection',
        tags: ['Flutter', 'TensorFlow', 'ML'],
        title: 'Breast Cancer Detector',
        description: `A Machine Learning app that detects breast cancer from X-ray files using TensorFlow Lite model integration.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Breast-Cancer' }],
        btnUrl: 'https://github.com/riadrayhan/Breast-Cancer',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop',
        alt: 'Blood Fighters',
        tags: ['Flutter', 'Firebase', 'Dart'],
        title: 'Blood Fighters',
        description: `A blood donation and request application where users can request blood and donate to save lives. Free for everyone.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/BloodFighters' }],
        btnUrl: 'https://github.com/riadrayhan/BloodFighters',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'java',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop',
        alt: 'Catch The Thief',
        tags: ['Java', 'ML', 'Face Recognition'],
        title: 'Catch The Thief',
        description: `Insert thief's image and scan faces to identify and catch the thief easily using face recognition technology.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Catch-The-Thief' }],
        btnUrl: 'https://github.com/riadrayhan/Catch-The-Thief',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        alt: 'Misti Bari',
        tags: ['Flutter', 'E-Commerce', 'Firebase'],
        title: 'Misti Bari',
        description: `An E-Commerce application for Bengali sweets and desserts. Order your favorite foods like sweets, doi, sondesh.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Misti_Bari' }],
        btnUrl: 'https://github.com/riadrayhan/Misti_Bari',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
        alt: 'Secret Data Protected',
        tags: ['Flutter', 'Machine Learning', 'Security'],
        title: 'Secret Data Protected',
        description: `Protect your secret data using advanced Machine Learning algorithms for enhanced security and privacy.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Secret-Data-Protected' }],
        btnUrl: 'https://github.com/riadrayhan/Secret-Data-Protected',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
        alt: 'Riad Live TV',
        tags: ['Flutter', 'Streaming', 'API'],
        title: 'Riad Live TV',
        description: `Stream live TV from 12+ countries with 20+ channels available. Watch your favorite shows anywhere, anytime.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Riad_Live_TV' }],
        btnUrl: 'https://github.com/riadrayhan/Riad_Live_TV',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
        alt: 'Tax Calculator',
        tags: ['Flutter', 'Finance', 'Calculator'],
        title: 'Tax Calculator',
        description: `Calculate your taxes easily with this intuitive Flutter app. Perfect for personal and business tax calculations.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/TaxCalculator' }],
        btnUrl: 'https://github.com/riadrayhan/TaxCalculator',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop',
        alt: 'UddoktaPay',
        tags: ['Flutter', 'Payment Gateway', 'API'],
        title: 'UddoktaPay Integration',
        description: `A complete UddoktaPay payment gateway integration for Flutter applications. Easy to implement and secure.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/uddoktapay' }],
        btnUrl: 'https://github.com/riadrayhan/uddoktapay',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
        alt: 'Riad Diseases GPT',
        tags: ['Transformers', 'Question Answering', '12.8M'],
        title: 'Riad Diseases GPT',
        description: `A lightweight medical QA model (12.8M params) with 6-layer Transformer architecture, trained on disease-related data for answering health questions.`,
        overlay: [{ type: 'huggingface', url: 'https://huggingface.co/riadrayhan111/riad-diseases-gpt' }],
        btnUrl: 'https://huggingface.co/riadrayhan111/riad-diseases-gpt',
        btnText: 'View on HuggingFace'
    },
    {
        featured: false,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
        alt: 'Face Swap Studio',
        tags: ['Python', 'AI', 'Face Swap'],
        title: 'Face Swap Studio',
        description: `Unlimited image & video face swap software. Fully offline, GPU-optimized, copyright-safe output. Supports both CPU & GPU processing.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Face-swap-studio' }],
        btnUrl: 'https://github.com/riadrayhan/Face-swap-studio',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop',
        alt: 'Music Generator Studio',
        tags: ['Python', 'ML', 'Music AI'],
        title: 'Music Generator Studio',
        description: `AI-powered unlimited music generator from lyrics. Fully offline, 100% copyright-free output, CPU & GPU supported. Up to 3 min tracks.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Music-Generator-Studio' }],
        btnUrl: 'https://github.com/riadrayhan/Music-Generator-Studio',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
        alt: 'Riad Web Cloner',
        tags: ['Python', 'Web Scraping', 'Automation'],
        title: 'Riad Web Cloner',
        description: `One-click website cloning tool. Paste any URL, get full runnable source code locally. Perfect for learning, offline review & rapid prototyping.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/website_cloner_pro' }],
        btnUrl: 'https://github.com/riadrayhan/website_cloner_pro',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
        alt: 'AI Model Training Studio',
        tags: ['Python', 'TensorFlow', 'Deep Learning'],
        title: 'AI Model Training Studio',
        description: `No-code ML/DL training software. Upload a dataset, auto-detect labels, train models & generate .tflite, .h5 and label.txt files instantly.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan1/Riad-Model-Training' }],
        btnUrl: 'https://github.com/riadrayhan1/Riad-Model-Training',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop',
        alt: 'Email Validator Checker',
        tags: ['Python', 'Flask', 'Multi-threaded'],
        title: 'Email Validator Checker',
        description: `Lightning-fast email validation tool with 30 concurrent workers. Supports CSV & ZIP uploads, MX record verification, and real-time stats.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan1/Email-Validator-Checker' }],
        btnUrl: 'https://github.com/riadrayhan1/Email-Validator-Checker',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop',
        alt: 'Riad Live TV',
        tags: ['Flutter', 'Live Streaming', 'IPTV'],
        title: 'Riad Live TV',
        description: `Live TV streaming app offering 20+ channels from 12+ countries worldwide. Watch live news, entertainment, and sports on the go.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Riad_Live_TV' }],
        btnUrl: 'https://github.com/riadrayhan/Riad_Live_TV',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
        alt: 'Tax Calculator',
        tags: ['Flutter', 'Dart', 'Finance'],
        title: 'Tax Calculator',
        description: `A clean, intuitive Flutter application for calculating taxes quickly and accurately. Simple inputs, instant results.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/TaxCalculator' }],
        btnUrl: 'https://github.com/riadrayhan/TaxCalculator',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
        alt: 'r_container Flutter Package',
        tags: ['Flutter', 'Open Source', 'Package'],
        title: 'r_container',
        description: `An open-source Flutter package providing an enhanced container widget with rich, customizable parameters for faster UI development.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/r_container' }],
        btnUrl: 'https://github.com/riadrayhan/r_container',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop',
        alt: 'Dart Code Compiler',
        tags: ['Dart', 'Compiler', 'Tooling'],
        title: 'Dart Code Compiler',
        description: `A lightweight Dart code compiler/runner that lets you write, compile, and execute Dart snippets in a streamlined interface.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Dart-Code-Compiler' }],
        btnUrl: 'https://github.com/riadrayhan/Dart-Code-Compiler',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=400&fit=crop',
        alt: 'Quiz WebApp',
        tags: ['Flutter Web', 'Quiz', 'Dart'],
        title: 'Quiz WebApp',
        description: `An online quiz web application for interactive multiple-choice tests with scoring, timer, and a clean responsive UI.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Quiz_WebApp' }],
        btnUrl: 'https://github.com/riadrayhan/Quiz_WebApp',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop',
        alt: 'News Reader',
        tags: ['Flutter', 'REST API', 'News'],
        title: 'News Reader',
        description: `A Flutter news app powered by NewsAPI and NewYorkTimes API with category-wise news, search, and clean article reading experience.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/NewsReader' }],
        btnUrl: 'https://github.com/riadrayhan/NewsReader',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'flutter',
        image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
        alt: 'Video Calling App',
        tags: ['Flutter', 'WebRTC', 'Real-time'],
        title: 'Video Calling App',
        description: `A real-time video calling application built in Flutter featuring peer-to-peer audio/video, mute controls, and a clean UI.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Video_Calling_App' }],
        btnUrl: 'https://github.com/riadrayhan/Video_Calling_App',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
        alt: 'Secret Data Protected',
        tags: ['ML', 'Security', 'Encryption'],
        title: 'Secret Data Protected',
        description: `A Machine Learning–based approach to securing sensitive data with intelligent protection and access control layers.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Secret-Data-Protected' }],
        btnUrl: 'https://github.com/riadrayhan/Secret-Data-Protected',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'ml',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        alt: 'Xentro REST API',
        tags: ['Node.js', 'MongoDB', 'REST API'],
        title: 'Xentro REST API',
        description: `A RESTful backend built with Node.js and MongoDB, providing CRUD endpoints, authentication, and a scalable API architecture.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/xentro_API_Create' }],
        btnUrl: 'https://github.com/riadrayhan/xentro_API_Create',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'java',
        image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&h=400&fit=crop',
        alt: 'Detectors Android',
        tags: ['Java', 'Android', 'Sensors'],
        title: 'Detectors',
        description: `A native Android application built in Java that leverages device sensors for real-time detection and monitoring features.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/Detectors' }],
        btnUrl: 'https://github.com/riadrayhan/Detectors',
        btnText: 'View Project'
    },
    {
        featured: false,
        category: 'java',
        image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&h=400&fit=crop',
        alt: 'Whiteboard App',
        tags: ['Android', 'Canvas', 'Drawing'],
        title: 'Whiteboard',
        description: `A digital whiteboard / painting app with freehand drawing, color picker, brush sizes, and canvas tools for creative expression.`,
        overlay: [{ type: 'github', url: 'https://github.com/riadrayhan/whiteboard' }],
        btnUrl: 'https://github.com/riadrayhan/whiteboard',
        btnText: 'View Project'
    }
];

// ==========================================
// RENDER PROJECTS GRID
// ==========================================
const PROJECT_LINK_ICONS = {
    github: 'fab fa-github',
    external: 'fas fa-external-link-alt',
    huggingface: 'fas fa-robot',
    play: 'fab fa-google-play'
};

function renderProjectCard(project) {
    const overlayHtml = project.overlay.length
        ? project.overlay.map(link => `
            <a href="${link.url}" target="_blank" class="project-link">
                <i class="${PROJECT_LINK_ICONS[link.type] || 'fas fa-link'}"></i>
            </a>`).join('')
        : `<span class="project-link disabled" title="Private project — source not published">
                <i class="fas fa-lock"></i>
           </span>`;

    const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    const btnHtml = project.btnUrl
        ? `<a href="${project.btnUrl}" target="_blank" class="project-btn">
                <span>${project.btnText}</span>
                <i class="fas fa-arrow-right"></i>
           </a>`
        : `<span class="project-btn disabled">
                <span>${project.btnText}</span>
                <i class="fas fa-lock"></i>
           </span>`;

    return `
        <div class="project-card${project.featured ? ' featured' : ''}" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.alt}">
                <div class="project-overlay">${overlayHtml}</div>
            </div>
            <div class="project-content">
                <div class="project-tags">${tagsHtml}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                ${btnHtml}
            </div>
        </div>`;
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = projectsData.map(renderProjectCard).join('');
}

renderProjects();

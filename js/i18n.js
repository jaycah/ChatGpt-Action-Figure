// Multi-language support for AI Action Figure website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language selector
    initLanguageSelector();
    
    // Apply translations based on browser language or saved preference
    const initialLang = detectUserLanguage();
    applyTranslations(initialLang);
});

// Translation object - key phrases translated to different languages
const translations = {
    // English (default)
    "en": {
        "nav_features": "Features",
        "nav_pricing": "Pricing",
        "nav_showcase": "Showcase",
        "nav_how_it_works": "How It Works",
        "btn_try_free": "Try Free",
        "btn_sign_in": "Sign In",
        "hero_badge": "🔥 Join the viral ChatGPT Action Figure trend",
        "hero_title": "Transform Your Photos into Stunning ChatGPT Action Figures",
        "hero_desc": "AI Action Figure uses cutting-edge AI technology to transform your selfies into amazing ChatGPT action figure toys. Join the viral trend with our free trial credits today and see what our AI can create for you.",
        "btn_transform": "Create My ChatGPT Figure",
        "btn_examples": "See Examples",
        "promo_banner": "🎁 Limited time offer: Extra credits for new AI Action Figure users",
        "happy_users": "from 99+ happy users",
        "tech_title": "AI Action Figure is built with cutting-edge AI technology",
        "about_title": "What is AI Action Figure?",
        "about_desc": "AI Action Figure is a cutting-edge platform that transforms your ordinary photos into ChatGPT-powered action figure toys - the latest viral trend sweeping social media. Our AI technology provides the most realistic action figure transformations available.",
        "feature1_title": "ChatGPT Action Figure Conversion",
        "feature1_desc": "Transform your selfies and portraits into professionally designed ChatGPT action figure toys using our advanced AI models inspired by OpenAI's technology.",
        "feature2_title": "Social Media Ready",
        "feature2_desc": "Get shareable images perfect for Instagram, TikTok, and other platforms where ChatGPT action figures are going viral.",
        "feature3_title": "Instant AI Generation",
        "feature3_desc": "Receive your personalized ChatGPT action figure images in seconds, ready to share with your friends.",
        "cta_title": "Transform Yourself Into A ChatGPT Action Figure Today",
        "cta_desc": "Join thousands of users creating amazing AI-generated action figures.",
        "footer_about": "About",
        "footer_resources": "Resources",
        "footer_contact": "Contact",
        "copyright": "© 2025 • AI Action Figure. All rights reserved. Created by Jiang Fei (江飞)",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service"
    },
    // French
    "fr": {
        "nav_features": "Fonctionnalités",
        "nav_pricing": "Tarifs",
        "nav_showcase": "Galerie",
        "nav_how_it_works": "Comment Ça Marche",
        "btn_try_free": "Essai Gratuit",
        "btn_sign_in": "Connexion",
        "hero_badge": "🔥 Rejoignez la tendance virale des figurines ChatGPT",
        "hero_title": "Transformez vos photos en superbes figurines ChatGPT",
        "hero_desc": "AI Action Figure utilise une technologie d'IA de pointe pour transformer vos selfies en incroyables figurines ChatGPT. Rejoignez la tendance virale avec nos crédits d'essai gratuits aujourd'hui et découvrez ce que notre IA peut créer pour vous.",
        "btn_transform": "Créer Ma Figurine ChatGPT",
        "btn_examples": "Voir Exemples",
        "promo_banner": "🎁 Offre à durée limitée: Crédits supplémentaires pour les nouveaux utilisateurs",
        "happy_users": "de 99+ utilisateurs satisfaits",
        "tech_title": "AI Action Figure est construit avec une technologie d'IA de pointe",
        "about_title": "Qu'est-ce que AI Action Figure?",
        "about_desc": "AI Action Figure est une plateforme de pointe qui transforme vos photos ordinaires en figurines ChatGPT - la dernière tendance virale qui envahit les réseaux sociaux. Notre technologie d'IA fournit les transformations de figurines les plus réalistes disponibles.",
        "feature1_title": "Conversion en Figurine ChatGPT",
        "feature1_desc": "Transformez vos selfies et portraits en figurines ChatGPT conçues professionnellement grâce à nos modèles d'IA avancés inspirés par la technologie d'OpenAI.",
        "feature2_title": "Prêt pour les Réseaux Sociaux",
        "feature2_desc": "Obtenez des images partageables parfaites pour Instagram, TikTok et autres plateformes où les figurines ChatGPT deviennent virales.",
        "feature3_title": "Génération IA Instantanée",
        "feature3_desc": "Recevez vos images de figurines ChatGPT personnalisées en quelques secondes, prêtes à être partagées avec vos amis.",
        "cta_title": "Transformez-vous en Figurine ChatGPT Aujourd'hui",
        "cta_desc": "Rejoignez des milliers d'utilisateurs qui créent d'incroyables figurines générées par IA.",
        "footer_about": "À Propos",
        "footer_resources": "Ressources",
        "footer_contact": "Contact",
        "copyright": "© 2025 • AI Action Figure. Tous droits réservés. Créé par Jiang Fei (江飞)",
        "privacy": "Politique de Confidentialité",
        "terms": "Conditions d'Utilisation"
    },
    // German
    "de": {
        "nav_features": "Funktionen",
        "nav_pricing": "Preise",
        "nav_showcase": "Galerie",
        "nav_how_it_works": "Funktionsweise",
        "btn_try_free": "Kostenlos Testen",
        "btn_sign_in": "Anmelden",
        "hero_badge": "🔥 Schließen Sie sich dem viralen ChatGPT-Actionfiguren-Trend an",
        "hero_title": "Verwandeln Sie Ihre Fotos in atemberaubende ChatGPT-Actionfiguren",
        "hero_desc": "AI Action Figure nutzt modernste KI-Technologie, um Ihre Selfies in erstaunliche ChatGPT-Actionfiguren zu verwandeln. Schließen Sie sich dem viralen Trend mit unseren kostenlosen Testguthaben an und sehen Sie, was unsere KI für Sie erschaffen kann.",
        "btn_transform": "Meine ChatGPT-Figur Erstellen",
        "btn_examples": "Beispiele Ansehen",
        "promo_banner": "🎁 Zeitlich begrenztes Angebot: Zusätzliche Credits für neue Benutzer",
        "happy_users": "von über 99 zufriedenen Benutzern",
        "tech_title": "AI Action Figure ist mit modernster KI-Technologie gebaut",
        "about_title": "Was ist AI Action Figure?",
        "about_desc": "AI Action Figure ist eine hochmoderne Plattform, die Ihre gewöhnlichen Fotos in ChatGPT-gestützte Actionfiguren verwandelt - der neueste virale Trend in den sozialen Medien. Unsere KI-Technologie bietet die realistischsten Actionfiguren-Transformationen, die verfügbar sind.",
        "feature1_title": "ChatGPT-Actionfiguren-Umwandlung",
        "feature1_desc": "Verwandeln Sie Ihre Selfies und Porträts in professionell gestaltete ChatGPT-Actionfiguren mit unseren fortschrittlichen KI-Modellen, die von der OpenAI-Technologie inspiriert sind.",
        "feature2_title": "Bereit für Soziale Medien",
        "feature2_desc": "Erhalten Sie teilbare Bilder, die perfekt für Instagram, TikTok und andere Plattformen sind, auf denen ChatGPT-Actionfiguren viral gehen.",
        "feature3_title": "Sofortige KI-Generierung",
        "feature3_desc": "Erhalten Sie Ihre personalisierten ChatGPT-Actionfiguren-Bilder in Sekunden, bereit zum Teilen mit Ihren Freunden.",
        "cta_title": "Verwandeln Sie sich noch heute in eine ChatGPT-Actionfigur",
        "cta_desc": "Schließen Sie sich Tausenden von Benutzern an, die erstaunliche KI-generierte Actionfiguren erstellen.",
        "footer_about": "Über Uns",
        "footer_resources": "Ressourcen",
        "footer_contact": "Kontakt",
        "copyright": "© 2025 • AI Action Figure. Alle Rechte vorbehalten. Erstellt von Jiang Fei (江飞)",
        "privacy": "Datenschutzrichtlinie",
        "terms": "Nutzungsbedingungen"
    },
    // Italian
    "it": {
        "nav_features": "Funzionalità",
        "nav_pricing": "Prezzi",
        "nav_showcase": "Galleria",
        "nav_how_it_works": "Come Funziona",
        "btn_try_free": "Prova Gratuita",
        "btn_sign_in": "Accedi",
        "hero_badge": "🔥 Unisciti al trend virale delle action figure ChatGPT",
        "hero_title": "Trasforma le tue foto in straordinarie action figure ChatGPT",
        "hero_desc": "AI Action Figure utilizza tecnologia AI all'avanguardia per trasformare i tuoi selfie in incredibili action figure ChatGPT. Unisciti al trend virale con i nostri crediti di prova gratuiti e scopri cosa può creare la nostra AI per te.",
        "btn_transform": "Crea La Mia Action Figure ChatGPT",
        "btn_examples": "Vedi Esempi",
        "promo_banner": "🎁 Offerta a tempo limitato: Crediti extra per i nuovi utenti",
        "happy_users": "da oltre 99 utenti soddisfatti",
        "tech_title": "AI Action Figure è costruito con tecnologia AI all'avanguardia",
        "about_title": "Cos'è AI Action Figure?",
        "about_desc": "AI Action Figure è una piattaforma all'avanguardia che trasforma le tue foto ordinarie in action figure alimentate da ChatGPT - l'ultimo trend virale sui social media. La nostra tecnologia AI fornisce le trasformazioni di action figure più realistiche disponibili.",
        "feature1_title": "Conversione in Action Figure ChatGPT",
        "feature1_desc": "Trasforma i tuoi selfie e ritratti in action figure ChatGPT progettate professionalmente utilizzando i nostri modelli AI avanzati ispirati alla tecnologia di OpenAI.",
        "feature2_title": "Pronto per i Social Media",
        "feature2_desc": "Ottieni immagini condivisibili perfette per Instagram, TikTok e altre piattaforme dove le action figure ChatGPT stanno diventando virali.",
        "feature3_title": "Generazione AI Istantanea",
        "feature3_desc": "Ricevi le tue immagini personalizzate di action figure ChatGPT in pochi secondi, pronte per essere condivise con i tuoi amici.",
        "cta_title": "Trasformati in un'Action Figure ChatGPT Oggi",
        "cta_desc": "Unisciti a migliaia di utenti che creano incredibili action figure generate dall'AI.",
        "footer_about": "Chi Siamo",
        "footer_resources": "Risorse",
        "footer_contact": "Contatti",
        "copyright": "© 2025 • AI Action Figure. Tutti i diritti riservati. Creato da Jiang Fei (江飞)",
        "privacy": "Informativa sulla Privacy",
        "terms": "Termini di Servizio"
    },
    // Korean
    "ko": {
        "nav_features": "기능",
        "nav_pricing": "가격",
        "nav_showcase": "쇼케이스",
        "nav_how_it_works": "이용 방법",
        "btn_try_free": "무료 체험",
        "btn_sign_in": "로그인",
        "hero_badge": "🔥 바이럴 ChatGPT 액션 피규어 트렌드에 참여하세요",
        "hero_title": "당신의 사진을 멋진 ChatGPT 액션 피규어로 변환하세요",
        "hero_desc": "AI Action Figure는 첨단 AI 기술을 사용하여 당신의 셀카를 놀라운 ChatGPT 액션 피규어 장난감으로 변환합니다. 무료 체험 크레딧으로 바이럴 트렌드에 참여하고 우리의 AI가 당신을 위해 무엇을 만들어낼 수 있는지 확인하세요.",
        "btn_transform": "내 ChatGPT 피규어 만들기",
        "btn_examples": "예시 보기",
        "promo_banner": "🎁 한정 제공: 신규 사용자를 위한 추가 크레딧",
        "happy_users": "99명 이상의 만족 사용자로부터",
        "tech_title": "AI Action Figure는 첨단 AI 기술로 구축되었습니다",
        "about_title": "AI Action Figure란 무엇인가요?",
        "about_desc": "AI Action Figure는 일반 사진을 ChatGPT 기반 액션 피규어 장난감으로 변환하는 첨단 플랫폼입니다 - 소셜 미디어에서 유행하는 최신 바이럴 트렌드입니다. 우리의 AI 기술은 가장 사실적인 액션 피규어 변환을 제공합니다.",
        "feature1_title": "ChatGPT 액션 피규어 변환",
        "feature1_desc": "OpenAI 기술에서 영감을 받은 고급 AI 모델을 사용하여 셀카와 인물 사진을 전문적으로 디자인된 ChatGPT 액션 피규어 장난감으로 변환하세요.",
        "feature2_title": "소셜 미디어 준비 완료",
        "feature2_desc": "ChatGPT 액션 피규어가 바이럴되고 있는 Instagram, TikTok 및 기타 플랫폼에 완벽한 공유 가능한 이미지를 얻으세요.",
        "feature3_title": "즉각적인 AI 생성",
        "feature3_desc": "맞춤형 ChatGPT 액션 피규어 이미지를 몇 초 안에 받아 친구들과 공유할 준비를 하세요.",
        "cta_title": "오늘 ChatGPT 액션 피규어로 변신하세요",
        "cta_desc": "AI로 생성된 놀라운 액션 피규어를 만드는 수천 명의 사용자에 동참하세요.",
        "footer_about": "소개",
        "footer_resources": "리소스",
        "footer_contact": "연락처",
        "copyright": "© 2025 • AI Action Figure. 모든 권리 보유. Jiang Fei (江飞) 제작",
        "privacy": "개인정보 처리방침",
        "terms": "서비스 약관"
    },
    // Japanese
    "ja": {
        "nav_features": "機能",
        "nav_pricing": "料金",
        "nav_showcase": "ショーケース",
        "nav_how_it_works": "使い方",
        "btn_try_free": "無料トライアル",
        "btn_sign_in": "ログイン",
        "hero_badge": "🔥 話題のChatGPTアクションフィギュアトレンドに参加しよう",
        "hero_title": "あなたの写真を素晴らしいChatGPTアクションフィギュアに変換",
        "hero_desc": "AI Action Figureは最先端のAI技術を使用して、あなたの自撮り写真を驚くべきChatGPTアクションフィギュアに変換します。無料トライアルクレジットで話題のトレンドに参加し、私たちのAIがあなたのために何を作成できるかをご覧ください。",
        "btn_transform": "ChatGPTフィギュアを作成",
        "btn_examples": "例を見る",
        "promo_banner": "🎁 期間限定オファー：新規ユーザーに追加クレジット",
        "happy_users": "99人以上の満足ユーザーから",
        "tech_title": "AI Action Figureは最先端のAI技術で構築されています",
        "about_title": "AI Action Figureとは？",
        "about_desc": "AI Action Figureは、通常の写真をChatGPT搭載のアクションフィギュアに変換する最先端のプラットフォームです - ソーシャルメディアで話題の最新トレンドです。私たちのAI技術は、最も現実的なアクションフィギュア変換を提供します。",
        "feature1_title": "ChatGPTアクションフィギュア変換",
        "feature1_desc": "OpenAIの技術からインスピレーションを得た高度なAIモデルを使用して、自撮りや肖像写真をプロフェッショナルにデザインされたChatGPTアクションフィギュアに変換します。",
        "feature2_title": "ソーシャルメディア対応",
        "feature2_desc": "ChatGPTアクションフィギュアが話題になっているInstagram、TikTok、その他のプラットフォームに最適な共有可能な画像を取得します。",
        "feature3_title": "即時AI生成",
        "feature3_desc": "パーソナライズされたChatGPTアクションフィギュア画像を数秒で受け取り、友達と共有する準備をしましょう。",
        "cta_title": "今日からChatGPTアクションフィギュアに変身しよう",
        "cta_desc": "AI生成の素晴らしいアクションフィギュアを作成する何千人ものユーザーに参加しましょう。",
        "footer_about": "概要",
        "footer_resources": "リソース",
        "footer_contact": "お問い合わせ",
        "copyright": "© 2025 • AI Action Figure. All rights reserved. 作成者：Jiang Fei (江飞)",
        "privacy": "プライバシーポリシー",
        "terms": "利用規約"
    },
    // Chinese
    "zh": {
        "nav_features": "功能",
        "nav_pricing": "价格",
        "nav_showcase": "展示",
        "nav_how_it_works": "使用方法",
        "btn_try_free": "免费试用",
        "btn_sign_in": "登录",
        "hero_badge": "🔥 加入病毒式传播的ChatGPT动作人偶潮流",
        "hero_title": "将您的照片转变为惊艳的ChatGPT动作人偶",
        "hero_desc": "AI Action Figure使用尖端AI技术将您的自拍照转变为令人惊叹的ChatGPT动作人偶。立即使用我们的免费试用额度加入这一潮流，看看我们的AI能为您创造什么。",
        "btn_transform": "创建我的ChatGPT人偶",
        "btn_examples": "查看示例",
        "promo_banner": "🎁 限时优惠：新用户额外赠送额度",
        "happy_users": "来自99+位满意用户",
        "tech_title": "AI Action Figure采用尖端AI技术构建",
        "about_title": "什么是AI Action Figure？",
        "about_desc": "AI Action Figure是一个尖端平台，可以将您的普通照片转变为ChatGPT驱动的动作人偶——这是社交媒体上最新的病毒式传播潮流。我们的AI技术提供最逼真的动作人偶转换。",
        "feature1_title": "ChatGPT动作人偶转换",
        "feature1_desc": "使用我们受OpenAI技术启发的高级AI模型，将您的自拍和肖像照转变为专业设计的ChatGPT动作人偶。",
        "feature2_title": "社交媒体就绪",
        "feature2_desc": "获取完美适合Instagram、TikTok和其他ChatGPT动作人偶正在病毒式传播的平台上分享的图片。",
        "feature3_title": "即时AI生成",
        "feature3_desc": "在几秒钟内接收您的个性化ChatGPT动作人偶图像，随时可以与朋友分享。",
        "cta_title": "今天就将自己变成ChatGPT动作人偶",
        "cta_desc": "加入数千名正在创建惊人AI生成动作人偶的用户。",
        "footer_about": "关于我们",
        "footer_resources": "资源",
        "footer_contact": "联系我们",
        "copyright": "© 2025 • AI Action Figure. 保留所有权利。由江飞创建",
        "privacy": "隐私政策",
        "terms": "服务条款"
    }
};

// 使用window对象使translations可全局访问
window.translations = translations;

// Function to initialize language selector
function initLanguageSelector() {
    const languageSelector = document.getElementById('language-selector');
    if (!languageSelector) return;
    
    // Set default language from browser or localStorage
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && window.translations[savedLanguage]) {
        languageSelector.value = savedLanguage;
        applyTranslations(savedLanguage);
    } else {
        // Try to get browser language
        const browserLang = navigator.language.split('-')[0];
        if (window.translations[browserLang]) {
            languageSelector.value = browserLang;
            applyTranslations(browserLang);
        }
    }
    
    // Add event listener for language change
    languageSelector.addEventListener('change', function() {
        const selectedLang = this.value;
        applyTranslations(selectedLang);
        localStorage.setItem('preferred-language', selectedLang);
    });
}

// Function to apply translations to the page
function applyTranslations(lang) {
    if (!window.translations[lang]) return;
    
    const t = window.translations[lang];
    
    // Update navigation
    updateElementText('[href="#features"]', t.nav_features);
    updateElementText('[href="#pricing"]', t.nav_pricing);
    updateElementText('[href="#showcase"]', t.nav_showcase);
    updateElementText('[href="#how-it-works"]', t.nav_how_it_works);
    
    // Update buttons
    updateElementText('[href="#try-free"]', t.btn_try_free);
    updateElementText('[href="#sign-in"]', t.btn_sign_in);
    
    // Update hero section
    updateElementText('.trending-badge', t.hero_badge);
    updateElementText('.hero h1', t.hero_title);
    updateElementText('.hero p', t.hero_desc);
    updateElementText('[href="#transform"]', t.btn_transform);
    updateElementText('[href="#examples"]', t.btn_examples);
    updateElementText('.promo-banner', t.promo_banner);
    updateElementText('.testimonials-preview', t.happy_users);
    
    // Update tech stack section
    updateElementText('.tech-stack h2', t.tech_title);
    
    // Update about section
    updateElementText('#what-is h2', t.about_title);
    updateElementText('#what-is > p', t.about_desc);
    
    // Update features list
    updateElementText('.features-list li:nth-child(1) h3', t.feature1_title);
    updateElementText('.features-list li:nth-child(1) p', t.feature1_desc);
    updateElementText('.features-list li:nth-child(2) h3', t.feature2_title);
    updateElementText('.features-list li:nth-child(2) p', t.feature2_desc);
    updateElementText('.features-list li:nth-child(3) h3', t.feature3_title);
    updateElementText('.features-list li:nth-child(3) p', t.feature3_desc);
    
    // Update CTA section
    updateElementText('.cta h2', t.cta_title);
    updateElementText('.cta p', t.cta_desc);
    
    // Update footer
    updateElementText('.footer-column:nth-child(1) h3', t.footer_about);
    updateElementText('.footer-column:nth-child(2) h3', t.footer_resources);
    updateElementText('.footer-column:nth-child(3) h3', t.footer_contact);
    updateElementText('.copyright', t.copyright);
    updateElementText('[href="#privacy"]', t.privacy);
    updateElementText('[href="#terms"]', t.terms);
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
}

// Helper function to update text content of an element if it exists
function updateElementText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

// Detect user's language automatically
function detectUserLanguage() {
    // Get browser language
    let browserLang = navigator.language || navigator.userLanguage;
    browserLang = browserLang.split('-')[0]; // Get the primary language part
    
    // Check if we support this language
    if (window.translations[browserLang]) {
        return browserLang;
    }
    
    // Default to English if not supported
    return 'en';
} 
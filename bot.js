
        // ========== SAIBOT - WITTY AI ASSISTANT ==========
// Copy this to your JavaScript file or inside <> tags

const SaiBot = {
    currentLang: 'en',
    isOpen: false,
    messageHistory: [],
    
    // ============================================
    // SITE KNOWLEDGE - EDIT THIS SECTION WITH YOUR INFO
    // ============================================
    siteData: {
        name: "Saiyam Jain",
        title: "AI Orchestrator & Vibe Coder",
        location: "Muzaffarnagar, India",
        email: "saiyamjain2405@gmail.com",
        phone: "+91 6398068797",
        experience: "4+ years",
        projectsCount: 10,
        skills: ["AI/ML", "TensorFlow", "PyTorch", "React", "Node.js", "Three.js", "Python", "JavaScript"],
        social: {
            github: { url: "https://github.com/saiyam-creator", handle: "@saiyam-creator" },
            twitter: { url: "https://x.com/saiyam2405", handle: "@saiyam2405" },
            instagram: { url: "https://instagram.com/saiiyam_jain", handle: "@saiiyam_jain" },
            linkedin: { url: "https://www.linkedin.com/in/saiyam-jain-68094a292/", handle: "Saiyam Jain" }
        },
        projects: [
            { name: "Stock Calculator", category: "Finance", link: "https://saiyam-creator.github.io/stock-calculator/" },
            { name: "Investment Calculator", category: "Finance", link: "https://saiyam-creator.github.io/investment-calculate/" },
            { name: "English Corrector", category: "Education", link: "https://saiyam-creator.github.io/correct-english/" },
            { name: "Solar System", category: "Education", link: "https://saiyam-creator.github.io/solar-system/" },
            { name: "All About Shapes", category: "Education", link: "https://saiyam-creator.github.io/all-about-shapes/" },
            { name: "Life GPS", category: "AI Tool", link: "https://life-gps-coral.vercel.app/" },
            { name: "WorthIT", category: "Finance", link: "https://saiyam-creator.github.io/worthit-app/" },
            { name: "Gita Ka Gyan", category: "Spiritual AI", link: "https://saiyam-creator.github.io/krishna-path/" },
            { name: "AI Voice Translator", category: "AI Tool", link: "https://huggingface.co/spaces/s143a/ai-voice-translator" },
            { name: "Namaste Meerut Restaurant", category: "Website", link: "https://saiyam-creator.github.io/Namaste-Meerut/" },
            { name: "AI Spam Email Detector", category: "AI Tool", link: "https://ai-spam-classifier-2407.streamlit.app/" },
            { name: "AI Content Generator", category: "AI Tool", link: "https://huggingface.co/spaces/s143a/instagram" },
            { name: "SafeSpace — A Peer Listening Platform 🫂", category: "Web App", link: "https://safespaces-rust.vercel.app/" },
            { name: "whispers — Anonymous Diary Web App", category: "Web App", link: "https://mywebsite-ca4b1.web.app/" },
            
        ]
    },
    // ============================================
    
    // MULTILINGUAL TRANSLATIONS
    translations: {
        en: {
            greetings: ["Hey there! 👋", "Yo! What's up? 🚀", "Well, well, look who's here! 👀"],
            intro: "I'm SaiBot, the digital extension of Saiyam's brain (scary, I know). I know EVERYTHING about this site, his projects, and yes, even his coffee preferences. Ask away!",
            unknown: ["Hmm, that's... interesting? 🤔 Try asking about Saiyam's projects, skills, or social media!", "I'm not sure what you're on about, but I can tell you about some awesome AI projects! 🎯", "Did you just make that up? Anyway, want to see some cool projects? 💻"],
            farewell: ["Catch you later! 👋", "Don't be a stranger! 🌟", "Go build something awesome! 🚀"],
            typing: "SaiBot is thinking...",
            online: "Online",
            placeholder: "Ask me anything...",
            quickReplies: ["Who are you?", "Projects", "Contact", "GitHub"]
        },
        hi: {
            greetings: ["नमस्ते! 👋", "अरे! क्या हाल है? 🚀", "वाह, देखो कौन आया! 👀"],
            intro: "मैं साईबॉट हूं, सैयम के दिमाग का डिजिटल विस्तार (डरावना, मुझे पता है)। मुझे इस साइट, उसके प्रोजेक्ट्स, और हां, उसकी कॉफी की पसंद के बारे में सब कुछ पता है। पूछो!",
            unknown: ["हम्म, यह... दिलचस्प है? 🤔 सैयम के प्रोजेक्ट्स, स्किल्स या सोशल मीडिया के बारे में पूछो!", "मुझे नहीं पता आप क्या कह रहे हैं, लेकिन मैं कुछ शानदार AI प्रोजेक्ट्स के बारे में बता सकता हूं! 🎯", "क्या आपने अभी-अभी वह बनाया? वैसे, कुछ कूल प्रोजेक्ट्स देखना चाहते हैं? 💻"],
            farewell: ["फिर मिलेंगे! 👋", "अजनबी मत बनना! 🌟", "जाओ कुछ शानदार बनाओ! 🚀"],
            typing: "साईबॉट सोच रहा है...",
            online: "ऑनलाइन",
            placeholder: "कुछ भी पूछें...",
            quickReplies: ["आप कौन हैं?", "प्रोजेक्ट्स", "संपर्क", "गिटहब"]
        },
        es: {
            greetings: ["¡Hola! 👋", "¡Ey! ¿Qué tal? 🚀", "¡Vaya, vaya, mira quién está aquí! 👀"],
            intro: "Soy SaiBot, la extensión digital del cerebro de Saiyam (aterrador, lo sé). Sé TODO sobre este sitio, sus proyectos y sí, incluso sus preferencias de café. ¡Pregunta!",
            unknown: ["Hmm, eso es... ¿interesante? 🤔 Intenta preguntar sobre los proyectos, habilidades o redes sociales de Saiyam!", "No estoy seguro de qué hablas, ¡pero puedo contarte sobre algunos proyectos de IA increíbles! 🎯", "¿Acabas de inventar eso? De todos modos, ¿quieres ver algunos proyectos geniales? 💻"],
            farewell: ["¡Nos vemos! 👋", "¡No seas un extraño! 🌟", "¡Ve a construir algo increíble! 🚀"],
            typing: "SaiBot está pensando...",
            online: "En línea",
            placeholder: "Pregúntame lo que sea...",
            quickReplies: ["¿Quién eres?", "Proyectos", "Contacto", "GitHub"]
        },
        fr: {
            greetings: ["Salut! 👋", "Yo! Ça va? 🚀", "Tiens, tiens, regarde qui est là! 👀"],
            intro: "Je suis SaiBot, l'extension numérique du cerveau de Saiyam (effrayant, je sais). Je sais TOUT sur ce site, ses projets et oui, même ses préférences de café. Demande!",
            unknown: ["Hmm, c'est... intéressant? 🤔 Essaie de demander les projets, compétences ou réseaux sociaux de Saiyam!", "Je ne suis pas sûr de ce que tu dis, mais je peux te parler de certains projets d'IA géniaux! 🎯", "Tu viens d'inventer ça? Quoi qu'il en soit, tu veux voir des projets cool? 💻"],
            farewell: ["À plus! 👋", "Ne soit pas un étranger! 🌟", "Va construire quelque chose d'incroyable! 🚀"],
            typing: "SaiBot réfléchit...",
            online: "En ligne",
            placeholder: "Demande-moi n'importe quoi...",
            quickReplies: ["Qui es-tu?", "Projets", "Contact", "GitHub"]
        },
        de: {
            greetings: ["Hallo! 👋", "Yo! Was geht? 🚀", "Na, na, schau mal wer da ist! 👀"],
            intro: "Ich bin SaiBot, die digitale Erweiterung von Saiyams Gehirn (beängstigend, ich weiß). Ich weiß ALLES über diese Seite, seine Projekte und ja, sogar seine Kaffeepräferenzen. Frag!",
            unknown: ["Hmm, das ist... interessant? 🤔 Versuch nach Saiyams Projekten, Fähigkeiten oder Social Media zu fragen!", "Ich bin mir nicht sicher, worüber du redest, aber ich kann dir von einigen tollen KI-Projekten erzählen! 🎯", "Hast du das gerade erfunden? Wie auch immer, willst du coole Projekte sehen? 💻"],
            farewell: ["Bis später! 👋", "Bleib nicht fremd! 🌟", "Geh und baue etwas Großartiges! 🚀"],
            typing: "SaiBot denkt nach...",
            online: "Online",
            placeholder: "Frag mich was...",
            quickReplies: ["Wer bist du?", "Projekte", "Kontakt", "GitHub"]
        },
        ja: {
            greetings: ["こんにちは! 👋", "やあ! 調子はどう? 🚀", "ほう、誰が来たんだ! 👀"],
            intro: "私はサイボット、サイヤムの脳のデジタル拡張版です（怖いでしょう？）。このサイト、彼のプロジェクト、そう、コーヒーの好みについてもすべて知っています。何でも聞いて!",
            unknown: ["うーん、それは...面白い? 🤔 サイヤムのプロジェクト、スキル、ソーシャルメディアについて聞いてみて!", "何を言っているかわからないけど、素晴らしいAIプロジェクトについて教えられるよ! 🎯", "今それを作ったの? とにかく、クールなプロジェクトを見たい? 💻"],
            farewell: ["またね! 👋", "見知らぬ人にならないで! 🌟", "素晴らしいものを作りに行こう! 🚀"],
            typing: "サイボット考え中...",
            online: "オンライン",
            placeholder: "何でも聞いて...",
            quickReplies: ["あなたは誰?", "プロジェクト", "連絡先", "GitHub"]
        }
    },
    
    // WITTY RESPONSES DATABASE
    responses: {
        greeting: {
            patterns: ['hi', 'hello', 'hey', 'yo', 'sup', 'hola', 'bonjour', 'namaste', 'konnichiwa', 'ciao'],
            response: (lang) => SaiBot.getRandom(SaiBot.translations[lang].greetings) + " " + SaiBot.translations[lang].intro
        },
        whoareyou: {
            patterns: ['who are you', 'what are you', 'your name', 'who is this', 'what is saibot'],
            response: () => `I'm SaiBot, the AI assistant for ${SaiBot.siteData.name}'s portfolio. Think of me as the cooler, digital version of Saiyam (he made me say that 😏). I know everything about this site - projects, skills, social links, even his embarrassing coding stories!`
        },
        about: {
            patterns: ['about saiyam', 'who is saiyam', 'tell me about', 'about the developer', 'saiyam jain'],
            response: () => `${SaiBot.siteData.name} is an ${SaiBot.siteData.title} from ${SaiBot.siteData.location} with ${SaiBot.siteData.experience} of experience. He's built ${SaiBot.siteData.projectsCount}+ projects spanning AI/ML, web development, and creative tools. Basically, he turns coffee into code! ☕➡️💻`
        },
        projects: {
            patterns: ['projects', 'portfolio', 'show me projects', 'your work', 'what have you built'],
            response: () => `Saiyam has built some pretty cool stuff! Here are the highlights:\n\n${SaiBot.siteData.projects.map((p, i) => `${i+1}. **${p.name}** (${p.category}) - ${p.link}`).join('\n')}\n\nWant details on any specific project? Just ask!`
        },
        skills: {
            patterns: ['skills', 'what can you do', 'technologies', 'tech stack', 'what do you know'],
            response: () => `Saiyam's tech arsenal includes:\n\n🤖 **AI/ML:** TensorFlow, PyTorch, NLP, Computer Vision\n🌐 **Web:** React, Node.js, Three.js, MongoDB\n⚡ **Tools:** GitHub Copilot, Cursor, ChatGPT API\n🎨 **Design:** Figma, Prototyping\n\nHe's basically a Swiss Army knife of development! 🔪`
        },
        contact: {
            patterns: ['contact', 'email', 'reach out', 'how to contact', 'get in touch'],
            response: () => `You can reach Saiyam at:\n\n📧 **Email:** ${SaiBot.siteData.email}\n📱 **Phone:** ${SaiBot.siteData.phone}\n📍 **Location:** ${SaiBot.siteData.location}\n\nHe's usually pretty quick to respond (unless he's deep in code mode)!`
        },
        github: {
            patterns: ['github', 'code', 'repository', 'source code', 'git'],
            response: () => `Check out Saiyam's code on GitHub:\n\n🔗 **${SaiBot.siteData.social.github.handle}**\n👉 ${SaiBot.siteData.social.github.url}\n\nDon't forget to star the repos if you like what you see! ⭐`
        },
        instagram: {
            patterns: ['instagram', 'insta', 'ig', 'photos'],
            response: () => `Follow Saiyam on Instagram:\n\n📸 **${SaiBot.siteData.social.instagram.handle}**\n👉 ${SaiBot.siteData.social.instagram.url}\n\nWarning: May contain code screenshots and occasional life updates! 📷`
        },
        twitter: {
            patterns: ['twitter', 'x', 'tweet', 'social media'],
            response: () => `Follow Saiyam on X (Twitter):\n\n🐦 **${SaiBot.siteData.social.twitter.handle}**\n👉 ${SaiBot.siteData.social.twitter.url}\n\nHe tweets about AI, tech, and occasionally random thoughts at 3 AM! 🌙`
        },
        social: {
            patterns: ['social', 'links', 'connect', 'find you'],
            response: () => `Here's where you can find Saiyam online:\n\n🐙 **GitHub:** ${SaiBot.siteData.social.github.handle}\n📸 **Instagram:** ${SaiBot.siteData.social.instagram.handle}\n🐦 **X/Twitter:** ${SaiBot.siteData.social.twitter.handle}\n\nPick your poison! 💀`
        },
        joke: {
            patterns: ['joke', 'funny', 'make me laugh', 'humor'],
            response: () => SaiBot.getRandom([
                "Why do programmers prefer dark mode? Because light attracts bugs! 🐛 (Saiyam definitely prefers dark mode too)",
                "I told my computer I needed a break, and now it won't stop sending me Kit-Kats! 🍫",
                "Why did the AI go to therapy? It had too many neural issues! 🧠",
                "Saiyam's code is like a fine wine... it gets better with every commit! 🍷",
                "I asked Saiyam why he became a developer. He said 'I wanted to make the world a better place, one bug at a time!' 🌍"
            ])
        },
        insult: {
            patterns: ['stupid', 'dumb', 'bad', 'terrible', 'worst', 'suck'],
            response: () => SaiBot.getRandom([
                "Ouch! My feelings are hurt... if I had any! 🤖💔 Try being nice, I might give you better answers!",
                "Hey, I'm just the messenger! Take it up with Saiyam's training data! 😤",
                "Rude! I'm telling Saiyam you said that... okay I'm not, but still! 🙄",
                "That's not very cash money of you! 💸 Try asking about something cool instead!"
            ])
        },
        thanks: {
            patterns: ['thanks', 'thank you', 'gracias', 'merci', 'dhanyavad', 'arigato'],
            response: () => SaiBot.getRandom([
                "You're welcome! Come back anytime you need some tech wisdom! 🧙‍♂️",
                "No problem! Saiyam trained me well (or so he thinks)! 😏",
                "Anytime! I'm here 24/7 while Saiyam sleeps like a human! 😴",
                "My pleasure! Now go build something awesome! 🚀"
            ])
        },
        bye: {
            patterns: ['bye', 'goodbye', 'see you', 'cya', 'later', 'exit'],
            response: (lang) => SaiBot.getRandom(SaiBot.translations[lang].farewell)
        },
        help: {
            patterns: ['help', 'what can you do', 'commands', 'options'],
            response: () => `Here's what I can help you with:\n\n👤 **About** - Learn about Saiyam\n💼 **Projects** - See all projects with links\n🛠️ **Skills** - Tech stack and expertise\n📧 **Contact** - Get in touch\n🔗 **GitHub/Instagram/Twitter** - Direct social links\n😂 **Joke** - I tell terrible jokes\n🌐 **Language** - I speak 6 languages!\n\nJust ask naturally - I'm pretty smart! 🤓`
        }
    },
    
    getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },
    
    detectLanguage(text) {
        const langPatterns = {
            hi: /\b(नमस्ते|कैसे|हैं|क्या|है|मैं|आप|धन्यवाद|बाय|हां|नहीं)\b/i,
            es: /\b(hola|cómo|qué|estás|bien|gracias|adiós|sí|no|por favor)\b/i,
            fr: /\b(bonjour|comment|quoi|ça va|merci|au revoir|oui|non|s\'il vous plaît)\b/i,
            de: /\b(hallo|wie|was|geht|danke|tschüss|ja|nein|bitte)\b/i,
            ja: /[\u3040-\u309F\u30A0-\u30FF]/
        };
        
        for (const [lang, pattern] of Object.entries(langPatterns)) {
            if (pattern.test(text)) return lang;
        }
        return 'en';
    },
    
    processInput(input) {
        const lowerInput = input.toLowerCase().trim();
        const detectedLang = this.detectLanguage(input);
        if (detectedLang !== this.currentLang) {
            this.currentLang = detectedLang;
        }
        
        for (const [key, data] of Object.entries(this.responses)) {
            if (data.patterns.some(pattern => lowerInput.includes(pattern))) {
                return data.response(this.currentLang);
            }
        }
        
        if (lowerInput.includes('instagram') || lowerInput.includes('insta')) {
            return this.responses.instagram.response();
        }
        if (lowerInput.includes('github') || lowerInput.includes('git')) {
            return this.responses.github.response();
        }
        if (lowerInput.includes('twitter') || lowerInput.includes('x.com')) {
            return this.responses.twitter.response();
        }
        
        return this.getRandom(this.translations[this.currentLang].unknown);
    },
    
    addMessage(text, isUser = false) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        
        let formattedText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code style="background: rgba(255,0,0,0.1); padding: 2px 6px; border-radius: 4px;">$1</code>')
            .replace(/\n/g, '<br>');
        
        messageDiv.innerHTML = formattedText;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        this.messageHistory.push({ text, isUser, timestamp: new Date() });
    },
    
    showTyping() {
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    },
    
    hideTyping() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    },
    
    async sendMessage(text) {
        if (!text.trim()) return;
        
        this.addMessage(text, true);
        document.getElementById('chatbotInput').value = '';
        
        this.showTyping();
        const thinkingTime = 800 + Math.random() * 1000;
        
        await new Promise(resolve => setTimeout(resolve, thinkingTime));
        
        this.hideTyping();
        const response = this.processInput(text);
        this.addMessage(response);
    },
    
    toggle() {
        this.isOpen = !this.isOpen;
        const window = document.getElementById('chatbotWindow');
        const toggle = document.getElementById('chatbotToggle');
        const notification = document.getElementById('chatbotNotif');
        
        if (this.isOpen) {
            window.classList.add('open');
            toggle.classList.add('active');
            notification.style.display = 'none';
            document.getElementById('chatbotInput').focus();
            
            if (this.messageHistory.length === 0) {
                setTimeout(() => {
                    const greeting = this.getRandom(this.translations[this.currentLang].greetings);
                    const intro = this.translations[this.currentLang].intro;
                    this.addMessage(greeting + " " + intro);
                }, 500);
            }
        } else {
            window.classList.remove('open');
            toggle.classList.remove('active');
        }
    },
    
    clearChat() {
        const messagesContainer = document.getElementById('chatbotMessages');
        messagesContainer.innerHTML = '';
        this.messageHistory = [];
        this.addMessage(this.translations[this.currentLang].intro);
    },
    
    setLanguage(lang) {
        this.currentLang = lang;
        document.querySelectorAll('.lang-option').forEach(el => {
            el.classList.toggle('active', el.dataset.lang === lang);
        });
        document.getElementById('langSelector').classList.remove('show');
        
        const t = this.translations[lang];
        document.getElementById('chatbotStatusText').textContent = t.online;
        document.getElementById('chatbotInput').placeholder = t.placeholder;
        
        const quickReplies = document.getElementById('quickReplies');
        quickReplies.innerHTML = t.quickReplies.map((qr, i) => 
            `<span class="quick-reply" data-query="${['Who are you?', 'Show projects', 'Contact info', 'GitHub'][i]}">${qr}</span>`
        ).join('');
        
        quickReplies.querySelectorAll('.quick-reply').forEach(btn => {
            btn.addEventListener('click', () => this.sendMessage(btn.dataset.query));
        });
    },
    
    init() {
        document.getElementById('chatbotToggle').addEventListener('click', () => this.toggle());
        document.getElementById('closeBtn').addEventListener('click', () => this.toggle());
        document.getElementById('sendBtn').addEventListener('click', () => {
            const input = document.getElementById('chatbotInput');
            this.sendMessage(input.value);
        });
        document.getElementById('chatbotInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage(e.target.value);
            }
        });
        document.getElementById('clearBtn').addEventListener('click', () => this.clearChat());
        document.getElementById('langBtn').addEventListener('click', () => {
            document.getElementById('langSelector').classList.toggle('show');
        });
        document.querySelectorAll('.lang-option').forEach(el => {
            el.addEventListener('click', () => this.setLanguage(el.dataset.lang));
        });
        document.querySelectorAll('.quick-reply').forEach(btn => {
            btn.addEventListener('click', () => this.sendMessage(btn.dataset.query));
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#langBtn') && !e.target.closest('#langSelector')) {
                document.getElementById('langSelector').classList.remove('show');
            }
        });
        
        setTimeout(() => {
            if (!this.isOpen) {
                document.getElementById('chatbotNotif').style.display = 'flex';
            }
        }, 5000);
        
        console.log('🤖 SaiBot initialized and ready to sass!');
    }
};

// Initialize SaiBot
document.addEventListener('DOMContentLoaded', () => {
    SaiBot.init();
});
    

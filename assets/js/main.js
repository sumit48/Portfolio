/* =========================================================
   SUMIT GYAWALI — NAVIGATION + LANGUAGE SWITCHER
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("mainNav");
    const menuToggle = document.getElementById("menuToggle");
    const header = document.querySelector(".site-header");
    const navLinks = [...document.querySelectorAll(".nav-link")];
    const sections = [...document.querySelectorAll(".page-section")];
    const langEN = document.getElementById("langEN");
    const langDE = document.getElementById("langDE");

    const translations = {
        en: {
            "nav.home": "Home",
            "nav.about": "About",
            "nav.skills": "Skills",
            "nav.contact": "Contact",
            "home.intro": "HELLO, I'M",
            "home.title": "Cybersecurity | GRC | SOC | Cloud Security | AI Security",
            "home.description": "Cybersecurity-Focused IT Student with a background in network monitoring and troubleshoot support, building practical security experience through hands-on labs, projects and continuous learning.",
            "home.projects": "View Projects",
            "home.contact": "Contact Me",
            "home.focus": "FOCUS",
            "home.focusValue": "Cybersecurity",
            "home.area": "AREA",
            "home.areaValue": "GRC & Security Operations",
            "home.interest": "INTEREST",
            "home.interestValue": "AI Security",
            "home.location": "LOCATION",
            "home.locationValue": "Germany",
            "home.available": "Available for opportunities",
            "tags.grc": "GRC & Risk",
            "tags.soc": "SOC (Security Operations Centre)",
            "tags.ai": "AI Security",
            "tags.cloud": "Cloud Security",
            "tags.network": "Network Security",
            "about.label": "ABOUT",
            "about.title": "About Me",
            "about.p1": "My interest in technology started early, when I was still in school. Playing computer games like GTA: Vice City sparked my curiosity about computers and how software and games worked behind the scenes. As part of my school curriculum, I started learning QBasic programming, where I wrote some of my first programs and discovered that I enjoyed understanding how technology works.",
            "about.p2": "I continued that interest by studying Computer Science during higher secondary school and later completed a Bachelor's degree in Computer Science and Information Technology.",
            "about.p3": "After graduation, I gained practical IT experience in network monitoring and troubleshoot support, working with network infrastructure, system monitoring, troubleshooting and customer technical support.",
            "about.p4": "Over time, my interest shifted from keeping systems running to understanding how systems can be protected. I began building my cybersecurity knowledge through TryHackMe, security labs and CTFs covering security operations, network security, vulnerability assessment and incident support.",
            "about.p5": "Alongside hands-on learning, I participate in cybersecurity conferences, seminars and technical workshops to learn from security professionals and explore areas such as malware analysis, cloud security and AI security.",
            "about.p6": "I am now looking for an entry-level cybersecurity opportunity where I can apply what I have learned, contribute to a security team and continue learning from experienced professionals.",
            "journey.label": "MY JOURNEY",
            "journey.title": "Building My IT & Cybersecurity Foundation",
            "journey.description": "From web development and network support to my current focus on cybersecurity, I continue to build practical IT and security skills.",
            "journey.year": "YEAR",
            "journey.experience": "EXPERIENCE",
            "journey.skills": "SKILLS & KNOWLEDGE",
            "journey.php.company": "iSewa Pvt. Ltd.",
            "journey.php.title": "PHP Web Development Internship",
            "journey.php.location": "Bagbazar, Kathmandu",
            "journey.php.duration": "3 Months",
            "journey.php.description": "Gained practical experience in web development, debugging, troubleshooting, and technical problem solving.",
            "journey.network.company": "Websurfer Nepal Communication System Pvt. Ltd.",
            "journey.network.title": "Network Monitoring & Troubleshoot Support",
            "journey.network.location": "Dhumbarahi, Kathmandu",
            "journey.network.duration": "9 Months",
            "journey.network.description": "Worked in network monitoring and technical support, troubleshooting connectivity and infrastructure-related issues and supporting customer network services.",
            "journey.present.year": "At Present",
            "journey.present.type": "Current Focus Cybersecurity",
            "journey.present.description": "Completed hands-on TryHackMe rooms and labs covering practical cybersecurity concepts, including SOC operations, network security, threat detection, and incident response.\nBuilt practical skills through guided exercises, CTFs, and security challenges in realistic environments.",
            "journey.present.learningLabel": "Hands-on learning:",
            "journey.present.learning": "TryHackMe CTF rooms, security exercises, and practical cybersecurity projects.",
            "skills.label": "SKILLS",
            "skills.title": "Skills & Focus",
            "skills.cyber.title": "Cybersecurity",
            "skills.cyber.description": "Security Operations, Threat Detection, Incident Analysis, Vulnerability Assessment, Network Security and Application Security.",
            "skills.grc.title": "GRC & Compliance",
            "skills.grc.description": "Risk assessment, security controls, governance, compliance tracking and security documentation.",
            "skills.ai.title": "AI Security",
            "skills.ai.description": "AI governance, AI risk assessment and security considerations for LLM-based systems and applications.",
            "skills.tools.title": "Security Tools",
            "skills.tools.description": "Practical exposure to security monitoring, network analysis, vulnerability assessment and application security tools.",
            "skills.cloud.title": "Cloud & IT",
            "skills.cloud.description": "Cloud security fundamentals and practical IT experience across networks, operating systems and Microsoft environments.",
            "skills.scripting.title": "Scripting & Automation",
            "skills.scripting.description": "Basic scripting and automation knowledge for security analysis, administration and repetitive tasks.",
            "contact.label": "CONTACT",
            "contact.title": "Contact Me",
            "contact.description": "Feel free to reach out via email or connect with me on LinkedIn, GitHub, or TryHackMe.",
            "contact.email": "Email",
            "contact.linkedin": "Linkedin",
            "contact.github": "Github",
            "contact.tryhackme": "Tryhackme",
            "form.name": "Name",
            "form.email": "Email",
            "form.message": "Message",
            "form.namePlaceholder": "Your name",
            "form.emailPlaceholder": "your@email.com",
            "form.messagePlaceholder": "Your message...",
            "form.send": "Send Message",
            "footer": "@Sumit Gyawali"
        },
        de: {
            "nav.home": "Startseite",
            "nav.about": "Über mich",
            "nav.skills": "Kenntnisse",
            "nav.contact": "Kontakt",
            "home.intro": "HALLO, ICH BIN",
            "home.title": "Cybersecurity | GRC | SOC | Cloud Security | AI Security",
            "home.description": "IT-Student mit Schwerpunkt Cybersecurity und Erfahrung im Netzwerk-Monitoring und technischen Support. Ich erweitere meine praktischen Security-Kenntnisse durch Labs, Projekte und kontinuierliches Lernen.",
            "home.projects": "Projekte ansehen",
            "home.contact": "Kontakt",
            "home.focus": "FOKUS",
            "home.focusValue": "Cybersecurity",
            "home.area": "BEREICH",
            "home.areaValue": "GRC & Security Operations",
            "home.interest": "INTERESSE",
            "home.interestValue": "AI Security",
            "home.location": "STANDORT",
            "home.locationValue": "Deutschland",
            "home.available": "Offen für passende Möglichkeiten",
            "tags.grc": "GRC & Risiko",
            "tags.soc": "SOC (Security Operations Centre)",
            "tags.ai": "AI Security",
            "tags.cloud": "Cloud Security",
            "tags.network": "Network Security",
            "about.label": "ÜBER MICH",
            "about.title": "Über mich",
            "about.p1": "Mein Interesse an Technologie begann früh, als ich noch zur Schule ging. Computerspiele wie GTA: Vice City weckten meine Neugier auf Computer und darauf, wie Software und Spiele im Hintergrund funktionieren. Im Rahmen meines Schulunterrichts begann ich, QBasic zu lernen, schrieb einige meiner ersten Programme und entdeckte dabei, dass es mir Spaß machte, zu verstehen, wie Technologie funktioniert.",
            "about.p2": "Dieses Interesse setzte ich fort, indem ich in der höheren Schule Informatik studierte und später einen Bachelorabschluss in Computer Science and Information Technology absolvierte.",
            "about.p3": "Nach meinem Abschluss sammelte ich praktische IT-Erfahrung im Netzwerk-Monitoring und technischen Support und arbeitete mit Netzwerkinfrastruktur, Systemüberwachung, Fehlerbehebung und technischem Kundensupport.",
            "about.p4": "Mit der Zeit verlagerte sich mein Interesse vom reinen Betrieb von Systemen hin zu der Frage, wie Systeme geschützt werden können. Ich begann, meine Cybersecurity-Kenntnisse durch TryHackMe, Security-Labs und CTFs in den Bereichen Security Operations, Network Security, Vulnerability Assessment und Incident Support aufzubauen.",
            "about.p5": "Neben dem praktischen Lernen nehme ich an Cybersecurity-Konferenzen, Seminaren und technischen Workshops teil, um von Security-Experten zu lernen und Bereiche wie Malware-Analyse, Cloud Security und AI Security kennenzulernen.",
            "about.p6": "Ich suche derzeit nach einer Einstiegsposition im Bereich Cybersecurity, in der ich mein bisher erworbenes Wissen anwenden, ein Security-Team unterstützen und von erfahrenen Fachleuten weiterlernen kann.",
            "journey.label": "MEIN WEG",
            "journey.title": "Aufbau meiner IT- und Cybersecurity-Grundlagen",
            "journey.description": "Von Webentwicklung und Netzwerk-Support bis zu meinem heutigen Schwerpunkt Cybersecurity baue ich kontinuierlich praktische IT- und Security-Kenntnisse auf.",
            "journey.year": "JAHR",
            "journey.experience": "ERFAHRUNG",
            "journey.skills": "KENNTNISSE & WISSEN",
            "journey.php.company": "iSewa Pvt. Ltd.",
            "journey.php.title": "Praktikum in PHP-Webentwicklung",
            "journey.php.location": "Bagbazar, Kathmandu",
            "journey.php.duration": "3 Monate",
            "journey.php.description": "Sammelte praktische Erfahrung in Webentwicklung, Debugging, Fehlerbehebung und technischer Problemlösung.",
            "journey.network.company": "Websurfer Nepal Communication System Pvt. Ltd.",
            "journey.network.title": "Netzwerk-Monitoring & technischer Support",
            "journey.network.location": "Dhumbarahi, Kathmandu",
            "journey.network.duration": "9 Monate",
            "journey.network.description": "Arbeitete im Netzwerk-Monitoring und technischen Support, bei der Fehlerbehebung von Verbindungs- und infrastrukturellen Problemen sowie bei der Unterstützung von Kundennetzwerkdiensten.",
            "journey.present.year": "Aktuell",
            "journey.present.type": "Aktueller Schwerpunkt Cybersecurity",
            "journey.present.description": "Absolvierte praktische TryHackMe-Räume und Labs zu Cybersecurity-Grundlagen, einschließlich SOC Operations, Network Security, Threat Detection und Incident Response.\nBaute praktische Fähigkeiten durch geführte Übungen, CTFs und Security-Challenges in realistischen Umgebungen auf.",
            "journey.present.learningLabel": "Praktisches Lernen:",
            "journey.present.learning": "TryHackMe-CTF-Räume, Security-Übungen und praktische Cybersecurity-Projekte.",
            "skills.label": "KENNTNISSE",
            "skills.title": "Kenntnisse & Fokus",
            "skills.cyber.title": "Cybersecurity",
            "skills.cyber.description": "Security Operations, Threat Detection, Incident Analysis, Vulnerability Assessment, Network Security und Application Security.",
            "skills.grc.title": "GRC & Compliance",
            "skills.grc.description": "Risikobewertung, Security Controls, Governance, Compliance-Tracking und Security-Dokumentation.",
            "skills.ai.title": "AI Security",
            "skills.ai.description": "AI Governance, AI-Risikobewertung und Security-Aspekte für LLM-basierte Systeme und Anwendungen.",
            "skills.tools.title": "Security Tools",
            "skills.tools.description": "Praktische Erfahrung mit Tools für Security Monitoring, Netzwerkanalyse, Schwachstellenbewertung und Application Security.",
            "skills.cloud.title": "Cloud & IT",
            "skills.cloud.description": "Grundlagen der Cloud Security sowie praktische IT-Erfahrung mit Netzwerken, Betriebssystemen und Microsoft-Umgebungen.",
            "skills.scripting.title": "Scripting & Automation",
            "skills.scripting.description": "Grundkenntnisse in Scripting und Automatisierung für Security-Analysen, Administration und wiederkehrende Aufgaben.",
            "contact.label": "KONTAKT",
            "contact.title": "Kontakt",
            "contact.description": "Du kannst mich gerne per E-Mail kontaktieren oder dich über LinkedIn, GitHub oder TryHackMe mit mir verbinden.",
            "contact.email": "E-Mail",
            "contact.linkedin": "LinkedIn",
            "contact.github": "GitHub",
            "contact.tryhackme": "TryHackMe",
            "form.name": "Name",
            "form.email": "E-Mail",
            "form.message": "Nachricht",
            "form.namePlaceholder": "Dein Name",
            "form.emailPlaceholder": "deine@email.com",
            "form.messagePlaceholder": "Deine Nachricht...",
            "form.send": "Nachricht senden",
            "footer": "@Sumit Gyawali"
        }
    };

    function closeMenu() {
        nav?.classList.remove("open");
        document.body.classList.remove("menu-open");
        menuToggle?.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
        nav?.classList.add("open");
        document.body.classList.add("menu-open");
        menuToggle?.setAttribute("aria-expanded", "true");
    }

    menuToggle?.addEventListener("click", () => {
        nav?.classList.contains("open") ? closeMenu() : openMenu();
    });

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.dataset.target || link.getAttribute("href")?.replace("#", "");
            const target = document.getElementById(targetId);
            if (!target) return;
            event.preventDefault();
            closeMenu();
            target.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                block: "start"
            });
        });
    });

    document.querySelectorAll("[data-target]").forEach(element => {
        if (element.classList.contains("nav-link")) return;
        element.addEventListener("click", event => {
            const targetId = element.dataset.target;
            const target = document.getElementById(targetId);
            if (!target || element.tagName === "A" && element.dataset.target === "Projects") return;
            event.preventDefault();
            closeMenu();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    document.addEventListener("click", event => {
        if (!nav || !menuToggle) return;
        if (nav.classList.contains("open") && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) closeMenu();
    });

    function updateActiveSection() {
        const currentY = window.scrollY + window.innerHeight * 0.35;
        let currentId = sections[0]?.id;
        sections.forEach(section => {
            if (currentY >= section.offsetTop) currentId = section.id;
        });
        navLinks.forEach(link => link.classList.toggle("active", link.dataset.target === currentId));
    }

    function updateHeader() {
        header?.classList.toggle("scrolled", window.scrollY > 20);
    }

    window.addEventListener("scroll", () => {
        updateActiveSection();
        updateHeader();
    }, { passive: true });

    function applyLanguage(lang) {
        const dictionary = translations[lang] || translations.en;
        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.dataset.i18n;
            if (dictionary[key] !== undefined) element.textContent = dictionary[key];
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
            const key = element.dataset.i18nPlaceholder;
            if (dictionary[key] !== undefined) element.placeholder = dictionary[key];
        });

        langEN?.classList.toggle("active", lang === "en");
        langDE?.classList.toggle("active", lang === "de");
        localStorage.setItem("portfolioLanguage", lang);
    }

    langEN?.addEventListener("click", () => applyLanguage("en"));
    langDE?.addEventListener("click", () => applyLanguage("de"));

    const savedLanguage = localStorage.getItem("portfolioLanguage");
    applyLanguage(savedLanguage === "de" ? "de" : "en");
    updateActiveSection();
    updateHeader();
});

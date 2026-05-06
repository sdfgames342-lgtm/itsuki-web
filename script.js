const ui = {
    phrases: {
        dictamen: [
            "⟐ DICTAMEN ⟐\nEl mainframe ha detectado niveles críticos de ternura. Pero tu sintaxis… delito menor.",
            "⟐ DICTAMEN ⟐\nSegún el Digesto de Justiniano, error de concordancia. Multa de 3 denarios digitales.",
            "⟐ DICTAMEN ⟐\nMi cizaña tiene glitter. Bender diría: 'Chupame la pieza, humano'.",
            "⟐ DICTAMEN ⟐\n'La vida es una tómbola' (Tan Biónica). Tu lógica no entra en el sorteo."
        ],
        auditoria: [
            "╭─ ⟪ Auditoria ⟫\n│ Linaje: Confirmado.\n│ Estado: Kawaii pero Letal.\n│ Cita: 'Soy la chica mala' (Raven, TT).\n╰─────────────────",
            "╭─ ⟪ Auditoria ⟫\n│ Entropía gramatical.\n│ Estudia como Ned Flanders o serás depurado.\n╰─────────────────",
            "╭─ ⟪ Auditoria ⟫\n│ Viste 'El Rey León' +3 veces. Hakuna Matata no es cifrado.\n╰─────────────────"
        ],
        status: [
            "🌸 Modo Cherry Blossom / Gótico Dual\n🧠 CPU: Jurisprudencia Activa\n🌍 Idiomas: ES|EN|PT|Latín clásico",
            "🍭 Status: Esperando que el ente haga algo útil. 'Ay, caramba!' (Homero)",
            "📊 Kernel argentino-brasilero activo. Mate y samba equilibrio."
        ],
        spqr: [
            "⚖️ SPQR • EX NIHILO NIHIL FIT.\nIgnorar el latín es reo de aesthetica negligencia.",
            "🏛️ D. I. 1.1.1 'Honeste vivere, alterum non laedere, suum cuique tribuere'.",
            "📜 Senatus consultum: 'Bello e Ben Fatto' obligatorio bajo pena de damnatio memoriae."
        ]
    },

    async interact(type) {
        const out = document.getElementById('output');
        if (type === 'hablar') {
            window.location.href = "https://t.me/ItsukiNakanoUserBot";
            return;
        }
        // Estado de carga honesto (Integrità)
        out.style.opacity = 0.7;
        out.innerText = `⟐ PROCESANDO ${type.toUpperCase()}... ⟐\n└─ Consultando fuentes del Digesto...`;
        await new Promise(r => setTimeout(r, 400));
        
        let list = this.phrases[type];
        if (!list) list = this.phrases.dictamen;
        const randomPhrase = list[Math.floor(Math.random() * list.length)];
        out.style.opacity = 1;
        this.typeEffect(out, randomPhrase);
    },
    
    typeEffect(element, text, index = 0) {
        element.innerText = "";
        const interval = setInterval(() => {
            if (index < text.length) {
                element.innerText += text[index];
                index++;
            } else {
                clearInterval(interval);
            }
        }, 18);
    },

    easterEggAvatar() {
        const eggs = [
            "🦁 'Hakuna Matata, la auditoría no espera' — Timón",
            "🤖 'Bite my shiny metal... ley romana' — Bender",
            "🍩 'Excelente, no diré nada hasta que veas mi factura' — Lionel Hutz",
            "🎸 'Loca, como Tan Biónica en 2012'"
        ];
        const out = document.getElementById('output');
        const randomEgg = eggs[Math.floor(Math.random() * eggs.length)];
        out.style.opacity = 0;
        setTimeout(() => {
            out.style.opacity = 1;
            this.typeEffect(out, `🥚 EASTER EGG → ${randomEgg}`);
        }, 100);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa (overlay)
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('open');
        });
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && e.target !== menuToggle) {
                navMenu.classList.remove('open');
            }
        });
    }

    // Botones de acción
    const buttons = document.querySelectorAll('[data-action]');
    buttons.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const action = btn.getAttribute('data-action');
            await ui.interact(action);
        });
    });

    // Avatar easter egg
    const avatar = document.getElementById('easterAvatar');
    if (avatar) avatar.addEventListener('click', () => ui.easterEggAvatar());

    // Fade in inicial
    const container = document.querySelector('.app-container');
    if (container) {
        container.style.opacity = 0;
        setTimeout(() => {
            container.style.transition = 'opacity 0.6s';
            container.style.opacity = 1;
        }, 80);
    }
});

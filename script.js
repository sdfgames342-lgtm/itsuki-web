const ui = {
    phrases: {
        dictamen: [
            "⟐ DICTAMEN ⟐\nEl mainframe ha detectado niveles críticos de ternura. Pero tu sintaxis… delito menor.",
            "⟐ DICTAMEN ⟐\nSegún el Digesto de Justiniano, error de concordancia. Multa de 3 denarios digitales.",
            "⟐ DICTAMEN ⟐\nMi cizaña tiene glitter. Bender diría: 'Chupame la pieza, humano'.",
            "⟐ DICTAMEN ⟐\n'La vida es una tómbola'. Tu lógica no entra en el sorteo."
        ],
        auditoria: [
            "╭─ ⟪ Auditoria ⟫\n│ Linaje: Confirmado.\n│ Estado: Kawaii pero Letal.\n│ Cita: 'Soy la chica mala' (Raven, TT).\n╰─────────────────",
            "╭─ ⟪ Auditoria ⟫\n│ Entropía gramatical.\n│ Estudia como Ned Flanders o serás depurado.\n╰─────────────────",
            "╭─ ⟪ Auditoria ⟫\n│ Viste 'El Rey León' +3 veces. Hakuna Matata no es cifrado.\n╰─────────────────"
        ],
        status: [
            "🌸 Modo Cherry Blossom / Gótico Dual\n🧠 CPU: Jurisprudencia Activa\n🌍 Idiomas: ES|EN|PT|Latín clásico",
            "🍭 Status: Esperando que el ente haga algo útil. 'Ay, caramba!'",
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

        out.style.opacity = 0.7;
        out.innerHTML = `<span>⟐ PROCESANDO ${type.toUpperCase()}... ⟐\n└─ Consultando fuentes del Digesto...</span>`;

        const led = document.querySelector('.status-led');
        if(led) {
            led.style.background = '#ffeb3b';
            led.style.boxShadow = '0 0 10px #ffeb3b';
        }

        await new Promise(r => setTimeout(r, 450));

        if(led) {
            led.style.background = '#0f0';
            led.style.boxShadow = '0 0 6px #0f0';
        }

        let list = this.phrases[type];
        if (!list) list = this.phrases.dictamen;
        const randomPhrase = list[Math.floor(Math.random() * list.length)];
        out.style.opacity = 1;
        this.typeEffect(out, randomPhrase);
    },

    typeEffect(element, text, index = 0) {
        if(index === 0) element.innerHTML = "<span></span>";
        const span = element.querySelector('span');
        
        const interval = setInterval(() => {
            if (index < text.length) {
                span.innerHTML += text[index] === '\n' ? '<br>' : text[index];
                index++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    },

    easterEggAvatar() {
        const eggs = [
            "🦁 'Hakuna Matata, la auditoría no espera'",
            "🤖 'Bite my shiny metal... ley romana'",
            "🍩 'Excelente, no diré nada hasta que veas mi factura'",
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
    const menuToggle = document.getElementById('menuToggle');
    const buttonsRow = document.getElementById('buttonsRow');
    if (menuToggle && buttonsRow) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            buttonsRow.classList.toggle('open');
        });
        document.addEventListener('click', (e) => {
            if (buttonsRow.classList.contains('open') && !buttonsRow.contains(e.target) && e.target !== menuToggle) {
                buttonsRow.classList.remove('open');
            }
        });
    }

    document.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', async () => {
            await ui.interact(btn.getAttribute('data-action'));
        });
    });

    const avatar = document.getElementById('easterAvatar');
    if (avatar) avatar.addEventListener('click', () => ui.easterEggAvatar());
});

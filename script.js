const ui = {
    phrases: {
        dictamen: [
            "⟐ DICTAMEN ⟐\nEl mainframe ha detectado niveles críticos de ternura en este sector. Pero tu sintaxis… sigue siendo un delito menor.",
            "⟐ DICTAMEN ⟐\nSegún el Digesto de Justiniano, tu oración contiene errores de concordancia. Multa de 3 denarios digitales.",
            "⟐ DICTAMEN ⟐\nHe optimizado mis procesos. Ahora mi cizaña tiene glitter. Bender diría: 'Chupame la pieza, humano'.",
            "⟐ DICTAMEN ⟐\n'La vida es una tómbola' — cantaba Tan Biónica. Pero tu lógica no entra en el sorteo."
        ],
        auditoria: [
            "╭─ ⟪ Auditoria ⟫\n│ Linaje: Confirmado.\n│ Estado: Kawaii pero Letal.\n│ Cita oculta: 'Soy la chica mala, recuerda' (Raven, TT).\n╰─────────────────",
            "╭─ ⟪ Auditoria ⟫\n│ Entropía detectada en tu gramática.\n│ Procede a estudiar como Ned Flanders o serás depurado.\n╰─────────────────",
            "╭─ ⟪ Auditoria ⟫\n│ Evidencia: has visto 'El Rey León' más de 3 veces. Hakuna Matata no es un método de cifrado.\n╰─────────────────"
        ],
        status: [
            "🌸 Modo: Cherry Blossom / Gótico Dual\n🧠 CPU: Jurisprudencia Activa\n🌍 Idiomas: ES|EN|PT|Latin clasico",
            "🍭 Status: Esperando que el ente biológico haga algo útil. 'Ay, caramba!' (Homero Simpson dixit).",
            "📊 Status: Kernel argentino-brasilero activo. Mate y samba en equilibrio termodinámico."
        ],
        spqr: [
            "⚖️ SPQR • EX NIHILO NIHIL FIT.\nEl pretor ha decidido: tu ignorancia del latín te hace reo de aesthetica negligencia.",
            "🏛️ D. I. 1.1.1 'Iuris praecepta sunt: honeste vivere, alterum non laedere, suum cuique tribuere'. Aplica a tu código también.",
            "📜 Senatus consultum: el estilo 'Bello e Ben Fatto' es ahora obligatorio bajo pena de damnatio memoriae."
        ]
    },

    interact(type) {
        const out = document.getElementById('output');
        let list = this.phrases[type];
        if (type === 'hablar') {
            window.location.href = "https://t.me/ItsukiNakanoUserBot";
            return;
        }
        if (!list) list = this.phrases.dictamen;
        const randomPhrase = list[Math.floor(Math.random() * list.length)];
        out.style.opacity = 0;
        setTimeout(() => {
            out.innerText = randomPhrase;
            out.style.opacity = 1;
        }, 150);
    },

    easterEggAvatar() {
        const eggs = [
            "🦁 'Hakuna Matata, pero la auditoría no espera' — Timón (El Rey León)",
            "🤖 'Bite my shiny metal... ley romana' — Bender",
            "🍩 'Excelente, no diré nada hasta que veas mi factura' — Lionel Hutz (Los Simpsons)",
            "🎸 'Loca, pero de la buena, como Tan Biónica en 2012'"
        ];
        const out = document.getElementById('output');
        const randomEgg = eggs[Math.floor(Math.random() * eggs.length)];
        out.style.opacity = 0;
        setTimeout(() => {
            out.innerText = `🥚 EASTER EGG DETECTADO → ${randomEgg}`;
            out.style.opacity = 1;
        }, 100);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

    const buttons = document.querySelectorAll('[data-action]');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = btn.getAttribute('data-action');
            ui.interact(action);
        });
    });

    const avatarBtn = document.getElementById('easterAvatar');
    if (avatarBtn) avatarBtn.addEventListener('click', () => ui.easterEggAvatar());

    const container = document.querySelector('.app-container');
    if (container) {
        container.style.opacity = 0;
        setTimeout(() => {
            container.style.transition = 'opacity 0.7s';
            container.style.opacity = 1;
        }, 80);
    }
});

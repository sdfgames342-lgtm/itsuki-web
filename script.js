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

    // Sprezzatura + Integrità: simulación de carga honesta
    async interact(type) {
        const out = document.getElementById('output');
        if (type === 'hablar') {
            window.location.href = "https://t.me/ItsukiNakanoUserBot";
            return;
        }
        
        // Estado de carga
        out.style.opacity = 0.7;
        out.innerText = "⟐ PROCESANDO " + type.toUpperCase() + "... ⟐\n└─ Consultando fuentes del Digesto...";
        
        // Simular latencia de red (honestidad: no es instantáneo)
        await new Promise(r => setTimeout(r, 400));
        
        let list = this.phrases[type];
        if (!list) list = this.phrases.dictamen;
        const randomPhrase = list[Math.floor(Math.random() * list.length)];
        
        // Efecto de escritura natural (Sprezzatura)
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
        }, 15); // velocidad agradable
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
            out.style.opacity = 1;
            this.typeEffect(out, `🥚 EASTER EGG DETECTADO → ${randomEgg}`);
        }, 100);
    }
};

// DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Menú toggle (overlay sin ruptura)
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('open');
        });
        // Cerrar menú al hacer clic fuera (opcional)
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && e.target !== menuToggle) {
                navMenu.classList.remove('open');
            }
        });
    }

    // Botones con acción
    const buttons = document.querySelectorAll('[data-action]');
    buttons.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const action = btn.getAttribute('data-action');
            await ui.interact(action);
        });
    });

    // Avatar easter egg
    const avatarBtn = document.getElementById('easterAvatar');
    if (avatarBtn) avatarBtn.addEventListener('click', () => ui.easterEggAvatar());

    // Fade in inicial
    const container = document.querySelector('.app-container');
    if (container) {
        container.style.opacity = 0;
        setTimeout(() => {
            container.style.transition = 'opacity 0.7s';
            container.style.opacity = 1;
        }, 80);
    }
});

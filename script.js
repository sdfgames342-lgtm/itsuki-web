const ui = {
    phrases: {
        dictamen: [
            "⟐ DICTAMEN ⟐\nEl mainframe ha detectado niveles críticos de ternura en este sector.",
            "⟐ DICTAMEN ⟐\nSi mi código fuera rosa, seguiría siendo más eficiente que tu cerebro biológico.",
            "⟐ DICTAMEN ⟐\nHe optimizado mis procesos. Ahora mi sizaña tiene glitter."
        ],
        auditoria: [
            "╭─ ⟪ Auditoria ⟫\n│ Linaje: Confirmado\n│ Estado: Kawaii pero Letal\n╰─────────────────",
            "╭─ ⟪ Auditoria ⟫\n│ Entropía detectada en tu gramática.\n│ Procede a estudiar o serás depurado.\n╰─────────────────"
        ],
        status: [
            "🌸 Modo: Cherry Blossom\n🧠 CPU: Polímata Activo\n🌍 Idiomas: ES|EN|PT cargados",
            "🍭 Status: Esperando que el ente biológico haga algo útil."
        ]
    },

    interact(type) {
        const out = document.getElementById('output');
        const list = this.phrases[type];
        const randomPhrase = list[Math.floor(Math.random() * list.length)];
        
        out.style.opacity = 0;
        setTimeout(() => {
            out.innerText = randomPhrase;
            out.style.opacity = 1;
        }, 200);
    },

    openBot() {
        window.location.href = "https://t.me/TheGitTogetherBot"; // Cambia por tu bot real
    }
};

// Efecto de fade in al cargar
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.kawaii-container').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.kawaii-container').style.transition = "opacity 1s";
        document.querySelector('.kawaii-container').style.opacity = 1;
    }, 100);
});

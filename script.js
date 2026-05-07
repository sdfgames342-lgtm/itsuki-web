const ui = {
    phrases: {
        dictamen: ["⟐ DICTAMEN ⟐\nEl mainframe ha detectado niveles críticos de ternura. Pero tu sintaxis… delito menor.", "⟐ DICTAMEN ⟐\nMulta de 3 denarios digitales."],
        auditoria: ["╭─ ⟪ Auditoria ⟫\n│ Linaje: Confirmado.\n│ Estado: Kawaii pero Letal.\n╰─────────────────"],
        status: ["🌸 Modo Cherry Blossom Activo\n🧠 CPU: Jurisprudencia Activa"],
        spqr: ["⚖️ SPQR • EX NIHILO NIHIL FIT."]
    },

    async interact(type) {
        const out = document.getElementById('output');
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) mobileMenu.classList.add('hidden'); // Cerrar al clickear
        
        if (type === 'hablar') {
            window.location.href = "https://t.me/ItsukiNakanoUserBot";
            return;
        }

        out.style.opacity = 0.5;
        out.innerHTML = `<span>⟐ PROCESANDO ${type.toUpperCase()}...</span>`;

        await new Promise(r => setTimeout(r, 400));

        let list = this.phrases[type] || this.phrases.dictamen;
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
            } else { clearInterval(interval); }
        }, 25);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    const menuBtn = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // Acciones
    document.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', () => ui.interact(btn.getAttribute('data-action')));
    });

    // Easter Egg
    document.getElementById('easterAvatar')?.addEventListener('click', () => {
        ui.typeEffect(document.getElementById('output'), "🦁 'Hakuna Matata, la auditoría no espera'");
    });
});

# Itsuki · Dashboard

Panel de analíticas estático para el bot **Itsuki**.

## Stack
- HTML + CSS + JS puro
- [Chart.js](https://www.chartjs.org/) para gráficos
- [supabase-js](https://supabase.com/docs/reference/javascript) para data
- GitHub Pages como hosting

## Setup
1. Editar `app.js` con tu `SUPABASE_URL` y `SUPABASE_ANON_KEY`.
2. Push a `main`. GitHub Pages despliega automáticamente.
3. Visitar `https://sdfgames342-lgtm.github.io/itsuki-web/`

## Endpoints consumidos
- `v_public_kpis`
- `v_public_daily`
- `v_public_top_commands`
- `v_public_top_wallets`
- `v_public_top_groups`

Todas son vistas agregadas — no exponen datos crudos.

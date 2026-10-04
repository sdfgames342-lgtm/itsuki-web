// ═══════════════════════════════════════════════════════════
// Itsuki · Dashboard (frontend estático)
// Lee agregados desde Supabase vía REST + anon key.
// ═══════════════════════════════════════════════════════════

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ⚠️ EDITAR: Supabase → Settings → API
const SUPABASE_URL      = 'https://pkajsigfbfwvyddpzhlo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrYWpzaWdmYmZ3dnlkZHB6aGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMDk3MjAsImV4cCI6MjA5MDU4NTcyMH0.dSY6wBzfgIPbrcKUwv6wTTqi-oFhwJvCU8EHa3INu_U';

const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ─── Estado ──────────────────────────────────────────
let chartDaily = null;
let chartCommands = null;

// ─── Helpers ─────────────────────────────────────────
const $ = (id) => document.getElementById(id);

function setStatus(text, kind = '') {
    const el = $('status');
    el.textContent = text;
    el.className = 'status ' + kind;
}

function fmt(n) {
    if (n === null || n === undefined) return '–';
    return Number(n).toLocaleString('es-AR');
}

// ─── Fetch data ──────────────────────────────────────
async function loadKPIs() {
    const { data, error } = await sb.from('v_public_kpis').select('*').single();
    if (error) throw error;
    $('kpi-players').textContent = fmt(data.total_players);
    $('kpi-wallets').textContent = fmt(data.total_wallets);
    $('kpi-dau').textContent = fmt(data.dau);
    $('kpi-wau').textContent = fmt(data.wau);
    $('kpi-events').textContent = fmt(data.events_24h);
    $('kpi-mrr').textContent = fmt(data.mrr_xtr);
    $('last-update').textContent = 'Última act.: ' +
        new Date(data.updated_at * 1000).toLocaleTimeString('es-AR');
}

async function loadDaily() {
    const { data, error } = await sb.from('v_public_daily').select('*').order('day');
    if (error) throw error;
    const labels = data.map(r => r.day);
    const users = data.map(r => r.users);
    const events = data.map(r => r.events);

    if (chartDaily) chartDaily.destroy();
    chartDaily = new Chart($('chart-daily'), {
        type: 'line',
        data: {
            labels,
            datasets: [
                { label: 'Usuarios', data: users, borderColor: '#58a6ff',
                  backgroundColor: 'rgba(88,166,255,0.15)', tension: 0.3, fill: true },
                { label: 'Eventos', data: events, borderColor: '#3fb950',
                  backgroundColor: 'rgba(63,185,80,0.10)', tension: 0.3, yAxisID: 'y1' }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#e6edf3' } } },
            scales: {
                x: { ticks: { color: '#8b949e' }, grid: { color: '#30363d' } },
                y: { ticks: { color: '#8b949e' }, grid: { color: '#30363d' } },
                y1: { position: 'right', ticks: { color: '#8b949e' },
                      grid: { display: false } }
            }
        }
    });
}

async function loadCommands() {
    const { data, error } = await sb.from('v_public_top_commands').select('*');
    if (error) throw error;
    const labels = data.map(r => r.command);
    const hits = data.map(r => r.hits);

    if (chartCommands) chartCommands.destroy();
    chartCommands = new Chart($('chart-commands'), {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Hits',
                data: hits,
                backgroundColor: '#58a6ff',
                borderRadius: 4,
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#8b949e' }, grid: { color: '#30363d' } },
                y: { ticks: { color: '#8b949e' }, grid: { display: false } }
            }
        }
    });
}

async function loadWallets() {
    const { data, error } = await sb.from('v_public_top_wallets')
        .select('*').order('rank');
    if (error) throw error;
    const tbody = $('table-wallets').querySelector('tbody');
    tbody.innerHTML = data.map(r => `
        <tr>
            <td>${r.rank}</td>
            <td><code>${r.user_id}</code></td>
            <td>${fmt(r.tokens)}</td>
            <td>${fmt(r.fichas)}</td>
        </tr>
    `).join('');
}

async function loadGroups() {
    const { data, error } = await sb.from('v_public_top_groups')
        .select('*').order('points', { ascending: false });
    if (error) throw error;
    const tbody = $('table-groups').querySelector('tbody');
    tbody.innerHTML = data.map((r, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${r.title}</td>
            <td>${fmt(r.points)}</td>
            <td>${r.level}</td>
            <td>${fmt(r.itsunarios)}</td>
        </tr>
    `).join('');
}

// ─── Orquestador ─────────────────────────────────────
async function refresh() {
    setStatus('cargando…');
    try {
        await Promise.all([
            loadKPIs(),
            loadDaily(),
            loadCommands(),
            loadWallets(),
            loadGroups(),
        ]);
        setStatus('conectado ✓', 'ok');
    } catch (e) {
        console.error(e);
        setStatus('error: ' + (e.message || e), 'err');
    }
}

// ─── Init ────────────────────────────────────────────
$('refresh').addEventListener('click', refresh);
refresh();
setInterval(refresh, 60000);  // auto-refresh cada 60s

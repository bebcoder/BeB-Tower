/*
GID: 1002
PID: BT-002
FILE: themes.js
PROJECT: BeB Tower
VERSION: 1.1.0
DATE: 2026-07-16
AUTHOR: BeB
STATUS: ACTIVE
*/

const THEMES = {

  "purple-raindrops": {
    mode: "dark",

    bg: "#10002b",
    surface: "#240046",
    surface2: "#3c096c",

    card: "rgba(114,9,183,.15)",
    border: "rgba(76,201,240,.18)",

    text: "#f8fafc",
    muted: "#cbd5e1",

    accent: "#4cc9f0",
    accent2: "#4361ee",

    shadow: "0 8px 32px rgba(0,0,0,.35)",

    gradient: `
      linear-gradient(
        135deg,
        #10002b 0%,
        #240046 50%,
        #3c096c 100%
      )
    `
  },

  "superhero-fruit-punch": {
    mode: "dark",

    bg: "#000000",
    surface: "#111111",
    surface2: "#1a1a1a",

    card: "rgba(252,181,0,.08)",
    border: "rgba(252,181,0,.18)",

    text: "#ede7d1",
    muted: "#c4bca9",

    accent: "#fcb500",
    accent2: "#eb2d2f",

    shadow: "0 8px 32px rgba(0,0,0,.40)",

    gradient: `
      linear-gradient(
        135deg,
        #000000,
        #073180,
        #01613b
      )
    `
  },

  "vintage-vibes": {
    mode: "dark",

    bg: "#0d0c1d",
    surface: "#161b33",
    surface2: "#474973",

    card: "rgba(241,218,196,.07)",
    border: "rgba(166,156,172,.18)",

    text: "#f1dac4",
    muted: "#c7bccd",

    accent: "#a69cac",
    accent2: "#f1dac4",

    shadow: "0 8px 32px rgba(0,0,0,.35)",

    gradient: `
      linear-gradient(
        135deg,
        #0d0c1d,
        #161b33,
        #474973
      )
    `
  },

  "monochrome-chic": {
    mode: "dark",

    bg: "#1b1b1b",
    surface: "#242f40",
    surface2: "#363636",

    card: "rgba(255,255,255,.03)",
    border: "rgba(204,164,59,.20)",

    text: "#ffffff",
    muted: "#e5e5e5",

    accent: "#cca43b",
    accent2: "#ffffff",

    shadow: "0 8px 32px rgba(0,0,0,.45)",

    gradient: `
      linear-gradient(
        135deg,
        #1b1b1b,
        #242f40,
        #363636
      )
    `
  },

  "urban-chic": {
    mode: "dark",

    bg: "#202124",
    surface: "#2d3136",
    surface2: "#393e41",

    card: "rgba(68,187,164,.08)",
    border: "rgba(68,187,164,.18)",

    text: "#f6f7eb",
    muted: "#d7dbd0",

    accent: "#44bba4",
    accent2: "#3f88c5",

    shadow: "0 8px 32px rgba(0,0,0,.35)",

    gradient: `
      linear-gradient(
        135deg,
        #202124,
        #393e41,
        #3f88c5
      )
    `
  },

  "sapphire-ocean": {
    mode: "dark",

    bg: "#20211e",
    surface: "#32322c",
    surface2: "#4c6085",

    card: "rgba(54,241,205,.08)",
    border: "rgba(54,241,205,.18)",

    text: "#ffffff",
    muted: "#cbd5e1",

    accent: "#36f1cd",
    accent2: "#39a0ed",

    shadow: "0 8px 32px rgba(0,0,0,.35)",

    gradient: `
      linear-gradient(
        135deg,
        #32322c,
        #4c6085,
        #39a0ed
      )
    `
  },

  "cloud-fluff": {
    mode: "light",

    bg: "#f5fefc",
    surface: "#effbf9",
    surface2: "#e7eeef",

    card: "rgba(255,255,255,.80)",
    border: "rgba(0,0,0,.05)",

    text: "#1e293b",
    muted: "#64748b",

    accent: "#dce1e5",
    accent2: "#e9f8f5",

    shadow: "0 8px 32px rgba(0,0,0,.08)",

    gradient: `
      linear-gradient(
        135deg,
        #f5fefc,
        #effbf9,
        #dce1e5
      )
    `
  },

  "azure-skies": {
    mode: "light",

    bg: "#ffffff",
    surface: "#f3f4f6",
    surface2: "#e6e8e6",

    card: "rgba(255,255,255,.85)",
    border: "rgba(55,114,255,.12)",

    text: "#111827",
    muted: "#475569",

    accent: "#3772ff",
    accent2: "#fdca40",

    shadow: "0 8px 32px rgba(55,114,255,.08)",

    gradient: `
      linear-gradient(
        135deg,
        #ffffff,
        #e6e8e6,
        #3772ff20
      )
    `
  },

  "ocean-breeze": {
    mode: "light",

    bg: "#f7f7ff",
    surface: "#ffffff",
    surface2: "#bdd5ea",

    card: "rgba(255,255,255,.90)",
    border: "rgba(87,115,153,.12)",

    text: "#495867",
    muted: "#577399",

    accent: "#577399",
    accent2: "#fe5f55",

    shadow: "0 8px 32px rgba(73,88,103,.08)",

    gradient: `
      linear-gradient(
        135deg,
        #f7f7ff,
        #bdd5ea,
        #ffffff
      )
    `
  },

  "orange-sunset": {
    mode: "light",

    bg: "#ffffff",
    surface: "#f8fafc",
    surface2: "#bfc0c0",

    card: "rgba(255,255,255,.90)",
    border: "rgba(239,131,84,.12)",

    text: "#2d3142",
    muted: "#4f5d75",

    accent: "#ef8354",
    accent2: "#4f5d75",

    shadow: "0 8px 32px rgba(239,131,84,.08)",

    gradient: `
      linear-gradient(
        135deg,
        #ffffff,
        #f8fafc,
        #ef835420
      )
    `
  },

  "silver-crystal": {
    mode: "light",

    bg: "#f5f5f5",
    surface: "#ffffff",
    surface2: "#e8e8e8",

    card: "rgba(255,255,255,.90)",
    border: "rgba(252,129,74,.12)",

    text: "#564256",
    muted: "#96939b",

    accent: "#fc814a",
    accent2: "#564256",

    shadow: "0 8px 32px rgba(0,0,0,.06)",

    gradient: `
      linear-gradient(
        135deg,
        #ffffff,
        #e8e8e8,
        #fc814a15
      )
    `
  },

  "dusky-rose": {
    mode: "light",

    bg: "#ffffff",
    surface: "#f8f8f8",
    surface2: "#dfe0e2",

    card: "rgba(255,255,255,.92)",
    border: "rgba(235,81,96,.12)",

    text: "#071013",
    muted: "#777777",

    accent: "#eb5160",
    accent2: "#b7999c",

    shadow: "0 8px 32px rgba(0,0,0,.06)",

    gradient: `
      linear-gradient(
        135deg,
        #ffffff,
        #dfe0e2,
        #eb516015
      )
    `
  },

  "coolors-exported": {
    mode: "light",

    bg: "#f0edee",
    surface: "#ffffff",
    surface2: "#c5dac1",

    card: "rgba(255,255,255,.90)",
    border: "rgba(155,29,32,.12)",

    text: "#3d2b3d",
    muted: "#635d5c",

    accent: "#9b1d20",
    accent2: "#a7bed3",

    shadow: "0 8px 32px rgba(0,0,0,.06)",

    gradient: `
      linear-gradient(
        135deg,
        #f0edee,
        #c5dac1,
        #a7bed3
      )
    `
  },

  "splash-circus": {
    mode: "hybrid",

    bg: "#111827",
    surface: "#1f2937",
    surface2: "#374151",

    card: "rgba(55,114,255,.10)",
    border: "rgba(252,186,4,.18)",

    text: "#f7f0f0",
    muted: "#d1d5db",

    accent: "#3772ff",
    accent2: "#fcba04",

    shadow: "0 8px 32px rgba(0,0,0,.35)",

    gradient: `
      linear-gradient(
        135deg,
        #3772ff,
        #07beb8,
        #64113f
      )
    `
  }

};

function applyTheme(themeName){

  const theme = THEMES[themeName];

  if(!theme) return;

  document.documentElement.style.setProperty('--bg', theme.bg);
  document.documentElement.style.setProperty('--surface', theme.surface);
  document.documentElement.style.setProperty('--surface2', theme.surface2);

  document.documentElement.style.setProperty('--card-bg', theme.card);
  document.documentElement.style.setProperty('--border', theme.border);

  document.documentElement.style.setProperty('--text', theme.text);
  document.documentElement.style.setProperty('--muted', theme.muted);

  document.documentElement.style.setProperty('--accent', theme.accent);
  document.documentElement.style.setProperty('--accent2', theme.accent2);

  document.documentElement.style.setProperty('--shadow', theme.shadow);
  document.documentElement.style.setProperty('--hero-gradient', theme.gradient);

  localStorage.setItem('beb_theme', themeName);
}

document.addEventListener("DOMContentLoaded", () => {

  const savedTheme =
    localStorage.getItem("beb_theme") ||
    "purple-raindrops";

  applyTheme(savedTheme);

});
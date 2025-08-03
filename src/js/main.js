import './header.js'

import { initServicesCarousel } from './services.js'
initServicesCarousel()

import { initContactForm } from './contact.js'
initContactForm()

import { initPortfolioFilters } from './portfolio.js'
initPortfolioFilters()

import { renderPortfolio, initPortfolioFilters } from "./portfolio.js";

await renderPortfolio("[data-grid]");  // 1. crea las tarjetas
initPortfolioFilters();                // 2. ahora los filtros ya encuentran cards



if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('js/sw.js').catch(console.error);
  }
  
// Añade al final de main.js
const y = document.getElementById('yearCopy');
if (y) y.textContent = new Date().getFullYear();

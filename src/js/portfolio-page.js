import {
    renderPortfolio,
    renderFilters,
    initPortfolioFilters
  } from "./portfolio.js";
  
  await renderPortfolio("[data-grid]");   // pinta las obras
  await renderFilters("[data-filtros]");  // crea los botones
  initPortfolioFilters();                 // activa la lógica de filtrado
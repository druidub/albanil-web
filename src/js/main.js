import './header.js'

import { initServicesCarousel } from './services.js'
initServicesCarousel()

import { initContactForm } from './contact.js'
initContactForm()

import { initPortfolioFilters } from './portfolio.js'
initPortfolioFilters()

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('js/sw.js').catch(console.error);
  }
  

// Ocultar/mostrar cabecera al hacer scroll
const header = document.querySelector('[data-header]')
let lastY = 0
window.addEventListener('scroll', () => {
  const y = window.scrollY
  header.dataset.hide = y > lastY && y > 80
  lastY = y
})

// Toggle burger / menú
const btn = document.querySelector('[data-burger]')
const menu = document.querySelector('[data-menu]')
btn?.addEventListener('click', () => {
  const open = btn.classList.toggle('open')
  btn.ariaExpanded = open
  menu.classList.toggle('open', open)
})

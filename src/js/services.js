export function initServicesCarousel(){
    const track = document.querySelector('[data-track]')
    if(!track) return
    // Ejemplo: botón siguiente desplaza 220 px
    document.querySelector('[data-next]')?.addEventListener('click',()=> {
      track.scrollBy({left:220, behavior:'smooth'})
    })
  }
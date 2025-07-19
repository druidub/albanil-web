export function initPortfolioFilters(){
    const filtros = document.querySelector('[data-filtros]')
    const grid    = document.querySelector('[data-grid]')
    if(!filtros || !grid) return
  
    const cards = Array.from(grid.children)
  
    filtros.addEventListener('click', e => {
      if(e.target.matches('[data-tag]')){
        const tag = e.target.dataset.tag
        filtros.querySelectorAll('.filter').forEach(btn => btn.classList.toggle('active', btn===e.target))
  
        cards.forEach(card => {
          const tags = card.dataset.tags.split(' ')
          const show = tag === 'all' || tags.includes(tag)
          card.classList.toggle('hide', !show)
        })
      }
    })
  
    /* Bonus: leer ?tag= */
    const params = new URLSearchParams(location.search)
    const pre = params.get('tag')
    if(pre){
      const btn = filtros.querySelector(`[data-tag="${pre}"]`)
      btn?.click()
      btn?.scrollIntoView({behavior:'smooth',block:'center'})
    }
  }
  
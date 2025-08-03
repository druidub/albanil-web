/* ───────────────── render dinámico ───────────────── */
export async function renderPortfolio(gridSel){
  const res   = await fetch("/data/portfolio.json");
  const obras = await res.json();

  document.querySelector(gridSel).innerHTML =
    obras.map(o => `
      <article class="card-obra" data-tags="${o.tags.join(" ")}">
        <img src="${o.image}" alt="${o.title}" loading="lazy">
        <h2>${o.title}</h2>
      </article>
    `).join("");
}

/* ───────────────── filtros ya existentes ─────────── */
export function initPortfolioFilters(){
  const filtros = document.querySelector("[data-filtros]");
  const grid    = document.querySelector("[data-grid]");
  if(!filtros || !grid) return;

  const cards = Array.from(grid.children);

  filtros.addEventListener("click", e => {
    if(e.target.matches("[data-tag]")){
      const tag = e.target.dataset.tag;
      filtros
        .querySelectorAll(".filter")
        .forEach(btn => btn.classList.toggle("active", btn === e.target));

      cards.forEach(card => {
        const tags = card.dataset.tags.split(" ");
        const show = tag === "all" || tags.includes(tag);
        card.classList.toggle("hide", !show);
      });
    }
  });

  /* Lee ?tag=piscina si llega con parámetro */
  const pre = new URLSearchParams(location.search).get("tag");
  if(pre){
    const btn = filtros.querySelector(`[data-tag="${pre}"]`);
    btn?.click();
    btn?.scrollIntoView({behavior:"smooth", block:"center"});
  }
}

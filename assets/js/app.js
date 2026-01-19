// assets/js/app.js
import { COMPANY_FACEBOOK_URL, categories, products } from "./data.js";

function $(sel){ return document.querySelector(sel); }
function $all(sel){ return Array.from(document.querySelectorAll(sel)); }

function escapeHtml(str){
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function categoryName(key){
  const c = categories.find(x => x.key === key);
  return c ? c.name : "Producto";
}

// -----------------------------
// Nav active (based on body data-page)
// -----------------------------
export function initNav(){
  const page = document.body.dataset.page;
  $all("[data-nav]").forEach(a => {
    if(a.dataset.nav === page) a.classList.add("active");
  });

  // Footer year
  const y = $("#year");
  if(y) y.textContent = new Date().getFullYear();

  // Buttons to company facebook (if present)
  $all("[data-company-facebook]").forEach(a => a.href = COMPANY_FACEBOOK_URL);
}

// -----------------------------
// Home page: categories + featured products
// -----------------------------
export function initHome(){
  const catsEl = $("#cats");
  if(catsEl){
    catsEl.innerHTML = "";
    categories.forEach(c => {
      const div = document.createElement("a");
      div.className = "card card-pad cat-card";
      div.href = `catalogo.html?cat=${encodeURIComponent(c.key)}`;
      div.innerHTML = `
        <span class="cat-tag">Categoría</span>
        <h3 class="cat-title">${escapeHtml(c.name)}</h3>
        <p class="cat-desc">${escapeHtml(c.desc)}</p>
      `;
      catsEl.appendChild(div);
    });
  }

  const featuredEl = $("#featured");
  if(featuredEl){
    featuredEl.innerHTML = "";
    const featured = products.filter(p => p.featured).slice(0, 8);
    if(featured.length === 0){
      featuredEl.innerHTML = `<div class="panel" style="grid-column:1/-1;">
        <h3>Sin destacados</h3><p>Marca algunos productos con featured: true en data.js</p></div>`;
      return;
    }
    featured.forEach(p => featuredEl.appendChild(productCard(p)));
  }
}

// -----------------------------
// Catalog page: search + filter
// -----------------------------
export function initCatalog(){
  const gridEl = $("#grid");
  const qEl = $("#q");
  const selEl = $("#categorySelect");

  if(!gridEl || !qEl || !selEl) return;

  // populate select
  categories.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.key;
    opt.textContent = c.name;
    selEl.appendChild(opt);
  });

  // apply query param cat
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  if(cat){
    selEl.value = cat;
  }

  function normalize(s){ return (s || "").toLowerCase().trim(); }
  function matchProduct(p, q){
    const text = [p.name, p.sku, p.description, (p.tags||[]).join(" "), p.category].join(" ");
    return normalize(text).includes(normalize(q));
  }

  function render(){
    const q = qEl.value;
    const category = selEl.value;

    const filtered = products
      .filter(p => category === "all" ? true : p.category === category)
      .filter(p => q ? matchProduct(p, q) : true);

    gridEl.innerHTML = "";

    if(filtered.length === 0){
      gridEl.innerHTML = `<div class="panel" style="grid-column:1/-1;">
        <h3>No se encontraron productos</h3>
        <p>Prueba otra búsqueda o cambia la categoría.</p>
      </div>`;
      return;
    }

    filtered.forEach(p => gridEl.appendChild(productCard(p)));
  }

  qEl.addEventListener("input", render);
  selEl.addEventListener("change", render);
  render();
}

// -----------------------------
// Shared product card builder
// -----------------------------
function productCard(p){
    const card = document.createElement("div");
    card.className = "card product";
  
    const hasImage = !!(p.image && p.image.trim().length);
  
    // Detalle del producto
    const detailUrl = `producto.html?id=${encodeURIComponent(p.id)}`;
  
    // Link de cotización (placeholder)
    const fb = (p.facebookUrl && p.facebookUrl.trim().length) ? p.facebookUrl : COMPANY_FACEBOOK_URL;
  
    card.innerHTML = `
      <a class="thumb" href="${detailUrl}" aria-label="Ver detalles de ${escapeHtml(p.name)}">
        <span class="badge">${escapeHtml(categoryName(p.category))}</span>
        ${
          hasImage
            ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy" />`
            : `<div class="thumb-placeholder">TODO: coloca imagen en data.js</div>`
        }
      </a>
  
      <div class="p-content">
        <div class="p-title">
          <a href="${detailUrl}" style="font-weight:950;">
            <h3 style="margin:0;">${escapeHtml(p.name)}</h3>
          </a>
          <span class="sku">${escapeHtml(p.sku)}</span>
        </div>
  
        <p class="p-desc">${escapeHtml(p.shortDescription || p.description || "")}</p>
  
        <div class="meta">
          ${(p.tags||[]).slice(0,4).map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>
  
      <div class="p-footer" style="display:flex; gap:10px;">
        <a class="btn btn-ghost" style="flex:1;" href="${detailUrl}">
          Ver detalles
        </a>
        <a class="btn btn-primary" style="flex:1;" href="${escapeHtml(fb)}" target="_blank" rel="noopener">
          Me interesa
        </a>
      </div>
    `;
    return card;
  }  

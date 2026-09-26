/* =========================================
   UI RENDERING — CraveRush (recommendation build)
========================================= */

let selectedForCompare = [];

/* Image resolver:
   1. If product has its own image, use it.
   2. Else fall back to a rotating reference image for its category.
   3. Else a tiny inline SVG (safe — no quotes inside). */
const FALLBACK_IMG = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%23FFDBB0%22%2F%3E%3Ctext%20x%3D%22200%22%20y%3D%22200%22%20font-family%3D%22Poppins%2Csans-serif%22%20font-size%3D%2224%22%20font-weight%3D%22600%22%20fill%3D%22%233E2723%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3ECraveRush%3C%2Ftext%3E%3C%2Fsvg%3E';

function imgSrc(p) {
    if (p && p.image) return p.image;
    const list = (window.CATEGORY_IMAGES && window.CATEGORY_IMAGES[p.category]) || null;
    if (list && list.length) return list[p.id % list.length];
    return FALLBACK_IMG;
}

function caloriesText(p)     { return p.caloriesDisplay || `${p.calories} kcal`; }
function shortTitle(s, n=48) { return s.length > n ? s.slice(0, n - 1) + '…' : s; }

/* ---------- Featured Carousel ---------- */
function renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featuredIds = [1, 13, 25, 45, 96, 125];
    const featured = products.filter(p => featuredIds.includes(p.id));

    container.innerHTML = featured.map(p => `
        <div class="item">
            <div class="product-card" onclick="window.location.href='product-details.html?id=${p.id}'">
                <img src="${imgSrc(p)}" alt="${p.name}" class="card-img-top">
                <div class="card-body">
                    <h6 class="fw-bold mb-1 text-truncate">${p.name}</h6>
                    <span class="calories">${caloriesText(p)}</span>
                </div>
            </div>
        </div>`).join('');

    if (window.jQuery && jQuery.fn.owlCarousel) {
        jQuery('#featured-products').owlCarousel({
            loop: true, margin: 20, nav: true, dots: true,
            autoplay: true, autoplayHoverPause: true, smartSpeed: 600,
            navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
            responsive: { 0:{items:1}, 576:{items:2}, 768:{items:2}, 992:{items:3}, 1200:{items:4} }
        });
    }
}

/* ---------- Categories ---------- */
function renderCategories(type, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const data = type === 'Desserts' ? categories.desserts : categories.icecreams;
    const parentSlug = type === 'Desserts' ? 'desserts' : 'icecreams';

    container.innerHTML = data.map(cat => `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="category-card" onclick="window.location.href='products.html?category=${cat.id}&parent=${parentSlug}'">
                <img src="${cat.image}" alt="${cat.name}">
                <h5>${cat.name}</h5>
            </div>
        </div>`).join('');
}

/* ---------- Product List ---------- */
let currentCategoryProducts = [];

function renderProductList(category) {
    if (category === 'all') currentCategoryProducts = [...products];
    else currentCategoryProducts = products.filter(p => p.category === category);
    displayProducts(currentCategoryProducts);
}

function displayProducts(arr) {
    const container = document.getElementById('product-grid');
    if (!container) return;

    if (arr.length === 0) {
        container.innerHTML = `<div class="col-12 text-center py-5"><h4>No products found.</h4></div>`;
        updateCompareButtonState();
        return;
    }

    container.innerHTML = arr.map(p => {
        const checked = selectedForCompare.includes(p.id) ? 'checked' : '';
        return `
        <div class="col-6 col-md-4 col-lg-3 fade-in">
            <div class="product-card position-relative">
                <label class="compare-check" onclick="event.stopPropagation();">
                    <input type="checkbox" ${checked}
                           onchange="toggleCompare(${p.id}, this.checked)">
                    <span>Compare</span>
                </label>
                <div onclick="window.location.href='product-details.html?id=${p.id}'">
                    <img src="${imgSrc(p)}" alt="${p.name}" class="card-img-top">
                    <div class="card-body">
                        <h6 class="fw-bold mb-1 text-truncate">${p.name}</h6>
                        <p class="text-muted small mb-2 text-truncate" title="${p.alternative}">
                            <i class="bi bi-lightbulb me-1"></i>${shortTitle(p.alternative)}
                        </p>
                        <span class="calories">${caloriesText(p)}</span>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');

    updateCompareButtonState();
}

/* ---------- Compare ---------- */
function toggleCompare(id, checked) {
    if (checked) { if (!selectedForCompare.includes(id)) selectedForCompare.push(id); }
    else         { selectedForCompare = selectedForCompare.filter(x => x !== id); }
    updateCompareButtonState();
}
function updateCompareButtonState() {
    const btn = document.getElementById('compare-btn');
    if (!btn) return;
    const n = selectedForCompare.length;
    btn.innerHTML = `<i class="bi bi-columns-gap me-1"></i> Compare${n ? ` (${n})` : ''}`;
    btn.disabled = n < 2;
}
function openCompareModal() {
    if (selectedForCompare.length < 2) return;
    renderCompareTable();
    const el = document.getElementById('compareModal');
    if (el) new bootstrap.Modal(el).show();
}
function removeFromCompare(id) {
    selectedForCompare = selectedForCompare.filter(x => x !== id);
    const cb = document.querySelector(`input[onchange*="toggleCompare(${id},"]`);
    if (cb) cb.checked = false;
    if (selectedForCompare.length < 2) {
        const el = document.getElementById('compareModal');
        const inst = bootstrap.Modal.getInstance(el);
        if (inst) inst.hide();
    }
    renderCompareTable();
    updateCompareButtonState();
}

function renderCompareTable() {
    const container = document.getElementById('compare-body');
    if (!container) return;
    const items = products.filter(p => selectedForCompare.includes(p.id));

    if (items.length < 2) {
        container.innerHTML = `<p class="text-center text-muted my-4">Select at least 2 products to compare.</p>`;
        return;
    }

    const rows = [
        { label: 'Image',        value: p => `<img src="${imgSrc(p)}" alt="${p.name}" class="compare-img">` },
        { label: 'Name',         value: p => `<strong>${p.name}</strong>` },
        { label: 'Calories',     value: p => caloriesText(p) },
        { label: 'Alternative',  value: p => `<span class="small"><i class="bi bi-lightbulb me-1" style="color: var(--pink-accent);"></i>${p.alternative}</span>` },
        { label: 'Category',     value: p => p.category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) },
        { label: 'Available at', value: p => `
            <ul class="list-unstyled small mb-0">
                ${p.locations.map(loc => `<li><i class="bi bi-shop me-1" style="color: var(--pink-accent);"></i>${loc}</li>`).join('')}
            </ul>` }
    ];

    const desktopHTML = `
        <div class="compare-desktop">
            <div class="compare-scroll">
                <table class="compare-table">
                    <thead>
                        <tr>
                            <th class="compare-attr"></th>
                            ${items.map(p => `
                                <th>
                                    <button class="compare-remove" onclick="removeFromCompare(${p.id})" title="Remove">
                                        <i class="bi bi-x-lg"></i>
                                    </button>
                                </th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.map(r => `
                            <tr>
                                <td class="compare-attr">${r.label}</td>
                                ${items.map(p => `<td>${r.value(p)}</td>`).join('')}
                            </tr>`).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;

    const mobileHTML = `
        <div class="compare-mobile">
            ${items.map(p => `
                <div class="compare-product-card">
                    <button class="compare-remove" onclick="removeFromCompare(${p.id})" title="Remove">
                        <i class="bi bi-x-lg"></i>
                    </button>
                    <img src="${imgSrc(p)}" alt="${p.name}" class="compare-img">
                    <h5>${p.name}</h5>
                    <div class="compare-row"><span class="lbl">Calories</span><span class="val">${caloriesText(p)}</span></div>
                    <div class="compare-row"><span class="lbl">Alternative</span><span class="val">${p.alternative}</span></div>
                    <div class="compare-row"><span class="lbl">Category</span><span class="val">${p.category.replace(/-/g, ' ')}</span></div>
                    <div class="compare-row">
                        <span class="lbl">Available at</span>
                        <span class="val"><ul>${p.locations.map(l => `<li><i class="bi bi-shop me-1" style="color: var(--pink-accent);"></i>${l}</li>`).join('')}</ul></span>
                    </div>
                </div>`).join('')}
        </div>`;

    container.innerHTML = desktopHTML + mobileHTML;
}

/* ---------- Search & Sort ---------- */
function setupProductSearchAndSort() {
    const searchInput = document.getElementById('product-search');
    const sortSelect  = document.getElementById('sort-select');
    if (!searchInput || !sortSelect) return;

    function run() {
        let filtered = [...currentCategoryProducts];
        const q = searchInput.value.trim().toLowerCase();
        if (q) filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(q) ||
            (p.alternative || '').toLowerCase().includes(q));

        const s = sortSelect.value;
        if (s === 'calories') filtered.sort((a, b) => a.calories - b.calories);
        else if (s === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

        displayProducts(filtered);
    }
    searchInput.addEventListener('input', run);
    sortSelect.addEventListener('change', run);
}

function setupHomeSearch() {
    const input = document.getElementById('home-search');
    if (!input) return;
    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            const q = input.value.trim();
            if (q) window.location.href = `products.html?search=${encodeURIComponent(q)}`;
        }
    });
}

/* ---------- Product Details ---------- */
function renderProductDetails(productId) {
    const container = document.getElementById('product-detail-container');
    if (!container) return;
    const p = products.find(x => x.id === productId);
    if (!p) { container.innerHTML = '<h3>Product not found.</h3>'; return; }

    const bc = document.getElementById('breadcrumb-container');
    if (bc) {
        const catLabel = p.category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        bc.innerHTML = `
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="${p.parent}.html">${p.parent === 'icecreams' ? 'Ice Creams' : 'Desserts'}</a></li>
            <li class="breadcrumb-item"><a href="products.html?category=${p.category}&parent=${p.parent}">${catLabel}</a></li>
            <li class="breadcrumb-item active">${p.name}</li>`;
    }

    container.innerHTML = `
        <div class="col-lg-6">
            <img src="${imgSrc(p)}" alt="${p.name}" class="product-detail-img">
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold mb-3">${p.name}</h1>
            <div class="mb-4">
                <span class="badge" style="background: var(--peach); color: var(--text-dark); font-size: 0.9rem; padding: 0.5rem 1rem;">
                    ${caloriesText(p)}
                </span>
            </div>
            <div class="mb-4">
                <h6 class="fw-bold mb-1">Alternative</h6>
                <p class="text-muted small mb-0">
                    <i class="bi bi-lightbulb me-1" style="color: var(--pink-accent);"></i>${p.alternative}
                </p>
            </div>
            <div class="mb-4">
                <h6 class="fw-bold mb-3">Available At</h6>
                <div class="availability-list">
                    ${p.locations.map(loc => `
                        <div class="availability-item">
                            <div class="fw-semibold small"><i class="bi bi-shop me-2"></i>${loc}</div>
                            <span class="availability-status in">
                                <i class="bi bi-check-circle-fill me-1"></i>Available
                            </span>
                        </div>`).join('')}
                </div>
                <p class="text-muted small mt-2 mb-0">Store availability is informational and may vary.</p>
            </div>
            <div class="mb-4">
                <button class="btn btn-custom" onclick="addToCart(${p.id}, 1)">Add to Cart</button>
            </div>
        </div>`;

    renderRelatedProducts(p.category, p.id);
}

function renderRelatedProducts(category, excludeId) {
    const container = document.getElementById('related-products');
    if (!container) return;
    const related = products.filter(x => x.category === category && x.id !== excludeId).slice(0, 4);
    if (related.length === 0) { container.innerHTML = ''; return; }

    container.innerHTML = related.map(p => `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="product-card" onclick="window.location.href='product-details.html?id=${p.id}'">
                <img src="${imgSrc(p)}" alt="${p.name}" class="card-img-top">
                <div class="card-body">
                    <h6 class="fw-bold mb-1 text-truncate">${p.name}</h6>
                    <span class="calories">${caloriesText(p)}</span>
                </div>
            </div>
        </div>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof updateCartCount === 'function') updateCartCount();
    updateCompareButtonState();
});
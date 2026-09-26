/* =========================================
   CART — Recommendation Build
   Cart acts as a saved / picked-items list.
   No prices. No totals. No checkout.
   Restore delivery behavior via LEGACY_DELIVERY blocks.
========================================= */

let cart = JSON.parse(localStorage.getItem('creamySwirlsCart')) || [];

function saveCart() {
    localStorage.setItem('creamySwirlsCart', JSON.stringify(cart));
    updateCartCount();
}
function updateCartCount() {
    const el = document.getElementById('cart-count');
    if (el) el.textContent = cart.reduce((s, i) => s + i.quantity, 0);
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(i => i.id === productId);
    if (existing) existing.quantity += quantity;
    else cart.push({
        id: product.id,
        name: product.name,
        category: product.category,
        image: imgSrc(product),
        quantity
    });
        // LEGACY_DELIVERY: PRICE
        // price: product.price
    });
    saveCart();

    const btn = event && event.target ? event.target.closest('button') : null;
    if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check2"></i> Added!';
        btn.classList.add('btn-success');
        setTimeout(() => { btn.innerHTML = original; btn.classList.remove('btn-success'); }, 1400);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    renderCartPage();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) removeFromCart(productId);
    else { saveCart(); renderCartPage(); }
}

/* ---------- Cart Page ---------- */
function renderCartPage() {
    const container = document.getElementById('cart-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-bag-x display-1 text-muted"></i>
                <h3 class="mt-3">Your list is empty</h3>
                <p class="text-muted">Save products you want to revisit later.</p>
                <a href="index.html" class="btn btn-custom mt-3">Explore Products</a>
            </div>`;
        return;
    }

    container.innerHTML = `
        <div class="row g-4">
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm rounded-4 p-3">
                    ${cart.map(item => `
                        <div class="d-flex align-items-center mb-3 pb-3 border-bottom">
                            <img src="${item.image || (window.CATEGORY_IMAGES && window.CATEGORY_IMAGES[item.category] ? window.CATEGORY_IMAGES[item.category][item.id % window.CATEGORY_IMAGES[item.category].length] : '')}" alt="${item.name}" class="rounded-3"
                                style="width: 80px; height: 80px; object-fit: cover;">
                            <div class="ms-3 flex-grow-1">
                                <h6 class="mb-1 fw-bold">${item.name}</h6>
                                <div class="quantity-selector">
                                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                                    <input type="text" value="${item.quantity}" readonly>
                                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                                </div>
                            </div>
                            <div class="text-end">
                                <button class="btn btn-sm btn-outline-danger border-0"
                                        onclick="removeFromCart(${item.id})">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>`).join('')}
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card border-0 shadow-sm rounded-4 p-4">
                    <h5 class="fw-bold mb-2">Saved List</h5>
                    <p class="text-muted small mb-0">
                        This is a recommendation build. Checkout, pricing and ordering are disabled for now.
                    </p>
                </div>
            </div>
        </div>`;
}

/* ============================================================
   LEGACY DELIVERY VERSION — COMMENTED OUT
   Restore the block below to re-enable the full checkout flow.
   ============================================================

let checkoutState = 'cart';   // 'cart' | 'address' | 'confirm' | 'done'
let lastOrder = null;

function getCartTotal() {
    return cart.reduce((s, i) => s + i.price * i.quantity, 0);
}

function pickOrderShop() {
    if (cart.length === 0) return null;
    const firstProduct = products.find(p => p.id === cart[0].id);
    if (!firstProduct || !firstProduct.locations || !firstProduct.locations.length) return null;
    return { area: firstProduct.locations[0], city: 'Mumbai' };
}

function proceedToCheckout() {
    if (cart.length === 0) return;
    if (!isLoggedIn()) {
        const modalEl = document.getElementById('loginRequiredModal');
        if (modalEl) new bootstrap.Modal(modalEl).show();
        else window.location.href = 'login.html?redirect=cart.html';
        return;
    }
    const addr = getAddress();
    checkoutState = addr ? 'confirm' : 'address';
    renderCartPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function backToCart()  { checkoutState = 'cart'; renderCartPage(); }
function editAddress() { checkoutState = 'address'; renderCartPage(); }
function saveAddressAndContinue() { ... }
function placeOrder() { ... }
function renderAddressView(container) { ... }
function renderConfirmView(container) { ... }
function renderCartView(container) { ... }

============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof updateCartCount === 'function') updateCartCount();
});
/* =========================================
   AUTH — Multi-user, Recommendation Build
   Address & Orders stubbed. Full versions
   preserved inside LEGACY_DELIVERY blocks.
========================================= */

const USERS_KEY   = 'creamySwirlsUsers';
const SESSION_KEY = 'creamySwirlsSession';
const THEME_KEY   = 'creamySwirlsTheme';

function getUsers() { const r = localStorage.getItem(USERS_KEY); return r ? JSON.parse(r) : []; }
function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }
function getCurrentUserEmail() { return localStorage.getItem(SESSION_KEY); }
function isLoggedIn() { return !!getCurrentUserEmail(); }
function getCurrentUser() {
    const email = getCurrentUserEmail();
    if (!email) return null;
    return getUsers().find(u => u.email === email) || null;
}
function updateCurrentUser(patch) {
    const email = getCurrentUserEmail();
    if (!email) return null;
    const users = getUsers();
    const idx = users.findIndex(u => u.email === email);
    if (idx === -1) return null;
    users[idx] = Object.assign({}, users[idx], patch);
    saveUsers(users);
    return users[idx];
}

/* ---------- Legacy global-key migration (keep for safety) ---------- */
(function migrateOldData() {
    const oldUser = localStorage.getItem('creamySwirlsUser');
    if (!oldUser) return;
    try {
        const u = JSON.parse(oldUser);
        if (!u || !u.email) return;
        const users = getUsers();
        if (users.find(x => x.email === u.email)) {
            ['creamySwirlsUser','creamySwirlsAddress','creamySwirlsPassword','creamySwirlsOrders']
                .forEach(k => localStorage.removeItem(k));
            return;
        }
        users.push({
            email: u.email, name: u.name || '', phone: u.phone || '',
            password: localStorage.getItem('creamySwirlsPassword') || 'demo',
            address: null,          // address intentionally dropped for recommendation build
            orders: [],             // orders intentionally dropped for recommendation build
            createdAt: Date.now()
        });
        saveUsers(users);
        localStorage.setItem(SESSION_KEY, u.email);
        ['creamySwirlsUser','creamySwirlsAddress','creamySwirlsPassword','creamySwirlsOrders']
            .forEach(k => localStorage.removeItem(k));
    } catch (e) {}
})();

/* ---------- Auth ---------- */
function loginUser(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email === email);
    if (!user)                      return { ok: false, error: 'No account found for this email. Please sign up.' };
    if (user.password !== password) return { ok: false, error: 'Incorrect password.' };
    localStorage.setItem(SESSION_KEY, email);
    return { ok: true };
}
function signupUser(name, email, phone, city, password) {
    const users = getUsers();
    if (users.find(u => u.email === email))
        return { ok: false, error: 'An account with this email already exists.' };
    users.push({
        email, name, phone, city,
        password,
        address: null,           // legacy — unused in recommendation build
        orders: [],              // legacy — unused in recommendation build
        createdAt: Date.now()
    });
    saveUsers(users);
    localStorage.setItem(SESSION_KEY, email);
    return { ok: true };
}
function logoutUser(e) {
    if (e) e.preventDefault();
    localStorage.removeItem(SESSION_KEY);
    window.location.href = 'index.html';
}

/* ---------- Profile ---------- */
function updateProfile(fields) { return updateCurrentUser(fields); }

/* ---------- Password (per-user) ---------- */
function getStoredPassword() { const u = getCurrentUser(); return u ? u.password : null; }
function setStoredPassword(p) { updateCurrentUser({ password: p }); }

/* ---------- Dark mode (global device preference) ---------- */
function applyTheme(theme) {
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
}
function initDarkMode() { applyTheme(localStorage.getItem(THEME_KEY) || 'light'); }
function toggleDarkMode() {
    const next = (localStorage.getItem(THEME_KEY) === 'dark') ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
    return next;
}
function isDarkMode() { return localStorage.getItem(THEME_KEY) === 'dark'; }

/* ============================================================
   LEGACY DELIVERY VERSION — ADDRESS + ORDERS
   The functions below are STUBS to avoid breaking existing
   references. Replace them with the real versions below
   (currently commented out) to restore delivery behavior.
   ============================================================ */

/* --- Stubs (safe no-ops) --- */
function getAddress() { return null; }
function saveAddress() { /* disabled */ }
function clearAddress() { /* disabled */ }
function formatAddress() { return ''; }
function renderAddressForm() { return ''; }
function collectAddressForm() { return { error: 'Delivery address is disabled in this version.' }; }
function getOrders() { return []; }
function saveOrder() { /* disabled */ }

/* --- Original delivery implementations (commented for later) --- */
/*
function getAddress() {
    const u = getCurrentUser();
    return u && u.address ? u.address : null;
}
function saveAddress(addr) { updateCurrentUser({ address: addr }); }
function clearAddress()    { updateCurrentUser({ address: null }); }
function formatAddress(a) {
    if (!a) return '';
    return `${a.house}, ${a.street}${a.landmark ? ', ' + a.landmark : ''}, ${a.city}, ${a.state} - ${a.pin}`;
}
function saveOrder(order) {
    const u = getCurrentUser();
    if (!u) return;
    const orders = Array.isArray(u.orders) ? u.orders : [];
    orders.unshift(order);
    updateCurrentUser({ orders });
}
function getOrders() {
    const u = getCurrentUser();
    return u && Array.isArray(u.orders) ? u.orders : [];
}
function renderAddressForm(prefill = {}) { ... }
function collectAddressForm() { ... }
*/

/* ---------- Navbar account dropdown ---------- */
function initAccountMenu() {
    const menu = document.getElementById('accountMenu');
    if (!menu) return;

    if (isLoggedIn()) {
        const user = getCurrentUser() || {};
        menu.innerHTML = `
            <li><h6 class="dropdown-header">Hi, ${user.name || 'Friend'}</h6></li>
            <li><a class="dropdown-item" href="account.html"><i class="bi bi-person-circle me-2"></i>My Account</a></li>
            <!-- LEGACY_DELIVERY: ORDER HISTORY LINK
            <li><a class="dropdown-item" href="orders.html"><i class="bi bi-receipt me-2"></i>My Orders</a></li>
            -->
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-danger" href="#" onclick="logoutUser(event)"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
        `;
    } else {
        menu.innerHTML = `
            <li><a class="dropdown-item" href="login.html"><i class="bi bi-box-arrow-in-right me-2"></i>Login</a></li>
            <li><a class="dropdown-item" href="login.html?tab=signup"><i class="bi bi-person-plus me-2"></i>Sign Up</a></li>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initAccountMenu();
    initDarkMode();
});
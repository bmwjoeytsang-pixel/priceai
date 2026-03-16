// components.js
const navHTML = `
<nav>
    <div class="nav-left"><a href="/" style="text-decoration:none; color:#666;">← 主頁</a></div>
    <a href="/" class="logo">
        <img src="/images/logo.png" alt="PriceAI Logo" class="logo-img">
    </a>
    <div class="nav-right" style="display:flex; align-items:center; justify-content: flex-end; gap:20px;">
        <a href="/case/" style="text-decoration:none; color:var(--dark); font-weight:bold; font-size:14px;">實戰案例</a>
        <a href="https://wa.me/85293299828" class="btn-deck">索取 Sales Deck</a>
    </div>
</nav>
`;

const footerHTML = `
<footer style="text-align:center; padding: 50px 0; color: #999; font-size: 0.9rem; border-top: 1px solid #eee; margin-top: 50px;">
    <p>&copy; 2026 PriceAI.hk All Rights Reserved.</p>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    // 注入 Header
    const headerElement = document.getElementById("header-component");
    if (headerElement) headerElement.innerHTML = navHTML;

    // 注入 Footer
    const footerElement = document.getElementById("footer-component");
    if (footerElement) footerElement.innerHTML = footerHTML;
});
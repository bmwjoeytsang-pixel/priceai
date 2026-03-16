// components.js
const navHTML = `
<nav>
    <div class="nav-left">
        <a href="/" style="text-decoration:none; color:#666; font-weight:bold;">← 主頁</a>
    </div>
    
    <a href="/" class="logo">
        <img src="/images/logo.png" alt="PriceAI Logo" class="logo-img">
    </a>

    <div class="nav-right" style="display:flex; justify-content: flex-end;">
        <a href="https://wa.me/85265355251?text=你好PriceAI，我想索取PriceAI嘅完整Sales Deck資料" class="btn-deck">索取 Sales Deck</a>
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

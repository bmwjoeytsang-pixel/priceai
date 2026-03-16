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
<footer style="background:#fff; padding:60px 5%; border-top:1px solid #eee; text-align:center;">
    <div style="margin-bottom:20px;">
        <img src="/images/logo.png" style="height:40px; opacity:0.6; filter:grayscale(100%);">
    </div>
    <div style="display:flex; justify-content:center; gap:30px; margin-bottom:20px; flex-wrap:wrap;">
        <a href="mailto:info@priceai.hk" style="text-decoration:none; color:#666;"><i class="fas fa-envelope"></i> info@priceai.hk</a>
        <a href="https://wa.me/85265355251" style="text-decoration:none; color:#666;"><i class="fab fa-whatsapp"></i> WhatsApp 諮詢</a>
    </div>
    <p style="color:#aaa; font-size:0.85rem;">&copy; 2026 PriceAI.hk | 專門為香港零售商打造的 AI 定價專家</p>
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

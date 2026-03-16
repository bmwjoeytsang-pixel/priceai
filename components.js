// components.js
const navHTML = `
<nav>
    <div class="nav-left"><a href="/" style="text-decoration:none; color:#666;">← 主頁</a></div>
    <a href="/" class="logo">
        <img src="/images/logo.webq" alt="PriceAI Logo" class="logo-img">
    </a>  
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

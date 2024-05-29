// scrol nvbar stiky
const navEl = document.querySelector('nav.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 90) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY <= 10) {
        navEl.classList.remove('navbar-scrolled');
    }
});

// more link click
// TARGET 'overflow-scroll'

document.addEventListener("DOMContentLoaded", function() {
    const moreContent = document.getElementById("more-content");
    const toggleLink = document.getElementById("toggle-link");

    toggleLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (moreContent.style.display === "none" || moreContent.style.display === "") {
            moreContent.style.display = "inline";
            toggleLink.textContent = "less";
        } else {
            moreContent.style.display = "none";
            toggleLink.textContent = "see more";
        }
    });
});

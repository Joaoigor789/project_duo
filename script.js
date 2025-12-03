document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");
    const userButtons = document.querySelectorAll(".user-btn");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            console.log("Pesquisar por:", query);
        }
    });

    userButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Botão clicado:", btn.textContent);
        });
    });

    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.style.backdropFilter = "blur(16px)";
        } else {
            header.style.backdropFilter = "blur(10px)";
        }
    });
});

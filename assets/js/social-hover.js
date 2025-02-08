document.addEventListener("DOMContentLoaded", function () {
    const socialIcons = document.querySelectorAll(".home__social-icon");

    socialIcons.forEach(icon => {
        // Ao passar o mouse, gira 360°
        icon.addEventListener("mouseenter", () => {
            icon.style.transition = "transform 0.3s ease-in-out";
            icon.style.transform = "rotate(360deg)";
        });

        // Ao clicar, gira 720°
        icon.addEventListener("click", () => {
            icon.style.transition = "transform 0.2s ease-in-out";
            icon.style.transform = "rotate(720deg)";
        });

        // Ao sair, volta ao normal
        icon.addEventListener("mouseleave", () => {
            icon.style.transition = "transform 0.3s ease-in-out";
            icon.style.transform = "rotate(0deg)";
        });
    });
});

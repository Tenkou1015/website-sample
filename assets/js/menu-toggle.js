document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("nav ul");
    
    menuToggle.addEventListener("click", function() {
        navUl.classList.toggle("show-menu");
    });
    
    window.addEventListener("resize", function() {
        if (window.innerWidth >= 769) {
            navUl.classList.remove("show-menu");
        }
    });
});
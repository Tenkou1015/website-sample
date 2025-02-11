document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        navUl.style.display = navUl.style.display === "flex" ? "none" : "flex";
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth >= 769) {
            navUl.style.display = "flex"; // 大屏幕时显示导航栏
        } else {
            navUl.style.display = "none"; // 小屏幕时隐藏导航栏
        }
    });
}); 
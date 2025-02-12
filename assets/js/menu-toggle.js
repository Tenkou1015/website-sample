document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("header nav ul");

    console.log("Menu toggle initialized");
    console.log("Menu toggle element:", menuToggle);
    console.log("Nav UL element:", navUl);

    function updateNavDisplay() {
        if (window.innerWidth >= 769) {
            navUl.style.display = "flex"; // 大屏幕时显示导航栏
        } else {
            navUl.style.display = "none"; // 小屏幕时隐藏导航栏
        }
    }
    



    menuToggle.addEventListener("click", function() {
        console.log("Menu toggle clicked");
        console.log("Current display:", navUl.style.display);
        if (navUl.style.display === "none") {
            navUl.style.display = "flex"; // 如果当前是隐藏的，则显示
        } else {
            navUl.style.display = "none"; // 如果当前是显示的，则隐藏
        }
        console.log("New display:", navUl.style.display);
    });

    window.addEventListener("resize", updateNavDisplay);
    updateNavDisplay(); // 初始化时调用
}); 
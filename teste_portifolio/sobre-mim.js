document.addEventListener("DOMContentLoaded", function() {
    const menuVideo = document.querySelector(".menu-video img");
    const navbar = document.querySelector("header.navbar");

    menuVideo.addEventListener("click", function() {
        navbar.classList.toggle("expanded");
    });
});

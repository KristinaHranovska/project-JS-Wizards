document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.querySelector(".home-button");
    const button2 = document.querySelector(".favourites-button");
    const currentPage = window.location.pathname;
    if (currentPage.includes("index")) {
        button1.classList.add("header-button1-act");
        console.log(111);
    } else if (currentPage.includes("favorites")) {
        button2.classList.add("header-button2-act");
    }
});



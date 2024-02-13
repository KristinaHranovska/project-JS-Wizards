const favoritesButton = document.querySelector('.link-favorites');
const homeButton = document.querySelector('.link-home');

(() => {
    const refs = {
        openModalBtn: document.querySelector(".burger-menu-open"),
        closeModalBtn: document.querySelector(".burger-closed"),
        modal: document.querySelector(".backdrop"),
    };

    const backdrop = document.querySelector(".backdrop");
    backdrop.classList.add("is-hidden");

    refs.openModalBtn.addEventListener("click", function () {
        console.log("Open modal button clicked");
        toggleModal();
    });
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

window.addEventListener('load', () => {
    if (window.location.pathname.endsWith('favorites.html')) {
        favoritesButton.classList.add('active-link');
        homeButton.classList.remove('active-link');
    } else {
        homeButton.classList.add('active-link');
        favoritesButton.classList.remove('active-link');
    }
});
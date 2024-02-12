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

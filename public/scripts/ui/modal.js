function toggleModal() {
    const showModal = document.querySelector('.show-modal');
    const hideModal = document.querySelector('.hide-modal');
    const modal = document.querySelector('.modal');

    showModal.addEventListener('click', () => {
        modal.showModal();
    });

    hideModal.addEventListener('click', () => {
        modal.close();
    });
}

toggleModal();
document.addEventListener("astro:after-swap", toggleModal);
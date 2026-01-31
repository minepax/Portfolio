function toggleTOC() {
    const toc = document.querySelector('.badminton-toc');
    const tocbtn = document.querySelector('.badminton-toc-btn');
    const tocClose = document.querySelector('.badminton-toc-close');

    tocbtn.addEventListener('click', () => {
        toc.toggleAttribute("data-open");
    });

    tocClose.addEventListener('click', () => {
        toc.toggleAttribute("data-open");
    });
}

toggleTOC();
document.addEventListener("astro:after-swap", toggleTOC);
function mySwiper() {
    // @ts-ignore
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 100,
        grabCursor: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".custom-navigation .swiper-button-next",
            prevEl: ".custom-navigation .swiper-button-prev",
        },
    });
}

mySwiper();
document.addEventListener("astro:after-swap", mySwiper);
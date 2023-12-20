// SWIPER
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
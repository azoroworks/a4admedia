var swiper = new Swiper(".gallery-slider", {
    loop:true,
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 1700,
        disableOnInteraction: false,
        stopOnLast: true,
       },
    speed: 670,
    coverflowEffect: {
       rotate: 0,
       stretch: 0,
       depth: 300,
       modifier: 1,
       slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

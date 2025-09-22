document.addEventListener("DOMContentLoaded", function () {
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });

    const body = document.querySelector("body");
    const headerMenu = document.querySelector(".header__menu");
    const headerList = document.querySelector(".header__list");

    const headerLinks = document.querySelectorAll(".header__item>a");

    for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].addEventListener("click", function () {
            headerMenu.classList.remove("active");
            body.classList.remove("header-lock");
            headerList.classList.remove("active");
        });
    }

    headerMenu.addEventListener("click", function () {
        headerMenu.classList.toggle("active");
        body.classList.toggle("header-lock");
        headerList.classList.toggle("active");
    });

    const input = document.querySelectorAll("#number");
    if (input) {
        for (let i = 0; i < input.length; i++) {
            const iti = window.intlTelInput(input[i], {
                initialCountry: "es",
                separateDialCode: true,
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js"
            });
        }
    }

    const videoPopup = document.querySelector(".video-popup");

    if (document.querySelector(".video-popup")) {
        const videoClose = document.querySelector(".video-popup__close button");
        const videoOpen = document.querySelector(".hero-video__button button");

        videoOpen.addEventListener("click", function () {
            body.classList.add("lock");
            videoPopup.classList.add("open");
        });

        videoClose.addEventListener("click", function () {
            body.classList.remove("lock");
            videoPopup.classList.remove("open");
            video.pause();
        });

        videoPopup.addEventListener("click", function (event) {
            if (!event.target.closest(".video-popup__video")) {
                body.classList.remove("lock");
                videoPopup.classList.remove("open");
                video.pause();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.which == 27) {
                body.classList.remove("lock");
                videoPopup.classList.remove("open");
                video.pause();
            }
        });
    }

    if (document.querySelector(".swiper")) {
        const swiperGallery = new Swiper('.gallery__body.swiper', {
            slidesPerView: 1,
            spaceBetween: 23,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1401: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });

        const swiperReviews = new Swiper('.reviews__body.swiper', {
            slidesPerView: 1,
            spaceBetween: 22,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1401: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });

        const swiperResidential = new Swiper('.residential__body.swiper', {
            slidesPerView: 1,
            spaceBetween: 22,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1401: {
                    slidesPerView: 3,
                },
            },
        });
    }

    const whatsappButton = document.querySelector(".footer__button.whatsapp");
    const footerBlockInfo = document.querySelector(".footer__item.info");
    const footerBlockImage = document.querySelector(".footer__item.image");
    const footerSpan = document.querySelector(".footer__span.info");

    function moveFooterButton() {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewport_width < 1400) {
            footerBlockImage.insertBefore(whatsappButton, footerBlockImage.children[0]);
            footerBlockImage.insertBefore(footerSpan, footerBlockImage.children[2]);
        } else {
            footerBlockInfo.insertBefore(whatsappButton, footerBlockInfo.children[3]);
            footerBlockInfo.insertBefore(footerSpan, footerBlockInfo.children[4]);
        }
    }
    moveFooterButton();
    window.addEventListener("resize", moveFooterButton);

    const openFormButtons = document.querySelectorAll("#openForm");
    const popupForm = document.querySelector(".form-popup");
    const popupFormClose = document.querySelector(".form-popup__close>button");

    for (let i = 0; i < openFormButtons.length; i++) {
        openFormButtons[i].addEventListener("click", function () {
            body.classList.add("lock");
            popupForm.classList.add("open");
        });
    }

    popupFormClose.addEventListener("click", function () {
        body.classList.remove("lock");
        popupForm.classList.remove("open");
    });

    popupForm.addEventListener("click", function (event) {
        if (!event.target.closest(".form-popup__form")) {
            body.classList.remove("lock");
            popupForm.classList.remove("open");
        }
    });
});
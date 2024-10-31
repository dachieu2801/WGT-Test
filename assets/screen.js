function startTimer() {
    const endTime = new Date("October 31, 2024 23:59:59").getTime();
    const timerContainer = document.querySelector('.timer-container');

    setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerContainer.innerHTML = `
                <div class="timer">
                    <div>${days < 10 ? '0' + days : days}</div>
                    <div class="type-time">days</div>
                </div>
                <div>:</div>
                <div class="timer">
                    <div>${hours < 10 ? '0' + hours : hours}</div>
                    <div class="type-time">hours</div>
                </div>
                <div>:</div>
                <div class="timer">
                    <div>${minutes < 10 ? '0' + minutes : minutes}</div>
                    <div class="type-time">min</div>
                </div>
                <div>:</div>
                <div class="timer">
                    <div>${seconds < 10 ? '0' + seconds : seconds}</div>
                    <div class="type-time">sec</div>
                </div>`;
    }, 1000);
}

window.onload = startTimer;
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});
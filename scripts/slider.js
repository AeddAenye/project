let currentSlideIndex = 0;
const slides = document.querySelectorAll('.other-slides .pic img');
const slideContainer = document.querySelector('.interface .slide img');

function changeSlide(direction) {
    currentSlideIndex += direction;

    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }

    slideContainer.src = slides[currentSlideIndex].src;
    updateActiveSlide();
}

function changeSlideTo(index) {
    currentSlideIndex = index;
    slideContainer.src = slides[currentSlideIndex].src;
    updateActiveSlide();
}

function updateActiveSlide() {
    // Remove active class from all slides
    slides.forEach(slide => slide.parentElement.classList.remove('active'));

    // Add active class to the current slide
    slides[currentSlideIndex].parentElement.classList.add('active');
}
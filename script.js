let currentIndices = [1, 1, 1]; 
let autoSlideIntervals = [];

function showSlide(carouselIndex, slideIndex) {
    const carousel = document.querySelector(`.carrossel_junte_se_${carouselIndex} .junte_se_imagens`);
    const totalSlides = document.querySelectorAll(`.carrossel_junte_se_${carouselIndex} .carrossel_img`).length;

    currentIndices[carouselIndex - 1] = slideIndex;
    const offset = -currentIndices[carouselIndex - 1] * 100;
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = `translateX(${offset}%)`;

    if (slideIndex === totalSlides - 1) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndices[carouselIndex - 1] = 1;
            carousel.style.transform = `translateX(-100%)`;
        }, 500);
    } else if (slideIndex === 0) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndices[carouselIndex - 1] = totalSlides - 2;
            carousel.style.transform = `translateX(-${(totalSlides - 2) * 100}%)`;
        }, 500);
    }
}

function nextSlide(carouselIndex) {
    showSlide(carouselIndex, currentIndices[carouselIndex - 1] + 1);
}

function prevSlide(carouselIndex) {
    showSlide(carouselIndex, currentIndices[carouselIndex - 1] - 1);
}

function startAutoSlide(carouselIndex) {
    autoSlideIntervals[carouselIndex - 1] = setInterval(() => nextSlide(carouselIndex), 3000);
}

function stopAutoSlide(carouselIndex) {
    clearInterval(autoSlideIntervals[carouselIndex - 1]);
}

document.querySelector('.carrossel_junte_se_1').addEventListener('mouseover', () => stopAutoSlide(1));
document.querySelector('.carrossel_junte_se_1').addEventListener('mouseout', () => startAutoSlide(1));
document.querySelector('.carrossel_junte_se_2').addEventListener('mouseover', () => stopAutoSlide(2));
document.querySelector('.carrossel_junte_se_2').addEventListener('mouseout', () => startAutoSlide(2));


showSlide(1, currentIndices[0]);
showSlide(2, currentIndices[1]);
showSlide(3, currentIndices[2]);
startAutoSlide(1);
startAutoSlide(2);
startAutoSlide(3);

function scrollup() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}
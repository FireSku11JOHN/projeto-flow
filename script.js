let currentIndex = 1; // Começamos em 1 devido à duplicação da primeira imagem
let autoSlideInterval;

// Função para exibir o slide correto e implementar o loop infinito
function showSlide(index) {
    const slides = document.querySelector('.junte_se_imagens');
    const totalSlides = document.querySelectorAll('.junte_se_carrossel').length;

    // Define o índice atual e move o carrossel para a imagem correspondente
    currentIndex = index;
    const offset = -currentIndex * 100;
    slides.style.transition = 'transform 0.5s ease'; // Ativa a transição
    slides.style.transform = `translateX(${offset}%)`;

    // Corrige a posição para o início ou fim quando atinge as duplicações
    if (currentIndex === totalSlides - 1) {
        // Vai da última imagem duplicada para o primeiro slide real
        setTimeout(() => {
            slides.style.transition = 'none'; // Desativa a transição
            currentIndex = 1;
            slides.style.transform = `translateX(-100%)`;
        }, 500);
    } else if (currentIndex === 0) {
        // Vai da primeira imagem duplicada para o último slide real
        setTimeout(() => {
            slides.style.transition = 'none'; // Desativa a transição
            currentIndex = totalSlides - 2;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 500);
    }
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Função para iniciar a navegação automática
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 2000); // Muda de slide a cada 3 segundos
}

// Função para parar a navegação automática
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Pausar o carrossel temporariamente quando o usuário interagir
document.querySelector('.carrossel_junte_se').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.carrossel_junte_se').addEventListener('mouseout', startAutoSlide);

// Inicializa o carrossel
showSlide(currentIndex);
startAutoSlide();

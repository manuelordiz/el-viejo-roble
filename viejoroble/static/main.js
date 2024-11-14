document.addEventListener('DOMContentLoaded', () =>{
    const navbar = document.getElementById('navbar');       

    window.addEventListener('scroll', () => {
     if (window.scrollY > 25) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    });
}
);

const imgSrc = [
    "static/assets/slider/1.jpg",
    "static/assets/slider/2.jpg",
    "static/assets/slider/3.jpg",
    "static/assets/slider/4.jpg",
    "static/assets/slider/5.jpg",
    "static/assets/slider/6.jpg",
    "static/assets/slider/7.jpg",
    "static/assets/slider/8.jpg",
    "static/assets/slider/9.jpg",
    "static/assets/slider/10.jpg",
    "static/assets/slider/11.jpg",
    "static/assets/slider/12.jpg",
    "static/assets/slider/13.jpg",
    "static/assets/slider/14.jpg",
    "static/assets/slider/15.jpg",
    "static/assets/slider/16.jpg",
    "static/assets/slider/17.jpg",
    "static/assets/slider/18.jpg",
    "static/assets/slider/19.jpg",
    "static/assets/slider/20.jpg",
    "static/assets/slider/21.jpg",
    "static/assets/slider/22.jpg",
    "static/assets/slider/23.jpg",
    "static/assets/slider/24.jpg",
    "static/assets/slider/25.jpg",
    "static/assets/slider/26.jpg",
    "static/assets/slider/27.jpg",
    "static/assets/slider/28.jpg",
    "static/assets/slider/29.jpg",
    "static/assets/slider/30.jpg",
    "static/assets/slider/31.jpg",
    "static/assets/slider/32.jpg"
]

let currentIndex = 0;
const slidesContainer = document.querySelector('.slides');

function loadImages() {
    imgSrc.forEach((path, index) => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = `Imagen ${index + 1}`;
        slidesContainer.appendChild(img);
    });
}

function showSlide(index) {
    const slideWidth = slidesContainer.parentElement.clientWidth;
    slidesContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % imgSrc.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + imgSrc.length) % imgSrc.length;
    showSlide(currentIndex);
}

function initSlider() {
    loadImages();
    showSlide(currentIndex); 
    setInterval(nextSlide, 3000); 
}

initSlider();

window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
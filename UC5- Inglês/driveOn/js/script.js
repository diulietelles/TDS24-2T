// Smooth scroll for navigation buttons
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

const cars = [
    {
        name: 'Carro 1',
        description: 'Descrição do Carro 1.',
        image: 'imagem/foto1.jpg'
    },
    {
        name: 'Carro 2',
        description: 'Descrição do Carro 2.',
        image: 'imagem/foto2.jpg' 
    },
    {
        name: 'Carro 3',
        description: 'Descrição do Carro 3.',
        image: 'imagem/foto3.jpg' 
    }
];



function loadCars() {
    const carGallery = document.querySelector('.car-gallery');
    carGallery.innerHTML = '';

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');

        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>${car.description}</p>
            <a href="#" class="btn">Alugar Agora</a>
        `;

        carGallery.appendChild(carItem);
    });
}

// Carregar carros quando a página for carregada
document.addEventListener('DOMContentLoaded', loadCars);
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


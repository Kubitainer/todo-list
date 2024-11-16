// 1. Animación de aparición de elementos cuando el usuario hace scroll
// Agrega la clase "visible" a los elementos cuando estén visibles en la pantalla

// Función para comprobar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para agregar la animación cuando el elemento entra en el viewport
function checkVisibility() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

// Detectar cuando el usuario hace scroll
window.addEventListener('scroll', checkVisibility);

// Llamamos a la función una vez para aplicar las animaciones a los elementos que ya son visibles al cargar la página
checkVisibility();

// 2. Efecto de hover en los proyectos (tarjetas)
const projects = document.querySelectorAll('.project');
projects.forEach((project) => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.05)'; // Aumenta ligeramente el tamaño
        project.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    });
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
        project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// 3. Cambio de tema: modo claro / modo oscuro
const themeToggle = document.getElementById('theme-toggle'); // Suponiendo que tendrás un botón con id="theme-toggle"

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme'); // Agregar o quitar la clase 'dark-theme' al cuerpo de la página

    // Cambiar el texto del botón
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Modo Claro';
    } else {
        themeToggle.textContent = 'Modo Oscuro';
    }
});

// 4. Validación de formulario (si tienes uno)
const contactForm = document.querySelector('#contact-form'); // Suponiendo que tienes un formulario con id="contact-form"
contactForm.addEventListener('submit', (e) => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    // Validación simple: no debe estar vacío
    if (name === '' || email === '') {
        e.preventDefault(); // Evitar el envío del formulario
        alert('Por favor, complete todos los campos');
    } else {
        alert('Formulario enviado correctamente');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let menuButtons = document.querySelectorAll('.menu-button');
    let submenuButtons = document.querySelectorAll('.submenu-button');

    // Ocultar todos los menús y submenús al inicio
    document.querySelectorAll('.menu-list, .submenu-list').forEach(function(list) {
        list.style.display = 'none';
    });

    // Función para ocultar todos los menús
    function hideAllMenus() {
        document.querySelectorAll('.menu-list').forEach(function(list) {
            list.style.display = 'none';
        });
        document.querySelectorAll('.submenu-list').forEach(function(list) {
            list.style.display = 'none';
        });
    }

    // Evento para los botones de menú principal
    menuButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Detener la propagación para evitar que se oculten los submenús
            let menuList = this.nextElementSibling;
            let isVisible = menuList.style.display === 'block';
            hideAllMenus(); // Ocultar todos los menús
            menuList.style.display = isVisible ? 'none' : 'block'; // Mostrar/ocultar el menú
        });
    });

    // Evento para los botones de submenú
    submenuButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir la acción por defecto
            event.stopPropagation(); // Detener la propagación para evitar que se oculten los submenús
            let submenuList = this.nextElementSibling;
            let isVisible = submenuList.style.display === 'block';
            // Ocultar todos los submenús antes de mostrar el clicado
            document.querySelectorAll('.submenu-list').forEach(function(list) {
                list.style.display = 'none';
            });
            submenuList.style.display = isVisible ? 'none' : 'block'; // Mostrar/ocultar el submenú
        });
    });

    // Cerrar menús si se hace clic fuera de ellos
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.menu-button, .submenu-button')) {
            hideAllMenus();
        }
    });

    // Ocultar menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        let isClickInsideMenu = event.target.closest('.menu');
        if (!isClickInsideMenu) {
            document.querySelectorAll('.menu-list').forEach(function(list) {
                list.style.display = 'none';
            });
        }
    });
});
// Carrusel 
let slideIndex = 0;
let autoSlideInterval;
let isPaused = false;

function moveSlide(n) {
    slideIndex += n;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-item');
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    
    if (slideIndex < 0) {
        slideIndex = slides.length  -1;
    }
    
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    const newTransform = -slideIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform}%)`;
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === slideIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        slideIndex = index;
        updateCarousel();
    });
});

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (!isPaused) {
            moveSlide(1);
        }
    }, 3000); // Cambia cada 3 segundos
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function togglePause() {
    isPaused = !isPaused;
    const pauseButton = document.getElementById('pauseButton');
    if (isPaused) {
        stopAutoSlide();
        pauseButton.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/ios/50/play--v1.png" alt="play--v1"/>';
    } else {
        startAutoSlide();
        pauseButton.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/ios/50/pause--v1.png" alt="pause--v1"/>';
    }
}

document.querySelector('.prev').addEventListener('click', function() {
    moveSlide(-1);
});

document.querySelector('.next').addEventListener('click', function() {
    moveSlide(1);
});

startAutoSlide();



// Saludo 
function changeHeading() {
    let newName = prompt("Por favor, ingresa tu nombre:");
    if (newName !== null) {
        document.getElementById("heading").innerText = "¡Bienvenido a Xbox, " + newName + "!";
    }
}
// Cambiar el color de fondo del div al pasar el ratón por encima
function changeBackgroundColor() {
    document.getElementById("targetDiv").style.backgroundColor = "green ";
}
function toggleBackgroundColor(element) {
    element.classList.toggle("xbox-comment-hover");
}
// Comentarios

function toggleFontSelect() {
    let fontSelect = document.getElementById("fontSelect");
    fontSelect.classList.toggle("show");
}

// Función para cambiar la fuente del párrafo según la opción seleccionada en el select
function changeSelectedFont() {
    let paragraph = document.getElementById("paragraph");
    let fontSelect = document.getElementById("fontSelect");
    let selectedFont = fontSelect.value;
    paragraph.style.fontFamily = selectedFont;
}


function changeFont() {
    let fontSelect = document.getElementById("fontSelect");
    fontSelect.style.display = "inline-block";
}

// Cambiar la fuente del párrafo según la opción seleccionada en el select
function changeRandomFont() {
    let fonts = ["Arial", "Times New Roman", "Verdana"];
    let randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    let paragraph = document.getElementById("paragraph");
    let fontSelect = document.getElementById("fontSelect");
    paragraph.style.fontFamily = randomFont;
    fontSelect.value = randomFont; // Actualizar la opción seleccionada en el select
}

// Cambiar aleatoriamente el tipo de letra del párrafo y actualizar el <select>
function changeRandomFont() {
    let fonts = ["Arial", "Times New Roman", "Verdana"];
    let randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    let paragraph = document.getElementById("paragraph");
    let fontSelect = document.getElementById("fontSelect");
    paragraph.style.fontFamily = randomFont;
    fontSelect.value = randomFont; // Actualizar la opción seleccionada en el select
}

// Evento de doble clic en el párrafo
function changeFontDoubleClick() {
    changeRandomFont(); // Llamar a la función para cambiar la fuente aleatoriamente
    changeSelectedFont(); // Actualizar el <select>
}

// Agregar un nuevo ítem a la lista
function addItem() {
    let newItem = prompt("Ingrese el nuevo comentario:");
    if (newItem !== null && newItem.trim() !== "") { // Asegurarse de que se haya ingresado un valor
        let ul = document.querySelector(".xbox-list"); // Obtener la lista por su clase
        let li = document.createElement("li");
        li.textContent = newItem; // Usar textContent para establecer el texto del elemento
        li.onclick = function() { removeItem(this); };
        ul.appendChild(li);
    }
}

// Eliminar un ítem específico de la lista
function removeItem(item) {
    let confirmation = confirm("¿Está seguro de que desea eliminar este comentario?");
    if (confirmation) {
        item.parentNode.removeChild(item);
    }
}

// Mostrar Jueguito 

// Mostrar u ocultar el cuadro, los botones de movimiento y el registro de acciones
function toggleVisibility() {
    let container = document.getElementById("container");
    let buttonContainer = document.getElementById("button-container");
    let actionLog = document.getElementById("action-log");
    
    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
        buttonContainer.style.display = "block";
        actionLog.style.display = "block";
        createMovableBox();
    } else {
        container.style.display = "none";
        buttonContainer.style.display = "none";
        actionLog.style.display = "none";
    }
}

// Crear un cuadro que se pueda mover
function createMovableBox() {
    let actionDisplay = document.getElementById("action-log");
    actionDisplay.innerHTML += "<div id='movable-box' class='movable-box'></div>";
}

// Mover el cuadro dentro del contenedor
function move(direction) {
    let element = document.getElementById("element");
    let container = document.getElementById("container");

    let elementRect = element.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();

    let containerWidth = containerRect.width;
    let containerHeight = containerRect.height;

    let elementTop = elementRect.top - containerRect.top;
    let elementLeft = elementRect.left - containerRect.left;

    let step = 10; // Puedes ajustar esto según tu preferencia

    switch (direction) {
        case "up":
            if (elementTop - step >= 0) {
                element.style.top = (elementTop - step) + "px";
            }
            break;
        case "down":
            if (elementTop + element.offsetHeight + step <= containerHeight) {
                element.style.top = (elementTop + step) + "px";
            }
            break;
        case "left":
            if (elementLeft - step >= 0) {
                element.style.left = (elementLeft - step) + "px";
            }
            break;
        case "right":
            if (elementLeft + element.offsetWidth + step <= containerWidth) {
                element.style.left = (elementLeft + step) + "px";
            }
            break;
        default:
            break;
    }
}


// ABRIR EL MODAL DE CONSTRUCCION
// Almacenar la clase relacionada con el boton el en HTML
const openModalConstruction = document.getElementsByClassName("enProceso");
// Para que el modal aparezca lo guardo en otra variable
const modalConstruction = document.querySelector(".modalConstruccion");

// VARIABLES PARA CERRAR EL MODAL CONSTRUCCION
const closeModalConstrucction = document.querySelector(".modalConstruccionClose");

// DEFINIR QUE DEBE PASAR PARA ABRIR EL MODAL CONSTRUCCION
// Definir en que tipo de evento quiero que pase
Array.from(openModalConstruction).forEach(element => {
    element.addEventListener("click", (e)=>{
        e.preventDefault();
        // Mostrar el modal construccion
        // Agrega la funcion modal--show definida en el css
        modalConstruction.classList.add("modalConstruccion--show");
    })
});

// DEFINIR QUE DEBE PASAR PARA CERRAR EL MODAL CONSTRUCCION
closeModalConstrucction.addEventListener("click", (e)=>{
    // Evitar que se muestre la almohadilla predefinida en el a
    e.preventDefault();
    // Mostrar el modal construccion
    // Agrega la funcion modal--show definida en el css
    modalConstruction.classList.remove("modalConstruccion--show");
})

// FUNCIONAMIENTO DE LOS FILTROS
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm");
    // CIUDAD A BUSCAR
    const searchInput = document.getElementById("searchInput");
    let selectedCategory = 'all'; // INICIAR SIN FILTRO

    // ARREGLO DE RESTAURANTES
    const restaurantes = [
        { nombre: ' SUNA', ciudad: 'bogota', categorias: ['ensalada', 'cena'], imagen: '/assets/imagenesRestaurantes/suna.png', direccion: 'Calle 72 n. 5-09', descripcion: 'Aquí no se usan congelados, fritos, grasas trans, colorantes ni azúcares refinados. Endulzan con estevia, panela o miel. Hay opciones vegetarianas, para celíacos y carnívoros.' },
        { nombre: 'BRUNA', ciudad: 'bogota', categorias: ['almuerzo', 'cena'], imagen: '/assets/imagenesRestaurantes/bruna.png', direccion: 'Calle 93b n. 13-92', descripcion: 'Este restaurante destaca por usar alimentos naturales y sin procesar, creando recetas con ingredientes de la tierra.' },
        { nombre: 'BRAKA', ciudad: 'cali', categorias: ['ensalada', 'bebidas'], imagen: '/assets/imagenesRestaurantes/braka.png', direccion: 'Calle 16A 121a-332 contiguo a La14', descripcion: 'Nuestro objetivo es revitalizar los sistemas alimentarios colombianos con alimentos reconfortantes que sean deliciosos, sostenibles y saludables.' },
        { nombre: 'EL BUEN ALIMENTO', ciudad: 'cali', categorias: ['postres', 'almuerzo'], imagen: '/assets/imagenesRestaurantes/elBuenAlimento.png', direccion: 'Carrera 70 # 13A - 45 Bosques del Limonar', descripcion: 'Somos un restaurante vegetariano con 10 años en el mercado, conocido por la originalidad y el sabor de nuestros platos, demostrando que ser vegetariano es comer sano y delicioso.' },

    ];

    // Función para filtrar y mostrar resultados
    function filtrarYMostrar() {
        const searchText = searchInput.value.toLowerCase();
        // SECCION DONDE SE PONDRAN LOS RESTAURANTES
        const contenedor = document.querySelector(".restaurantes");
        // HACER QUE SE "LIMPIE" EL CONTENEDOR AL MODIFICAR LA BUSQUEDA
        contenedor.innerHTML = '';

        const resultadosFiltrados = restaurantes.filter(restaurante => {
            // VERIFICAR QUE EL ELEMENTOS DE LOS RESTAURANTES SEAN IGUALES A LA BUSQUEDA
            const matchCiudad = restaurante.ciudad.toLowerCase().includes(searchText);
            const matchCategoria = selectedCategory === 'all' || restaurante.categorias.includes(selectedCategory);
            return matchCiudad && matchCategoria;
        });

        // QUE HACER SI NO EXISTE
        if (resultadosFiltrados.length === 0) {
            contenedor.innerHTML =  `

            <div class="alertDontExist">
            <div class="textError">
                <h2>Upss!! No tenemos restaurantes con esas caracteristicas</h2>
            </div>
            <div class="imgError">
                <img src="/assets/imagenes/ilustracionErrorJS.svg" alt="noEncontrado">
            </div>

        </div>
        `;;
        } else {
            // SI EXISTE COMO DEBE AGREGARSE AL HTML
            resultadosFiltrados.forEach(restaurante => {
                const restauranteHTML = `
                    <div class="opcionRestaurante">
                        <div class="imgOpcion">
                            <img src="${restaurante.imagen}" alt="${restaurante.nombre}">
                        </div>
                        <div class="infoOpcion">
                            <h2>${restaurante.nombre}</h2>
                            <h3>${restaurante.direccion}</h3>
                            <p>${restaurante.descripcion}</p>
                            <a href="/menu.html" class="enProceso">
                                <button >VER MENU</button>
                            </a>
                        </div>
                    </div>
                `;
                contenedor.innerHTML += restauranteHTML;
            });
        }
    }

    // BUSQUEDA DE LA CIUDAD
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        filtrarYMostrar();
    });

    // FILTRAR POR CATEGORIA
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria => {
        categoria.addEventListener("click", (e) => {
            e.preventDefault();
            // TOMA LA CATEGORIA ASIGNADA AL BOTON EN EL HTML
            selectedCategory = categoria.getAttribute("data-category").toLowerCase();
            filtrarYMostrar();
        });
    });

    // MOSTRAR TODO ANTES DE AÑADIR FILTROS
    filtrarYMostrar();
});

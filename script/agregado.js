// ABRIR EL MODAL DE CARRITO
const openModalCarrito = document.getElementsByClassName("agregar");
const modalCarrito = document.querySelector(".modalCarrito");

// VARIABLES PARA CERRAR EL MODAL CARRITO
const closeModalCarrito = document.querySelector(".modalCarritoClose");

// DEFINIR QUE DEBE PASAR PARA ABRIR EL MODAL CARRITO
Array.from(openModalCarrito).forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Botón 'Añadir al carrito' clickeado");
        modalCarrito.classList.add("modalCarrito--show");
    });
});

closeModalCarrito.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Botón 'OK' clickeado");
    modalCarrito.classList.remove("modalCarrito--show");
});
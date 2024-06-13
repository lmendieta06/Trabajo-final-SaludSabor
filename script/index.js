// ABRIR EL MODAL DE CONSTRUCCION
// Almacenar la clase relacionada con el boton el en HTML
const openModalConstruction = document.querySelector(".recetas");


// Para que el modal aparezca lo guardo en otra variable
const modalConstruction = document.querySelector(".modalConstruccion");

// VARIABLES PARA CERRAR EL MODAL CONSTRUCCION
const closeModalConstrucction = document.querySelector(".modalConstruccionClose");

// DEFINIR QUE DEBE PASAR PARA ABRIR EL MODAL CONSTRUCCION
// Definir en que tipo de evento quiero que pase
openModalConstruction.addEventListener("click", (e)=>{
    // Evitar que se muestre la almohadilla predefinida en el a
    e.preventDefault();
    // Mostrar el modal construccion
    // Agrega la funcion modal--show definida en el css
    modalConstruction.classList.add("modalConstruccion--show");
})

// DEFINIR QUE DEBE PASAR PARA CERRAR EL MODAL CONSTRUCCION
closeModalConstrucction.addEventListener("click", (e)=>{
    // Evitar que se muestre la almohadilla predefinida en el a
    e.preventDefault();
    // Mostrar el modal construccion
    // Agrega la funcion modal--show definida en el css
    modalConstruction.classList.remove("modalConstruccion--show");
})

// LOGICA MODAL INICIAR SESION
const openModal = document.querySelector(".boton-clave");
const modal = document.querySelector(".modalInicioSesion");
const closeModal = document.querySelector(".Cerrar-modal");

openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal--mostrar");

});
closeModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal--mostrar");

});
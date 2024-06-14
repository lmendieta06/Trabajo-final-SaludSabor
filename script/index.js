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
closeModalConstrucction.addEventListener("click", (e) => {
    e.preventDefault();
    modalConstruction.classList.remove("modalConstruccion--show");
});

// LOGICA MODAL INICIAR SESION
const openModal = document.getElementsByClassName("boton-clave");
const modal = document.querySelector(".modalInicioSesion");
const closeModal = document.querySelector(".Cerrar-modal");

for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal--mostrar");
    });
}

closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--mostrar");
});

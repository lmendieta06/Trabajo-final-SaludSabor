const openModal = document.querySelector(`.boton-clave`);
const modal = document.querySelector(`.modal`);
const closeModal = document.querySelector(`.Cerrar-modal`)

openModal.addEventListener(`click`, (e)=>{
    e.preventDefault();
    modal.classList.add(`modal--mostrar`);

});
closeModal.addEventListener(`click`, (e)=>{
    e.preventDefault();
    modal.classList.remove(`modal--mostrar`);

});
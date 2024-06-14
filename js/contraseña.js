const openModalc = document.querySelector(`.recuperar-pass`);
const modalc = document.querySelector(`.modal__contraseña`);
const closeModalc = document.querySelector(`.Cerrar--modal`);
const modalogin = document.querySelector(`.modal`)

openModalc.addEventListener(`click`, (e)=>{
    e.preventDefault();
    modalc.classList.add(`modal--mostrar_contraseña`);
    modalogin.classList.remove(`modal--mostrar`)
});
closeModalc.addEventListener(`click`, (e)=>{
    e.preventDefault();
    modalc.classList.remove(`modal--mostrar_contraseña`);

});


      
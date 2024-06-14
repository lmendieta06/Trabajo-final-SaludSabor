document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // PREVENIR ENVIO POR DEFAULT
        event.preventDefault();

        // CAPTURA DE DATOS
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // VALIDAR CAMPOS DEL FORMULARIO
        if (!data.Multiple || !data.Contraseña || !data.email || !data.ciudad || !data.Direccion || !form.querySelector('#categorySelect').value) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // MOSTRAR MODAL DE CONFIRMACION
        mostrarModal();

        // ESPERA DE DOS SEGUNDOS
        setTimeout(function() {
            // REDIRIGE A LA PAGINA ANTERIOR
            window.history.back();
        }, 2000);

        // REINICIA FORMULARIO
        form.reset();
    });
});

// ABRIR EL MODAL DE CREACION
function mostrarModal(){
    const modalConstruction = document.querySelector(".modalCreacion");
    const closeModalConstrucction = document.querySelector(".modalCreacionClose");

    // MOSTRAR MODAL CREACION
    modalConstruction.classList.add("modalCreacion--show");

    // CERRAR MODAL CREACION
    closeModalConstrucction.addEventListener("click", (e) => {
        e.preventDefault();
        modalConstruction.classList.remove("modalCreacion--show");
    });

}


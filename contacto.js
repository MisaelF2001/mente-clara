
/* ==========================================
   1. OBTENER LOS ELEMENTOS DEL FORMULARIO
========================================== */

// Buscamos el formulario de contacto.

const formulario = document.getElementById("formulario-contacto");

// Buscamos el espacio donde aparecerá el mensaje.

const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");


/* ==========================================
   2. GUARDAR LOS MENSAJES
========================================== */

// Esta función guarda los mensajes en el navegador.

function guardarMensaje(datos) {

    // Intentamos recuperar los mensajes guardados.

    let mensajesGuardados = JSON.parse(
        localStorage.getItem("mensajesMenteClara")
    ) || [];

    // Agregamos el nuevo mensaje.

    mensajesGuardados.push(datos);

    // Guardamos nuevamente todos los mensajes.

    localStorage.setItem(
        "mensajesMenteClara",
        JSON.stringify(mensajesGuardados)
    );

}


/* ==========================================
   3. ENVIAR EL FORMULARIO
========================================== */

formulario.addEventListener("submit", function(evento) {

    // Evitamos que la página se recargue.

    evento.preventDefault();


    // Obtenemos los datos del formulario.

    const nombre = document.getElementById("nombre").value.trim();

    const correo = document.getElementById("correo").value.trim();

    const asunto = document.getElementById("asunto").value;

    const mensaje = document.getElementById("mensaje").value.trim();


    // Comprobamos que ningún campo esté vacío.

    if (
        nombre === "" ||
        correo === "" ||
        asunto === "" ||
        mensaje === ""
    ) {

        mensajeConfirmacion.textContent =
            "Por favor, completa todos los campos.";

        return;

    }


    // Creamos un objeto con los datos del mensaje.

    const nuevoMensaje = {

        nombre: nombre,

        correo: correo,

        asunto: asunto,

        mensaje: mensaje,

        fecha: new Date().toLocaleString()

    };


    // Guardamos el objeto en LocalStorage.

    try {

        guardarMensaje(nuevoMensaje);

        // Mostramos la confirmación.

        mensajeConfirmacion.textContent =
            "¡Gracias, " + nombre +
            "! Tu mensaje se guardó correctamente.";

        // Limpiamos el formulario.

        formulario.reset();

    } catch (error) {

        mensajeConfirmacion.textContent =
            "No se pudo guardar el mensaje. Comprueba el almacenamiento del navegador.";

    }

});

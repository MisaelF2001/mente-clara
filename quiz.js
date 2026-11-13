
/* ==========================================
   1. DATOS DE LAS PREGUNTAS
========================================== */

// Cada pregunta es un objeto.
// Aquí guardamos el enunciado, las opciones,
// la respuesta correcta y su explicación.

const preguntasQuiz = [

    {
        numero: 1,

        texto: "¿Qué son las sustancias psicoactivas?",

        opciones: [
            {
                letra: "A",
                texto: "Sustancias que pueden modificar la percepción, el pensamiento y las emociones."
            },
            {
                letra: "B",
                texto: "Alimentos que mejoran la memoria."
            },
            {
                letra: "C",
                texto: "Sustancias que no producen ningún efecto."
            }
        ],

        correcta: "A",

        explicacion: "Las sustancias psicoactivas pueden modificar la percepción, el pensamiento y las emociones."
    },


    {
        numero: 2,

        texto: "¿Por qué es importante prevenir el consumo durante la adolescencia?",

        opciones: [
            {
                letra: "A",
                texto: "Porque todas las personas reaccionan igual."
            },
            {
                letra: "B",
                texto: "Porque el cerebro todavía está en desarrollo y puede ser vulnerable."
            },
            {
                letra: "C",
                texto: "Porque la prevención solo sirve en la adultez."
            }
        ],

        correcta: "B",

        explicacion: "Durante la adolescencia el cerebro todavía está en desarrollo y puede ser más vulnerable a los efectos de las sustancias."
    },


    {
        numero: 3,

        texto: "¿Qué puedes hacer si tus amistades te presionan para consumir?",

        opciones: [
            {
                letra: "A",
                texto: "Aceptar para no quedar fuera del grupo."
            },
            {
                letra: "B",
                texto: "Probar una pequeña cantidad."
            },
            {
                letra: "C",
                texto: "Decir que no y alejarte de la situación."
            }
        ],

        correcta: "C",

        explicacion: "Decir que no y alejarse de una situación de presión es una decisión saludable."
    },


    {
        numero: 4,

        texto: "¿Cuál de las siguientes opciones es un factor de protección?",

        opciones: [
            {
                letra: "A",
                texto: "Tener relaciones saludables y apoyo familiar."
            },
            {
                letra: "B",
                texto: "Aislarse de todas las personas."
            },
            {
                letra: "C",
                texto: "Ocultar los problemas."
            }
        ],

        correcta: "A",

        explicacion: "Las relaciones saludables y el apoyo familiar son factores que ayudan a prevenir el consumo."
    },


    {
        numero: 5,

        texto: "¿Qué debes hacer si una persona pierde el conocimiento después de consumir?",

        opciones: [
            {
                letra: "A",
                texto: "Dejarla dormir hasta que despierte."
            },
            {
                letra: "B",
                texto: "Darle café para que se recupere."
            },
            {
                letra: "C",
                texto: "Buscar atención médica de emergencia."
            }
        ],

        correcta: "C",

        explicacion: "La pérdida de conocimiento puede ser una emergencia médica. Se debe buscar atención inmediatamente."
    },


    {
        numero: 6,

        texto: "¿El consumo de sustancias puede afectar el rendimiento académico?",

        opciones: [
            {
                letra: "A",
                texto: "No, nunca afecta los estudios."
            },
            {
                letra: "B",
                texto: "Sí, puede afectar la memoria, la atención y el aprendizaje."
            },
            {
                letra: "C",
                texto: "Solo afecta a las personas mayores."
            }
        ],

        correcta: "B",

        explicacion: "El consumo puede afectar la memoria, la atención y el rendimiento académico."
    },


    {
        numero: 7,

        texto: "¿Qué significa realizar prevención basada en evidencia?",

        opciones: [
            {
                letra: "A",
                texto: "Utilizar únicamente mensajes de miedo."
            },
            {
                letra: "B",
                texto: "Evitar hablar sobre el tema."
            },
            {
                letra: "C",
                texto: "Aplicar estrategias estudiadas que fortalezcan las habilidades personales."
            }
        ],

        correcta: "C",

        explicacion: "La prevención basada en evidencia utiliza estrategias estudiadas para fortalecer las habilidades personales."
    },


    {
        numero: 8,

        texto: "¿Qué debe hacer una persona que siente que perdió el control sobre su consumo?",

        opciones: [
            {
                letra: "A",
                texto: "Buscar orientación profesional."
            },
            {
                letra: "B",
                texto: "Ocultar el problema."
            },
            {
                letra: "C",
                texto: "Evitar hablar con otras personas."
            }
        ],

        correcta: "A",

        explicacion: "Buscar orientación profesional es una decisión responsable cuando existe un problema relacionado con el consumo."
    },


    {
        numero: 9,

        texto: "¿Cuál es una forma saludable de manejar el estrés?",

        opciones: [
            {
                letra: "A",
                texto: "Consumir sustancias para olvidar los problemas."
            },
            {
                letra: "B",
                texto: "Realizar actividad física, descansar y conversar con alguien de confianza."
            },
            {
                letra: "C",
                texto: "Guardar todas las emociones."
            }
        ],

        correcta: "B",

        explicacion: "La actividad física, el descanso y la comunicación son formas saludables de manejar el estrés."
    },


    {
        numero: 10,

        texto: "¿Cómo puede ayudar una institución educativa a prevenir el consumo?",

        opciones: [
            {
                letra: "A",
                texto: "Excluyendo a quienes necesitan ayuda."
            },
            {
                letra: "B",
                texto: "Evitando hablar sobre el tema."
            },
            {
                letra: "C",
                texto: "Promoviendo información confiable, orientación y habilidades para la vida."
            }
        ],

        correcta: "C",

        explicacion: "Las instituciones educativas pueden ayudar mediante información confiable y orientación."
    }

];


/* ==========================================
   2. OBTENER LOS ELEMENTOS DEL HTML
========================================== */

// Buscamos los elementos que utilizaremos.

const inicioQuiz = document.getElementById("inicio-quiz");

const botonIniciar = document.getElementById("iniciar-quiz");

const zonaPreguntas = document.getElementById("zona-preguntas");

const contenidoPregunta = document.getElementById("contenido-pregunta");

const numeroPregunta = document.getElementById("numero-pregunta");

const barraProgreso = document.getElementById("progreso");

const explicacionPregunta = document.getElementById("explicacion-pregunta");

const botonSiguiente = document.getElementById("siguiente-pregunta");

const resultado = document.getElementById("resultado");

const puntajeFinal = document.getElementById("puntaje-final");

const mensajeResultado = document.getElementById("mensaje-resultado");

const botonReiniciar = document.getElementById("reiniciar-quiz");


/* ==========================================
   3. VARIABLES DEL CUESTIONARIO
========================================== */

// Número de pregunta actual.

let preguntaActual = 0;

// Puntaje obtenido.

let puntaje = 0;

// Control para evitar cambiar la respuesta.

let respuestaSeleccionada = false;


/* ==========================================
   4. INICIAR EL CUESTIONARIO
========================================== */

botonIniciar.addEventListener("click", function() {

    // Ocultamos la pantalla inicial.

    inicioQuiz.hidden = true;

    // Mostramos la zona de preguntas.

    zonaPreguntas.hidden = false;

    // Comenzamos desde la primera pregunta.

    mostrarPregunta();

});


/* ==========================================
   5. MOSTRAR LAS PREGUNTAS
========================================== */

function mostrarPregunta() {

    // Obtenemos los datos de la pregunta actual.

    const pregunta = preguntasQuiz[preguntaActual];

    // Actualizamos el número de pregunta.

    numeroPregunta.textContent =
        "Pregunta " + (preguntaActual + 1) +
        " de " + preguntasQuiz.length;

    // Calculamos el progreso.

    const avance =
        (preguntaActual / preguntasQuiz.length) * 100;

    barraProgreso.style.width = avance + "%";

    // Limpiamos el contenido anterior.

    contenidoPregunta.innerHTML = "";

    // Ocultamos la explicación.

    explicacionPregunta.hidden = true;

    explicacionPregunta.textContent = "";

    // Ocultamos el botón siguiente.

    botonSiguiente.hidden = true;

    // Permitimos seleccionar una respuesta.

    respuestaSeleccionada = false;


    // Creamos el título de la pregunta.

    const titulo = document.createElement("h3");

    titulo.textContent =
        pregunta.numero + ". " + pregunta.texto;

    contenidoPregunta.appendChild(titulo);


    // Creamos los botones de respuesta.

    pregunta.opciones.forEach(function(opcion) {

        const boton = document.createElement("button");

        boton.type = "button";

        boton.className = "respuesta";

        boton.textContent =
            opcion.letra + ". " + opcion.texto;

        // Guardamos la letra de la opción.

        boton.dataset.opcion = opcion.letra;

        // Cuando se presiona el botón,
        // comprobamos la respuesta.

        boton.addEventListener("click", function() {

            comprobarRespuesta(opcion.letra);

        });

        // Agregamos el botón al HTML.

        contenidoPregunta.appendChild(boton);

    });

}


/* ==========================================
   6. COMPROBAR LAS RESPUESTAS
========================================== */

function comprobarRespuesta(opcionElegida) {

    // Evitamos que se responda más de una vez.

    if (respuestaSeleccionada === true) {

        return;

    }

    respuestaSeleccionada = true;

    // Obtenemos los datos de la pregunta.

    const pregunta = preguntasQuiz[preguntaActual];

    // Buscamos todos los botones creados.

    const botones = contenidoPregunta.querySelectorAll(".respuesta");


    // Bloqueamos todas las respuestas.

    botones.forEach(function(boton) {

        boton.disabled = true;

        // Comprobamos cuál es la respuesta correcta.

        if (boton.dataset.opcion === pregunta.correcta) {

            boton.classList.add("respuesta-correcta");

        }

        // Marcamos la respuesta incorrecta seleccionada.

        if (
            boton.dataset.opcion === opcionElegida &&
            opcionElegida !== pregunta.correcta
        ) {

            boton.classList.add("respuesta-incorrecta");

        }

    });


    // Comprobamos si el usuario acertó.

    if (opcionElegida === pregunta.correcta) {

        // Sumamos un punto.

        puntaje++;

        explicacionPregunta.textContent =
            "¡Correcto! " + pregunta.explicacion;

    } else {

        // Mostramos la respuesta correcta.

        explicacionPregunta.textContent =
            "Respuesta incorrecta. La opción correcta era " +
            pregunta.correcta + ". " +
            pregunta.explicacion;

    }


    // Mostramos la explicación.

    explicacionPregunta.hidden = false;

    // Actualizamos el progreso.

    const avance =
        ((preguntaActual + 1) / preguntasQuiz.length) * 100;

    barraProgreso.style.width = avance + "%";


    // Mostramos el botón siguiente.

    botonSiguiente.hidden = false;

    // Cambiamos el texto en la última pregunta.

    if (preguntaActual === preguntasQuiz.length - 1) {

        botonSiguiente.textContent = "Ver resultado";

    }

}


/* ==========================================
   7. PASAR A LA SIGUIENTE PREGUNTA
========================================== */

botonSiguiente.addEventListener("click", function() {

    // Avanzamos a la siguiente pregunta.

    preguntaActual++;

    // Comprobamos si quedan preguntas.

    if (preguntaActual < preguntasQuiz.length) {

        mostrarPregunta();

    } else {

        mostrarResultado();

    }

});


/* ==========================================
   8. MOSTRAR EL RESULTADO FINAL
========================================== */

function mostrarResultado() {

    // Ocultamos la zona de preguntas.

    zonaPreguntas.hidden = true;

    // Mostramos el resultado.

    resultado.hidden = false;

    // Colocamos el puntaje obtenido.

    puntajeFinal.textContent =
        puntaje + " / " + preguntasQuiz.length;


    // Mostramos un mensaje según los puntos.

    if (puntaje >= 8) {

        mensajeResultado.textContent =
            "¡Excelente trabajo! Tienes buenos conocimientos sobre prevención.";

    } else if (puntaje >= 5) {

        mensajeResultado.textContent =
            "¡Buen esfuerzo! Sigue aprendiendo y reforzando tus conocimientos.";

    } else {

        mensajeResultado.textContent =
            "Te recomendamos revisar las secciones informativas e intentarlo nuevamente.";

    }

}


/* ==========================================
   9. REINICIAR EL CUESTIONARIO
========================================== */

botonReiniciar.addEventListener("click", function() {

    // Reiniciamos el puntaje.

    puntaje = 0;

    // Volvemos a la primera pregunta.

    preguntaActual = 0;

    // Permitimos responder nuevamente.

    respuestaSeleccionada = false;

    // Ocultamos el resultado.

    resultado.hidden = true;

    // Mostramos nuevamente el cuestionario.

    zonaPreguntas.hidden = false;

    // Reiniciamos el texto del botón.

    botonSiguiente.textContent = "Siguiente pregunta";

    // Mostramos la primera pregunta.

    mostrarPregunta();

});

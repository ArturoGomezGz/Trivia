let nombreTirulo = document.getElementById("titulo-nombre");
const main = document.getElementById("main");
let addPregunta = document.getElementById("addPregunta");
let addRespuesta = document.getElementById("addRespuesta");
let addFake1 = document.getElementById("addFake1");
let addFake2 = document.getElementById("addFake2");
const addButton = document.getElementById("addButton");

addPregunta.value = "Pregunta";
addRespuesta.value = "Respuesta";
addFake1.value = "Fake 1";
addFake2.value = "Fake 2"

addButton.addEventListener("click", () => agregarpreguntas());

nombreTirulo.innerText = "Trivia"

let listaDePreguntas = [];

/* let pregunta1 = {
    pregunta: "Capital de Brasil?",
    respuesta: "Brasilia",
    fake1: "Rio de Janeiro",
    fake2: "San Jose"
}
listaDePreguntas.push(pregunta1);

let pregunta2 = {
    pregunta: "Cual de estos paises no ha ganado ningun mundial?",
    respuesta: "Holanda",
    fake1: "Uruguay",
    fake2: "Italia"
} 
listaDePreguntas.push(pregunta2);

let pregunta3 = {
    pregunta: "Como se llamaba el payaso de los Simpsons?",
    respuesta: "Krusty",
    fake1: "Klein",
    fake2: "Kevin"
}
listaDePreguntas.push(pregunta3);

let pregunta4 = {
    pregunta: "Como se llamaba el restaurante del enemigo de Don Cangrejo?",
    respuesta: "Caldera de hamburguesa",
    fake1: "Balde de carnada",
    fake2: "Cubeta arenosa"
}
listaDePreguntas.push(pregunta4);
 */

/* let pregunta = {
    pregunta: "",
    respuesta: "",
    fake1: "",
    fake2: ""
}
listaDePreguntas.push(pregunta); */


function renderPreguntas(){
    for(question of listaDePreguntas){
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta")

        const pregunta = document.createElement("div");
        pregunta.classList.add("pregunta");
        const respuestas = document.createElement("div");
        respuestas.classList.add("respuestas");

        const preguntah2 = document.createElement("h2")
        preguntah2.innerText = question.pregunta;
        preguntah2.classList.add("pregunta");

        const lista = document.createElement("ul");
        
        const opcion1 = document.createElement("li");
        opcion1.innerText = question.respuesta;
        opcion1.classList.add("respuesta-correcta");
        const opcion2 = document.createElement("li");
        opcion2.innerText = question.fake1;
        const opcion3 = document.createElement("li");
        opcion3.innerText = question.fake2;

        opcion1.classList.add("opciones");
        opcion2.classList.add("opciones");
        opcion3.classList.add("opciones");

        lista.appendChild(opcion1);
        lista.appendChild(opcion2);
        lista.appendChild(opcion3);

        respuestas.appendChild(lista);
        pregunta.appendChild(preguntah2);

        tarjeta.appendChild(pregunta)
        tarjeta.appendChild(respuestas);

        main.appendChild(tarjeta)
    }
}

renderPreguntas();

function agregarpreguntas(name){
    if (addPregunta.value == "Pregunta") {
        alert("primero agrega texto");
    } else {
        function clean(){
            main.innerText = ""
        }
        clean()
    
        name = {
            pregunta: addPregunta.value,
            respuesta: addRespuesta.value,
            fake1: addFake1.value,
            fake2: addFake2.value
        }
    
        listaDePreguntas.push(name)
    
        addPregunta.value = "Pregunta";
        addRespuesta.value = "Respuesta";
        addFake1.value = "Fake 1";
        addFake2.value = "Fake 2"
    
        renderPreguntas()
    }
}


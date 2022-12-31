let nombreTirulo = document.getElementById("titulo-nombre")
const main = document.getElementById("main")
let addPregunta = document.getElementById("addPregunta")
let addRespuesta = document.getElementById("addRespuesta")
let addFake1 = document.getElementById("addFake1")
let addFake2 = document.getElementById("addFake2")

nombreTirulo.innerText = "Trivia"

let listaDePreguntas = [];

let pregunta1 = {
    no: 1,
    pregunta: "Capital de Brasil?",
    respuesta: "Brasilia",
    fake1: "Rio de Janeiro",
    fake2: "San Jose"
}
let pregunta2 = {
    no: 2,
    pregunta: "Cual de estos paises no ha ganado ningun mundial?",
    respuesta: "Holanda",
    fake1: "Uruguay",
    fake2: "Italia"
} 
let pregunta3 = {
    no: 3,
    pregunta: "Como se llamaba el payaso de los Simpsons?",
    respuesta: "Krusty",
    fake1: "Klein",
    fake2: "Kevin"
} 

/* 
let pregunta = {
    no: undefined,
    pregunta: "",
    respuesta: "",
    fake1: "",
    fake2: ""
} 
*/

function createPreguntas() {
    listaDePreguntas.push(pregunta1);
    listaDePreguntas.push(pregunta2);
    listaDePreguntas.push(pregunta3)
}

createPreguntas();

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

        const lista = document.createElement("ul");
        
        const opcion1 = document.createElement("li");
        opcion1.innerText = question.respuesta;
        const opcion2 = document.createElement("li");
        opcion2.innerText = question.fake1;
        const opcion3 = document.createElement("li");
        opcion3.innerText = question.fake2;

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

function agregarpreguntas(i){
    function clean(){
        main.innerText = ""
    }
    clean()

    i = {
        no: undefined,
        pregunta: addPregunta.value,
        respuesta: addRespuesta.value,
        fake1: addFake1.value,
        fake2: addFake2.value
    }

    listaDePreguntas.push(i)

    addPregunta.value = "";
    addRespuesta.value = "";
    addFake1.value = "";
    addFake2.value = ""

    renderPreguntas()
}
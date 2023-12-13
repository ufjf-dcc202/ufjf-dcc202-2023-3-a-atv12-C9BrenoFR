import { transacao } from "./estoque.js";


document.entrada.addEventListener('submit', leFormulario);
//leFormulario();

const olJoao = document.querySelector('#olJoao');
const olMaria = document.querySelector('#olMaria');

function leFormulario(event) {
    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;
    console.log(`Solicitado: ${origem} doa ${quantidade} ${fruta} para ${destino}`);
    //document.entrada.submit();

    transacao(origem, destino, quantidade, fruta);
}
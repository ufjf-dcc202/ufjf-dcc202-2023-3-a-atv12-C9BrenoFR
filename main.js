

document.entrada.addEventListener('submit', leFormulario);
leFormulario();

function leFormulario(){
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.value;

    console.log('fruta: ${fruta} qtd: ${quantidade}');
}
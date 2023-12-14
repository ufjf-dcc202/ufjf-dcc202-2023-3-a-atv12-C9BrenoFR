
export {getEstoque};
export {transacao};

let estoque = {
joao:  [
    {tipo:'maca', qtd: 1},
    {tipo:'pera', qtd: 1},
],
maria: [
    {tipo:'maca', qtd: 2}, 
    {tipo:'banana', qtd: 4},
],
}

function getEstoque(){
    return structuredClone(estoque);
}

function transacao(origem, destino, quantidade, fruta){
    if (origem === destino) {
        return;
    }

    if(quantidade <= 0){
        return;
    }
    
    if(origem === 'pomar'){
        dePomarParaPessoa(destino, quantidade, fruta);
    }

    if(destino === "pomar"){
        dePessoaParaPomar(origem, quantidade, fruta);
    }
}

function dePomarParaPessoa(destino, quantidade, fruta) {
    const pessoa = estoque[destino];
    let monte;
    for(let i=0; i < pessoa.length; i++){
        if(pessoa[i].tipo === fruta){
            monte = pessoa[i];
            break;
        }
    }
    if(!monte){
        monte = {tipo: fruta, qtd: 0};
        pessoa.push(monte);
    }

    monte.qtd += quantidade;
    return;
}

function dePessoaParaPomar(origem, quantidade, fruta) {
    const pessoa = estoque[origem];
        let monte;
        for(let i=0; i < pessoa.length; i++){
            if(pessoa[i].tipo === fruta){
                monte = pessoa[i];
                break;
            }
        }
        if(!monte){
            return;
        }
        monte.qtd -= Math.min(quantidade, monte.qtd);
}
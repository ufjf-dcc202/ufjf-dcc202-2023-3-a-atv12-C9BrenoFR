
export {getEstoque};
export {transacaoNoEstoque};
export {limpaEstoque};

let estoque = {
    'joao': [{'tipo': 'maca', 'quantidade': 1}],
    'maria': [{'tipo': 'maca', 'quantidade': 2}]
};

function limpaEstoque() {
    estoque = {}
}

function getEstoque(){
    return structuredClone(estoque);
}

function transacaoNoEstoque(origem, destino, tipo, quantidade) {
    if (origem === destino || quantidade <= 0) {
        return
    }
  
    if (origem !== "pomar" && !estoque[origem]) {
        estoque[origem] = []
    }  
  
    if (destino !== "pomar" && !estoque[destino]) {
        estoque[destino] = []
    }  
    
    if (destino === "pomar") {
        const itemEncontrado = estoque[origem].find(item => item.tipo === tipo)
    
        if (itemEncontrado) {
            itemEncontrado.quantidade = Math.max(0, itemEncontrado.quantidade - quantidade)
        }
    
        return
    }  

    if (origem === "pomar") {
        const itemEncontrado = estoque[destino].find(item => item.tipo === tipo)
    
        if (itemEncontrado) {
            itemEncontrado.quantidade += quantidade
        } else {
            estoque[destino].push({tipo, quantidade})
        }
        
        return
    } else {
        const itemOrigem = estoque[origem].find(item => item.tipo === tipo)
        const itemDestino = estoque[destino].find(item => item.tipo === tipo)

        if (!itemOrigem) {
            return
        } else if (quantidade > itemOrigem.quantidade) {
            if (itemDestino) {
                itemDestino.quantidade += itemOrigem.quantidade
            } else {
                estoque[destino].push({tipo: tipo, quantidade: itemOrigem.quantidade})
            }
            itemOrigem.quantidade = 0
        } else {
            if (itemDestino) {
                itemDestino.quantidade += quantidade
            } else {
                estoque[destino].push({tipo, quantidade})
            }
            itemOrigem.quantidade -= quantidade
        }
    }
    
    return
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
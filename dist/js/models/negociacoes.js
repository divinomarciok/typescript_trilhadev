export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        /*
        Utlizando Array normal, e Spread Operator no modo return para criar uma segunda lista, evitando remover itens da lista principal
        lista(): Array<Negociacao>{
             return  [...this.negociacoes];
     
         }*/
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes];
    }
}
const negociacoes = new Negociacoes();

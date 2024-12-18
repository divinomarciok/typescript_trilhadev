import { Negociacao } from "./negociacao.js";

export class Negociacoes{

    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao : Negociacao){
         this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[]{
        return  [...this.negociacoes];
    }


   /* 
   Utlizando Array normal, e Spread Operator no modo return para criar uma segunda lista, evitando remover itens da lista principal
   lista(): Array<Negociacao>{
        return  [...this.negociacoes];

    }*/
}

const negociacoes = new Negociacoes ();


import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensageView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-views.js";

export class NegociacaoController{

    private inputData: HTMLInputElement;   // se não definirmos os tipos das propriedades da classe, elas atribuem o valor any, por isso usar o HTMLInputELement 
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView =  new MensageView ('#mensagemView');

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);  
    }


    adiciona(): void{

    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    this.negociacoesView.update(this.negociacoes);
    this.limparFormulario();     

    this.mensagemView.update("Negociação adicionada com sucesso");


    }


    criaNegociacao(): Negociacao{  

      const exp = /-/g; 
      const date = new Date(this.inputData.value.replace(exp,','));
      const quantidade = parseInt(this.inputQuantidade.value);
      const valor = parseFloat(this.inputValor.value);
      return new Negociacao(date,quantidade,valor);

    }

limparFormulario(): void {

    this.inputData.value="";
    this.inputQuantidade.value="";
    this.inputValor.value=""; 
    this.inputData.focus();

}

           

}
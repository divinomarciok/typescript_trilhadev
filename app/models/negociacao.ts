export class Negociacao {

    constructor(
        private _data : Date,
        public readonly quantidade : number,
        public readonly valor : number
    ){}


    get volume(): number{
        return this.quantidade * this.valor;
    }

    // foi utilizado um fluxo de programação defensiva, pois mesmo utilizando readonly era possível alterar o valor da data pela propriedade "setDate"
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

}
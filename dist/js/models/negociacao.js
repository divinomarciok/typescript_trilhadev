export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    // foi utilizado um fluxo de programação defensiva, pois mesmo utilizando readonly era possível alterar o valor da data pela propriedade "setDate"
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
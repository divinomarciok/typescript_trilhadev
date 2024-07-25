import { View } from "./view.js";
export class NegociacoesView extends View {
    //declara o formato que vai ser a tabela no HTML // as colunas data,quantidade, valor
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
            return `
                        <tr>
                        <td>${this.formatar(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        </tr>
                       
                        `;
        }).join('')}
                </tbody>
            </table>
            `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}

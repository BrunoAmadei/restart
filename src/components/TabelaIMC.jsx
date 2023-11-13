import React from "react";

function TabelaImc() {
    return (
        <table>
            <tr>
                <th>IMC (Kg/m2)</th>
                <th>Classificação</th>

            </tr>
            <tr>
                <td>Menor que 16,9</td>
                <td>Muito abaixo do peso</td>
            </tr>
            <tr>
                <td>17 a 18,4   </td>
                <td>Abaixo do peso</td>
            </tr>
            <tr>
                <td>18,5 a 24,9   </td>
                <td>Peso ideal</td>
            </tr>
            <tr>
                <td>25 a 29,9</td>
                <td>Acima do peso</td>
            </tr>
            <tr>
                <td>30 a 34,9</td>
                <td>Obesidade grau I</td>
            </tr>
            <tr>
                <td>35 a 40</td>
                <td>Obesidade grau II</td>
            </tr>
            <tr>
                <td>Maior que 40</td>
                <td>Obesidade grau III</td>           
            </tr>
        </table>
    )
}

export default TabelaImc
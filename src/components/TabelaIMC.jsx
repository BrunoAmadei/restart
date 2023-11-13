import React from "react";

function TabelaImc({resultado}) {

    const corDeFundo = (imc) => {
        if (imc < 16.9) {
          return "purple"; // Muito abaixo do peso
        } else if (imc >= 17 && imc < 18.5) {
          return "blue"; // Abaixo do peso
        } else if (imc >= 18.5 && imc < 25) {
          return "green"; // Peso ideal
        } else if (imc >= 25 && imc < 30) {
          return "yellow"; // Acima do peso
        } else if (imc >= 30 && imc < 35) {
          return "orange"; // Obesidade grau I
        } else if (imc >= 35 && imc <= 40) {
          return "red"; // Obesidade grau II
        } else {
          return "darkred"; // Obesidade grau III
        }
      };

    return (
        <table
        style={{
            bacgroundColor: corDeFundo(parseFloat(resultado)),
            padding: "10px",
            marginTop: "20px",
            borderRadius: "5px",
        }}
        
        >
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
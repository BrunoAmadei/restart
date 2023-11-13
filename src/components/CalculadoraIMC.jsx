import React, { useState } from "react"
import "./css/calculadora.css"

function calculadoraIMC() {
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  const [resultado, setResultado]= useState("")

  const calculoImc = () => {
    const imc = peso / (altura * altura)
    const resultado = imc.toFixed(2)
    setResultado(resultado)
  }

  return (
    <div className="calc_box">
      <input type="number" placeholder="Peso(Kg)" onChange={(e) => setPeso(e.target.value)} />
      <input type="number" placeholder="Altura(m)" onChange={(e) => setAltura(e.target.value)} />
      <button onClick={calculoImc}>Calcular</button>
      <p>
       {resultado}
      </p>
    </div>
  )
}

export default calculadoraIMC;

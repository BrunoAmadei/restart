import { useState } from "react";

function calculadoraIMC() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)

  return (
    <div>
      <input type="number" placeholder="Peso (Kg)" />
      <input type="number" placeholder="Altura (m)" />
      <button>Calcular</button>
      <p>
        Aqui ficará o IMC.
      </p>
    </div>
  )
}

export default calculadoraIMC;

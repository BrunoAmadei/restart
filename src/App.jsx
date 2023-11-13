import CalculadoraIMC from "./components/CalculadoraIMC"
import TabelaImc from "./components/TabelaIMC"
import "./app.css"

function App() {
  return (
    <main className="container">
      <div>
        <h1>Calculadora de IMC</h1>
        <h2>O que é IMC</h2>
        <p>
          O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade. É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).
        </p>
        <span>
          (Fonte: <a href="https://centrodeobesidadeediabetes.org.br/tudo-sobre-obesidade/calculadora-de-imc/#:~:text=Compartilhar%3A,ao%20quadrado%20(em%20metros)." target="_blank" rel="noopener noreferrer">Centro de obesidade e diabetes</a>)
        </span>
        <h3>Calcule aqui seu IMC</h3>
      </div>
      <CalculadoraIMC />
      <TabelaImc />
    </main>
  )
}

export default App

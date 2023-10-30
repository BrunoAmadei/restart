import CalculadoraIMC from "./components/CalculadoraIMC"

function App() {
  return (
    <>
      <div>
        <h1>Calculadora de IMC</h1>
        <h2>O que é Imc?</h2>
        <p>
          O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade. É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).
        </p>
        <span>
          (Fonte: <a href="https://centrodeobesidadeediabetes.org.br/tudo-sobre-obesidade/calculadora-de-imc/#:~:text=Compartilhar%3A,ao%20quadrado%20(em%20metros)." target="_blank" rel="noopener noreferrer">Centro de obesidade e diabetes</a>)
        </span>
        <h3>Calcule aqui seu</h3>
      </div>
      <CalculadoraIMC />
    </>
  )
}

export default App

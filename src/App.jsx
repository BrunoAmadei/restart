import CalculadoraIMC from "./components/CalculadoraIMC"

function App() {
  return (
    <>
      <div>
        <h1>Calculadora de IMC</h1>
        <p>
          O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade. É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).
          (Fonte: <a href="https://centrodeobesidadeediabetes.org.br/tudo-sobre-obesidade/calculadora-de-imc/#:~:text=Compartilhar%3A,ao%20quadrado%20(em%20metros)." target="_blank" rel="noopener noreferrer">Centro de obesidade e diabetes</a>)
        </p>
      </div>
      <CalculadoraIMC />
    </>
  )
}

export default App

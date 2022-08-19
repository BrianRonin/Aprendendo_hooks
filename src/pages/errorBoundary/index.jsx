import { useState, Component, useEffect } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    //.logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>
    }

    return this.props.children
  }
}

const Counter = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    if (counter > 3) {
      throw new Error('counter não deve haver mais que 3 ')
    }
  }, [counter])
  function handleClick() {
    setCounter((c) => c + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>{counter}</button>
    </div>
  )
}

const ErrorBoundaryTest = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <a href='https://pt-br.reactjs.org/docs/error-boundaries.html'>
          ErrorBoundary
        </a>
        <hr />
        <h1>Componente com ErrorBoundary</h1>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
        <h1>Componente sem ErrorBounday</h1>
        <Counter />
      </header>
    </div>
  )
}

export default ErrorBoundaryTest

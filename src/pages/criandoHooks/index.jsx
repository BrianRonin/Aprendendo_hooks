import { useEffect, useRef, useState } from 'react'
import './style.css'
//import useIntervall from '../../hooks/useInterval'
/**
 * Um hook é basicamente uma função no react que começa com use
 * existe regras pra se criar e usar hooks
 * 1. deve começar com use
 * 2. deve ser chamada apenas no componente react func ou class
 * 3. não deve ser chamada dentro de um escopo mais abaixo como
 * em um if por exemplo, deve ser chamada apenas dentro do
 * componente
 */
import useIntervall from '../../hooks/useInterval'

function CriandoH() {
  const [state, setState] = useState(0)
  const [delay, setDelay] = useState(1000)
  const [incrementor, setIncrementor] = useState(100)
  useIntervall(() => setState((s) => s + 1), delay)
  return (
    <>
      <div>
        <header className='App-header'>
          <a href='https://pt-br.reactjs.org/docs/hooks-custom.html'>
            <button>Criando hooks</button>
          </a>
          <span>Counter {state}</span>
          <span>delay:{delay}</span>
          <button onClick={(e) => setDelay((s) => s + Number(incrementor))}>
            + {incrementor}
          </button>
          <button onClick={(e) => setDelay((s) => s - Number(incrementor))}>
            - {incrementor}
          </button>
          <input
            type='text'
            onChange={(e) => setIncrementor(Number(e.target.value))}
          />
        </header>
      </div>
    </>
  )
}

export default CriandoH

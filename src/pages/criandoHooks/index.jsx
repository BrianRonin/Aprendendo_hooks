import React, { useState } from 'react'
import './style.css'
/**
 * Um hook é basicamente uma função no react que começa com use
 *
 */
//import useIntervall from '../../hooks/useInterval'
export default function criandoHooks() {
  //useIntervall(setState((s) => s + 1))
  const [state, setState] = useState(0)

  return (
    <div>
      <header className='App-header'>
        <a href='https://pt-br.reactjs.org/docs/hooks-custom.html'>
          <button>Criando hooks</button>
        </a>
        <span>Counter {state}</span>
      </header>
    </div>
  )
}

import React, { createContext, useReducer, useRef } from 'react'
import './style.css'

import { globalState } from '../../contexts/context/data'
import { Vo } from '../../components/Vo/Vo'
/**
 * Context é utilizado para resolver o problema de passar uma props
 * de um componente pai pra filho do filho pra outro filho por
 * exemplho. oque context propoem é colocar um contexto onde todos
 * podem acessar como um estado global, pode ter varios. mas como
 * diz na documentação do react deve-se usar com cautela porque se
 * não, pode quebrar a componentização
 */ //createContext() para criar um contexto
//Alem das props que recebe assim < exemplo={10}/>
//Tambem temos o children que é basicamente os filhos
//Do elemento em si ele funciona no props para jsx assim <>children</>
export const GlobalContext = createContext()

/**
 * useReducer parecido com o .reducer do js. o reducer é parecido com
 * use state porem inves de setState utiliza uma função dispath que voce vai criar
 * nela o primeiro argumento que recebera state e uma ação/dispath que
 * pode ser enviada ao executar o dispath nela deve conter um objeto com esse
 * objeto voce pode manipular, sempre deve retornar um estado pra atualizar
 * mesmo que seja o mesmo anterior deve-se o retornar.
 */

// padroes pra useReducer //
// oque voce passa para ser alterado se chama payload
// oque tipo de modificacao que voce passa se chama type
// 1. criar um obj com todas as ações possiveis e utilizar
const actions = {
  // 2. actions.js
  CHANGE_TITTLE: 'CHANGE_TITTLE',
  INCREMENT_COUNT: 'INCREMENT_COUNT',
}

function changeTittle(payload) {
  return { type: actions.CHANGE_TITTLE, payload: payload }
}
// 2. criar uma função pra cada ação que retorna o comando utilizando o obj acima

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNT:
      return { ...state, counter: state.counter + 1 }
    case actions.CHANGE_TITTLE:
      return { ...state, title: action.payload }
  }

  return { ...state }
}

export default function Context() {
  const inputR = useRef(null)
  const [state, dispath] = useReducer(reducer, globalState)
  return (
    <div>
      <header className='App-header'>
        <GlobalContext.Provider value={{ state, dispath }}>
          <Vo />
          <input
            type='text'
            ref={inputR}
            onKeyDown={(e) => {
              if (e.key === 'Enter') dispath(changeTittle(inputR.current.value))
            }}
          />
        </GlobalContext.Provider>
        <hr />
        <hr />
        <a href='https://pt-br.reactjs.org/docs/context.html#dynamic-context'>
          <button>Context</button>
        </a>
        <a href='https://pt-br.reactjs.org/docs/code-splitting.html'>
          <button>Dividindo o código</button>
        </a>
        <a href='https://pt-br.reactjs.org/docs/composition-vs-inheritance.html'>
          <button>Composição vs Herança</button>
        </a>
      </header>
    </div>
  )
}

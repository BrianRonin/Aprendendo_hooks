import P from 'prop-types'
import { useReducer } from 'react'
import { CountContext } from './context'
import { CountReducer } from './reducer'
import { CountData } from './data'

export const CountProvider = ({ children }) => {
  const [countState, countDispath] = useReducer(CountReducer, CountData)
  return (
    <CountContext.Provider value={{ countState, countDispath }}>
      {children}
    </CountContext.Provider>
  )
}

CountProvider.propTypes = {
  children: P.node.isRequired,
  //children: P.oneOfType([P.string, P.number, P.number,]) //
  // One of Tyepe vai aceitar algum dos tipos no array igual | do ts
  // isRequired deixa requerido obrigatorio
}

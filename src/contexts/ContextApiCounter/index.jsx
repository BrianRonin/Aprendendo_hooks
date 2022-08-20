import { createContext, useContext, useReducer, useRef } from 'react'
import { buildActions } from './buildAction'
import { reducer } from './reducer'

export const initialState = {
  counter: 0,
  loading: false,
}

const counterContext = createContext()

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useRef(buildActions(dispatch))

  return (
    <counterContext.Provider value={[state, actions.current]}>
      {children}
    </counterContext.Provider>
  )
}

export const useCounterContext = () => {
  const context = useContext(counterContext)

  if (typeof context === 'undefined') {
    throw new Error('you have to use useCounterContext inside <>')
  }

  return [...context]
}

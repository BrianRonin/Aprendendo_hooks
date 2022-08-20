import { initialState } from '.'
import counterTypes from './actions-types'

export const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case counterTypes.INCREASE:
      return { ...state, counter: state.counter + 1 }
    case counterTypes.DECREASE:
      return { ...state, counter: state.counter - 1 }
    case counterTypes.RESET:
      return { ...initialState }
    case counterTypes.SET_COUNTER:
      console.log(action.payload)
      return { ...state, ...action.payLoad }
    case counterTypes.ASYNC_INCREASE_START:
      return { ...state, loading: true }
    case counterTypes.ASYNC_INCREASE_END:
      return {
        ...state,
        loading: false,
        counter: state.counter + 1,
      }
    case counterTypes.ASYNC_INCREASE_ERROR:
      return { ...state, loading: false }
  }
  return state
}

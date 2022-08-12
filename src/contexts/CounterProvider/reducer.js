import * as types from './types'

export const CountReducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNT: {
      return { ...state, count: state.count + 1 }
    }
    case types.DESCREMENT_COUNT: {
      return { ...state, count: state.count - 1 }
    }
  }
  console.log('não encontrei a action: ', action.type)
  return { ...state }
}

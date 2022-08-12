import * as types from './types'

export const addCount = (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNT })
}

export const subCount = (dispatch) => {
  dispatch({ type: types.DESCREMENT_COUNT })
}

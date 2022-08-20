import counterTypes from './actions-types'

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: counterTypes.INCREASE }),
    decrease: () => dispatch({ type: counterTypes.DECREASE }),
    reset: () => dispatch({ type: counterTypes.RESET }),
    setCounter: (payLoad) => {
      dispatch({ type: counterTypes.SET_COUNTER, payLoad })
    },
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncError: () => asyncErrorFn(dispatch),
  }
}

const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: counterTypes.ASYNC_INCREASE_START })

  return await new Promise((r) => {
    setTimeout(() => {
      dispatch({ type: counterTypes.ASYNC_INCREASE_END })
      r('RESOLVED')
    }, 2000)
  })
}

const asyncErrorFn = async (dispatch) => {
  dispatch({ type: counterTypes.ASYNC_INCREASE_START })

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: counterTypes.ASYNC_INCREASE_ERROR })
      throw new Error("Erro 'O'")
    }, 2000)
  })
}

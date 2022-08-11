import * as types from './types'

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.POSTS_LOADING })
  //é possivel abordar o fetch https://developer.mozilla.org/pt-BR/docs/Web/API/AbortSignal
  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await postsRaw.json()
  return () => dispatch({ type: types.POSTS_SUCCESS, payload: posts })
}

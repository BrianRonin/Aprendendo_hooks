import P from 'prop-types'
import { useReducer } from 'react'
import { PostsContext } from './context'
import { reducer } from './reducer'
import { data } from './data'

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data)
  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  )
}

PostsProvider.propTypes = {
  children: P.node.isRequired,
  //children: P.oneOfType([P.string, P.number, P.number,]) //
  // One of Tyepe vai aceitar algum dos tipos no array igual | do ts
  // isRequired deixa requerido obrigatorio
}

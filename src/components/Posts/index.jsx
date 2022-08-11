import { useContext, useEffect, useRef } from 'react'
import { PostsContext } from '../../contexts/PostsProvider/context'
import * as actions from '../../contexts/PostsProvider/actions'
import './style.css'

export const Posts = () => {
  const loader = useRef(null)
  const isMounted = useRef(true)
  const postsContext = useContext(PostsContext)
  const { postsState, postsDispatch } = postsContext

  useEffect(() => {
    actions.loadPosts(postsDispatch).then((dispath) => {
      console.log(isMounted.current)
      if (loader) dispath()
    })
  }, [])

  console.log(postsState.isLoading)
  return (
    <div>
      <img
        src='../../pages/refatorandoHooks/refatorandoMinificado.png'
        alt='refatorando'
        width='500'
        height='600'
      />
      {!!postsState.isLoading && <div id='loader' ref={loader}></div>}
      {postsState.posts.map((post, index) => {
        return (
          <div key={index}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  )
}

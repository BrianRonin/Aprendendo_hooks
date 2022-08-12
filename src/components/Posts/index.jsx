import { useContext, useEffect, useRef } from 'react'
import { PostsContext } from '../../contexts/PostsProvider/context'
import { CountContext } from '../../contexts/CounterProvider/context'
import * as actions from '../../contexts/PostsProvider/actions'
import * as countActions from '../../contexts/CounterProvider/actions'
import './style.css'
import P from 'prop-types'

export const Posts = () => {
  const loader = useRef(null)
  const isMounted = useRef(true)
  const postsContext = useContext(PostsContext)
  const countContext = useContext(CountContext)
  const { postsState, postsDispatch } = postsContext
  const { countState, countDispath } = countContext

  useEffect(() => {
    actions.loadPosts(postsDispatch).then((dispath) => {
      console.log(isMounted.current)
      if (loader) dispath()
    })
  }, [])

  console.log(postsState.isLoading)
  console.log(countState)
  return (
    <div>
      <div id='count'>
        <img src='./refatorando.png' alt='' />
        <button onClick={() => countActions.addCount(countDispath)}>add</button>
        <span>{countState.count}</span>
        <button onClick={() => countActions.subCount(countDispath)}>sub</button>
      </div>
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
Posts.propTypes = {
  children: P.node,
}

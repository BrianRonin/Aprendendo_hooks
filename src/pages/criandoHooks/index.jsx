import { useCallback, useEffect, useState } from 'react'
import './style.css'
//import useIntervall from '../../hooks/useInterval'
/**
 * Um hook é basicamente uma função no react que começa com use
 * existe regras pra se criar e usar hooks
 * 1. deve começar com use
 * 2. deve ser chamada apenas no componente react func ou class
 * 3. não deve ser chamada dentro de um escopo mais abaixo como
 * em um if por exemplo, deve ser chamada apenas dentro do
 * componente
 */
import useIntervall from '../../hooks/useInterval'
import useFetch from '../../hooks/useFetch'
import useAsync from '../../hooks/useAsync'

function CriandoH() {
  const [postId, setPostId] = useState('')
  const [state, setState] = useState(0)
  const [delay, setDelay] = useState(1000)
  const [posts, setPosts] = useState(null)
  const [incrementor, setIncrementor] = useState(100)
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      method: 'GET',
      headers: {
        abc: 1,
      },
    },
  )
  console.log(result)
  async function falar() {
    await new Promise((r) => setTimeout(r, 5000))
    return 'falando'
  }

  const [reFalar, resolve, error, status] = useAsync(falar)

  useEffect(() => {
    reFalar()
  }, [])

  console.log('resolve', resolve, 'status', status, 'error', error)

  //useIntervall(() => setState((s) => s + 1), delay)
  const handleClick = () => {
    setPostId('')
  }

  if (loading) {
    return (
      <>
        <div>
          <header className='App-header'>LOADING ... {state}</header>
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <header className='App-header'>
          <a href='https://pt-br.reactjs.org/docs/hooks-custom.html'>
            <button>Criando hooks</button>
          </a>
          <span>Counter {state}</span>
          <span>delay:{delay}</span>
          <button onClick={() => setDelay((s) => s + Number(incrementor))}>
            + {incrementor}
          </button>
          <button onClick={() => setDelay((s) => s - Number(incrementor))}>
            - {incrementor}
          </button>
          <input
            type='text'
            onChange={(e) => setIncrementor(Number(e.target.value))}
          />
          {posts?.length > 0 ? (
            posts.map((post, indice) => (
              <div key={`post-${indice}`}>
                <p onClick={() => setPostId(indice + 1)}>{post.title}</p>
              </div>
            ))
          ) : (
            <div onClick={handleClick}>
              {posts ? <p>{result.body}</p> : <p>loading..</p>}
            </div>
          )}
        </header>
      </div>
    </>
  )
}

export default CriandoH

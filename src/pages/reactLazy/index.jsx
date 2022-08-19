/**
 * Otavio miranda aconselha a usar code split apenas quando a aplicação estiver
 * muito grande com um componente muito pesado então não forçando o navegador
 * o carregar logo após iniciar a UI
 * agente vai utilizar o lazy do react pra criar um lazy component
 * e tambem o suspense do com o fallback pra criar uma pagina de carregamento
 * OBS: é possivel testar o suspend de um componente com a extensão do react
 * o import() só é chamado uma vez de um certo conteudo
 */
import { useState, lazy, Suspense } from 'react'
const pathLazyComponent = () => import('./lazyComponent')
const LazyComponent = lazy(pathLazyComponent)

const Loading = () => {
  return <h1>Loading . . .</h1>
}
const ReactLazy = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='App'>
      <header className='App-header'>
        <Suspense fallback={<Loading />}>
          {show && <LazyComponent />}
          <button
            onMouseEnter={() => pathLazyComponent()}
            onClick={() => setShow((s) => !s)}
          >
            toggle
          </button>
        </Suspense>
      </header>
    </div>
  )
}

export default ReactLazy

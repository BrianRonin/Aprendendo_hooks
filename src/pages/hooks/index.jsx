import logo from './logo.svg'
import './style.css'
import P from 'prop-types'
import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react'
function xxx() {
  console.log('CONECTADO AO BANCO DE DADOS')
}
//React.memo - https://pt-br.reactjs.org/docs/react-api.html#reactmemo
//React.memo existe apenas afim de desempenho não o use para previnir
//uma renderização pois podera causar bugs, ele serve para pular a
//a renderizacão e reutilizar o ultimo resultado renderizado
//por padrão, ele irá comparar apenas superficialmente os objetos nos props.
//Se você quiser controle sob a comparação, você também pode prover uma
//função customizada de comparação como segundo argumento
//OBS: React.memo é parecido com o userMemo uma diferença é ele é usado
//dentro do componente e que ele tem o segundo argumento [] para alterações
const Button = React.memo(function button({ incrementButton }) {
  console.log('Button renderizado')
  return <button onClick={() => incrementButton(10)}>CALLLBACK</button>
})
Button.propTypes = {
  incrementButton: P.func,
}

function HOOKS() {
  const [isReverseLogo, setReverseLogo] = useState(false)
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')
  /**
   * Um ponto negativo da função pra classe no react é que não tem um metodo
   * Render. então toda vez que for atualizar o retorno todas essas funções
   * abaixo são recriadas quando uma função for muito pesada ai sim é
   * recomendavel utilizar o useCallback a fim de otimização não sendo algo
   * obrigatório, no segundo argumento recebe um [] de dependencias pra att
   * por padrão se não tiver [] ele vai att toda vez que for chamado.
   */ // aqui eu deixo da forma mais abstrata pra melhorar a performace
  const incrementCounter = useCallback((num) => {
    //Para não dar erro e dizer que eu não preciso de caunter eu posso
    //utilizar do proprio argumento setCounter pra pegar o caunter
    setCounter2((c) => c + num)
  }, [])

  // ####### UseEffect #######
  //UseEffect deve estar sempre no nivel superior nunca
  //dentro de um if () { } por exemplo
  //## ComponentDidUpdate ##//
  useEffect(() => {
    console.log('Update')
  })

  //## ComponentDidMount ##//
  useEffect(() => {
    console.log('Mount')

    document.getElementById('dada').addEventListener('click', xxx)

    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((p) => p.json())
        .then((p) => setPosts(p))
    }, 3000)

    //## Component WillUnmount ##//
    return () => {
      document.getElementById('dada').removeEventListener('click', xxx())
    }
  }, [])
  //## é chamado quando o componente counter é alterado ##//
  useEffect(() => {
    console.log('counter alterado')
  }, [counter])

  const counterMore = () => {
    setCounter((counter) => counter + 1)
  }
  const reverse = () => {
    setReverseLogo(!isReverseLogo)
  }

  // #### Use Ref #### https://pt-br.reactjs.org/docs/hooks-reference.html#useref
  /**
   * Use ref é uma otima maneira de pegar referencia
   * ele tem um valor mutavel oque significa que consegue
   * alterar o valor da referencia sem alterar o valor original
   */
  const input = useRef(null)

  console.log('Pai, renderizou')
  return (
    <div className='App'>
      <header className='App-header'>
        <Button incrementButton={incrementCounter} />
        <h1>contador2: {counter2}</h1>
        <img
          src={logo}
          className={`App-logo${isReverseLogo ? ' reverse' : ''}`}
          alt='logo'
        />
        <a href='/hooks/context'>
          <button>Context State</button>
        </a>
        <h1 id='dada'>contador: {counter}</h1>
        <button onClick={reverse}>change rotation</button>
        <button onClick={counterMore}>++++++++++</button>
        <input
          ref={input}
          type='search'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* 
            useMemo parecido como React.memo mas, dentro do componente
            é um hook utilizado apenas para performance onde deve ser usado
            apenas onde tiver muita coisa pra carregar se não, não vale apena
        */}
        {useMemo(() => {
          console.log(posts)
          return (
            posts.length > 0 &&
            posts.map((post, indice) => (
              <div key={indice}>
                <h1
                  onClick={(e) => {
                    input.current.value = e.target.textContent
                    input.current.focus()
                  }}
                >
                  {post.title}
                </h1>
                <p>{post.body}</p>
              </div>
            ))
          )
        }, [posts])}
      </header>
    </div>
  )
}

export default HOOKS

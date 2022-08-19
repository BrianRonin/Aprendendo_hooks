/** https://pt-br.reactjs.org/docs/react-api.html
 *
 * Compound component ou compondo componente sozinhos eles não
 * fazem nada pois a atução é no children e não no componente em si
 * não retornam jsx mas os children modificasdos, é um padrão que utiliza
 * do Children do react ## Link ## https://pt-br.reactjs.org/docs/react-api.html#reactchildren
 *
 * Dos metodos do children vamos utilizar
 * Children.map(children, function[(thisArg)]) = OBS: esse .map é do react não js vannila
 * children.map vai executar uma função em cada children parecido com .map vannila
 *
 * ## tambem vamos utilizar: ##
 * React.cloneElement() = clona um elemento podendo o manipular como adicionar
 * uma prop em cada child ja que no componente padrão nao poderia cloneElement vai
 * tornar extensivel podendo o manipular colocando qualquer coisa nas props dos children
 */

import { useContext } from 'react'
import { createContext } from 'react'
import { Children, cloneElement, useState } from 'react'
const s = {
  style: {
    fontSize: '90px',
  },
}

const Parent = ({ children }) => {
  console.log(children)
  return Children.map(children, (child) => {
    //estou atribuindo a cada um dos child minha prop style
    const newChild = cloneElement(child, {
      ...s,
      joaozinho: '123',
    })
    return newChild
  })
}

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false)
  const onTurn = () => setIsOn((s) => !s)
  return Children.map(children, (child) => {
    // quando o child não é um componente a alteração na propriedade
    // type vai dar erro então é possivel fazer um type guardian aqui
    if (typeof child.type === 'string') {
      return child
    }
    console.log(child)
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    })
    return newChild
  })
}
const TurnedOn = ({ isOn, children }) => (isOn ? children : null)
const TurnedOff = ({ isOn, children }) => (isOn ? null : children)
const TurnedButton = ({ isOn, onTurn, ...prop }) => {
  return (
    <button onClick={onTurn} {...prop}>
      Turn {isOn ? 'On' : 'OFF'}{' '}
    </button>
  )
}

const P = ({ children }) => {
  return <p>{children}</p>
}

const CompoundComponent = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Parent>
          <TurnOnOff>
            <TurnedOff>
              <P>coisas off</P>
            </TurnedOff>
            <TurnedOn>
              <P>coisas on</P>
            </TurnedOn>
            <TurnedButton />
          </TurnOnOff>
        </Parent>
      </header>
    </div>
  )
}

//// ### context component ### //// mesma coisa que o de cima mas em contexto

const styles = {
  fontSize: '90px',
}

const TurnOnOffContext = createContext()
const TurnOnOff2 = ({ children }) => {
  const [isOn, setIsOn] = useState(false)
  const onTurn = () => setIsOn((s) => !s)
  return (
    <TurnOnOffContext.Provider value={{ isOn, onTurn, styles }}>
      {children}
    </TurnOnOffContext.Provider>
  )
}
const TurnedOn2 = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext)
  return isOn ? children : null
}
const TurnedOff2 = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext)
  return isOn ? null : children
}
const TurnedButton2 = ({ ...prop }) => {
  const { isOn, onTurn, styles } = useContext(TurnOnOffContext)
  return (
    <button style={styles} onClick={onTurn}>
      Turn {isOn ? 'On' : 'OFF'}
    </button>
  )
}

const ContextComponent = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Parent>
          <TurnOnOff2>
            <TurnedOff2>
              <p>coisas off</p>
            </TurnedOff2>
            <TurnedOn2>
              <p>coisas on</p>
            </TurnedOn2>
            <TurnedButton2 />
          </TurnOnOff2>
        </Parent>
      </header>
    </div>
  )
}

export default ContextComponent

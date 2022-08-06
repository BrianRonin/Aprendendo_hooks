import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
function xxx() {
  console.log('CONECTADO AO BANCO DE DADOS')
}
function App() {
  const [isReverseLogo, setReverseLogo] = useState(false)
  const [counter, setCounter] = useState(0)

  //ComponentDidUpdate
  useEffect(() => {
    console.log('Update')
  })
  //ComponentDidMount
  useEffect(() => {
    console.log('Mount')

    document.getElementById('dada').addEventListener('click', xxx)
    return () => {
      document.getElementById('dada').removeEventListener('click', xxx())
    }
  }, [])
  //é chamado quando o componente counter é alterado
  useEffect(() => {
    console.log('[counter]')
  }, [counter])

  const counterMore = () => {
    setCounter((counter) => counter + 1)
  }
  const reverse = () => {
    setReverseLogo(!isReverseLogo)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className={`App-logo${isReverseLogo ? ' reverse' : ''}`}
          alt='logo'
        />
        <h1 id='dada'>contadorRr: {counter}</h1>
        <button className='App-link' onClick={reverse}>
          change rotation
        </button>
        <button className='App-link' onClick={counterMore}>
          +++++++++++++++
        </button>
      </header>
    </div>
  )
}

// class App extends Component {
//   state = {
//     isReverseLogo: false,
//   }

//   changeRotationLogo = () => {
//     this.state.isReverseLogo
//       ? this.setState({
//           isReverseLogo: '',
//         })
//       : this.setState({ isReverseLogo: 'reverse' })
//   }

//   render() {
//     const { isReverseLogo } = this.state
//     return (
//       <div className='App'>
//         <header className='App-header'>
//           <img src={logo} className={`App-logo${ isReverseLogo}`} alt='logo' />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <button onClick={this.changeRotationLogo}>Change rotation</button>
//         </header>
//       </div>
//     )
//   }
// }

export default App

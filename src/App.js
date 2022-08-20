import { Component } from 'react'
//import './style.css'
import './index.css'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div
        className='App home'
        style={{
          height: '100%',
          textAlign: 'center',
        }}
      >
        <h1>
          <Link to='criando' className='links'>
            CriandoHooks
          </Link>
        </h1>
        <h1>
          <Link to={'/hooks'} className='links'>
            Hooks
          </Link>
        </h1>
        <h1>
          <Link to={'/Context'} className='links'>
            Context
          </Link>
        </h1>
        <h1>
          <Link to={'/refatorando'} className='links'>
            Refatorado
          </Link>
        </h1>
        <h1>
          <Link to={'/otherHooks'} className='links'>
            OtherHooks
          </Link>
        </h1>
        <h1>
          <Link to={'/testes'} className='links'>
            useMediaQuery
          </Link>
        </h1>
        <h1>
          <Link to={'/flow'} className='links'>
            Hooks flow
          </Link>
        </h1>
        <h1>
          <Link to={'/errorBoundary'} className='links'>
            ErrorBoundary
          </Link>
        </h1>
        <h1>
          <Link to={'/CompoundComponent'} className='links'>
            Compound Component
          </Link>
        </h1>
        <h1>
          <Link to={'/reactLazy'} className='links'>
            React Lazy
          </Link>
        </h1>
        <h1>
          <Link to={'/contextAPI'} className='links'>
            ContextAPI
          </Link>
        </h1>
      </div>
    )
  }
}

import { Component } from 'react'
//import './style.css'
import './index.css'

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
          <a className='links' href='/criando'>
            CriandoHooks
          </a>
        </h1>
        <h1>
          <a className='links' href='/hooks'>
            Hooks
          </a>
        </h1>
        <h1>
          <a className='links' href='/Context'>
            Context
          </a>
        </h1>
        <h1>
          <a className='links' href='/refatorado'>
            Refatorado
          </a>
        </h1>
        <h1>
          <a className='links' href='/otherHooks'>
            OtherHooks
          </a>
        </h1>
        <h1>
          <a className='links' href='/testes'>
            Testes
          </a>
        </h1>
        <h1>
          <a className='links' href='/flow'>
            Hooks flow
          </a>
        </h1>
        <h1>
          <a className='links' href='/errorBoundary'>
            ErrorBoundary
          </a>
        </h1>
        <h1>
          <a className='links' href='/CompoundComponent'>
            Compound Component
          </a>
        </h1>
        <h1>
          <a className='links' href='/reactLazy'>
            React Lazy
          </a>
        </h1>
      </div>
    )
  }
}

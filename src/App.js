import { Component } from 'react'
//import './style.css'
import './index.css'
export default class Home extends Component {
  render() {
    return (
      <div className='App home'>
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
      </div>
    )
  }
}

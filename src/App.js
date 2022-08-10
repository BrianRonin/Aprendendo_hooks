import { Component } from 'react'
//import './style.css'
import './index.css'
export default class Home extends Component {
  render() {
    return (
      <div className='App home'>
        <span>
          <a className='links' href='/criando'>
            CriandoHooks
          </a>
        </span>
        <span>
          <a className='links' href='/hooks'>
            Hooks
          </a>
        </span>
        <span>
          <a className='links' href='/Context'>
            Context
          </a>
        </span>
      </div>
    )
  }
}

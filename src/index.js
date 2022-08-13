import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './App'
import HOOKS from './pages/hooks'
import criandoHooks from './pages/criandoHooks'
import Refatorando from './pages/refatorandoHooks'
import reportWebVitals from './reportWebVitals'
import Context from './pages/context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.Suspense>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/hooks' component={HOOKS} exact />
        <Route path='/context' component={Context} exact />
        <Route path='/criando' component={criandoHooks} />
        <Route path='/refatorado' component={Refatorando} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

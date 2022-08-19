import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './App'
import HOOKS from './pages/hooks'
import criandoHooks from './pages/criandoHooks'
import Refatorando from './pages/refatorandoHooks'
import OtherHooks from './pages/otherHooks'
import HooksFlow from './pages/hooksFlow'
import Testes from './pages/useMediaQuery'
import reportWebVitals from './reportWebVitals'
import Context from './pages/context'
import ErrorBoundaryTest from './pages/errorBoundary'
import CompoundComponent from './pages/compoundComponents'
import ReactLazy from './pages/reactLazy'

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
        <Route path='/otherHooks' component={OtherHooks} />
        <Route path='/testes' component={Testes} />
        <Route path='/flow' component={HooksFlow} />
        <Route path='/errorBoundary' component={ErrorBoundaryTest} />
        <Route path='/compoundComponent' component={CompoundComponent} />
        <Route path='/reactLazy' component={ReactLazy} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

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
import ContextAPI from './pages/ContextAPI'
import { CounterContextProvider } from './contexts/ContextApiCounter'
import { Menu } from './components/Menu'
import { NotFoundPage } from './pages/404'
const root = ReactDOM.createRoot(document.getElementById('root'))
/**
 * exact = rota exata
 * notas: a ordem importa ele vai lançar o primeiro que encontrar
 * a não ser que coloque rota como exact
 */
root.render(
  <React.Suspense>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/hooks' component={HOOKS} exact />
        <Route path='/context' component={Context} exact />
        <Route path='/criando' component={criandoHooks} exact />
        <Route path='/refatorado' component={Refatorando} exact />
        <Route path='/otherHooks' component={OtherHooks} exact />
        <Route path='/testes' component={Testes} exact />
        <Route path='/flow' component={HooksFlow} exact />
        <Route path='/errorBoundary' component={ErrorBoundaryTest} exact />
        <Route path='/compoundComponent' component={CompoundComponent} exact />
        <Route path='/reactLazy' component={ReactLazy} exact />
        <CounterContextProvider>
          <Route path='/contextAPI' component={ContextAPI} exact />
          <Route path='*' component={NotFoundPage} />
        </CounterContextProvider>
      </Switch>
    </BrowserRouter>
  </React.Suspense>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

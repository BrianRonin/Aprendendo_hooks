import P from 'prop-types'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/context'
export const Filho = ({ children, name }) => {
  const contexto = useContext(GlobalContext)
  const { state, dispath } = contexto
  const { title, counter } = state
  return (
    <>
      <h1
        onClick={() => {
          dispath({
            type: 'INCREMENT_COUNT',
          })
        }}
        className={name}
      >
        {title} <span>{counter}</span>
      </h1>
      {children}
    </>
  )
}
Filho.propTypes = {
  children: P.node,
  name: P.string,
}

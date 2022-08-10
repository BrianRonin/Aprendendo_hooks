import { useContext } from 'react'
import { GlobalContext } from '../../pages/context'
import P from 'prop-types'
export const FilhoDoFilho = ({ children, name }) => {
  const contexto = useContext(GlobalContext)
  const {
    state: { body },
  } = contexto
  return (
    <p className={name}>
      {body}
      {children}
    </p>
  )
}

FilhoDoFilho.propTypes = {
  children: P.node,
  name: P.string,
}

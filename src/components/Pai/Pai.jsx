import P from 'prop-types'
export const Pai = ({ children, name }) => {
  return <div className={name}>{children}</div>
}
Pai.propTypes = {
  children: P.element,
  name: P.string,
}

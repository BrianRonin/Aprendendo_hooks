import { GlobalContext } from '../../pages/context'
export const context = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>
}

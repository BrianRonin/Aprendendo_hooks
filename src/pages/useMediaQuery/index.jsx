import { useEffect, useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
export const Testes = () => {
  const matches = useMediaQuery('max-w 500px and min-w 400px')
  useEffect(() => {
    console.log(matches)
  }, [matches])
  return (
    <>
      {`The view port is ${matches ? 'at least' : 'less than'} 768 pixels wide`}
      <h1>${matches ? 'sim' : 'nao'}</h1>
    </>
  )
}

export default Testes

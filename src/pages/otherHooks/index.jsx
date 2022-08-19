import { forwardRef, useImperativeHandle, useLayoutEffect } from 'react'
import { useEffect, useRef, useState } from 'react'
// import useMediaQuery from '../../hooks/useMediaQuery'
import './style.css'
const OtherHooks = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4])
  const divRef = useRef()

  useLayoutEffect(() => {
    const now = Date.now()
    while (Date.now() < now + 500)
      divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight
  })

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1])
    //aqui estou usando a função handleClick do DisplayCount
    divRef.current.handleClick()
    console.log(divRef.current)
  }
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <a href='https://pt-br.reactjs.org/docs/hooks-reference.html#uselayouteffect'>
            <h1>documentação useLayoutEffect</h1>
          </a>
          <br />
          <button onClick={handleClick}>teste</button>
          <DisplayCount counted={counted} ref={divRef} />
          <button>{counted.slice(-1)}</button>
        </header>
      </div>
    </>
  )
}
// Passando Ref de um componente para outro usando forwardRef
export const DisplayCount = forwardRef(function DisplayCount({ counted }, ref) {
  const [rand, setRand] = useState('0.24')
  const divRef = useRef()

  const handleClick = () => {
    setRand(Math.random().toFixed(2))
  }

  // https://pt-br.reactjs.org/docs/hooks-reference.html#useimperativehandle
  // Passando função pelo corrent usando useImperativeHandle
  // OBS: pra passar ref precisa de forwardRef
  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }))

  return (
    <div
      ref={divRef}
      style={{ height: '250px', width: '100px', overflowY: 'scroll' }}
    >
      {counted.map((c, index) => {
        return <p key={`c-${[index]}`}>{c}</p>
      })}
      <button onClick={handleClick}>{rand}</button>
    </div>
  )
})

export default OtherHooks

import { useEffect, useRef } from 'react'

function useIntervall(cb, delay) {
  const saveCb = useRef()

  useEffect(() => {
    saveCb.current = cb
  }, [cb])

  useEffect(() => {
    const interval = setInterval(() => {
      saveCb.current()
    }, delay)
    return () => clearInterval(interval)
  }, [delay])
}

export default useIntervall

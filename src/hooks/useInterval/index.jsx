import { useEffect } from 'react'

const useIntervall = (cb, delay = 1000) => {
  useEffect(() => {
    const interval = setInterval(() => {
      cb()
    }, delay)
    return () => clearInterval(interval)
  }, [cb])
}

export default useIntervall

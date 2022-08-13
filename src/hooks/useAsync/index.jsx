import { useCallback, useEffect, useState } from 'react'

const useAsync = (asyncFunction, shouldRun = false) => {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [status, setSatatus] = useState('idle')

  const run = useCallback(() => {
    setResult(null)
    setError(null)
    setSatatus('pending')

    return asyncFunction()
      .then((response) => {
        setSatatus('settled')
        setResult(response)
      })
      .catch((error) => {
        setSatatus('error')
        setError(error)
      })
  }, [asyncFunction])

  useEffect(() => {
    if (shouldRun) {
      run()
    }
  }, [])

  return [run, result, error, status]
}
export default useAsync

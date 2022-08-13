import { useEffect, useRef, useState } from 'react'

function useFetch(url, option) {
  const urlRef = useRef(url)
  const optionRef = useRef(option)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const isObjectEqual = (objA, objB) => {
    return JSON.stringify(objA) === JSON.stringify(objB)
  }

  useEffect(() => {
    let changed = false
    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url
      changed = true
    }
    if (!isObjectEqual(option, optionRef.current)) {
      optionRef.current = option
      changed = true
    }

    if (changed) {
      setShouldLoad((s) => !s)
    }
  }, [url, option])
  useEffect(() => {
    let wait = false
    const controller = new AbortController()
    const signal = controller.signal
    setLoading(true)

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000))

      try {
        const response = await fetch(urlRef.current, {
          signal,
          ...optionRef.current,
        })
        const jsonResult = await response.json()
        if (!wait) {
          setResult(jsonResult)
          setLoading(false)
        }
      } catch (e) {
        if (!wait) {
          setLoading(false)
        }
        console.warn(e)
      }
    }
    fetchData()
    return () => {
      wait = true
      controller.abort()
    }
  }, [shouldLoad])

  return [result, loading]
}
export default useFetch

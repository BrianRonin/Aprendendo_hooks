import { useEffect, useRef, useState } from 'react'

function useFetch(url, option) {
  const urlRef = useRef(url)
  const optionRef = useRef(option)

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('EFFECT', new Date().toLocaleDateString())
    setLoading(true)

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000))

      try {
        const response = await fetch(urlRef.current, optionRef.current)
        const jsonResult = await response.json()
        setResult(jsonResult)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        throw e
      }
    }

    fetchData()
  }, [])

  return [result, loading]
}
export default useFetch

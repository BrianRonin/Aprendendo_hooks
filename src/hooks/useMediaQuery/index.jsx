import { useEffect, useState } from 'react'

function useMediaQuery(prop) {
  prop.includes('and')
  const query = `(${prop})`
    .replace('max-w', '(max-width:')
    .replace('max-h', '(max-height:')
    .replace('min-w', '(min-width:')
    .replace('min-h', '(min-height:')
    .replace('px', 'px)')

  const getMatches = (query) => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      console.log(query, typeof query)
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

export default useMediaQuery

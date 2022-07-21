import { useEffect, useState } from 'react'

const useMediaQuery = (query: string) => {
  const media = window.matchMedia(query)
  const [matches, setMatches] = useState(media.matches)

  useEffect(() => {
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)

    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [matches, media, query])

  return matches
}

export default useMediaQuery
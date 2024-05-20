import { useEffect, useRef, useState } from "react"

export function useSearchMovies() {
  const [movie, setMovie] = useState('')
  const firstInput = useRef(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = movie === ''
      return
    }

    if (movie === '') {
      setError('la busqueda no puede estar vacía')
      return
    }
    
    if (movie.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (movie.length <= 3) {
      setError('La busqueda tiene que tener al menos 3 caracteres')
      return
    }

    if (movie.length > 50) {
      setError('La busqueda no puede tener más de 50 caracteres')
      return
    }

    setError(null)

  },[movie])

  return { movie, error, setMovie}
}
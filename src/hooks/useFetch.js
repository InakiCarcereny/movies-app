import { useRef, useState } from "react"

const API_KEY = '59580eb8'
const URL_BASE = 'https://www.omdbapi.com/?apikey='

export function useFetchMovies({movie}) {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const previousMovie = useRef(movie)

  const getMovies = async ({ movie }) => {
    try {
      setLoading(true)
      const response = await fetch (`${URL_BASE}${API_KEY}&s=${movie}`)
      const data = await response.json()
  
      if (previousMovie.current !== movie) {
        setMovies(data.Search) 
    }

    } catch (error) { 
      console.log('unexpected error', error)
    } finally {
      setLoading(false)
    }
  }

  return { getMovies, loading, movies }
}
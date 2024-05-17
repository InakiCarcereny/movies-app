import { useEffect, useRef, useState } from "react"
import { RenderMovies } from "../components/RenderMovies"

export function Movies () {
  const [movie, setMovie] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  const handleChange = (e) => {
    setMovie(e.target.value)
    //console.log(movie)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

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

  },[movie])

  return (
    <section className="flex flex-col w-full h-screen bg-gray-100 my-2 mx-2 rounded-xl">

      <form className="mt-10 ml-4 flex items-center justify-center gap-6"
      onSubmit={handleSubmit}
      >
        <input 
        className={`w-[600px] h-12 px-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-500
        ${error && 'focus:border-red-500'}`}
        type="search"
        placeholder="Marvel, Matrix, Star Wars, Harry Potter, Kun Fu Panda..."
        value={movie}
        onChange={handleChange} 
        />

        <button className="bg-blue-500 px-4 py-2 rounded-xl text-white font-semibold" type="submit">Search</button>

        {error && <span className="text-red-500">{error}</span>}
      </form>

      <main className="mt-6">
          <RenderMovies />
      </main>

    </section>
  )
}
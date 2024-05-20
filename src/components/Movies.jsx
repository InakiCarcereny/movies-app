import { RenderMovies } from "../components/RenderMovies"
import { useFetchMovies } from "../hooks/useFetch"
import { useSearchMovies } from "../hooks/useSearchMovies"

export function Movies () {
  const { movie, error, setMovie } = useSearchMovies()
  const { movies,loading, getMovies } = useFetchMovies({movie})

  const handleChange = (e) => {
    setMovie(e.target.value)
    //console.log(movie)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ movie })
  }

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
          {loading ? <p>Loading...</p> : <RenderMovies movies={movies} />}
      </main>

    </section>
  )
}
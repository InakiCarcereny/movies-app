import results from '../mocks/results.json'

export function RenderMovies() {
  const movies = results.Search

  return (
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4'>
        {
          movies.slice(0, 6).map((movie) => (
            <li 
            className='bg-gray-200 rounded-xl py-2 flex flex-col justify-center items-center'
            key={movie.imdbID}>

              <div className='flex flex-col gap-4 items-center'>
                <h2 className='font-bold text-black text-xl'>{movie.Title}</h2>
                <p className='font-bold text-black text-md'>{movie.Year}</p>
              </div>

              <img className='w-40 h-auto' src={movie.Poster} alt={movie.Title} />
            </li>
          ))
        }
      </ul>
  )
}


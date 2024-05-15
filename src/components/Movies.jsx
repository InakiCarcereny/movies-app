import { useState } from "react"

export function Movies () {
  const [movie, setMovie] = useState('')

  const handleChange = (e) => {
    setMovie(e.target.value)
    console.log(movie)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (movie === '') return
  }

  return (
    <section className="flex flex-col w-full h-screen bg-gray-100 my-2 mx-2 rounded-xl">

      <form className="mt-10 ml-4 flex items-center justify-center gap-6"
      onSubmit={handleSubmit}
      >
        <input 
        className="w-[600px] h-12 px-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        type="search"
        placeholder="Marvel, Matrix, Star Wars, Harry Potter, Kun Fu Panda..."
        value={movie}
        onChange={handleChange} 
        />
        
        <button className="bg-blue-500 px-4 py-2 rounded-xl text-white font-semibold" type="submit">Search</button>
      </form>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">

        </div>
      </main>

    </section>
  )
}
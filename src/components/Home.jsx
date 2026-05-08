function Home({ onSelectSection }) {
  return (
    <main className="flex flex-col items-center px-6 py-24 text-center">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        Generation Thailand
        <br />
        React - Assessment
      </h1>

      <div className="mt-16 flex flex-wrap justify-center gap-10 sm:gap-20">
        <button
          type="button"
          onClick={() => onSelectSection('user')}
          className="rounded-md bg-white px-8 py-5 text-lg font-bold shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          User Home Section
        </button>
        <button
          type="button"
          onClick={() => onSelectSection('admin')}
          className="rounded-md bg-white px-8 py-5 text-lg font-bold shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Admin Home Section
        </button>
      </div>
    </main>
  )
}

export default Home

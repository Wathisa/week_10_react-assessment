function Home({ onSelectSection }) {
  return (
    <main className="flex flex-col items-center px-6 py-20 text-center">
      <h1 className="text-5xl font-bold leading-tight">
        Generation Thailand
        <br />
        React - Assessment
      </h1>

      <div className="mt-14 flex flex-wrap justify-center gap-16">
        <button
          type="button"
          onClick={() => onSelectSection('user')}
          className="rounded bg-white px-8 py-5 text-lg font-bold shadow-md"
        >
          User Home Section
        </button>
        <button
          type="button"
          onClick={() => onSelectSection('admin')}
          className="rounded bg-white px-8 py-5 text-lg font-bold shadow-md"
        >
          Admin Home Section
        </button>
      </div>
    </main>
  )
}

export default Home

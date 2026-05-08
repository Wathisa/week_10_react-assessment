function Home({ onSelectSection }) {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:py-28">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
        Generation Thailand
        <br />
        React - Assessment
      </h1>

      <div className="mt-16 flex flex-wrap justify-center gap-5 sm:gap-8">
        <button
          type="button"
          onClick={() => onSelectSection("user")}
          className="rounded-lg border border-slate-200 bg-white px-8 py-5 text-lg font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
        >
          User Home Section
        </button>
        <button
          type="button"
          onClick={() => onSelectSection("admin")}
          className="rounded-lg border border-slate-200 bg-white px-8 py-5 text-lg font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
        >
          Admin Home Section
        </button>
      </div>
    </main>
  );
}

export default Home;

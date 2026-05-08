function Owner() {
  return (
    <main className="px-6 py-12 text-center">
      <h1 className="text-3xl font-bold sm:text-4xl">
        99 Jane Doe (เจน) - JSDX
      </h1>

      <div className="mx-auto mt-10 flex h-52 max-w-md items-center justify-center border-2 border-gray-700 bg-gray-200">
        <span className="font-bold">picture</span>
      </div>

      <section className="mx-auto mt-8 max-w-3xl">
        <h2 className="font-bold">Short Biography:</h2>
        <p className="mt-5 text-gray-800">
          I am learning React with Generation Thailand. This assessment helps me
          practice components, state, props, API requests, and simple page
          navigation in a small React application.
        </p>
      </section>
    </main>
  )
}

export default Owner

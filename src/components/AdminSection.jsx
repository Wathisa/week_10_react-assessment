import MemberTable from './MemberTable'

function AdminSection({ members, activeSection, onSelectSection }) {
  const normalButtonClass =
    'rounded-md bg-white px-8 py-5 text-lg font-bold shadow-md transition hover:-translate-y-0.5 hover:shadow-lg'
  const activeButtonClass =
    'rounded-md bg-gray-900 px-8 py-5 text-lg font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg'

  function handleSubmit(event) {
    // Prevent page refresh for now. The POST API will be added in Step 4.
    event.preventDefault()
  }

  return (
    <main className="px-6 py-16 text-center">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        Generation Thailand
        <br />
        Home - Admin Section
      </h1>

      <div className="mt-14 flex flex-wrap justify-center gap-10 sm:gap-20">
        <button
          type="button"
          onClick={() => onSelectSection('user')}
          className={
            activeSection === 'user' ? activeButtonClass : normalButtonClass
          }
        >
          User Home Section
        </button>
        <button
          type="button"
          onClick={() => onSelectSection('admin')}
          className={
            activeSection === 'admin' ? activeButtonClass : normalButtonClass
          }
        >
          Admin Home Section
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-14 max-w-6xl text-left">
        <h2 className="text-2xl font-bold">Create User Here</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1fr_1fr_auto]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="rounded-md bg-white px-5 py-4 text-lg outline-none"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="rounded-md bg-white px-5 py-4 text-lg outline-none"
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            className="rounded-md bg-white px-5 py-4 text-lg outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-8 py-4 text-lg text-white"
          >
            Save
          </button>
        </div>
      </form>

      <MemberTable members={members} showActions />
    </main>
  )
}

export default AdminSection

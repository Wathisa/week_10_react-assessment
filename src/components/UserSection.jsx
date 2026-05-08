import MemberTable from './MemberTable'

function UserSection({ members, activeSection, onSelectSection }) {
  const normalButtonClass =
    'rounded-md bg-white px-8 py-5 text-lg font-bold shadow-md transition hover:-translate-y-0.5 hover:shadow-lg'
  const activeButtonClass =
    'rounded-md bg-gray-900 px-8 py-5 text-lg font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg'

  return (
    <main className="px-6 py-20 text-center">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        Generation Thailand
        <br />
        Home - User Section
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

      <MemberTable members={members} />
    </main>
  )
}

export default UserSection

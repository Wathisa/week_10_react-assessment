import MemberTable from './MemberTable'

function UserSection({
  members,
  activeSection,
  isLoading,
  errorMessage,
  onSelectSection,
}) {
  const normalButtonClass =
    'rounded-lg border border-slate-200 bg-white px-8 py-5 text-lg font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md'
  const activeButtonClass =
    'rounded-lg border border-slate-900 bg-slate-900 px-8 py-5 text-lg font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md'

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
        Generation Thailand
        <br />
        Home - User Section
      </h1>

      <div className="mt-12 flex flex-wrap justify-center gap-5 sm:gap-8">
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

      <MemberTable
        members={members}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  )
}

export default UserSection

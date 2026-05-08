function Navbar({ activePage, onNavigate }) {
  const normalLinkClass =
    'rounded-md px-5 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950'
  const activeLinkClass =
    'rounded-md bg-slate-900 px-5 py-2 text-white shadow-sm transition hover:bg-slate-800'

  return (
    <nav className="sticky top-0 z-10 flex justify-end gap-3 border-b border-slate-200 bg-white/85 px-6 py-4 text-base font-semibold shadow-sm backdrop-blur sm:px-10">
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className={activePage === 'home' ? activeLinkClass : normalLinkClass}
      >
        Home
      </button>
      <button
        type="button"
        onClick={() => onNavigate('owner')}
        className={activePage === 'owner' ? activeLinkClass : normalLinkClass}
      >
        Owner
      </button>
    </nav>
  )
}

export default Navbar

function Navbar({ activePage, onNavigate }) {
  const normalLinkClass = 'border-b-2 border-transparent pb-1 transition hover:text-gray-500'
  const activeLinkClass = 'border-b-2 border-black pb-1 transition hover:text-gray-500'

  return (
    <nav className="flex justify-end gap-10 border-b border-black px-10 py-6 text-xl font-bold">
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

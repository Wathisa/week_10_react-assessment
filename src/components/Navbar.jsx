function Navbar({ onNavigate }) {
  return (
    <nav className="flex justify-end gap-10 border-b border-black px-10 py-6 text-xl font-bold">
      <button type="button" onClick={() => onNavigate('home')}>
        Home
      </button>
      <button type="button" onClick={() => onNavigate('owner')}>
        Owner
      </button>
    </nav>
  )
}

export default Navbar

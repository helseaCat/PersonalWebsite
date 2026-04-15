function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
          Chelsea Scott
        </a>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">
          TaskFlow
        </h1>

        {/* Navigation */}
        <ul className="hidden gap-8 text-slate-700 md:flex">
          <li className="cursor-pointer hover:text-indigo-600">
            Features
          </li>

          <li className="cursor-pointer hover:text-indigo-600">
            How It Works
          </li>

          <li className="cursor-pointer hover:text-indigo-600">
            FAQ
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button className="font-medium text-slate-700 hover:text-indigo-600">
            Login
          </button>

          <button className="rounded-xl bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700">
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
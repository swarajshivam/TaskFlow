import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          TaskFlow
        </h1>

        {/* Navigation */}
        <ul className="hidden gap-8 text-slate-700 md:flex dark:text-slate-300">
          <li className="cursor-pointer transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
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

          <button
            onClick={toggleTheme}
            className="rounded-xl border border-slate-300 bg-white p-2 shadow-sm transition-colors duration-300 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700"
           >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button className="font-medium text-slate-700 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
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
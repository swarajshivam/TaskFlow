import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-slate-50 pt-10 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600 transition-colors duration-300 dark:bg-indigo-500/20 dark:text-indigo-300">
          🚀 Organize Work Smarter
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 transition-colors duration-300 dark:text-slate-100 md:text-6xl">
          Manage Your Tasks
          <span className="block text-indigo-600 dark:text-indigo-400">
            Like Never Before.
            </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-400">
          Plan projects , organize your workflow with a modern Kanban board,
          collaborate effortlessly, and stay productive every day.
        </p>

        <div className="mt-8 flex gap-4">

          <Link
            to="/register" 
            className="rounded-xl bg-indigo-600 px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-lg"
           >
            Get Started
            </Link>   
            

          <button className="rounded-xl border border-slate-300 bg-white px-7 py-3 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600 hover:text-indigo-600 hover:shadow-lg dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400">
            Live Demo
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;
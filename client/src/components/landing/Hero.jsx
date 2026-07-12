function Hero() {
  return (
    <section className="bg-slate-50 pt-10">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
          🚀 Organize Work Smarter
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
          Manage Your Tasks
          <span className="block text-indigo-600">
            Like Never Before.
            </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Plan projects , organize your workflow with a modern Kanban board,
          collaborate effortlessly, and stay productive every day.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="rounded-xl bg-indigo-600 px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-lg">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-300 bg-white px-7 py-3 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600 hover:text-indigo-600 hover:shadow-lg">
            Live Demo
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;
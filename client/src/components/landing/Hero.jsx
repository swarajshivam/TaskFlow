function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
          🚀 Organize Work Smarter
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
          Manage Your Tasks
          <br />
          Like Never Before.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Organize projects, collaborate with your team,
          and boost productivity using a modern Kanban board.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-300 px-6 py-3 hover:bg-slate-100">
            Live Demo
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;
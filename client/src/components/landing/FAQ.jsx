function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-600 transition-colors duration-300 dark:text-slate-400">
            Everything you need to know about TaskFlow.
          </p>
        </div>

        <div className="mt-12 space-y-6">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              Is TaskFlow free?
            </h3>

            <p className="mt-2 text-slate-600 transition-colors duration-300 dark:text-slate-400">
              Yes. TaskFlow is free to use and is built as a portfolio full-stack project.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              Can I organize tasks using Kanban?
            </h3>

            <p className="mt-2 text-slate-600 transition-colors duration-300 dark:text-slate-400">
              Absolutely. Move tasks between Todo, In Progress, Review and Done.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              Is my data secure?
            </h3>

            <p className="mt-2 text-slate-600 transition-colors duration-300 dark:text-slate-400">
              Yes. Authentication is protected using JWT and your tasks are private.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;
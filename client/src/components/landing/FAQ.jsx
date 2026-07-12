function FAQ() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about TaskFlow.
          </p>
        </div>

        <div className="mt-12 space-y-6">

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">
              Is TaskFlow free?
            </h3>

            <p className="mt-2 text-slate-600">
              Yes. TaskFlow is free to use and is built as a portfolio full-stack project.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">
              Can I organize tasks using Kanban?
            </h3>

            <p className="mt-2 text-slate-600">
              Absolutely. Move tasks between Todo, In Progress, Review and Done.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">
              Is my data secure?
            </h3>

            <p className="mt-2 text-slate-600">
              Yes. Authentication is protected using JWT and your tasks are private.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;
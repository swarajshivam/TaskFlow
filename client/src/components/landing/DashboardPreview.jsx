function DashboardPreview() {
  return (
    <section className="bg-slate-50 pb-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">

            <h2 className="font-semibold text-slate-800">
              TaskFlow Dashboard
            </h2>

            <input
              type="text"
              placeholder="Search tasks..."
              className="rounded-lg border border-slate-300 px-4 py-2 outline-none"
            />

          </div>

          {/* Kanban Columns */}

          <div className="grid grid-cols-4 gap-6 p-6">

            {/* Todo */}
            <div className="rounded-2xl bg-slate-100 p-4">
              <h3 className="mb-4 font-semibold">Todo</h3>

              <div className="rounded-xl bg-white p-3 shadow">
                Learn React
              </div>
            </div>

            {/* In Progress */}
            <div className="rounded-2xl bg-slate-100 p-4">
              <h3 className="mb-4 font-semibold">
                In Progress
              </h3>

              <div className="rounded-xl bg-white p-3 shadow">
                Build API
              </div>
            </div>

            {/* Review */}
            <div className="rounded-2xl bg-slate-100 p-4">
              <h3 className="mb-4 font-semibold">
                Review
              </h3>

              <div className="rounded-xl bg-white p-3 shadow">
                Test App
              </div>
            </div>

            {/* Done */}
            <div className="rounded-2xl bg-slate-100 p-4">
              <h3 className="mb-4 font-semibold">
                Done
              </h3>

              <div className="rounded-xl bg-white p-3 shadow">
                Deploy
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;
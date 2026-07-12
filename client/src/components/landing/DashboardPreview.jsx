function DashboardPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-4 md:flex-row md:items-center md:justify-between">

            <h2 className="text-lg font-semibold text-slate-800">
              TaskFlow Dashboard
            </h2>

            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 md:w-56"
            />

          </div>

          {/* Scrollable Kanban Board */}
          <div className="overflow-x-auto">

            <div className="grid min-w-[1000px] grid-cols-4 gap-6 p-6">

              {/* Todo */}
              <div className="rounded-2xl bg-slate-100 p-4">

                <h3 className="mb-4 font-semibold text-slate-700">
                  Todo
                </h3>

                <div className="space-y-3">

                  <div className="rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h4 className="font-semibold text-slate-800">
                      Learn React
                    </h4>

                    <span className="mt-3 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                      High Priority
                    </span>

                    <p className="mt-3 text-sm text-slate-500">
                      📅 Due Today
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h4 className="font-semibold text-slate-800">
                      Study Tailwind
                    </h4>

                    <span className="mt-3 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                      Medium
                    </span>

                    <p className="mt-3 text-sm text-slate-500">
                      📅 Tomorrow
                    </p>
                  </div>

                </div>

              </div>

              {/* In Progress */}
              <div className="rounded-2xl bg-slate-100 p-4">

                <h3 className="mb-4 font-semibold text-slate-700">
                  In Progress
                </h3>

                <div className="space-y-3">

                  <div className="rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h4 className="font-semibold text-slate-800">
                      Build Backend API
                    </h4>

                    <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      In Progress
                    </span>

                    <p className="mt-3 text-sm text-slate-500">
                      📅 This Week
                    </p>
                  </div>

                </div>

              </div>

              {/* Review */}
              <div className="rounded-2xl bg-slate-100 p-4">

                <h3 className="mb-4 font-semibold text-slate-700">
                  Review
                </h3>

                <div className="space-y-3">

                  <div className="rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h4 className="font-semibold text-slate-800">
                      Test Authentication
                    </h4>

                    <span className="mt-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                      Review
                    </span>

                    <p className="mt-3 text-sm text-slate-500">
                      📅 Today
                    </p>
                  </div>

                </div>

              </div>

              {/* Done */}
              <div className="rounded-2xl bg-slate-100 p-4">

                <h3 className="mb-4 font-semibold text-slate-700">
                  Done
                </h3>

                <div className="space-y-3">

                  <div className="rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h4 className="font-semibold text-slate-800">
                      Project Setup
                    </h4>

                    <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Completed
                    </span>

                    <p className="mt-3 text-sm text-slate-500">
                      ✅ Finished
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;
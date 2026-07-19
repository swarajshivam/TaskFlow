import { useTheme } from "../context/ThemeContext";


function AuthLayout({ children }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
      <div className="flex min-h-screen w-full">

        {/* ================= LEFT SIDE (Desktop Only) ================= */}
        <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 p-12 text-white lg:flex">

          {/* Top Section */}
          <div>

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow">
                  📋
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  TaskFlow
                </h2>

                <p className="text-sm text-indigo-100">
                  Productivity Simplified
                </p>
              </div>

            </div>

            {/* Heading */}
            <h1 className="mt-10 text-5xl font-extrabold leading-tight">
              Manage Projects
              <br />
              Without the Chaos.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-md text-lg leading-8 text-indigo-100">
              Stay productive with a modern Kanban board,
              collaborate with your team, and finish work faster.
            </p>

          </div>

          {/* ================= MINI DASHBOARD ================= */}

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <div className="grid grid-cols-4 gap-3">

              {/* Todo */}
              <div>
                <h3 className="mb-3 text-xs font-semibold">
                  Todo
                </h3>

                <div className="rounded-lg bg-white p-3 text-sm text-slate-800 shadow">
                  Learn React
                </div>
              </div>

              {/* In Progress */}
              <div>
                <h3 className="mb-3 text-xs font-semibold">
                  In Progress
                </h3>

                <div className="rounded-lg bg-white p-3 text-sm text-slate-800 shadow">
                  Build API
                </div>
              </div>

              {/* Review */}
              <div>
                <h3 className="mb-3 text-xs font-semibold">
                  Review
                </h3>

                <div className="rounded-lg bg-white p-3 text-sm text-slate-800 shadow">
                  Test Auth
                </div>
              </div>

              {/* Done */}
              <div>
                <h3 className="mb-3 text-xs font-semibold">
                  Done
                </h3>

                <div className="rounded-lg bg-white p-3 text-sm text-slate-800 shadow">
                  Deploy App
                </div>
              </div>

            </div>

          </div>

          {/* ================= STATS ================= */}

          <div className="flex justify-between border-t border-white/20 pt-8">

            <div>
              <h2 className="text-3xl font-bold">
                10K+
              </h2>

              <p className="text-indigo-100">
                Users
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                50K+
              </h2>

              <p className="text-indigo-100">
                Tasks
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                99.9%
              </h2>

              <p className="text-indigo-100">
                Uptime
              </p>
            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="relative flex flex-1 flex-col items-center justify-center bg-slate-50 px-6 py-10 transition-colors duration-300 dark:bg-slate-950">

          <button
            onClick={toggleTheme}
            className="absolute right-6 top-6 rounded-xl border border-slate-300 bg-white p-2 shadow transition-colors duration-300 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700"
           >
             {theme === "light" ? "🌙" : "☀️"}
           </button>

          {/* Mobile Branding */}
          <div className="mb-8 text-center lg:hidden">

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-3xl text-white shadow-lg">
              📋
            </div>

            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              TaskFlow
            </h1>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Organize. Collaborate. Achieve.
            </p>

          </div>

          {/* Login / Register Card */}
          {children}

        </div>

      </div>
    </div>
  );
}

export default AuthLayout;
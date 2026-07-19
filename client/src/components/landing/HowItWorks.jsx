import { FaPlusCircle, FaColumns, FaCheckCircle } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            How It Works
          </h2>

          <p className="mt-4 text-lg text-slate-600 transition-colors duration-300 dark:text-slate-400">
            Stay organized in three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Step 1 */}
          <div className="text-center">
            <FaPlusCircle className="mx-auto text-5xl text-indigo-600 transition-colors duration-300 dark:text-indigo-400" />

            <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-slate-100">
              Create Tasks
            </h3>

            <p className="mt-3 text-slate-600">
              Add your daily work and organize everything in one place.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <FaColumns className="mx-auto text-5xl text-indigo-600 transition-colors duration-300 dark:text-indigo-400" />

            <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-slate-100">
              Organize
            </h3>

            <p className="mt-3 text-slate-600">
              Move tasks between Todo, Progress, Review and Done.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <FaCheckCircle className="mx-auto text-5xl text-indigo-600 transition-colors duration-300 dark:text-indigo-400" />

            <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-slate-100">
              Track Progress
            </h3>

            <p className="mt-3 text-slate-600 transition-colors duration-300 dark:text-slate-400">
              Stay productive and finish your work on time.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
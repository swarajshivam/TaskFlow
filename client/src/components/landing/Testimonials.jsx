import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="bg-white py-24 transition-colors duration-300 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Loved by Productive Teams
          </h2>

          <p className="mt-4 text-lg text-slate-600 transition-colors duration-300 dark:text-slate-400">
            Here's what people would say about TaskFlow.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-200 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500">

            <FaQuoteLeft className="mb-4 text-3xl text-indigo-600 transition-colors duration-300 dark:text-indigo-400" />

            <div className="mb-4 text-yellow-400 text-lg">
              ★★★★★
            </div>

            <p className="text-slate-600 italic transition-colors duration-300 dark:text-slate-400">
              "TaskFlow keeps our team organized every day. The Kanban board is incredibly intuitive."
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-slate-100">
              Sarah Johnson
            </h3>

            <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
              Product Manager
            </p>

          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-200 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500">

            <FaQuoteLeft className="mb-4 text-3xl text-indigo-600 transition-colors duration-300 dark:text-indigo-400" />

            <div className="mb-4 text-yellow-400 text-lg">
              ★★★★★
            </div>

            <p className="text-slate-600 italic transition-colors duration-300 dark:text-slate-400">
              "Simple, clean, and exactly what we needed to manage projects."
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-slate-100">
              Alex Brown
            </h3>

            <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
              Software Engineer
            </p>

          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-200 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500">

            <FaQuoteLeft className="mb-4 text-3xl text-indigo-600 transition-colors duration-300 dark:text-indigo-400" />

            <div className="mb-4 text-yellow-400 text-lg">
              ★★★★★
            </div>

            <p className="text-slate-600 italic transition-colors duration-300 dark:text-slate-400">
              "One of the easiest task management apps I've ever used."
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-slate-100">
              Emily Davis
            </h3>

            <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
              UI/UX Designer
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
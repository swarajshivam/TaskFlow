import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-indigo-600 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Ready to Organize Your Work?
        </h2>

        <p className="mt-4 text-lg text-indigo-100 transition-colors duration-300">
          Join TaskFlow and boost your productivity today.
        </p>

        <Link
          to="/register"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-indigo-600 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default CTA;
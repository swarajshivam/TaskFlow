import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

        <Link
           to="/"
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
           className="text-xl font-bold text-indigo-600 transition-colors duration-300 dark:text-indigo-400"
         >
          TaskFlow
        </Link>  

        <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
          © 2026 TaskFlow. Built with React, Express and MongoDB.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

        <h2 className="text-xl font-bold text-indigo-600">
          TaskFlow
        </h2>

        <p className="text-sm text-slate-500">
          © 2026 TaskFlow. Built with React, Express and MongoDB.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
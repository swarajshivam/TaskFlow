function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-200 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500">

      <Icon className="text-4xl text-indigo-600 transition-colors duration-300 dark:text-indigo-400" />

      <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 transition-colors duration-300 dark:text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;
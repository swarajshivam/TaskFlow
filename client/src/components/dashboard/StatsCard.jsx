function StatsCard({title, count}) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {title}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 dark:text-slate-100">
                {count}
            </h2>

        </div>
    )
}

export default StatsCard;
function KanbanColumn({title, children}) {
    return(
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">

            <h2 className="mb-4 text-lg font-bold text-slate-800 dark:text-slate-100">
                {title}
            </h2>

            <div className="space-y-3">
                {children}
            </div>

        </div>
    ) 
}

export default KanbanColumn;
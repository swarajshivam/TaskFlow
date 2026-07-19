function Sidebar() {
    return (
        <aside className="h-full w-64 border-r border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">

            <nav className="space-y-3">

                <button className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-left font-medium text-white">
                    Dashboard
                </button>

                <button className="w-full rounded-xl px-4 py-3 text-left font-medium text-slate-700 transition-colors duration-300 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                    My Tasks
                </button>

                <button className="w-full rounded-xl px-4 py-3 text-left font-medium text-slate-700 transition-colors duration-300 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                    Analytics
                </button>

                <button className="w-full rounded-xl px-4 py-3 text-left font-medium text-slate-700 transition-colors duration-300 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                    Settings
                </button>

            </nav>

        </aside>
    )
}

export default Sidebar;
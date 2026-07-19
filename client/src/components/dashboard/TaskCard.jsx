import { FaTrash } from "react-icons/fa";

function TaskCard({
    title, 
    description, 
    status,
    onClick,
    onDelete,
    onStatusChange
}) {
    return (
        
        <div 
          onClick={onClick}
          className="cursor-pointer rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition-all duration-300 hover:border-indigo-400 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500"
        >
            <div className="flex items-start justify-between gap-3">

            <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                {title}
            </h3>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30"
            >
                  <FaTrash />
                </button>  
             </div>   


            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {description}
            </p>

            <div className="mt-4">
                <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
                    Status
                </label>

                <select
                value={status}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => onStatusChange(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition-colors duration-300 focus:border-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:[color-scheme:dark]"
               >
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="review">Review</option>
                <option value="done">Done</option>
               </select>
            </div>
            
        </div>
    );
}

export default TaskCard;
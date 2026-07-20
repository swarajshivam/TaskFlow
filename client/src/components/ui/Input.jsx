function Input({
  label,
  type = "text",
  placeholder,
  autoComplete,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/30 dark:[color-scheme:dark]
"
      />
    </div>
  );
}

export default Input;
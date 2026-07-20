import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/useTheme";


function Navbar() {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    };

    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-700 dark:bg-slate-900">

            {/* Left Side */}
            <div>
                <h1 className="text-2xl font-bold text-indigo-600">
                    TaskFlow
                </h1>
            </div>

            {/*  Right Side */}
            <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                    S
                </div>

                <button 
                   onClick={toggleTheme}
                   className="rounded-lg border border-slate-300 px-3 py-2 transition hover:bg-slate-100"
                >
                     {theme === "light" ? "🌙" : "☀️"}
                </button>

                <button 
                  onClick={handleLogout}
                  className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600"
                >
                    Logout
                </button>

            </div>

        </header>
    );
}

export default Navbar;
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">

        <Navbar />
      
      <div className="flex">

          <Sidebar />
        

        
        <main className="flex-1 p-6 transition-colors duration-300">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;
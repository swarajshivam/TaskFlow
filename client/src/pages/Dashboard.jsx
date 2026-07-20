import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import StatsCard from "../components/dashboard/StatsCard";
import KanbanColumn from "../components/dashboard/KanbanColumn";
import TaskCard from "../components/dashboard/TaskCard";
import CreateTaskModal from "../components/dashboard/CreateTaskModal";

import toast from "react-hot-toast";

import api from "../api/axios";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks");

      

      setTasks(response.data);
    } catch(error) {
      console.error(error.response?.data || error.message);

      toast.error(
        error.response?.data?.message || "Failed to load tasks."
      );
    }
  };

  const deleteTask = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    try{
      await api.delete(`/tasks/${id}`);

      toast.success("Task deleted successfully!");

      fetchTasks();
    }catch (error) {
      console.error(error.response?.data || error.message);

      toast.error(
        error.response?.data?.message || "Failed to delete task."
      );
    }
  };

  const changeStatus = async (id, newStatus) => {
    try{
      await api.put(`/tasks/${id}`, {
        status: newStatus,
      });

      toast.success("Task status updated!");

      fetchTasks();
    }catch (error) {
      console.error(error.response?.data || error.message);

      toast.error(
        error.response?.data?.message || "Failed to update task status."
      );
    }
  };

  useEffect(() =>{
    fetchTasks();
  }, []);

  return (
    <DashboardLayout>

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Here's an overview of your tasks.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedTask(null);
            setShowModal(true);
          }}
          className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          + Add Task
        </button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard 
           title="Total Tasks"
           count={tasks.length}
        />

        <StatsCard
           title="Completed"
           count={tasks.filter(task => task.status === "done").length}
        />

        <StatsCard
           title="In Progress"
           count={tasks.filter(task => task.status === "in-progress").length}
        />

        <StatsCard
           title="Review"
           count={tasks.filter(task => task.status === "review").length}
        />

      </div>

      {tasks.length === 0 ? (
        <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center dark:border-slate-700 dark:bg-slate-900">
          <div className="text-6xl">📋</div>

          <h2 className="mt-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
             No tasks yet
          </h2>

           <p className="mt-2 text-slate-500 dark:text-slate-400">
             Click the <span className="font-semibold">"+ Add Task"</span> button to create your first task.
          </p>
       </div>

      ): (

      <div className="mt-10 grid gap-6 lg:grid-cols-4">

        <KanbanColumn title="Todo">
          {tasks
            .filter((task) => task.status === "todo")
            .map((task) => (
              <TaskCard  
                 key={task._id}
                 title={task.title}
                 description={task.description}
                 status={task.status}
                 onClick={() => {
                  setSelectedTask(task);
                  setShowModal(true)
                 }}
                 onDelete={() => deleteTask(task._id)}
                 onStatusChange={(newStatus) =>
                  changeStatus(task._id, newStatus)
                }
              />
            ))}
        </KanbanColumn>

        <KanbanColumn title="In Progress">
          {tasks
             .filter((task) => task.status === "in-progress")
             .map((task) => (
              <TaskCard 
                 key={task._id}
                 title={task.title}
                 description={task.description}
                 status={task.status}
                 onClick={() => {
                  setSelectedTask(task);
                  setShowModal(true);
                 }}
                 onDelete={() => deleteTask(task._id)}
                 onStatusChange={(newStatus) =>
                  changeStatus(task._id, newStatus)
                }
              />
             ))}
        </KanbanColumn>

        <KanbanColumn title="Review">
          {tasks
             .filter((task) => task.status === "review")
             .map((task) => (
              <TaskCard 
                 key={task._id}
                 title={task.title}
                 description={task.description}status={task.status}
                 status={task.status}
                 onClick={() => {
                  setSelectedTask(task);
                  setShowModal(true);
                 }}
                 onDelete={() => deleteTask(task._id)}
                 onStatusChange={(newStatus) =>
                  changeStatus(task._id, newStatus)
                }
              />
             ))}
        </KanbanColumn>

        <KanbanColumn title="Done">
          {tasks
             .filter((task) => task.status === "done")
             .map((task) => (
              <TaskCard 
                 key={task._id}
                 title={task.title}
                 description={task.description}
                 status={task.status}
                 onClick={() => {
                  setSelectedTask(task);
                  setShowModal(true);
                 }}
                 onDelete={() => deleteTask(task._id)}
                 onStatusChange={(newStatus) =>
                  changeStatus(task._id, newStatus)
                }
              />
             ))}
        </KanbanColumn>

      </div>
      )}

      {showModal &&(
        <CreateTaskModal
           task={selectedTask}
           onClose={() => setShowModal(false)}
           fetchTasks={fetchTasks}
        />   
      )}
      
    </DashboardLayout>
  );
}

export default Dashboard;
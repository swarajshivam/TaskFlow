import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import StatsCard from "../components/dashboard/StatsCard";
import KanbanColumn from "../components/dashboard/KanbanColumn";
import TaskCard from "../components/dashboard/TaskCard";
import CreateTaskModal from "../components/dashboard/CreateTaskModal";

import api from "../api/axios";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks");

      console.log(response.data);

      setTasks(response.data);
    } catch(error) {
      console.error(error.response?.data || error.message);
    }
  };

  const deleteTask = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    try{
      await api.delete(`/tasks/${id}`);

      fetchTasks();
    }catch (error) {
      console.error(error.response?.data || error.message);
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

      <div className="mt-10 grid gap-6 lg:grid-cols-4">

        <KanbanColumn title="Todo">
          {tasks
            .filter((task) => task.status === "todo")
            .map((task) => (
              <TaskCard  
                 key={task._id}
                 title={task.title}
                 description={task.description}
                 onClick={() => {
                  setSelectedTask(task);
                  setShowModal(true)
                 }}
                 onDelete={() => deleteTask(task._id)}
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
                 onClick={() => {
                  setSelectedTask(task);
                  setShowModal(true);
                 }}
                 onDelete={() => deleteTask(task._id)}
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
                 description={task.description}
                 onClick={() => {
                  setSelectedTask(task);
                  setShowModal(true);
                 }}
                 onDelete={() => deleteTask(task._id)}
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
                 onClick={() => {
                  setSelectedTask(task);
                  setShowModal(true);
                 }}
                 onDelete={() => deleteTask(task._id)}
              />
             ))}
        </KanbanColumn>

      </div>

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
import { useState, useEffect } from "react";
import Input from "../ui/Input";
import api from "../../api/axios";

function CreateTaskModal({ onClose, fetchTasks, task }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (task) {
            setTitle(task.title)
            setDescription(task.description)
        }
    }, [task]);

    console.log(task);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            let response;

            if(task) {
                response = await api.put(`/tasks/${task._id}`, {
                    title,
                    description,
                    status: task.status
                });
            } else {
                response = await api.post("/tasks", {
                    title,
                    description
                });
            }

            console.log(response.data);

            setTitle("");
            setDescription("");

            fetchTasks();

            onClose();
        } catch (error) {
            console.error(error.response?.data || error.message);
        }
    }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">

        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
          {task ? "Edit Task" : "Create Task"}
        </h2>

        <form 
          onSubmit={handleSubmit}
          className="mt-6 space-y-5"
        >

          <Input
            label="Title"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            label="Description"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-5 py-2 text-slate-700 transition-colors duration-300 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition-colors duration-300 hover:bg-indigo-700"
            >
              {task ? "Update" : "Create"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default CreateTaskModal;
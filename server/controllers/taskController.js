import Task from "../models/Task.js";

export const createTask = async (req,res) => {
    try{
        const {title, description, completed} = req.body;

        const task = await Task.create({
            title,
            description,
            completed,
            user: req.user.userId
        })

        res.status(201).json(task);

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};


export const getTasks = async (req, res) => {
    try{
        const tasks = await Task.find({
            user: req.user.userId
        });

        res.status(200).json(tasks);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const updateTask = async (req, res ) => {
    try{
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        if(task.user.toString() !== req.user.userId){
            return res.status(403).json({
                message: "You are not authorized to update this task"
            });
        }

        task.title = req.body.title ?? task.title;
        task.description = req.body.description ?? task.description;
        task.completed = req.body.completed ?? task.completed;

        await task.save();

        return res.status(200).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


export const deleteTask = async (req, res) => {
    try{
        const task = await Task.findById(req.params.id);
        if(!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        if(task.user.toString() !== req.user.userId){
        return res.status(403).json({
            message: "You are not authorized to delete this task"
        });
      }
      await task.deleteOne();

      return res.status(200).json({
        message: "Task deleted successfully"
      })
    } catch (error){
        res.status(500).json({
            message: error.message
        });
    }
    
}

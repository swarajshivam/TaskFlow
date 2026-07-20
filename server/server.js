import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

connectDB();


app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://task-flow-lemon-omega.vercel.app/"
     ],
    credentials: true,
  })
);

app.use("/api/tasks",taskRoutes);
app.use("/api/auth",authRoutes);


app.get("/", (req, res) => {
    res.send("TaskFlow API Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
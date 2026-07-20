import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/ui/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
  const response = await api.post("/auth/login", {
    email,
    password
  });


  // Save JWT token
  localStorage.setItem("token", response.data.token);

  // Show response (optional)
  

  // Redirect to dashboard
  navigate("/dashboard");

} catch (error) {
  console.error(error.response?.data || error.message);
}
};

  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Welcome Back
        </h2>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Sign in to continue to TaskFlow.
        </p>

        <form 
        onSubmit={handleSubmit}
        className="mt-8 space-y-6">

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition-colors duration-300 hover:bg-indigo-700"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Register
          </Link>
        </p>

      </div>
    </AuthLayout>
  );
}

export default Login;
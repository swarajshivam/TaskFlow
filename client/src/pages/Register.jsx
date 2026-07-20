import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/ui/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register", {
        name, 
        email,
        password
    });
      

      navigate("/login");
    } catch (error) {
      console.error(error.response?.data || error.message)
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Create Account
        </h2>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Join TaskFlow and start managing your tasks efficiently.
        </p>

        <form 
        onSubmit={handleSubmit}
        className="mt-8 space-y-5" 
        autoComplete="off"
        >
          


           <Input 
             label="Full Name"
             type="text"
             placeholder="Enter your full name"
             autoComplete="name"
             value={name}
             onChange={(e) => setName(e.target.value)}
           />

          <Input 
            label="Email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input 
            label="Password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input 
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition-colors duration-300 hover:bg-indigo-700">
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Login
          </Link>
        </p>

      </div>
    </AuthLayout>
  );
}

export default Register;
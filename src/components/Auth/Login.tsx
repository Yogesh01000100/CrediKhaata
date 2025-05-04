import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../../assets/login.png";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: real auth
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "75% auto",
        backgroundPosition: "center left",
        transform: "scale(0.94)",
        transformOrigin: "center center",
        borderRadius: "10px",
      }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-200 to-teal-300 px-4"
    >
      <div className="w-full max-w-sm p-8 bg-white/70 backdrop-blur-md rounded-xl shadow-2xl border border-teal-300">
        <h2 className="mt-6 text-center text-2xl font-bold text-teal-700">
          CrediKhaata
        </h2>
        <p className="mt-1 text-center text-sm text-teal-600">
          Secure login to your account
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="peer w-full px-4 pt-5 pb-2 border rounded-lg focus:outline-none placeholder-transparent"
            />
            <label className="pointer-events-none absolute left-4 top-2 text-xs text-teal-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm">
              Email address
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="peer w-full px-4 pt-5 pb-2 border rounded-lg focus:outline-none placeholder-transparent"
            />
            <label className="pointer-events-none absolute left-4 top-2 text-xs text-teal-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-teal-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

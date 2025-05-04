import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import bgImage from "../../assets/login.png";
import { HashLoader } from "react-spinners";
import { toast } from "sonner";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: form.username,
        password: form.password,
      });

      const { accessToken } = response.data;
      localStorage.setItem("authToken", accessToken);
      toast.success("Login successful!");
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        transform: "scale(0.92)",
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
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="Username"
              className="peer w-full px-4 pt-5 pb-2 border rounded-lg focus:outline-none placeholder-transparent"
            />
            <label className="pointer-events-none absolute left-4 top-2 text-xs text-teal-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm">
              Username
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
            disabled={loading}
            className="w-full py-2 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex justify-center">
                <div>
                  <HashLoader color="#ffffff" size={20} />
                </div>{" "}
                <div className="ml-2">Please Wait</div>
              </div>
            ) : (
              "Sign In"
            )}
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

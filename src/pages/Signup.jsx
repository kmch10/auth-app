import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSignup = () => {
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    setError("");
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg w-[320px] shadow-xl text-white">

        <h2 className="text-2xl text-center mb-5">
          Create Account 🚀
        </h2>

        <input
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className="w-full p-2 mb-3 rounded-md bg-transparent border border-white/20 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          className="w-full p-2 mb-3 rounded-md bg-transparent border border-white/20 text-white outline-none"
        />

        {error && (
          <p className="text-red-400 text-sm mb-2">
            {error}
          </p>
        )}

        <button
          onClick={handleSignup}
          className="w-full p-2 mt-2 mb-4 rounded-md bg-blue-500 hover:bg-blue-600 transition cursor-pointer"
        >
          Sign Up
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;
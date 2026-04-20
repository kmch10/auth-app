import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  

  const handleLogin = () => {
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg w-[320px] shadow-xl text-white">
        
        <h2 className="text-2xl text-center mb-5">
          Welcome Back 👋
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
          onClick={handleLogin}
          className="w-full p-2 mb-4 rounded-md bg-blue-500 hover:bg-blue-600 transition"
        >
          Login
        </button>
  
        <p className="mt-8 text-center text-sm">
          Don’t have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
  
      </div>
    </div>
  );
}

export default Login;
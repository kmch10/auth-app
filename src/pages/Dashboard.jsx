import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
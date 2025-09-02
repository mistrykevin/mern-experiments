import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h2>Welcome to Home Page</h2>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
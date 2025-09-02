import { useState } from "react";
import axios from "axios";
import { useNavigate,Link  } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/");
  };

  return (
   <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 col-lg-4">
        <div className="card shadow-lg border-0 rounded-3">
          <div className="card-body p-4">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success w-100">
                Login
              </button>
            </form>

            <p className="text-center mt-3 mb-0">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-primary fw-bold">
                Signup here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


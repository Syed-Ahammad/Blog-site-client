import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>User Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your user name ....."
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email ....."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password ...."
        />
        <Link className="link" to={"/register"}>
          <button className="registerButton">Register</button>
        </Link>
      </form>
      <Link className="link" to={"/login"}>
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}

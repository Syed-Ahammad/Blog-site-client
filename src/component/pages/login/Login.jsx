import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form  className="loginForm">
            <label>Email</label>
            <input type="email" className='loginInput' placeholder='Enter your email .....'/>
            <label>Password</label>
            <input type="password" className='loginInput' placeholder='Enter your password ....'/>
            <Link className='link' to={'/login'}><button className="loginButton">Login</button></Link>
        </form>
        <Link className='link' to={'/register'}><button className="loginRegisterButton">Register</button></Link>
    </div>
  )
}

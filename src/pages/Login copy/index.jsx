import './styles.css'
import {Link} from 'react-router-dom'

export default function login() {
  return (
    <div className="main-wrapper">
      <div className="content-wrapper shadow-sm">

        <div className="login-typo">
          <h2>Login now</h2>
        </div>
        <div className="register-account">
          <span>if you are new /</span>
          <Link to="/signup"> <span>Register</span> </Link>
        </div>

        <form>
          <input className="input-field" type="telephone" placeholder="Phone number" />
         <Link to="/otp"> <button>Login</button> </Link>
        </form>
      </div>
    </div>
  )
}
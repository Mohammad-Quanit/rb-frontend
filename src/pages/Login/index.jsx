import { Link } from 'react-router-dom'
import './styles.css'

export default function login() {
  return (
    <div className="main-wrapper">
      <div className=" content-wrapper login-wrapper">

        {/* <div className="login-typo">
          <h2>Hey, <br /> Login now</h2>
        </div> */}
        <section>
          <form>
            <input className="input-field" type="telephone" placeholder="Login with phone number" />
            <div className="login-btns">
            <Link to="/otp"> <button>Login</button> </Link>
            <Link to="/signup"> <button>New User</button> </Link>
            </div>
          </form>

          {/* <div className="register-account">
            <span>if you are new /</span>
            <Link to="/signup"> <span>Register</span> </Link>
          </div> */}

        </section>
      </div>
    </div>
  )
}
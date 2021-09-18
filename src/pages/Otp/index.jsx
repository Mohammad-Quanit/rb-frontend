import './styles.css'
import {Link} from 'react-router-dom'

export default function otp() {
  return (
    <div className="main-wrapper">
      <div className="content-wrapper shadow-sm">

        <div className="login-typo">
          <h2>Otp</h2>
        </div>
        <div className="register-account">
          <span>Didn't recieve any otp /</span>
          <Link to="/"> <span>Try Again</span> </Link>
        </div>

        <form>
          <input className="input-field" type="number" placeholder="Enter otp" />
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}
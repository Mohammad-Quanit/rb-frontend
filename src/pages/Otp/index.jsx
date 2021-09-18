import './styles.css'
import { Link } from 'react-router-dom'

export default function otp() {
  return (
    <div className="main-wrapper">
      <div className="content-wrapper shadow-sm">

        <div className="login-typo">
          <h2>Paybox</h2>
        </div>
        <div className="register-account">
          <span>Didn't recieve OTP /</span>
          <Link to="/"> <span>Resend</span> </Link>
        </div>

        <form>
          <input className="input-field" type="number" placeholder="Enter OTP" />
         <Link to="/profile"> <button>Continue</button> </Link>
        </form>
      </div>
    </div>
  )
}
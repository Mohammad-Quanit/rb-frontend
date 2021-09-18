import './styles.css'
import { Link } from 'react-router-dom'

export default function confirmation() {
  return (
    <div className="main-wrapper signup-wrapper confirmation-wrapper">
      <div className="content-wrapper shadow-sm">
        <h4 style={{ marginBottom: '20px' }}> How much do you want to remit?</h4>
        <input className="input-field" type="telephone" placeholder="Enter Amount in SAR" />

        <div className="amount_receive">
          <span>This amount will be received: </span>
          <label>1,000 PKR</label>
        </div>


        <h4 style={{marginBottom: '10px'}}>Beneficiary Name</h4>

        <select className="select-field">
          <option>Ijaz Asghar</option>
          <option>Atif Mehmood</option>
          <option>Compensation</option>
          <option>Educational Support</option>
          <option>others</option>
        </select>

      <h4 style={{marginBottom: '10px'}}>Purpose of Remittance?</h4>
        {/* <input className="input-field" type="telephone" /> */}
        <select className="select-field">
          <option>Home expenses</option>
          <option>Educational expenses</option>
          <option>Bill payment</option>
          <option>House rent</option>
          <option>Travel</option>
          <option>others</option>
        </select>

        <div className="amount_receive terms_condition">
          <input type="checkbox" /> <span>Agree to Terms and Conditions</span>
        </div>

        <Link to="confirmation"> <button>Next</button> </Link>

      </div>
    </div>
  )
}
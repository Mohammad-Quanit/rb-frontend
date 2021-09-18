import './styles.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="main-wrapper signup-wrapper">
      <div className="content-wrapper signup-wrapper shadow-sm">
        <h4 style={{marginBottom: '18px'}}>Here is what you have to do:</h4>


<ol className="instructions-list">
  <li>Visit any branch branch of National Commercial Bank nearest to you </li>
  <li>Deposit your amount over the counter.</li>
  <li>Deposit your amount over the counter.</li>
  <li>Mention your Paybox account number on the pay in slip</li>
<li>Collect the receipt</li>
<li>You are done. Your balance will appear topped up after 24 hours</li>

</ol>
<div className="account-detail-cash">
<label>Your account number is</label>
<input />
</div>

        {/* <div className="balance-detail">
          <label>Load Funds</label>
          <span>100.00 SAR</span>
        </div>
        <button>Load Funds</button>
        <Link to="load"> <button>Send Money</button> </Link>

        <div>
          <span>Latest Transactions</span>
        </div>

        <div className="transaction-wrapper">
          <div className="transaction">
          <label>4283 31XX XXXX 2285</label>
          <span>Card Deposit</span>
          </div>
          <div className="transaction-amount">
            <label>100.00 SAR</label>
            <span>26.02.2019 15.08</span>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Signup
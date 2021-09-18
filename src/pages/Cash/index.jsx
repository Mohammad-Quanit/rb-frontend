import './styles.css'
import React from 'react'
import Navbar from '../../components/Navbar'
const Signup = () => {

  return (
    <div className="main-wrapper signup-wrapper">
      <div className="content-wrapper signup-wrapper shadow-sm">
      {/* <Navbar /> */}

        <h4 style={{marginBottom: '18px'}}>Here is what you have to do:</h4>


<ol className="instructions-list">
  <li>Visit any branch branch of National Commercial Bank nearest to you </li>
  <li>Deposit your amount over the counter.</li>
  <li>Mention your Paybox account number on the pay in slip</li>
<li>Collect the receipt</li>
<li>You are done. Your balance will appear topped up after 24 hours</li>

</ol>
<div className="account-detail-cash">
<label>Your account number is</label>
<input />
</div>

       
      </div>
    </div>
  )
}

export default Signup
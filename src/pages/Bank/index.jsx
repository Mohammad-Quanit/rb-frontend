import './styles.css'
import React, {useState, useStates} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [toggle1, settoggle1] = useState(true)
  const [toggle2, settoggle2] = useState(false)
  return (
    <div className="main-wrapper signup-wrapper">
      <div className="content-wrapper signup-wrapper shadow-sm">
        <h4 style={{marginBottom: '18px'}}>Please choose a method</h4>

<div className="option-checkbox-wrapper">
  <div>
  <input onChange={() => {settoggle1(false); settoggle2(true); }} type="checkbox" checked={toggle1} /> 
  <span>From Account</span> 
  </div>
  <div>
  <input onChange={() => {settoggle1(true); settoggle2(false); }} type="checkbox" checked={toggle2} /> 
  <span>By Debit Card</span> 
  </div>
</div>

{
  toggle2 &&
  <div>
  <label>Account number</label>
  <input type="text"  />
</div>
}
{
  toggle1 && 
  <div>
      <label>Debit card number</label>
         <input type="text"  />
      </div>

}


      
      <input type="text" placeholder="Enter Amount in SR" />

      <button>Continue</button>
      </div>

    </div>
  )
}

export default Signup
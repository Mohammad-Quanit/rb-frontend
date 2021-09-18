import './styles.css'
import React, {useState, useStates} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <div className="main-wrapper signup-wrapper">
      <div className="content-wrapper signup-wrapper shadow-sm">
        <h4 style={{marginBottom: '18px'}}>Please choose a method</h4>

<div className="option-checkbox-wrapper">
  <span>By Account</span> <input onClick={() => settoggle(!toggle)} type="checkbox" value={toggle} /> <span>By Card</span>
</div>

{
  toggle ?
  <div>
  <label>Account number</label>
  <input type="text"  />
</div>
:
<div>
      <label>Debit card number</label>
         <input type="text"  />
      </div>

}


      
      <input type="number" placeholder="Enter Amount" />

      <button>Continue</button>
      </div>

    </div>
  )
}

export default Signup
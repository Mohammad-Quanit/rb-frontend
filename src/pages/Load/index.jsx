/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'

import './styles.css'
import { Link } from 'react-router-dom'
import axiosInstance from '../../config/axios'

const confirmation = () => {
  const [convertedCurrency, setConvertedCurency] = React.useState(0)

  const realtimeExchange = async (evt) => {  
    setConvertedCurency(evt.target.value * 44.83)
  }
  return (
    <div className="main-wrapper signup-wrapper confirmation-wrapper">
      <div className="content-wrapper shadow-sm">
        <h4 style={{ marginBottom: '20px' }}> How much do you want to remit?</h4>
        <input className="input-field" type="telephone" placeholder="Enter Amount in SAR" onChange={realtimeExchange} />

        <div className="amount_receive">
          <span>This amount will be received: </span>
          <label>{convertedCurrency} PKR</label>
        </div>


        <h4 style={{marginBottom: '10px'}}>Full name of beneficiary</h4>
          <input type="text" placeholder="" />

      <h4 style={{marginBottom: '10px'}}>Purpose of Remittance?</h4>
        {/* <input className="input-field" type="telephone" /> */}
        <select className="select-field">
          <option>Home expenses</option>
          <option>Educational expenses</option>
          <option>Bill payment</option>
          <option>House rent</option>
          <option>Travel</option>
          <option>Others</option>
        </select>

        <div className="amount_receive terms_condition">
          <input type="checkbox" /> <span>Agree to Terms and Conditions</span>
        </div>

        <Link to="confirmation"> <button>Next</button> </Link>

      </div>
    </div>
  )
}

export default confirmation;
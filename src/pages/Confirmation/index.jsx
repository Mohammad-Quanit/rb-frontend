import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import './styles.css';

const Confirmation = () => {
  const history = useHistory()
  const [toggle, settoggle] = useState(false);
  const redirectToHome = () => {
    history.push("/profile")
  }
  return (
    <div className='main-wrapper signup-wrapper confirmation-wrapper'>
      <div className='content-wrapper shadow-sm'>
        <h4>You are about to make following Remittance</h4>
        <h5 className='amount'>
          1,000 <sup className='sup--font'>SAR</sup>{' '}
        </h5>
        <div className='col_2'>
          <div>
            <label>Exchange Rate</label>
            <span>36.717</span>
          </div>
          <div>
            <label>Amount in SAR</label>
            <span>1,000 SAR</span>
          </div>
        </div>
        <div className='col_2'>
          <div>
            <label>Transfer Fee</label>
            <span>15.000</span>
          </div>
          <div>
            <label>VAT</label>
            <span>0.750</span>
          </div>
        </div>
        <div>
          <label>Total Amount</label>
          <span>1,000 SAR</span>
        </div>
        <div>
          <label>Total Amount (Received)</label>
          <span>1,000 SAR</span>
        </div>
        <div>
          <label>Beneficiary Name</label>
          <span>1,000 SAR</span>
        </div>
        <div>
          <label>Collection Point</label>
          <span>Larkana, Post Office</span>
        </div>
        <button onClick={() => settoggle(true)}>Confirm</button>

        <div className={`${toggle && 'show-popup'} popup`}>
          <span className='close' onClick={redirectToHome}>
            x
          </span>
          <h3 className='congrats--msg'>
            Congratulations! <br />{' '}
            <span>
              {' '}
              Your remittance has been sent. You will be notified once the
              recipient receives the funds.{' '}
            </span>{' '}
          </h3>
        </div>

        <div className={`${toggle && 'dark_bg'}`}></div>
      </div>
    </div>
  );
};

export default Confirmation;

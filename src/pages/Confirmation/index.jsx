import './styles.css'
import {Link} from 'react-router-dom'

export default function confirmation() {
  return (
    <div className="main-wrapper signup-wrapper confirmation-wrapper">
      <div className="content-wrapper shadow-sm">
      <h4>Transfer Confirmation</h4>
    <h5 className="amount">1,000</h5>
      <div className="col_2">
        <div>
          <label>Exchange Rate</label>
          <span>36.717</span>
        </div>
        <div>
          <label>Amount in SAR</label>
          <span>1,000 SAR</span>
        </div>
      </div>
      <div className="col_2">
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
      <button>Confirm</button>

      </div>
    </div>
  )
}
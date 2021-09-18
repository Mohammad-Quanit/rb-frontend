import './styles.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="main-wrapper signup-wrapper">
      <div className="content-wrapper signup-wrapper shadow-sm">


    <section className="funds-options-wrapper">
    <Link to="/bank"><div>
        From my bank
      </div> </Link>
    <Link to="/cash"> <div>
        I will deposit cash
      </div> </Link>
    </section>

      
      </div>
    </div>
  )
}

export default Signup
import './styles.css'

export default function login() {
  return (
    <div className="main-wrapper">
      <div className="content-wrapper shadow-sm">
        <h3 className="tack-title">Track your payment</h3>
      <input placeholder="Enter payment ID"/>
      <button>Track</button>
      </div>
    </div>
  )
}
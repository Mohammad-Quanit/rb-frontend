import './styles.css'

export default function login() {
  return (
    <div className="main-wrapper">
      <div className="content-wrapper shadow-sm">
        <h3 className="tack-title">Contact Us</h3>
      <input placeholder="Full Name"/>
      <input placeholder="Email"/>
      <input placeholder="Subject"/>
      <textarea className="textField" placeholder="Enter your message..."></textarea>
      <button>Track</button>
      </div>
    </div>
  )
}
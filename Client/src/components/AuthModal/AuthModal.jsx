import "./AuthModal.css"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

function AuthModal({ isOpen, onClose, activeTab, setActiveTab }) {

  const navigate = useNavigate(); 

  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)


    if(!name || !email || !password || !confirmPassword){
      setError("All field are required")
      setLoading(false)
      return
    }

    if (name.length < 5){
      setError("Your name is too short")
      setLoading(false)
      return
    }
    if (name.length > 20){
      setError("Your name is too long")
      setLoading(false)
      return

    } 
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        setError("Invalid email address")
        setLoading(false)
        return
    }
    if (password !== confirmPassword){
      setError("Passwords do not match!")
      setLoading(false)
      return
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message)
        return
      }

      login(data.user, data.token)
      navigate("/home");
      onClose()

    } catch (error) {
      setError("Something went wrong please try again")
    } finally {
      setLoading(false)
    }
  }


  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json() 

      if (!response.ok) {
        setError(data.message)
        return
      }

      login (data.user, data.token)
      navigate("/home");
      onClose()

    } catch (error) {
      setError("Something went wrong please try again")
    } finally {
      setLoading(false)
    }    
  }

  if (!isOpen) return null



  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>

   
        <button className="modal-close" onClick={onClose}>✕</button>

     
        <div className="modal-tabs">
          <button
            className={`modal-tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`modal-tab ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* Login Form */}
        {activeTab === "login" && (
          <div className="modal-form">
            <h2 className="modal-title">Welcome back!</h2>
            <p className="modal-subtitle">Login to your account</p>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
               />
            </div>

            <div className="form-footer-link">
              <span>Forgot password?</span>
            </div>

            <button 
                className="modal-submit-btn"
                onClick={handleLogin}
                disabled={loading}
              >{loading ? "Loading..." : "Login"}
            </button>

            {error && <p className="modal-error">{error}</p>}

            <p className="modal-switch">
              Don't have an account?{" "}
              <span onClick={() => setActiveTab("register")}>Register here</span>
            </p>
          </div>
        )}

        {/* Register Form */}
        {activeTab === "register" && (
          <div className="modal-form">
            <h2 className="modal-title">Create account</h2>
            <p className="modal-subtitle">Join Pamasahe Optimizer</p>

            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input 
                type="password" 
                placeholder="Repeat your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </div>

            <button 
              className="modal-submit-btn"
              onClick={handleRegister}
              disabled={loading}
              >{loading ? "Loading..." : "Create Account"}
            </button>
            {error && <p className="modal-error">{error}</p>}

            <p className="modal-switch">
              Already have an account?{" "}
              <span onClick={() => setActiveTab("login")}>Login here</span>
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

export default AuthModal

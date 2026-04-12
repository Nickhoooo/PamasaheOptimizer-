import "../Header/Header.css"
import Logo from "../../../assets/Logo.png"
import Menu from "../../../assets/menu (3).png"
import User from "../../../assets/user (8).png";
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import AuthModal from "../../AuthModal/AuthModal"
import { useAuth } from "../../../context/AuthContext";


function Header() {

  const [open, setOpen] = useState(false)
  const { user, logout, modalOpen, setModalOpen, activeTab, setActiveTab } = useAuth()
  const menuRef = useRef(null)
  


  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])


  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [modalOpen])

  const openModal = (tab) => {
    setActiveTab(tab)
    setModalOpen(true)
    setOpen(false) 
  }

  return (
    <>
      <div className="Header-Main">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <div>
          <nav>
            { user && <Link to="/home">Home</Link>}
            <Link to="/about">About</Link>
            <Link to="/feature">Feature</Link>
          </nav>
        </div>

        <div className="Main-Menu" ref={menuRef}>
          <div className="Menu" onClick={() => setOpen(!open)}>
            <img src={Menu} alt="menu" />
          </div>

          <div className={`auth-buttons ${open ? "active" : ""}`}>

              <div className="nav-mobile">
                {
                  user && (
                    <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
                  )}
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              <Link to="/feature" onClick={() => setOpen(false)}>Feature</Link>
          </div>


            { user ? (
              <>
                <div className="User-Pf">
                  <img src={User} alt="" />
                  <span className="user-name">Hi {user.name}</span>
                </div>
                <button 
                  className="Logout-button"
                  onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                className="Login-button"
                onClick={(e) => openModal("login")}>
                  Login
                </button>
                <button
                className="Register-button"
                onClick={(e) => openModal("register")}>
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>


      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  )
}

export default Header

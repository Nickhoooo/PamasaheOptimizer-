import { createContext, useState, useContext } from "react";
import NotificationModal from "../components/NotificationModal/NotificationModal"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
    )

    const [token, setToken] = useState(localStorage.getItem("token") || null)
    const [modalOpen, setModalOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("login")
    const [notification, setNotification] = useState(null)
    
    const login = (userData, userToken) => {
        setUser(userData)
        setToken(userToken)
        localStorage.setItem("token", userToken)
        localStorage.setItem("user", JSON.stringify(userData)) // ← BAGO!
    }

    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user") // ← BAGO!
    }

    const showNotification = (type, message) => {
    setNotification({ type, message })
    }

    return(
    <AuthContext.Provider value={{
         user, token, login, logout, 
         modalOpen, setModalOpen,
         activeTab, setActiveTab,
         showNotification,
    }}>
        {children}

        {notification && (
                <NotificationModal
                    type={notification.type}
                    message={notification.message}
                    onClose={() => setNotification(null)}
                />
            )}
    </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)
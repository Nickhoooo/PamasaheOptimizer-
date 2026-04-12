import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function ProtectedRoutes({ children }){
    const { token, setActiveTab, setModalOpen } = useAuth()

    if (!token){
        setActiveTab("register")
        setModalOpen(true)
        return <Navigate to="/"/>
    }

    return children
}

export default ProtectedRoutes;
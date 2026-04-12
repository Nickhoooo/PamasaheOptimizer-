import "../NavBar/css/SavedRoutes.css";
import { useAuth } from "../../../context/AuthContext";
import { useState, useEffect } from "react";

function SavedRoutes(){

    const { token } = useAuth()
    const [saved, setSaved] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")


    const fetchSaved = async (req, res) => {
        
        try{
            
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/saved`,{
                method: "GET",
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await response.json()

            if (!response.ok){
                setError(data.message)
                return
            }

            setSaved(data.saved)

        } catch (error){
            setError("Something went wrong please try again")
        } finally {
            setLoading(false)
        }
    }

    useEffect( () => {
        fetchSaved()
    }, [])

    const deleteSaved = async (id) => {

        try{

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/saved/${id}`,{
                method: "DELETE",
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            if (!response.ok){
                setError("Failed to delete trip")
                return
            }

            setSaved(saved.filter(trip => trip._id !== id))
    
        } catch (error) {
            setError("Failed to delete your saved routes")
        } 

    }
    
    return (
    <div className="Saved-Routes-Main">
        <h1 className="saved-title">Saved Routes</h1>

        {loading && <p className="saved-loading">Loading saved routes...</p>}

        {error && <p className="saved-error">{error}</p>}

        {!loading && saved.length === 0 && (
            <div className="saved-empty">
                <p>No saved routes yet!</p>
                <p>Save a route from your Trip History! 🔖</p>
            </div>
        )}

        <div className="Crd-Container">
            {saved.map((route) => (
                <div className="saved-card" key={route._id}>

                    <div className="saved-card-header">
                        <span className="saved-mode">{route.transportMode}</span>
                        <span className="saved-date">
                            {new Date(route.createdAt).toLocaleDateString("en-PH", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </span>
                    </div>

                    <div className="saved-card-body">
                        <div className="saved-route">
                            <span className="saved-from">📍 {route.from}</span>
                            <span className="saved-arrow">→</span>
                            <span className="saved-to">🏁 {route.to}</span>
                        </div>
                        <div className="saved-fare">
                            ₱{route.fare}
                        </div>
                    </div>

                    <div className="saved-card-footer">
                        <button
                            className="saved-delete-btn"
                            onClick={() => deleteSaved(route._id)}
                        >
                            Remove
                        </button>
                    </div>

                </div>
            ))}
        </div>
    </div>
)
}
export default SavedRoutes; 
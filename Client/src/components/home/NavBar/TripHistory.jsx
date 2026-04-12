import "../NavBar/css/TripHistory.css"
import { useState, useEffect } from "react"
import { useAuth } from "../../../context/AuthContext"

function TripHistory(){

    const { token, showNotification } = useAuth()
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchHistory = async () => {
        try{

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/history`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.message)
                return
            }

            setHistory(data.history)

        } catch (error) {
            setError("Something went wrong please try again")
        } finally {
            setLoading(false)
        }
    }

    const deleteTrip = async (id) => {
        try {

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/history/${id}`,{
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (!response.ok) {
                setError("Failed to delete trip")
                return
            }

            setHistory(history.filter(trip => trip._id !== id))

        } catch (error) {
            setError("Something went wrong please try again")
        }
    }

    useEffect( () => {
        fetchHistory()
    }, [])

    const saveRoutes = async (trip) => {
    
        try {

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/saved`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        from: trip.from,
                        to: trip.to,
                        fare: trip.fare,
                        transportMode: trip.transportMode,
                    })
                })

                const data = await response.json()

                if (!response.ok) {
                    setError(data.message)
                    return
                }

                showNotification("success", "Save successfully")
                

        } catch (error){
            setError("Something went wrong please try again")
        } 
    }

    return (
        <div className="trip-history-container">
            <h1 className="trip-history-title">Trip History</h1>

            {loading && <p className="trip-loading">Loading trips...</p>}

            {error && <p className="trip-error">{error}</p>}

            {!loading && history.length === 0 && (
                <div className="trip-empty">
                    <p>No trips yet!</p>
                    <p>Start planning your trip now 🚍</p>
                </div>
            )}

            <div className="trip-cards">
                {history.map((trip) => (
                    <div className="trip-card" key={trip._id}>

                        <div className="trip-card-header">
                            <span className="trip-mode">{trip.transportMode}</span>
                            <span className="trip-date">
                                {new Date(trip.createdAt).toLocaleDateString("en-PH", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })}
                            </span>
                        </div>

                        <div className="trip-card-body">
                            <div className="trip-route">
                                <span className="trip-from">📍 {trip.from}</span>
                                <span className="trip-arrow">→</span>
                                <span className="trip-to">🏁 {trip.to}</span>
                            </div>
                            <div className="trip-fare">
                                ₱{trip.fare}
                            </div>
                        </div>

                        <div className="trip-card-footer">
                            <button 
                                className="trip-save-btn"onClick={() => saveRoutes(trip)}>
                                Save Route
                            </button>
                            <button
                                className="trip-delete-btn"
                                onClick={() => deleteTrip(trip._id)}
                            >
                                Delete
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default TripHistory;
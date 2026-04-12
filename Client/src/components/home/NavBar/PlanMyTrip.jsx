import "../NavBar/css/PlanMyTrip.css";
import CityVids from "../../../assets/city-skyline-animate.svg";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext"

function PlanMyTrip() {
  const { token } = useAuth()
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!from || !to) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/routes?from=${from}&to=${to}`
      );
      const data = await response.json();
      if (!data.found) {
        setError("Walang nahanap na route. Subukan ng ibang destination!");
      } else {
        setResult(data);

        if (token) {
          await fetch(`${import.meta.env.VITE_API_URL}/api/history`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              from,
              to,
              fare: data.totalFare,
              transportMode: data.path.map(step => step.transport).join(", ")
            })
          })
        }
      }


    } catch (err) {
      setError("Hindi ma-reach ang server. Baka hindi pa naka-run ang backend!");
    }
    setLoading(false);
  };

  const transportIcon = (type) => {
    if (type === "jeep") return "🚐";
    if (type === "bus") return "🚌";
    if (type === "mrt" || type === "lrt") return "🚇";
    return "🚍";
  };

  return (
    <div className="PlanTrip-Main">
      <div className="Left-PlanTrip">
        <div className="form-header">
          <span className="form-badge">Route Planner</span>
          <h2>Saan ka pupunta?</h2>
        </div>

        <div className="Top-Form">
          <div className="input-group">
            <span className="input-icon">📍</span>
            <input
              type="text"
              placeholder="Galing saan..."
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>

          <div className="input-divider">
            <span className="divider-line" />
            <span className="divider-dot" />
            <span className="divider-line" />
          </div>

          <div className="input-group">
            <span className="input-icon">🏁</span>
            <input
              type="text"
              placeholder="Pupunta saan..."
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          <button
            className={`find-btn ${loading ? "loading" : ""}`}
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? "Hinahanap..." : "Find Route"}
          </button>
        </div>

        <div className="Buttom-Form">
          {error && (
            <div className="error-box">
              <span>⚠️</span>
              <p>{error}</p>
            </div>
          )}

          {result && result.found && (
            <div className="Result">
              <div className="result-header">
                <div className="result-stat">
                  <span className="stat-label">Total Fare</span>
                  <span className="stat-value">₱{result.totalFare}</span>
                </div>
                <div className="result-divider" />
                <div className="result-stat">
                  <span className="stat-label">Oras</span>
                  <span className="stat-value">{result.totalDuration} mins</span>
                </div>
                <div className="result-divider" />
                <div className="result-stat">
                  <span className="stat-label">Transfers</span>
                  <span className="stat-value">{result.path.length - 1}</span>
                </div>
              </div>

              <div className="Steps">
                {result.path.map((step, index) => (
                  <div key={index} className="Step">
                    <div className="step-icon">{transportIcon(step.transport)}</div>
                    <div className="step-info">
                      <p className="step-route">
                        {step.from} <span>→</span> {step.to}
                      </p>
                      <p className="step-details">
                        <span className="transport-badge">{step.transport}</span>
                        ₱{step.fare} · {step.duration} mins
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="Right-PlanTrip">
        <img src={CityVids} alt="City Animation" />
        <div className="Title-Vids">
          <h1>Plan Your <br /> Commute</h1>
          <p>in Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default PlanMyTrip;

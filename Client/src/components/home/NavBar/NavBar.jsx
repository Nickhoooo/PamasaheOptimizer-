import "../NavBar/css/NavBar.css"
import { MapPin, Clock, Bookmark } from "lucide-react";
import { useState } from "react";
import PlanMyTrip from "./PlanMyTrip";
import SavedRoutes from "./SavedRoutes";
import TripHistory from "./TripHistory";

function NavBar(){

    const [active, setActive] = useState("plan");
    
      const tabs = [
        { id: "plan", icon: <MapPin size={20} />, label: "Plan My Trip", desc: "Route + Fare in one go" },
        { id: "history", icon: <Clock size={20} />, label: "Trip History", desc: "Your past commutes" },
        { id: "saved", icon: <Bookmark size={20} />, label: "Saved Routes", desc: "Your go-to routes" },
      ];
    

    return(
    <div className="SecondaryNav-wrapper">
      <div className="SecondaryNav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`SecondaryNav-tab ${active === tab.id ? "active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <div className="tab-text">
              <span className="tab-label">{tab.label}</span>
              <span className="tab-desc">{tab.desc}</span>
            </div>
            {active === tab.id && <span className="tab-indicator" />}
          </button>
        ))}
      </div>

        <div className="Tab-Content">
          {active === "plan" && <PlanMyTrip />}
          {active === "history" && <TripHistory />}
          {active === "saved" && <SavedRoutes />}

        </div>

    </div>
    )
}
export default NavBar;
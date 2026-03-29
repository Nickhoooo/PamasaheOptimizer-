import "../FeatureSection/FeatureSection.css";
import Fare from "../../../assets/fare.png";
import Option from "../../../assets/choice.png";
import Routes from "../../../assets/location.png";

const cards = [
  {
    img: Fare,
    title: "Fare Estimation",
    desc: "Know exactly how much you'll spend before you even step outside.",
    color: "#7ec8f5",
  },
  {
    img: Routes,
    title: "Route Suggestions",
    desc: "Discover the fastest and most cost-efficient path to your destination.",
    color: "#ffd166",
  },
  {
    img: Option,
    title: "Transport Options",
    desc: "Compare jeep, bus, UV Express, and MRT fares side by side.",
    color: "#a8edbb",
  },
];

function FeatureSection() {
  return (
    <div className="Feature-Main">
      {/* Header */}
      <div className="Feature-header">
        <p className="Feature-eyebrow">Why Use Pamasahe?</p>
        <h1 className="Feature-title">Everything You Need,<br /><span>In One Place</span></h1>
        <p className="Feature-subtitle">
          Plan your commute smarter — estimate fares, find the best routes,
          and compare transport options all in one place.
        </p>
      </div>

      {/* Cards */}
      <div className="Feature-cards">
        {cards.map((card, i) => (
          <div
            className="Feature-card"
            key={i}
            style={{ animationDelay: `${i * 0.15}s`, "--card-accent": card.color }}
          >
            <div className="Feature-card-icon-wrap">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="Feature-card-line" />
            <h3 className="Feature-card-title">{card.title}</h3>
            <p className="Feature-card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;

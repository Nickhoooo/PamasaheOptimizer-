import "../HowItwork/HowItwork.css";
import BgVids from "../../../assets/6574230-hd_1280_720_25fps.mp4";
import TeamWork from "../../../assets/team-work-animate.svg";

const steps = [
  { num: "01", label: "Enter Your Route", desc: "Type your starting point and destination." },
  { num: "02", label: "Choose Transport", desc: "Pick jeep, bus, UV Express, or MRT." },
  { num: "03", label: "Get Estimated Fare", desc: "See the exact cost before you commute." },
];

function HowItwork() {
  return (
    <div className="Works-Main">

      {/* Background Video */}
      <video autoPlay loop muted playsInline className="Works-video">
        <source src={BgVids} type="video/mp4" />
      </video>

      {/* Dark overlay for contrast */}
      <div className="Works-overlay" />

      {/* Content */}
      <div className="Works-content">

        {/* Left Side */}
        <div className="Works-Left">
          <p className="Works-eyebrow">Simple Process</p>
          <h1 className="Works-title">How It<br /><span>Works</span></h1>

          <div className="Works-steps">
            {steps.map((step, i) => (
              <div className="Works-step" key={i} style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                <div className="Works-step-num">{step.num}</div>
                <div className="Works-step-text">
                  <strong>{step.label}</strong>
                  <span>{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="Works-Right">
          <div className="Works-img-wrap">
            <img src={TeamWork} alt="How Pamasahe Optimizer works" />
            {/* Floating badge */}
          
          </div>
        </div>

      </div>

      {/* Wave Top */}
      <div className="Works-wave-top" />
      {/* Wave Bottom */}
      <div className="Works-wave-bottom" />

    </div>
  );
}

export default HowItwork;

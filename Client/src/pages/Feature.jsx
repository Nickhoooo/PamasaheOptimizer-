import "../pages/CSS/Feature.css"

function Feature() {

    const features = [
        {
            emoji: "🗺️",
            title: "Smart Route Planning",
            desc: "Get the most efficient route from point A to point B — with transfers, travel time, and fare breakdown.",
            color: "blue"
        },
        {
            emoji: "💰",
            title: "Accurate Fare Estimates",
            desc: "Know exactly how much you'll spend before you even leave the house. No more guessing!",
            color: "green"
        },
        {
            emoji: "📋",
            title: "Trip History",
            desc: "Every trip you plan is automatically saved. Review your past commutes anytime.",
            color: "purple"
        },
        {
            emoji: "🔖",
            title: "Saved Routes",
            desc: "Bookmark your favorite routes for quick access. Perfect for your daily commute!",
            color: "orange"
        },
        {
            emoji: "🚍",
            title: "Multiple Transport Modes",
            desc: "Supports Jeepney, UV Express, MRT, LRT, Bus, Tricycle, and walking — all in one app.",
            color: "red"
        },
        {
            emoji: "🔒",
            title: "Secure Account",
            desc: "Your data is protected with JWT authentication and encrypted passwords. Safe and secure!",
            color: "teal"
        },
    ]

    const steps = [
        {
            number: "01",
            title: "Create an account",
            desc: "Sign up for free — no credit card needed!"
        },
        {
            number: "02",
            title: "Enter your route",
            desc: "Type your origin and destination."
        },
        {
            number: "03",
            title: "Get your route",
            desc: "See the best route with fare breakdown."
        },
        {
            number: "04",
            title: "Save & track",
            desc: "Save routes and track your trip history."
        },
    ]

    return (
        <div className="feature-page">

            {/* Hero */}
            <section className="feature-hero">
                <span className="feature-badge">Features</span>
                <h1 className="feature-title">
                    Everything you need for <br />
                    <span className="feature-highlight">smarter commuting</span>
                </h1>
                <p className="feature-subtitle">
                    Pamasahe Optimizer is packed with features to make your daily commute easier, 
                    faster, and more affordable.
                </p>
            </section>

            {/* Features Grid */}
            <section className="feature-grid">
                {features.map((feature, index) => (
                    <div className={`feature-card feature-card-${feature.color}`} key={index}>
                        <div className="feature-card-icon">
                            {feature.emoji}
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </section>

            {/* How it works */}
            <section className="feature-how">
                <div className="feature-how-header">
                    <span className="feature-badge">How it works</span>
                    <h2>Get started in <span className="feature-highlight">4 easy steps</span></h2>
                </div>

                <div className="feature-steps">
                    {steps.map((step, index) => (
                        <div className="feature-step" key={index}>
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="step-connector">→</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="feature-cta">
                <h2>Ready to commute smarter?</h2>
                <p>Join thousands of Filipino commuters who use Pamasahe Optimizer every day!</p>
                <button className="feature-cta-btn" onClick={() => window.scrollTo(0, 0)}>
                    Get Started — It's Free! 🚀
                </button>
            </section>

        </div>
    )
}

export default Feature
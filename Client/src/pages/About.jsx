import "../pages/CSS/About.css"

function About() {
    const team = [
        {
            name: "Pamasahe Team",
            role: "Developers",
            emoji: "👨‍💻"
        }
    ]

    return (
        <div className="about-page">

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <span className="about-badge">About Us</span>
                    <h1 className="about-title">
                        We make commuting <br />
                        <span className="about-highlight">smarter & cheaper</span>
                    </h1>
                    <p className="about-desc">
                        Pamasahe Optimizer is a trip planning app designed for everyday Filipino commuters. 
                        We help you find the most efficient and affordable routes — so you can save time and money every day.
                    </p>
                </div>
                <div className="about-hero-visual">
                    <div className="about-blob">
                        <span>🚍</span>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="about-mission">
                <div className="about-mission-card">
                    <span className="mission-icon">🎯</span>
                    <h2>Our Mission</h2>
                    <p>
                        To empower every Filipino commuter with accurate fare estimates, 
                        smart route planning, and a seamless experience — all in one place.
                    </p>
                </div>
                <div className="about-mission-card">
                    <span className="mission-icon">👁️</span>
                    <h2>Our Vision</h2>
                    <p>
                        A Philippines where no commuter overpays for transportation 
                        or wastes time figuring out routes on their own.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats">
                <div className="about-stat">
                    <h3>500+</h3>
                    <p>Routes Available</p>
                </div>
                <div className="about-stat">
                    <h3>3+</h3>
                    <p>Transport Modes</p>
                </div>
                <div className="about-stat">
                    <h3>100%</h3>
                    <p>Free to Use</p>
                </div>
                <div className="about-stat">
                    <h3>24/7</h3>
                    <p>Always Available</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story">
                <div className="about-story-text">
                    <span className="about-badge">Our Story</span>
                    <h2>Built for commuters, <br/> by commuters</h2>
                    <p>
                        We know how stressful commuting can be in the Philippines. 
                        Long queues, confusing routes, and unexpected fares are part of daily life.
                        That's why we built Pamasahe Optimizer to take the guesswork out of commuting.
                    </p>
                    <p>
                        Whether you're taking the jeep, UV Express, MRT, or bus — 
                        we've got you covered with accurate fare estimates and the fastest routes.
                    </p>
                </div>
                <div className="about-story-visual">
                    <div className="about-story-card">
                        <div className="story-stat-row">
                            <span>🚌</span>
                            <div>
                                <p className="story-stat-label">Daily commuters helped</p>
                                <p className="story-stat-value">1,000+</p>
                            </div>
                        </div>
                        <div className="story-stat-row">
                            <span>💰</span>
                            <div>
                                <p className="story-stat-label">Average savings per trip</p>
                                <p className="story-stat-value">₱20-50</p>
                            </div>
                        </div>
                        <div className="story-stat-row">
                            <span>⏱️</span>
                            <div>
                                <p className="story-stat-label">Time saved planning</p>
                                <p className="story-stat-value">10 mins</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About

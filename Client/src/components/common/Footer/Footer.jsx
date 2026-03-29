import "./Footer.css";

function Footer() {
    return (
        <div className="Footer-Main">
            <div className="Footer-glow" />

            <div className="Footer-content">
                {/* Brand Column */}
                <div className="Footer-brand">
                    <div className="Footer-logo">
            
                        <span className="Footer-logo-text">Pamasahe<span className="Footer-logo-accent">Optimizer</span></span>
                    </div>
                    <p className="Footer-tagline">Smart commute. Less cost.<br />More freedom.</p>
                    <div className="Footer-socials">
                        <a href="#" className="Footer-social-btn" aria-label="Facebook">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                            </svg>
                        </a>
                        <a href="#" className="Footer-social-btn" aria-label="Twitter">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                            </svg>
                        </a>
                        <a href="#" className="Footer-social-btn" aria-label="Instagram">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="rgb(40,76,122)"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="rgb(40,76,122)" strokeWidth="2"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Nav Columns */}
                <div className="Footer-links-group">
                    <h4 className="Footer-heading">Features</h4>
                    <ul className="Footer-links">
                        <li><a href="#">Route Planner</a></li>
                        <li><a href="#">Fare Calculator</a></li>
                        <li><a href="#">Trip History</a></li>
                        <li><a href="#">Savings Report</a></li>
                    </ul>
                </div>

                <div className="Footer-links-group">
                    <h4 className="Footer-heading">Company</h4>
                    <ul className="Footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="Footer-links-group">
                    <h4 className="Footer-heading">Support</h4>
                    <ul className="Footer-links">
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Feedback</a></li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="Footer-divider" />

            {/* Bottom Bar */}
            <div className="Footer-bottom">
                <p className="Footer-copy">© {new Date().getFullYear()} PamasaheOptimizer. All rights reserved.</p>
                <p className="Footer-made">Made with ❤️ for Filipino commuters</p>
            </div>
        </div>
    );
}

export default Footer;

import "../Hero/Hero.css";
import HeroModel from "../../../assets/erasebg-transformed (5).avif";
import ChatIcon from "../../../assets/chat.png";
import { Link } from "react-router-dom";
function Hero(){
    return(
        <div className="Hero-Wrapper">
             <div className="Hero-Main">
            <div className="Hero-Left">
                <h1>Pamasahe Optimizer</h1>
                <p>Plan your trip with ease, estimate your fare accurately, and choose the most efficient and affordable transportation option for your journey all in one place.</p>
                <Link to={'/home'}>
                    <button id="GetStart">Get Started</button>
                </Link>
                
            </div>

            <div className="Hero-Right">
                <img src={HeroModel} alt="" />
            </div>
        </div>
            <img id="ChatIcon" src={ChatIcon} alt="" />
        </div>
       
    
       
    );
}
export default Hero;
import "../Hero/Hero.css";
import HeroModel from "../../../assets/erasebg-transformed (5).avif";
import ChatIcon from "../../../assets/chat.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"

function Hero(){

    const navigate = useNavigate()
    const { user, setModalOpen, setActiveTab } = useAuth()

    const GetStart = () => {
        if (user) {
            navigate("/home")
        } else {
            setActiveTab("register")
            setModalOpen(true)
        }
    }

    return(
        <div className="Hero-Wrapper">
             <div className="Hero-Main">
            <div className="Hero-Left">
                <h1>Pamasahe Optimizer</h1>
                <p>Plan your trip with ease, estimate your fare accurately, and choose the most efficient and affordable transportation option for your journey all in one place.</p>
                
                    <button id="GetStart" onClick={GetStart}>Get Start</button>
               
                
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
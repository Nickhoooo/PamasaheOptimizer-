import "../HeroHome/HeroHome.css";
import HeroVids from "../../../assets/MainVids.mp4";
function HeroHome(){
    return(
        <div className="Hero-Home">
            <video autoPlay loop muted playsInline className="Hero-video">
             <source src={HeroVids} type="video/mp4" />
            </video>

            <div className="Hero-overlay" />
            
            <div className="Home-Content">
                <div className="Left-Content">
                    <h1 className="Home-Title"> <span>Pagod na sa</span> <br/> Mahal na Pamasahe?</h1>
                     <p>Hanapin ang pinaka-mura at pinaka-mabilis na ruta para sa iyo.</p>
                </div>
                <div className="Right-Content">

                </div>
                
            </div>

        </div>
    );
}
export default HeroHome;
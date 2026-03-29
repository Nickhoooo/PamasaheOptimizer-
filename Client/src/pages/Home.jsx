import HeroHome from "../components/home/HeroHome/HeroHome";
import NavBar from "../components/home/NavBar/NavBar";
import "../pages/CSS/Home.css";

function Home(){
    return(
        <div>
            <HeroHome />
            <NavBar />
        </div>
    );
}
export default Home;
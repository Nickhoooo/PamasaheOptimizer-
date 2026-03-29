import "../Header/Header.css"
import Logo from "../../../assets/Logo.png"
import Menu from "../../../assets/menu (3).png";
import { Link } from "react-router-dom"
function Header(){
    return(
    <div className="Header-Main">
        <Link to={'/'}>
            <img src={Logo} alt="" />
        </Link>
        
        <div>
            <nav>
                <Link to={"/home"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/feature"}>Feature</Link>
            </nav>
        </div>
        <div className="Menu">
            <img src={Menu} alt="" />
        </div>
    </div>
    )
}
export default Header;
import { HamburgerIcon, HammerIcon, X } from "lucide-react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate} from "react-router-dom";

export default function Header(){
    const navigate= useNavigate();
    const [hamenu, setHamenu]=useState(false);

    function seeMenu(){
        setHamenu(!hamenu);
    }
    return(
        <>
        <div className="header">
        <div className="logo" onClick={()=>navigate("/")}>Keneth Mwaniki</div>
        <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/CAD">CAD</NavLink>
            <NavLink to="/webdev">Webdev</NavLink>
            <NavLink to="/speaking">Speaking</NavLink>
            <NavLink to="/resume">Resume</NavLink>
        </div>
        {!hamenu&&<GiHamburgerMenu size={30} className="icon" onClick={seeMenu}/>}
        </div>
        <div className={hamenu?"hamburgerOn":"hamburgerOff"}>
            <X size={25} className="icon" onClick={seeMenu}/>
            <NavLink to="/" onClick={seeMenu}>Home</NavLink>
            <NavLink to="/CAD" onClick={seeMenu}>CAD</NavLink>
            <NavLink to="/webdev" onClick={seeMenu}>Webdev</NavLink>
            <NavLink to="/speaking" onClick={seeMenu}>Speaking</NavLink>
            <NavLink to="/resume" onClick={seeMenu}>Resume</NavLink>
        </div>
        {hamenu&& <div className="hamspace" onClick={seeMenu}></div>}
        </>
    );
}
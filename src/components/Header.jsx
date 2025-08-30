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
        <div className="header" id="hd">
        <div className="logo" onClick={()=>navigate("/")}>
            <img src="/favi.png" alt="favicon" />
            <span>Keneth Mwaniki</span>
            </div>
        <div className="links">
            <NavLink to="/" className={({isActive})=>isActive? "activeLink":''}>Home</NavLink>
            <NavLink to="/CAD" className={({isActive})=>isActive? 'activeLink':''}>CAD</NavLink>
            <NavLink to="/webdev" className={({isActive})=>isActive? 'activeLink':''}>Webdev</NavLink>
            <NavLink to="/speaking" className={({isActive})=>isActive? 'activeLink':''}>Speaking</NavLink>
            <NavLink to="/resume" className={({isActive})=>isActive? 'activeLink':''}>Resume</NavLink>
        </div>
        {!hamenu&&<GiHamburgerMenu size={30} className="icon" onClick={seeMenu}/>}
        </div>
        <div className={hamenu?"hamburgerOn":"hamburgerOff"}>
            <X size={25} className="icon" onClick={seeMenu}/>
            <NavLink to="/" onClick={seeMenu}className={({isActive})=>isActive? "activeLink":''}>Home</NavLink>
            <NavLink to="/CAD" onClick={seeMenu}className={({isActive})=>isActive? "activeLink":''}>CAD</NavLink>
            <NavLink to="/webdev" onClick={seeMenu}className={({isActive})=>isActive? "activeLink":''}>Webdev</NavLink>
            <NavLink to="/speaking" onClick={seeMenu}>Speaking</NavLink>
            <NavLink to="/resume" onClick={seeMenu}className={({isActive})=>isActive? "activeLink":''}>Resume</NavLink>
        </div>
        {hamenu&& <div className="hamspace" onClick={seeMenu}></div>}
        </>
    );
}
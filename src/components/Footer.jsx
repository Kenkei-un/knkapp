import { Github, Instagram, Linkedin, Mail } from "lucide-react";

import { IoLogoWhatsapp } from "react-icons/io5";

export default function Footer(){
    return (<div className="footer">
        <li>&copy;Keneth Mwaniki {(new Date).getFullYear()} </li>
        <li><a href=""><Instagram className="icon"/></a></li>
        <li><a href=""><IoLogoWhatsapp  className="icon" size={24}/></a></li>
        <li><a href=""><Linkedin  className="icon"/></a></li>
        <li><a href=""><Github  className="icon"/></a></li>
        <li><a href=""><Mail  className="icon"/></a></li>
    </div>);
}
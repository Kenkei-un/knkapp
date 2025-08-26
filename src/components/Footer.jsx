import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { BsSubstack } from "react-icons/bs";

import { IoLogoWhatsapp } from "react-icons/io5";

export default function Footer(){
    return (<div className="footer">
        <li>&copy;Keneth Mwaniki {(new Date).getFullYear()} </li>
        <li><a href="https://www.instagram.com/kenkei_?igsh=MWs4cG8xZHNmaGk5bQ==" target="_blank"><Instagram className="icon"/></a></li>
        <li><a href="https://wa.me/254705984120?text=Hi%20Mwaniki!" target="_blank"><IoLogoWhatsapp  className="icon" size={24}/></a></li>
        <li><a href="https://www.linkedin.com/in/keneth-mwaniki-36b555278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><Linkedin  className="icon"/></a></li>
        <li><a href="https://github.com/Kenkei-un" target="_blank"><Github  className="icon"/></a></li>
        <li><a href="mailto: keneth.paul.mwaniki@gmail.com" target="_blank"><Mail  className="icon"/></a></li>
        <li><a href="https://btnbreaths.substack.com" target="_blank"><BsSubstack className="icon"/></a></li>
    </div>);
}
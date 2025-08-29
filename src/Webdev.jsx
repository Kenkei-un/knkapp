import { useRef } from "react";
import Slider from "./Tools/Slider";

export default function Webdev(){
    const projectsRef=useRef(null);
    const appsRef=useRef(null);
    const JDS=[
        {image:
            [
                '/JDSscreens/Lhomepage.png',
                '/JDSscreens/Mhomepage.png'
            ],
            text:'Responsive homepage with a Carousel hero section'
        },
        {
            image:
            [
                '/JDSscreens/Lmotions.png',
                '/JDSscreens/Mmotions.png'
            ],
            text: 'Access to more than 300 motions and counting. Users can like, search or sort by type'
        },
        {
            image:
            [
                '/JDSscreens/Levents.png',
                '/JDSscreens/Mevents.png'
            ],
            text: 'Keep track of debate events'
        },
        {
            image:
            [
                '/JDSscreens/Lsignup.png',
                '/JDSscreens/Msignup.png',
                '/JDSscreens/Llogin.png',
                '/JDSscreens/Mlogin.png',
                '/JDSscreens/Muser.png',
            ],
            text: 'User sign up and log In'
        },
        {
            image:
            [
                '/JDSscreens/Mdebatetimer.png',
                '/JDSscreens/Mpskeeper.png'
            ],
            text:'Speaker tools, Timers'
        },
        {
            image:
            [
                '/JDSscreens/Ladmin.png',
                '/JDSscreens/Madmin.png',
                '/JDSscreens/Mmotionform.png',
                '/JDSscreens/Usermanagement.png',
            ],
            text: 'Administrative features'
        },
    ];
    return(
        <>
        <section className="webdevIntro">
            <h2>Tech Stack</h2>
            <p>The projects and web apps below are built using the tech stack:
                {<br/>}HTML, CSS, Javascript, REACT, NodeJS/ExprssJS, MongoDB</p>
                
            <div style={{display:'flex', gap:'1rem'}}>
                <button onClick={()=>projectsRef.current.scrollIntoView({behavior:'smooth'})
                }>Projects</button>
                <button onClick={()=>appsRef.current.scrollIntoView({behavior:'smooth'})
                }>Apps</button>
            </div>
        </section>
        <section className="webdevProjects" ref={projectsRef}>
            <h2>Projects</h2>
            <div className="webdevProject">
                <h3>JDSweb</h3>
                <Slider source='' slides={JDS}/>
                <p>This was my first big project. It is a website for my university's debate society.</p>
                <ul>
                    <strong>Skills Learned</strong>
                    <li>React Router</li>
                    <li>Cloudinary image hosting</li>
                    <li>User authentication</li>
                    <li>REST APIs with ExpressJS</li>
                    <li>CRUD operations with MongoDB</li>
                    <li>Hosting with Netlify and Render</li>
                </ul>
                <div style={{display:'flex', gap:'1rem', justifyContent:'center'}}>
                    <a href="https://jdsweb.netlify.app" target="_blank"><button>Visit Website</button></a>
                    <a href="https://github.com/JkuatDebates/jds-app" target="_blank"><button>View Github Frontend Repo</button></a>
                    <a href="https://github.com/JkuatDebates/JDSserver" target="_blank"><button>View Backend Repo</button></a>
                    
                </div>
            </div>
        </section>
        <section className="webdevApps" ref={appsRef}>
            <h2>Apps and Tools</h2>
            Select App<select>
                <option value=""></option>
                <option value="Unit Converter">
                    Unit Converter
                </option>
                <option value=""></option>
            </select>
        </section>
        </>
    );
}
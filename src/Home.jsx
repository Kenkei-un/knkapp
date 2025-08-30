import { FaDesktop } from "react-icons/fa";
import { IoPodium } from "react-icons/io5";
import { RxGear } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate=useNavigate();
    return(
        <>
        <section className="intro">
            <div>
                <h1>Hi, I'm Mwaniki</h1>
                <h4>Mechanical Engineer, Web Developer, Speaker & Writer</h4>
                <p>Solving problems through mechanical design, full stack web development and effective communication.</p>
            </div>
            <img src="ken.jpg" alt="profile picture" />
        </section>
        <section className="skillCards">
            <div className="skillCard">
                <RxGear size={40} className="icon"/>
                <strong>Mechanical Engineering</strong>
                <p>CAD, HVAC, Energy, Maintenance Engineering</p>
                <button onClick={()=>navigate('/CAD')}>View Designs</button>                 
            </div>
            <div className="skillCard">
                <FaDesktop size={40}  className="icon"/>
                <strong>Web Development</strong>
                <p>HTML, CSS, Javascript, MERN stack</p>
                <button onClick={()=>navigate('/webdev')}>View Work</button>                 
            </div>
            <div className="skillCard">
                <IoPodium size={40} className="icon"/>
                <strong>Speaking</strong>
                <p>Public Speaking, Debate</p>
                <button  onClick={()=>navigate('/speaking')}>View Accolades</button>                 
            </div>
        </section>
        <section className="samples">
            <h2>Featured Works</h2>
            <div className="projectCards">
                <div className="projectCard">
                    <h2>Electrical Enclosure</h2>
                    <video src="/projects/Electrical Enclosure.mp4" controls></video>
                    <p>CAD Skills</p>
                    <ul>
                        <li>Sheet Metal Tools: Flange, Vents, Forming Tools, Bends</li>
                        <li>Assembly</li>
                        <li>Animation</li>
                    </ul>
                    <button onClick={()=>navigate('/CAD')}>View More CAD designs</button>
                </div>
                <div className="projectCard">
                    <h2>JDS Web</h2>
                       <img src="/JDSscreens/Lhomepage.png" alt="jds" />        
                    <p>Features</p>
                    <ul>
                        <li>User Authentication</li>
                        <li>Quick loading via REACT</li>
                        <li>Intuintive User Experience-UI/UX optimization</li>
                    </ul>
                    <button  onClick={()=>navigate('/webdev')}>View More WebDev Projects</button>
                </div>
            </div>
        </section>
        </>
    );
}
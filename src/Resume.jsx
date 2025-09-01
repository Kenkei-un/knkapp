import { useRef, useState } from "react";
import Imageframe from "./Tools/Imageframe";

export default function Resume(){
    const [cat, setCat]=useState('General');
    const cats=['General','Engineering','Webdev'];
    const catRef=useRef(null);

    function catChange(){
        setCat(catRef.current.value);
    }
    function generalCV(){
        return(
            <>
            <div className="CVIntro">
                <h2>Profile</h2>
                <p>I am a graduate Mechanical Engineer with strong foundations in 3D modelling and HVAC systems with keen interest in MEP services. I'm additionally a full-stack developer and public speaker. I have a passion for solving real-world problems through mechanical design, intuitive web platforms and community engagement. </p>
            </div>
            <h2>Skills</h2>
            <div className="skills">
                <div className="cvCard">
                    <p><b>Engineering Skills</b></p>
                    <ul>
                        <li>SOLIDWORKS</li>
                        <li>AutoDesk Inventor</li>
                        <li>AutoCAD</li>
                        <li>Lathe Operations</li>
                        <li>HVAC load calculations</li>
                        <li>Arc Welding</li>
                    </ul>
                </div>
                <div className="cvCard">
                    <p><b>Tech Skills</b></p>
                    <ul>
                        <li>Microsoft Office</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>REACT</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MongoDB</li>
                        <li>Java OOP</li>
                    </ul>
                </div>
                <div className="cvCard">
                    <p><b>Soft Skills</b></p>
                    <ul>
                        <li>Public Speaking</li>
                        <li>Leadership</li>
                        <li>Debating</li>
                        <li>English (C2)</li>
                        <li>Spanish (A2)</li>
                    </ul>
                </div>
            </div>
            <div className="CVexperience">
                <h3>Work Experience</h3>
                <div className="xpCard">
                    <p>Jan 2024-March 2024</p>
                    <div>
                        <b>Jamboleo Auto Engineering Limited Attaché</b>
                        <ul>
                            <li>Repaired brake disks through tanning</li>
                            <li>Repaired cylinder blocks by sleeve replacement and vertical boring</li>
                            <li>Repaired crank shafts through grinding</li>
                            <li>Repaired cylinder heads through facing operations</li>
                            <li>Replaced shaft bearings</li>
                        </ul>
                    </div>
                    <p>Jan 2023-Mar 2023</p>
                    <div>
                        <b>Refnet Air Conditioning East Africa Limited Attaché</b>
                        <ul>
                            <li>Surveyed sites for AC installation</li>
                            <li>Perfomed load calculations for AC system selections</li>
                            <li>Fabricated louvres and diffusers for a distributed duct system</li>
                            <li>Assisted in system selection for comfort AC applications</li>
                            <li>Installed AC systems alonside company technicians</li>
                            <li>Conducted regular preventive maintenance for clients with servicing contracts with the company</li>
                            <li>Conducted Corrective Maintenance for AC systems</li>
                        </ul>
                    </div>
                    <p>Jan 2022- Mar 2022</p>
                    <div>
                        <b>Jomo Kenyatta University of Agriculture and Technology Attaché</b>
                        <ul>
                            <li>Made a plumb bob through machine shop operations: facing, tanning, taper tanning, boring and threading
                            </li>
                            <li>Made a wooden pattern for a steering wheel in carpentry workshop</li>
                            <li>Cast an alluminium steering wheel from aforementioned pattern by green sand casting in foundry worshop</li>
                            <li>Made one way and two way light switching electric circuits in electrical workshop</li>
                            <li>Made a latch plate lock assembly by flat metal cutting and welding</li>
                        </ul>
                    </div>
                <p>Feb 2019-June 2019</p>
                <div>
                    <b>Queen's Cyber Cafe</b><br />
                    <p style={{fontWeight:'normal',border:'none'}}>Taught the microsoft office suite (Computer Packages): Ms Word, Ms Excel, Ms Access, Ms Publisher, Ms Powerpoint</p>
                </div>
                </div>
                
            </div>
            <h3>Education and Training</h3>
            <div className="education">
                <div className="educard">
                    <p>Bsc. Mechanical Engineering</p>
                    <ul>
                        <li>Attended Jomo Kenyatta University of Agriculture and Technology</li>
                        <li>Joined Sep 2019</li>
                        <li>Final Year Project: <b>Design and Fabrication of Hybrid Eddy Current-Friction brake system</b></li>
                        <li>Graduated June 2025</li>
                        <li><b>Distinction: </b>Second Class Upper</li>
                    </ul>
                </div>
                <div className="educard">
                    <p>Web Development</p>
                    <ul>
                        <li>Started Feb 2025</li>
                        <li>Self study through Freecodecamp and youtube</li>
                        <li>Learned: HTML,CSS, Javascript, REACT, NodeJS/ExpressJS, MongoDB </li>
                    </ul>
                </div>
                <div className="educard">
                    <p>Kenya Certificate of Secondary Education</p>
                    <ul>
                        <li>Attended Nairobi School</li>
                        <li>Joined Jan 2015</li>
                        <li>Finished Nov 2025</li>
                        <li><b>Grade: </b>A-</li>
                    </ul>
                </div>
                <div className="educard">
                    <p>Kenya Certificate of Primary Education</p>
                    <ul>
                        <li>Attended Isegeretoto School</li>
                        <li>Joined Jan 2012</li>
                        <li>Finished Nov 2014</li>
                        <li><b>Marks: </b>424/500</li>
                    </ul>
                </div>
            </div>
            </>
        );
    }
    function engCV(){
        return(
            <>
            <div className="CVIntro">
                <h3>Profile</h3>
                <p>I am a graduate Mechanical Engineer with strong foundations in 3D modelling and HVAC systems with keen interest in MEP services. I have a passion for solving real-world problems through mechanical design, efficient communication and collaborations.</p>
            </div>
            <h2>Skills</h2>
            <div className="skills">
                <div className="cvCard">
                    <p><b>Engineering Skills</b></p>
                    <ul>
                        <li>SOLIDWORKS</li>
                        <li>AutoDesk Inventor</li>
                        <li>AutoCAD</li>
                        <li>Lathe Operations</li>
                        <li>HVAC load calculations</li>
                        <li>Arc Welding</li>
                    </ul>
                </div>
                <div className="cvCard">
                    <p><b>Tech Skills</b></p>
                    <ul>
                        <li>Microsoft Office</li>
                        <li>MERN stack web development</li>
                        <li>Java OOP</li>
                    </ul>
                </div>
                <div className="cvCard">
                    <p><b>Soft Skills</b></p>
                    <ul>
                        <li>Public Speaking</li>
                        <li>Leadership</li>
                        <li>Debating</li>
                        <li>English (C2)</li>
                        <li>Spanish (A2)</li>
                    </ul>
                </div>
            </div>
            <div className="CVexperience">
                <h3>Work Experience</h3>
                <div className="xpCard">
                    <p>Jan 2024-March 2024</p>
                    <div>
                        <b>Jamboleo Auto Engineering Limited Attaché</b>
                        <ul>
                            <li>Repaired brake disks through tanning</li>
                            <li>Repaired cylinder blocks by sleeve replacement and vertical boring</li>
                            <li>Repaired crank shafts through grinding</li>
                            <li>Repaired cylinder heads through facing operations</li>
                            <li>Replaced shaft bearings</li>
                        </ul>
                    </div>
                    <p>Jan 2023-Mar 2023</p>
                    <div>
                        <b>Refnet Air Conditioning East Africa Limited Attaché</b>
                        <ul>
                            <li>Surveyed sites for AC installation</li>
                            <li>Perfomed load calculations for AC system selections</li>
                            <li>Fabricated louvres and diffusers for a distributed duct system</li>
                            <li>Assisted in system selection for comfort AC applications</li>
                            <li>Installed AC systems alonside company technicians</li>
                            <li>Conducted regular preventive maintenance for clients with servicing contracts with the company</li>
                            <li>Conducted Corrective Maintenance for AC systems</li>
                        </ul>
                    </div>
                    <p>Jan 2022- Mar 2022</p>
                    <div>
                        <b>Jomo Kenyatta University of Agriculture and Technology Attaché</b>
                        <ul>
                            <li>Made a plumb bob through machine shop operations: facing, tanning, taper tanning, boring and threading
                            </li>
                            <li>Made a wooden pattern for a steering wheel in carpentry workshop</li>
                            <li>Cast an alluminium steering wheel from aforementioned pattern by green sand casting in foundry worshop</li>
                            <li>Made one way and two way light switching electric circuits in electrical workshop</li>
                            <li>Made a latch plate lock assembly by flat metal cutting and welding</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3>Education and Training</h3>
            <div className="education">
                <div className="educard">
                    <p>Bsc. Mechanical Engineering</p>
                    <ul>
                        <li>Attended Jomo Kenyatta University of Agriculture and Technology</li>
                        <li>Joined Sep 2019</li>
                        <li>Final Year Project: <b>Design and Fabrication of Hybrid Eddy Current-Friction brake system</b></li>
                        <li>Graduated June 2025</li>
                        <li><b>Distinction: </b>Second Class Upper</li>
                    </ul>
                </div>
                <div className="educard">
                    <p>Kenya Certificate of Secondary Education</p>
                    <ul>
                        <li>Attended Nairobi School</li>
                        <li>Joined Jan 2015</li>
                        <li>Finished Nov 2025</li>
                        <li><b>Grade: </b>A-</li>
                    </ul>
                </div>
                <div className="educard">
                    <p>Kenya Certificate of Primary Education</p>
                    <ul>
                        <li>Attended Isegeretoto School</li>
                        <li>Joined Jan 2012</li>
                        <li>Finished Nov 2014</li>
                        <li><b>Marks: </b>424/500</li>
                    </ul>
                </div>
            </div>
            </>
        );
    }
    function webdevCV(){
        return(
            <>
            <div className="CVIntro">
                <h3>Profile</h3>
                <p>I am a self-taught full-stack developer with a background in mechanical engineering. I have a passion for building intuitive, impactful web platforms. Skilled in MERN stack development, UI/UX design and deploying scalable applications. </p>
            </div>
            <h3>Skills</h3>
            <div className="skills">
                <div className="cvCard">
                    <p><b>Tech Skills</b></p>
                    <ul>
                        <li>Microsoft Office</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>REACT</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MongoDB</li>
                        <li>Java OOP</li>
                    </ul>
                </div>
                <div className="cvCard">
                    <p><b>Tools</b></p>
                    <ul>
                        <li>Github</li>
                        <li>VS Code</li>
                        <li>Netlify</li>
                        <li>Render</li>
                        <li>Cloudinary</li>
                    </ul>
                </div>
                <div className="cvCard">
                    <p><b>Soft Skills</b></p>
                    <ul>
                        <li>Public Speaking</li>
                        <li>Leadership</li>
                        <li>Debating</li>
                        <li>English C2</li>
                        <li>Spanish A2</li>
                    </ul>
                </div>
            </div>
            <div className="CVexperience">
                <h3>Projects</h3>
                <div className="xpCard">
                    <p>Debate Club Website</p>
                    <div>
                       <ul>
                        <li>Built and deployed a dynamic full stack website for the JKUAT Debate Society on Netlify and Render</li>
                       </ul>
                       <div style={{display:'flex', alignItems:'center'}}>
                            <a href="https://jdsweb.netlify.app" target="_blank"><button>Visit Website</button></a>
                            <a href="https://github.com/JkuatDebates/jds-app" target="_blank"><button>View Github Frontend Repo</button></a>
                            <a href="https://github.com/JkuatDebates/JDSserver" target="_blank"><button>View Backend Repo</button></a>
                        </div> 
                    </div>                 
                </div>
                <div className="xpCard">
                    <p>Portfolio Website</p>
                       <ul>
                        <li>Built fully responsive website to serve as my engineering, speaking and webdev portfolio</li>
                        <li>Deployed on netlify</li>
                       </ul>                  
                </div>
                
            </div>
            <h3>Education and Training</h3>
            <div className="education">
                <div className="educard">
                    <p>Bsc. Mechanical Engineering</p>
                    <ul>
                        <li>Attended Jomo Kenyatta University of Agriculture and Technology</li>
                        <li>Joined Sep 2019</li>
                        <li>Graduated June 2025</li>
                        <li><b>Distinction: </b>Second Class Upper</li>
                    </ul>
                </div>
                <div className="educard">
                    <p>Web Development</p>
                    <ul>
                        <li>Started Feb 2025</li>
                        <li>Self study through Freecodecamp and youtube</li>
                        <li>Learned: HTML,CSS, Javascript, REACT, NodeJS/ExpressJS, MongoDB</li>
                    </ul>
                </div>
                <div className="educard">
                    <p>Kenya Certificate of Secondary Education</p>
                    <ul>
                        <li>Attended Nairobi School</li>
                        <li>Joined Jan 2015</li>
                        <li>Finished Nov 2025</li>
                        <li><b>Grade: </b>A-</li>
                    </ul>
                </div>
                <div className="educard">
                    <p>Kenya Certificate of Primary Education</p>
                    <ul>
                        <li>Attended Isegeretoto School</li>
                        <li>Joined Jan 2012</li>
                        <li>Finished Nov 2014</li>
                        <li><b>Marks: </b>424/500</li>
                    </ul>
                </div>
            </div>
            </>
        );
    }
    return(<>
    <label style={{alignSelf:'center'}}>Filter 
        <select value={cat} ref={catRef} onChange={catChange}>
            {cats.map((c,i)=>
            <option key={i} value={c}>
                {c}
            </option>)}
        </select>
    </label>
    <section className="resumeIntro">  
        
        <div className="dp">
            <Imageframe image={'/ken.jpg'}/>
            <div className="dp2">
                <div>
                    <h2 style={{lineHeight:'0', fontWeight:'bold',fontSize:'1.5rem'}}>Keneth Paul Mwaniki</h2>
                    <p className="names">{cat!=='Webdev'?'Mechanical Engineer | Web dev | Speaker':'Web developer | Speaker'}</p>
                </div>
                <a href={cat==='General'?"/KenethMwanikiCV.pdf":cat==='Engineering'?"/KenethMwanikiCVEng.pdf":"/KenethMwanikiCVDev.pdf"} download={cat==='General'?"KenethMwanikiCV.pdf":cat==='Engineering'?"KenethMwanikiCVEng.pdf":"KenethMwanikiCVDev.pdf"}><button>Download</button></a>
            </div>
        </div>
    </section>
    <section className="resume">
        {cat==='General'? generalCV():cat==='Engineering'? engCV(): webdevCV()}
    </section>
    </>);
}
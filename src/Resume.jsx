import { useRef, useState } from "react";

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
                <h3>Profile</h3>
                <p>I am a graduate Mechanical Engineer with strong foundations in 3D modelling and HVAC systems with keen interest in MEP services. I'm additionally a full-stack developer and public speaker. I have a passion for solving real-world problems through mechanical design, intuitive web platforms and community engagement. </p>
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <p><b>Technical Skills</b></p>
                <ul>
                    <li>3D modelling in SOLIDWORKS and AutoDesk Inventor
                    </li>
                    <li>Lathe Operations: Tanning, Boring, Threading, Facing</li>
                    <li>2D CAD drawing in AutoCAD</li>
                    <li>HVAC load calculations and equipment selection</li>
                    <li>Microsoft Office: Ms Word, Ms Excel, Ms Access, Ms Publisher, Ms Powerpoint </li>
                    <li>Full Stack web development through HTML,CSS, Javascript, REACT, NodeJS/ExpressJS and MongoDB</li>
                    <li>Java OOP</li>
                    <li><b>Languages:</b> English (C2), Spanish (A2)</li>
                </ul>
                <p><b>Soft Skills</b></p>
                <ul>
                    <li>Public Speaking</li>
                    <li>Leadership</li>
                    <li>Debating</li>
                </ul>
            </div>
            <div className="CVeperience">
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
                    <b>Queen's Cyber Cafe</b>
                    <p>Taught the microsoft office suite (Computer Packages): Ms Word, Ms Excel, Ms Access, Ms Publisher, Ms Powerpoint</p>
                </div>
                </div>
                
            </div>
            <div className="education">
                <h3>Education and Training</h3>
                <div>
                    <b>Bsc. Mechanical Engineering</b>
                    <ul>
                        <li>Attended Jomo Kenyatta University of Agriculture and Technology</li>
                        <li>Joined Sep 2019</li>
                        <li>Final Year Project: <b>Design and Fabrication of Hybrid Eddy Current-Friction brake system</b></li>
                        <li>Graduated June 2025</li>
                        <li><b>Distinction: </b>Second Class Upper</li>
                    </ul>
                </div>
                <div>
                    <b>Web Development</b>
                    <ul>
                        <li>Started Feb 2025</li>
                        <li>Self study through Freecodecamp and youtube</li>
                        <li>Learned:<b> HTML,CSS, Javascript, REACT, NodeJS/ExpressJS, MongoDB</b></li>
                    </ul>
                </div>
                <div>
                    <b>Kenya Certificate of Secondary Education</b>
                    <ul>
                        <li>Attended Nairobi School</li>
                        <li>Joined Jan 2015</li>
                        <li>Finished Nov 2025</li>
                        <li><b>Grade: </b>A-</li>
                    </ul>
                </div>
                <div>
                    <b>Kenya Certificate of Primary Education</b>
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
            <div className="skills">
                <h3>Skills</h3>
                <p><b>Technical Skills</b></p>
                <ul>
                    <li>3D modelling in SOLIDWORKS and AutoDesk Inventor
                    </li>
                    <li>Lathe Operations: Tanning, Boring, Threading, Facing</li>
                    <li>2D CAD drawing in AutoCAD</li>
                    <li>HVAC load calculations and equipment selection</li>
                    <li>Microsoft Office: Ms Word, Ms Excel, Ms Access, Ms Publisher, Ms Powerpoint </li>
                    <li><b>Languages:</b> English (C2), Spanish (A2)</li>
                </ul>
                <p><b>Soft Skills</b></p>
                <ul>
                    <li>Public Speaking</li>
                    <li>Leadership</li>
                    <li>Debating</li>
                </ul>
            </div>
            <div className="CVeperience">
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
            <div className="education">
                <h3>Education and Training</h3>
                <div>
                    <b>Bsc. Mechanical Engineering</b>
                    <ul>
                        <li>Attended Jomo Kenyatta University of Agriculture and Technology</li>
                        <li>Joined Sep 2019</li>
                        <li>Final Year Project: <b>Design and Fabrication of Hybrid Eddy Current-Friction brake system</b></li>
                        <li>Graduated June 2025</li>
                        <li><b>Distinction: </b>Second Class Upper</li>
                    </ul>
                </div>
                <div>
                    <b>Kenya Certificate of Secondary Education</b>
                    <ul>
                        <li>Attended Nairobi School</li>
                        <li>Joined Jan 2015</li>
                        <li>Finished Nov 2025</li>
                        <li><b>Grade: </b>A-</li>
                    </ul>
                </div>
                <div>
                    <b>Kenya Certificate of Primary Education</b>
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
            <div className="skills">
                <h3>Skills</h3>
                <p><b>Technical Skills</b></p>
                <ul>
                    <li>Full Stack web development through HTML,CSS, Javascript, REACT, NodeJS/ExpressJS and MongoDB</li>
                    <li>Java OOP</li>
                    <li><b>Tools:</b> Git, Github, Netlify, Render, VS Code, Cloudinary</li>
                    <li>Microsoft Office: Ms Word, Ms Excel, Ms Access, Ms Publisher, Ms Powerpoint </li>
                    <li><b>Languages:</b> English (C2), Spanish (A2)</li>
                </ul>
                <p><b>Soft Skills</b></p>
                <ul>
                    <li>Public Speaking</li>
                    <li>Leadership</li>
                    <li>Debating</li>
                </ul>
            </div>
            <div className="CVeperience">
                <h3>Projects</h3>
                <div className="xpCard">
                    <p>2025</p>
                    <div>
                       <b>Freelance web developer- Remote</b>
                       <ul>
                        <li>Built and deployed a dynamic full stack website for the JKUAT Debate Society on Netlify and Render</li>
                        <li>Built fully responsive website to serve as my engineering, speaking and webdev portfolio</li>
                       </ul>
                    </div>
                                       
                </div>
                
            </div>
            <div className="education">
                <h3>Education and Training</h3>
                <div>
                    <b>Bsc. Mechanical Engineering</b>
                    <ul>
                        <li>Attended Jomo Kenyatta University of Agriculture and Technology</li>
                        <li>Joined Sep 2019</li>
                        <li>Graduated June 2025</li>
                        <li><b>Distinction: </b>Second Class Upper</li>
                    </ul>
                </div>
                <div>
                    <b>Web Development</b>
                    <ul>
                        <li>Started Feb 2025</li>
                        <li>Self study through Freecodecamp and youtube</li>
                        <li>Learned:<b> HTML,CSS, Javascript, REACT, NodeJS/ExpressJS, MongoDB</b></li>
                    </ul>
                </div>
                <div>
                    <b>Kenya Certificate of Secondary Education</b>
                    <ul>
                        <li>Attended Nairobi School</li>
                        <li>Joined Jan 2015</li>
                        <li>Finished Nov 2025</li>
                        <li><b>Grade: </b>A-</li>
                    </ul>
                </div>
                <div>
                    <b>Kenya Certificate of Primary Education</b>
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
    <section className="resumeIntro">
                <h2 style={{lineHeight:'0'}}>Keneth Paul Mwaniki</h2>
                <p>Mechanical Engineer | Web dev| Speaker</p>
        <label>Filter 
            <select value={cat} ref={catRef} onChange={catChange}>
                {cats.map((c,i)=>
                <option key={i} value={c}>
                    {c}
                </option>)}
            </select>
        </label>
        <button>Download resume</button>
    </section>
    <section className="resume">
        {cat==='General'? generalCV():cat==='Engineering'? engCV(): webdevCV()}
    </section>
    </>);
}
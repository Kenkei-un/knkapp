import Slider from "./Tools/Slider";

export default function CAD(){
    const spoon=[
        {image:'/projects/spoon.JPG', text:'CAD Spoon'},
        {image:'/projects/realSpoon.jpg', text:'Real Spoon'},
        {image:'/projects/spoon2D.JPG', text:'2D Drawing'}
    ];
    // const furniture=[
    //     {image:"/projects/Furniture/Sofa.JPG", text:'Sofa'},
    //     {image:"/projects/Furniture/Brass ringed table.JPG", text:'Table 1'},
    //     {image:"/projects/Furniture/Screw table.JPG", text:'Table 2'},
    //     {image:"/projects/Furniture/Table Assembly.JPG", text:'Table 3'},
    // ]
    return(
        <>
        <section className="CADintro">
            <h2>CAD Designs</h2>
            <p>The following CAD designs were made on SOLIDWORKS. I am familiar with SOLIDWORKS, AutoDesk Inventor and AutoCAD</p>
        </section>
        <section className="CADcards">
            <div className="CADcard">
                <div>
                <h3>Cast Iron Juicer</h3>
                <video src="/projects/CIJ Assembly.mp4" controls></video>
                </div>
                <div>
                    <strong>Skills</strong>
                    <ul>
                        <li>Reverse Engineering</li>
                        <li>Projection curves</li>
                        <li>Assembly with mates</li>
                        <li>Motion Study</li>
                    </ul>
                    <p>Inspired by Youtube shorts</p>
                </div>
            </div>
            <div className="CADcard">
                <div>
                <h3>Park bench-chair convertible</h3>
                <video src="/projects/Benchvertible.mp4" controls></video>
                </div>
                <div>
                    <strong>Skills</strong>
                    <ul>
                        <li>Reverse Engineering</li>
                        <li>Assembly with mates</li>
                        <li>Motion Study</li>
                    </ul>
                    <p>Inspired by an instagram reel</p>
                </div>
            </div>
            <div className="CADcard">
                <div>
                <h3>Electrical Enclosure</h3>
                <video src="/projects/Electrical Enclosure.mp4" controls></video>
                </div>
                <div>
                    <strong>Skills</strong>
                    <ul>
                        <li>Sheet Metal Tools: Flange, Vents, Forming Tools, Bends</li>
                        <li>Solidworks Toolbox</li>
                        <li>Assembly with mates</li>
                        <li>Motion Study</li>
                    </ul>
                </div>
            </div>
            <div className="CADcard">
                <div>
                <h3>Torch Reverse Engineering</h3>
                <video src="/projects/Torch Assembly.mp4" controls></video>
                </div>
                <div className="skills">
                    <strong>Skills</strong>
                    <ul>
                        <li>Reverse Engineering</li>
                        <li>Assembly with mates</li>
                        <li>Exploded View</li>
                        <li>Assign Material and appearance</li>
                        <li>Animation</li>
                        <li>Extrusion, Revolve, Fillet</li>
                        <li>Surface Modelling</li>
                    </ul>
                </div>
            </div>
            <div className="CADcard">
                <div>
                <h3>Fan Assembly</h3>
                <video src="/projects/Fan assembly.mp4" controls></video>
                </div>
                <div className="skills">
                    <strong>Skills</strong>
                    <ul>
                        <li>Assembly with mates</li>
                        <li>Assign Material and appearance</li>
                        <li>Extrusion, Revolve, Fillet, Sweep</li>
                        <li>Circular Pattern</li>
                        <li>Motion study: motor, contacts</li>
                    </ul>
                </div>
            </div>
            <div className="CADcard">
                <div>
                <h3>Gearbox Assembly</h3>
                <video src="/projects/Gearbox Assembly.mp4" controls></video>
                </div>
                <div className="skills">
                    <strong>Skills</strong>
                    <ul>
                        <li>Assembly with mates</li>
                        <li>SOLIDWORKS Toolbox</li>
                        <li>Exploded View</li>
                        <li>Motion study: motor, contacts</li>
                    </ul>
                </div>
            </div>
            {/* <div className="CADcard">
                <div>
                <h3>Furniture</h3>
                <Slider slides={furniture} source='CAD'/>
                </div>
                <div>
                    <strong>Skills</strong>
                    <ul>
                        <li>Surface Modelling</li>
                        <li>Lofting</li>
                        <li>Revolve</li>
                        <li>Adding Material</li>
                    </ul>
                </div>
            </div> */}
            <div className="CADcard">
                <div>
                <h3>Spoon</h3>
                <Slider slides={spoon} source='CAD'/>
                </div>
                <div>
                    <strong>Skills</strong>
                    <ul>
                        <li>Surface Modelling</li>
                        <li>2D drawing from 3D model</li>
                        <li>Dimensioning</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}
import { useState } from "react";
import Lightbox from "./Lightbox";

export default function Imageframe({image}){
    const [view,setView]=useState(false);
    return(
        <div className="frame">
            <Lightbox image={image} setView={setView} view={view}/>
            <img src={image} alt="image" onClick={()=>setView(!view)}/>
        </div>
    );
}
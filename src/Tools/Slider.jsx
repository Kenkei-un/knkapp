import { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import Lightbox from "./Lightbox";

export default function Slider({slides}){
    const [currentSlide,setCurrentSlide]=useState(0);
    const [view,setView]=useState(false);

    function prev(){
        if(currentSlide===0) setCurrentSlide(slides.length-1);
        else setCurrentSlide(currentSlide-1);
    }
    function next(){
        if(currentSlide>=slides.length-1) setCurrentSlide(0);
        else setCurrentSlide(currentSlide+1);
    }
    return(
        <>
        <div className="carousel">
            <Lightbox image={slides[currentSlide].image} view={view} setView={setView}/>
            <button onClick={prev}><FcPrevious/></button>
            <div>
            <img src={slides[currentSlide].image} alt="Slide" onClick={()=>setView(!view)}/>
            <div className="caption">{slides[currentSlide].text}</div>
            </div> 
            <button onClick={next}><FcNext/></button>         
        </div>
        </>
    );
}
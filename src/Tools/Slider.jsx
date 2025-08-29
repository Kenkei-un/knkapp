import { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import Lightbox from "./Lightbox";

export default function Slider({slides, source}){
    const [currentSlide,setCurrentSlide]=useState(0);
    const [currentImageSlide,setCurrentImageSlide]=useState(0);
    const [view,setView]=useState(false);

    function prev(){
        if(currentSlide===0) setCurrentSlide(slides.length-1);
        else setCurrentSlide(currentSlide-1);
    }
    function next(){
        if(currentSlide>=slides.length-1) setCurrentSlide(0);
        else setCurrentSlide(currentSlide+1);
    }
    function iprev(){
        if(currentImageSlide===0){
            if(currentSlide!==0)
                setCurrentImageSlide(slides[currentSlide-1].image.length-1);
            else setCurrentImageSlide(slides[slides.length-1].image.length-1);
            prev();
        }
        else setCurrentImageSlide(currentImageSlide-1);
    }
    function inext(){
        let l=slides[currentSlide].image.length;
        if(currentImageSlide===l-1){
            setCurrentImageSlide(0);
            next();
        }
        else if(currentImageSlide>=l-1) setCurrentImageSlide(0);
        else setCurrentImageSlide(currentImageSlide+1);
    }

    return(
        <>{
            source==='CAD'?
        <div className="carousel">
            
            <Lightbox image={slides[currentSlide].image} view={view} setView={setView}/>
            <button onClick={prev}><FcPrevious/></button>
            <div>
            <img src={slides[currentSlide].image} alt="Slide" onClick={()=>setView(!view)}/>
            <div className="caption">{slides[currentSlide].text}</div>
            </div> 
            <button onClick={next}><FcNext/></button>         
        </div>
        :<div className="carousel">
            <Lightbox image={slides[currentSlide].image[currentImageSlide]} view={view} setView={setView}/>
            <button onClick={iprev}><FcPrevious/></button>
            <div className="carouselImageFrame">
            <img src={slides[currentSlide].image[currentImageSlide]} alt="Slide" onClick={()=>setView(!view)}/>
            <div className="caption">{slides[currentSlide].text}</div>
            </div> 
            <button onClick={inext}><FcNext/></button>         
        </div>}
        </>
    );
}
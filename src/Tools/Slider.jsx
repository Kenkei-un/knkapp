import { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import Lightbox from "./Lightbox";

export default function Slider({slides, source}){
    const [currentSlide,setCurrentSlide]=useState(0);
    const [currentImageSlide,setCurrentImageSlide]=useState(0);
    const [view,setView]=useState(false);
    let startX=0;
    let endX=0;

    function handleTouchStart(e){
        startX=e.touches[0].clientX;
    }
    function handleTouchEnd(e){
        endX=e.changedTouches[0].clientX;
        swipe();
    }
    function handleMouseDown(e){
        startX=e.clientX;
    }
    function handleMouseUp(e){
        endX=e.clientX;
        swipe();
    }
    function swipe(){
        let l=endX-startX;
        if(source!=='CAD'){
            if(l>=30)
                inext();
            else if(l<=-30) iprev();
        }
        else{
            if(l>=30)
                next();
            else if(l<=-30) prev();
        }
    }
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
        <div className="carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            
            <Lightbox image={slides[currentSlide].image} view={view} setView={setView}/>
            <button onClick={prev}><FcPrevious/></button>

            {slides.map((im,index)=>{
                const active=index===currentSlide;   
                return(
                <div key={index} style={{display:active?'block':'none'}}>
                <img src={im.image} alt="Slide" onClick={()=>setView(!view)}/>
                <div className="caption">{im.text}</div>
                </div>)})
            }

            <button onClick={next}><FcNext/></button>         
        </div>
        :<div className="carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} >
            <Lightbox image={slides[currentSlide].image[currentImageSlide]} view={view} setView={setView}/>
            <button onClick={iprev}><FcPrevious/></button>
            {slides[currentSlide].image.map((im,index)=>{
                const active=index===currentImageSlide;   
                return(
                <div className="carouselImageFrame" key={index} style={{display:active?'flex':'none'}}>
                <img src={im} alt="Slide" onClick={()=>setView(!view)}/>
                <div className="caption">{slides[currentSlide].text}</div>
                </div>)})
            }
            <button onClick={inext}><FcNext/></button>         
        </div>}
        </>
    );
}

export default function Lightbox({image, view, setView}){

    function toggleView(){
        setView(!view);
    }

    return(
        <div className={view?"lightboxOn":"lightboxOff"} onClick={toggleView}>
            <img src={image} alt="image"style={{height:'auto', maxHeight:'90%', width:'auto', maxWidth:'90%',objectFit:"contain"}}/>
        </div>
    );
}
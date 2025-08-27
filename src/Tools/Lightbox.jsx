
export default function Lightbox({image, view, setView}){

    function toggleView(){
        setView(!view);
    }

    return(
        <div className={view?"lightboxOff":"lightboxOn"} onClick={toggleView}>
            <img src={image} alt="image"/>
        </div>
    );
}
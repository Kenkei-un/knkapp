
export default function Lightbox({image, view, setView}){

    function toggleView(){
        setView(!view);
    }

    return(
        <div className={view?"lightboxOn":"lightboxOff"} onClick={toggleView}>
            <img src={image} alt="image"/>
        </div>
    );
}
import comics from "../public/comics.js";
import ComicCard from "./ComicCard.jsx"

const AppComics = () => {
    const renderComics = () => {
        return comics.map((curElem) => {
            <ComicCard
            key = {curElem.id}
            title = {curElem.title}
            image = {curElem.thumb}
            />
        });
    };
    
return(
     <div className="main-middle">
            <div className="container">
                <div className="row"> {renderComics()}
                    </div>
                </div>
            </div>
)
};


export default AppComics;
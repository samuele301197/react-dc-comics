const ComicCard = ({title, image}) => {
    return(
        <div className="card">
            <img
             src={image || "https://placehold.co/400x400"}
            alt={`Immagine del ${title}`}/>
            <h4>{title}</h4>
        </div>
    );
};

export default ComicCard
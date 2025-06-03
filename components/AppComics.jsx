import comics from "../public/comics.js";

const AppComics = () => {
return(
     <div className="main-middle">
            <div className="container">
                <div className="row">
                  {comics.map((curElem) => (
                      <div className="card" key={curElem.id}>
                       <img src={curElem.thumb}
                        alt={curElem.title}/>
                       <h4>{curElem.title}</h4>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
)
};


export default AppComics;
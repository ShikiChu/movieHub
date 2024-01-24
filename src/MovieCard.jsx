import React from "react";  

const MovieCard = ({moiveObj}) => {
    return(
        <div className="movie">
            <div>
                <p>{moiveObj.Year}</p>
            </div>
            <div>
                <img src={moiveObj.Poster}
                    alt = {moiveObj.Title}                      
                />
            </div>
            <div>
                <span>{moiveObj.Type}</span>
                <h4>{moiveObj.Title}</h4>
            </div>

        </div>
    )
}

export default MovieCard;
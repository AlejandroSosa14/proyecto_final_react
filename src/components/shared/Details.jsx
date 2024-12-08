import { useEffect, useState } from "react";
import "../../css/Modal.css"
import { getMovieDetails } from "../../api/getMovies";
import VerticalSliderActors from "../Actors/SliderActors";

const Details = ({isOpen, onClose, movieDetails}) => {
    const [cast, setCast] = useState(null);

    useEffect(() => {
        getMovieDetails(movieDetails.id).then((data) => {
            setCast(data.cast);
        });
    });
    
    if (!isOpen) return null;
    return (
        <div className="modal-movies">
            <div className="info-movies">
                <div id="rate" className="detail-movie-information">
                    <h1>Puntuacion:</h1>
                    <h2>{movieDetails.vote_average} ⭐</h2>
                </div>
                <div className="detail-movie-information">
                    <img src={`https://image.tmdb.org/t/p/w500/` + movieDetails.backdrop_path} alt="" />
                </div>
                <div id="cast" className="detail-movie-information">
                    <h2>Reparto</h2>
                    {cast && (<VerticalSliderActors actors={cast} />)}
                </div>
            </div>
            <div>
                <h1>{movieDetails.title}</h1>
                <p>{movieDetails.overview}</p>
            </div>
            
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default Details;
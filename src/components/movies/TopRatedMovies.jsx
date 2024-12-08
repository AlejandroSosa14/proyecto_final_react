import { getTopRatedMovies } from "../../api/getMovies";
import {useState, useEffect} from 'react';
import Carousel from "../shared/Carousel";

const TopRatedMovies = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() =>  {
        getTopRatedMovies().then((data) => {
            setMovies(data.results);
        });
    }, []);

    return (
        <>
            <h1>Mejor Calificadas</h1>
            <Carousel items={movies} />
        </>
    );
}

export default TopRatedMovies;
import { getPopularMovies } from "../../api/getMovies";
import {useState, useEffect} from 'react';
import Carousel from "../shared/Carousel";

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() =>  {
        getPopularMovies().then((data) => {
            setMovies(data.results);
        });
    }, []);

    return (
        <>
            <h1>Peliculas Populares</h1>
            <Carousel
                items={movies}
            />
        </>
    );
}

export default PopularMovies;
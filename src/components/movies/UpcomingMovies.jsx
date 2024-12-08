import { getUpcomingMovies } from "../../api/getMovies";
import {useState, useEffect} from 'react';
import Carousel from "../shared/Carousel";

const UpcomingMovies = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() =>  {
        getUpcomingMovies().then((data) => {
            setMovies(data.results);
        });
    }, []);

    return (
        <>
            <h1>En Cartelera</h1>
            <Carousel items={movies} />
        </>
    );
}

export default UpcomingMovies;
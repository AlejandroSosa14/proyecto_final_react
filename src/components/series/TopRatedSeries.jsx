import { getTopRatedSeries } from "../../api/getSeries";
import {useState, useEffect} from 'react';
import Carousel from "../shared/Carousel";

const TopRatedSeries = () => {
    const [series, setSeries] = useState([]);
    
    useEffect(() =>  {
        getTopRatedSeries().then((data) => {
            setSeries(data.results);
        });
    }, []);

    return (
        <>
            <h1>Mejor Calificadas</h1>
            <Carousel items={series} />
        </>
    );
}

export default TopRatedSeries;
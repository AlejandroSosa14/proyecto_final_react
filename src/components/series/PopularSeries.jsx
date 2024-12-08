import { getPopularSeries } from '../../api/getSeries';
import {useState, useEffect} from 'react';
import Carousel from "../shared/Carousel";

const PopularSeries = () => {
    const [series, setSeries] = useState([]);
    
    useEffect(() =>  {
        getPopularSeries().then((data) => {
            setSeries(data.results);
        });
    }, []);

    return (
        <>
            <h1>Series Populares</h1>
            <Carousel items={series} />
        </>
    );
}

export default PopularSeries;
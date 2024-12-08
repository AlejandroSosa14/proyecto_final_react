import { getOnAirSeries } from "../../api/getSeries";
import {useState, useEffect} from 'react';
import Carousel from "../shared/Carousel";

const OnAirSeries = () => {
    const [series, setSeries] = useState([]);
    
    useEffect(() =>  {
        getOnAirSeries().then((data) => {
            setSeries(data.results);
        });
    }, []);

    return (
        <>
            <h1>En Streaming</h1>
            <Carousel items={series} />
        </>
    );
}

export default OnAirSeries;
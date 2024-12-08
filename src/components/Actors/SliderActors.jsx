import { useState } from 'react';
// import "../../css/VerticalCarousel.css";

const VerticalSliderActors = ({ actors }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === actors.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? actors.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <div
                className="carousel-container"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {actors.map((actor) => (
                    <div key={actor.id} className="carousel-slide">
                        <img src={`https://image.tmdb.org/t/p/w500/` + actor.profile_path}
                            alt={actor.name}
                            className='img-carousel'
                        />
                        <p>{actor.name}</p>
                    </div>
                ))}
            </div>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default VerticalSliderActors;
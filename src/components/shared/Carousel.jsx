import { useState } from 'react';
import "../../css/Carousel.css";
import Details from './Details';
import "../../css/Modal.css"

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleOnClickMovie = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    }


    return (
        <div className="carousel">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <div
                className="carousel-container"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {items.map((item) => (
                    <div key={item.id} className="carousel-slide">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/` + item.poster_path}
                            alt={item.title}
                            onClick={() => handleOnClickMovie(item)}
                        />
                        <h2>{item.title ?? item.name}</h2>
                    </div>
                ))}
            </div>
            <button className="next" onClick={nextSlide}>&#10095;</button>
            {showModal && selectedMovie && (
                    <Details
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                        movieDetails={selectedMovie}
                    />
                )}
        </div>
    );

};

export default Carousel;

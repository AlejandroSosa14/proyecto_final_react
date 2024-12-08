import { useState } from 'react';
import "../../css/Carousel.css";

const CarouselKnowFor = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
    

    return (
        <div className="carousel-details">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <div
                className="carousel-container-details"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {items.map((item) => (
                    <div key={item.id} className="carousel-slide">
                        <img src={`https://image.tmdb.org/t/p/w500/` + item.poster_path} />
                    </div>
                ))}
            </div>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );

};

export default CarouselKnowFor;

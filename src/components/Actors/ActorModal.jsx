import { useState, useEffect } from "react";
import { getActorDetails, getActorImages } from "../../api/getActors";
import ActorDetails from "./ActorDetails";
import ActorCarousel from "./ActorCarousel";
import CarouselKnowFor from "../movies/CarouselKnowFor";

const ActorModal = ({ isOpen, onClose, actorData }) => {
    const [actorDetails, setActorDetails] = useState(null);
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        getActorDetails(actorData.id).then((data) => {
            setActorDetails(data);
        });
    }, [actorData]);

    useEffect(() => {
        getActorImages(actorData.id).then((data) => {
            setImages(data.profiles);
        })
    })

    if (!isOpen) return null;

    return (
        <div className="modal">
            {images && <ActorCarousel items={images} />}
            <hr />
            <h1>{actorData.name}</h1>
            {actorDetails && <ActorDetails infoActor={actorDetails} />}
            <h2>Algunas de sus peliculas</h2>
            <CarouselKnowFor items={actorData.known_for} />
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default ActorModal;
import { getPopularActors } from '../../api/getActors';
import { useState, useEffect } from 'react';
import ListActors from './ListActors';
import ActorModal from './ActorModal';
import "../../css/Actors.css"
import "../../css/Modal.css"

const PopularActors = () => {
    const [actors, setActors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedActor, setSelectedActor] = useState(null);

    useEffect(() => {
        getPopularActors().then((data) => {
            setActors(data.results);
        });
    }, []);

    return (
        <>
            <h1>Actores Populares</h1>
            <div className="actor-mosaic">
                {actors.map((actor) => (
                    <ListActors
                        key={actor.id}
                        actorItem={actor}
                        onClick={() => {
                            setShowModal(true);
                            setSelectedActor(actor);
                        }}
                    />
                ))}
                {showModal && selectedActor && (
                    <ActorModal
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                        actorData={selectedActor}
                    />
                )}
            </div>
        </>
    );
}

export default PopularActors;
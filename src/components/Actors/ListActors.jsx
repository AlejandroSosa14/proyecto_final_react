
const ListActors = ({actorItem, onClick}) => {

    return (
        <div className="actor-card">
            <img
                src={`https://image.tmdb.org/t/p/w500/` + actorItem.profile_path}
                alt={actorItem.name} className="actor-image"
                onClick={onClick}
            />
            <h2>{actorItem.name}</h2>
        </div>
    );
}

export default ListActors;
const Card = ({personaje}) => {
    return (
        <div className="card">
          <span>Tu nombre es:</span>
          <h3>{personaje.name}</h3>
          <span>Tu apellido es:</span>
          <h2>{personaje.lastname}</h2>
        </div>
    );
};

export default Card;
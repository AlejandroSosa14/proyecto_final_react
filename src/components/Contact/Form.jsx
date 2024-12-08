const Form = ({handleOnSubmit, personaje, handleOnChange}) => {
    return (
        <form onSubmit={handleOnSubmit} className="formHero">
            <label htmlFor="name">Deja tu nombre: </label>
            <input onChange={handleOnChange} value={personaje.name} type="text" name="name" id="name" />
            <label htmlFor="lastname">Deja tu apellido: </label>
            <input onChange={handleOnChange} value={personaje.lastname} type="text" name="lastname" id="lastname" />
            <button type="submit">Agregar Personaje</button>
        </form>
    );
}

export default Form;
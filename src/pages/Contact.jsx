import Form from "../components/Contact/Form";
import Card from "../components/Contact/Card";
import { useState } from "react";

const Contact = () => {
    const [personaje, setPersonaje] = useState({
        name: "",
        lastname: "",
        submited: false
    });

    const handleOnChange = (event) => {
        const property = event.target.id;
        
        if (property === "name") {
            setPersonaje({
                ...personaje,
                name: event.target.value
            });
        }
        else {
            setPersonaje({
                ...personaje,
                lastname: event.target.value
            });
        }
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
        const validate = regex.test(personaje.name) && regex.test(personaje.lastname);
        if (!validate) alert("Revisa por favor los datos, solo se permiten carateres y espacios");
        else {
            setPersonaje({
                ...personaje,
                submited: true
            });
        }
    }

    return (
        <main>
            <div>
                <h1>Hola :D</h1>
                <h2>GRACIAS POR REVISAR ESTE EXAMEN!</h2>
                <h2>Cual es tu nombre?</h2>
                <h3>Podrias ponerme tu nombre y tu apellido</h3>
                <p>Por ejemplo, Alejandro --- Sosa</p>
                <Form
                    handleOnSubmit={handleOnSubmit}
                    personaje={personaje}
                    handleOnChange={handleOnChange}
                ></Form>
                <hr />
                {personaje.submited && <Card
                    personaje={personaje}
                />}
            </div>
        </main>
    )
}

export default Contact;
export const getPopularActors = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGI3YzEyM2MxODQzNjkwMzUxMTU1OGM1NjU2OTQ0ZiIsIm5iZiI6MTU4NjIyMjg1OC4yOCwic3ViIjoiNWU4YmQ3MGFhZDg3ZjcwMDE3NjljOTkyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.cJJFw03XE6VRgxSpUVqJcUcXcZIFrt7HcmjkH2bRl80'
            }
        };

        const response = fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options);
        const data = (await response).json();
        return data;
    } catch (error) {
        console.error("Error al obtener las peliculas populares: ", error);
    }
}

export const getActorDetails = async (id) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGI3YzEyM2MxODQzNjkwMzUxMTU1OGM1NjU2OTQ0ZiIsIm5iZiI6MTU4NjIyMjg1OC4yOCwic3ViIjoiNWU4YmQ3MGFhZDg3ZjcwMDE3NjljOTkyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.cJJFw03XE6VRgxSpUVqJcUcXcZIFrt7HcmjkH2bRl80'
            }
        };

        const response = fetch(`https://api.themoviedb.org/3/person/` + id + `?language=es-ES`, options);
        const data = (await response).json();
        return data;
    } catch (error) {
        console.error("Error al obtener las peliculas populares: ", error);
    }
}

//https://api.themoviedb.org/3/person/64/images
export const getActorImages = async (id) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGI3YzEyM2MxODQzNjkwMzUxMTU1OGM1NjU2OTQ0ZiIsIm5iZiI6MTU4NjIyMjg1OC4yOCwic3ViIjoiNWU4YmQ3MGFhZDg3ZjcwMDE3NjljOTkyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.cJJFw03XE6VRgxSpUVqJcUcXcZIFrt7HcmjkH2bRl80'
            }
        };

        const response = fetch(`https://api.themoviedb.org/3/person/` + id + `/images`, options);
        const data = (await response).json();
        return data;
    } catch (error) {
        console.error("Error al obtener las peliculas populares: ", error);
    }
}
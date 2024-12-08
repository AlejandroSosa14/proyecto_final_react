
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGI3YzEyM2MxODQzNjkwMzUxMTU1OGM1NjU2OTQ0ZiIsIm5iZiI6MTU4NjIyMjg1OC4yOCwic3ViIjoiNWU4YmQ3MGFhZDg3ZjcwMDE3NjljOTkyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.cJJFw03XE6VRgxSpUVqJcUcXcZIFrt7HcmjkH2bRl80'
    }
};

export const getPopularMovies = async () => {
    try {
        const response = fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1', options);
        const data = (await response).json();
        return data;
    } catch (error) {
        console.error("Error al obtener las peliculas populares: ", error);
    }
}

export const getTopRatedMovies = async () => {
    try {
        const response = fetch('https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1', options);
        const data = (await response).json();
        return data;
    } catch (error) {
        console.error("Error al obtener las peliculas reproduciendo ahora: ", error);
    }
}

export const getUpcomingMovies = async () => {
    try {
        const response = fetch('https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1', options);
        const data = (await response).json();
        return data;
    } catch (error) {
        console.error("Error al obtener las peliculas reproduciendo ahora: ", error);
    }
}

export const getMovieDetails = async (id) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=es-ES`;

        const response = fetch(url, options);
        const data = (await response).json();
        return data;
    } catch (error) {
        console.error("Error al obtener las peliculas reproduciendo ahora: ", error);
    }
}
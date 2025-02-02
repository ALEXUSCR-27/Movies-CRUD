import axios from "./axios"

export const create_registry = async (movie_attr) => {
    try{
        const response = await axios.post(`/create_registry`, movie_attr);
        return response;
    }
    catch(error) {
        console.log(error);
    }
}

export const get_registry = async () => {
    try {
        const response = await axios.post(`/get_registry`, {});
        return response.data;
    }
    catch(error) {
        console.log(error);
    }
}

export const delete_registry = async (movieID) => {
    try {
        const response = await axios.post(`/eliminarPelicula`, movieID);
        return response
    }
    catch(error) {
        console.error("ERROR => ", error)
    }
};

export const modify_registry = async (movieAttr) => {
    try {
        const response = await axios.post(`/modifyMovie`, movieAttr);
        return response
    }
    catch(error) {
        console.error("ERROR => ", error)
    }
};

export const filter_registry = async (movieAttr) => {
    try {
        const response = await axios.post(`/buscarpeliculas`, movieAttr);
        return response
    }
    catch(error) {
        console.error("ERROR => ", error)
    }
};
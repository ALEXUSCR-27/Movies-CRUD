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
import axios from "./axios"

// Funtion to use axios services to add a new movie
export const create_registry = async (movie_attr) => {
    try{
        const response = await axios.post(`/create_registry`, movie_attr);
        return response;
    }
    catch(error) {
        console.log(error);
    }
}

// Function to use axios services to get all the movies in db
export const get_registry = async () => {
    try {
        const response = await axios.post(`/get_registry`, {});
        return response.data;
    }
    catch(error) {
        console.log(error);
    }
}

// Function to use axios services to delete a movie
export const delete_registry = async (movieID) => {
    try {
        const response = await axios.post(`/delete_registry`, movieID);
        return response
    }
    catch(error) {
        console.error("ERROR => ", error)
    }
};

// Function to use axios services to modify a movie
export const modify_registry = async (movieAttr) => {
    try {
        const response = await axios.post(`/modify_registry`, movieAttr);
        return response
    }
    catch(error) {
        console.error("ERROR => ", error)
    }
};

// Function to use axios services to filter movies by attributes
export const filter_registry = async (movieAttr) => {
    try {
        const response = await axios.post(`/filter_registry`, movieAttr);
        return response
    }
    catch(error) {
        console.error("ERROR => ", error)
    }
};
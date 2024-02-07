import axios from "axios";

export { getAccess, postAccess }

async function getAccess({ filter, page = 1, limit = 12, typeFilter }) {
    try {
        const response = await axios.get(`https://energyflow.b.goit.study/api/${typeFilter}`, {
            params: {
                filter,
                page,
                limit,
            },
        })
        return response;
    }
    catch {
        console.error(error.message);
    }
}

async function postAccess({ userEmail, typeFilter }) {
    try {
        const response = await axios.post(`https://energyflow.b.goit.study/api/${typeFilter}`, userEmail);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}
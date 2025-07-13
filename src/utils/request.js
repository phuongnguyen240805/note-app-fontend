import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:3030/api/notes',
    headers: {
        'Content-Type': 'application/json',
    },
});

// get method config
const get = async (api, options = {}) => {
    try {
        const res = await request.get(api, options);

        return res.data;
    } catch (error) {
        throw new Error('loi gui get: ' + error.message);
    }
};

// post method config
const post = async (api, data = {}) => {
    try {
        return await request.post(api, data);
    } catch (error) {
        throw new Error('loi gui post: ' + error.message);
    }
};

// put method config
const put = async (api, data = {}) => {
    try {
        return await request.put(api, data);
    } catch (error) {
        throw new Error('loi gui put: ' + error.message);
    }
};

// patch method config
const patch = async (api, data = {}) => {
    try {
        return await request.patch(api, data);
    } catch (error) {
        throw new Error('loi gui patch: ' + error.message);
    }
};

// del method config
const del = async (api, config = {}) => {
    try {
        return await request.delete(api, config);
    } catch (error) {
        throw new Error('loi gui delete: ' + error.message);
    }
};

export { get, post, put, patch, del };
export default request;
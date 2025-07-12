import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:3030/api/notes',
    headers: {
        'Content-Type': 'application/json',
    },
});

// get method config
const get = async (api, options = {}) => {
    const res = await request.get(api, options);

    return res.data;
};

// post method config
const post = async (api, data = {}) => {
    return await request.post(api, data);
};

const put = async (api, data = {}) => {
    return await request.put(api, data);
};

const patch = async (api, data = {}) => {
    return await request.patch(api, data);
};

const del = async (api, config = {}) => {
    return await request.delete(api, config); // data thường truyền qua `config.data` nếu cần
};

export { get, post, put, patch, del };
export default request;
import * as request from "~/utils/request";

// get all config
const getNotes = async () => {
    try {
        return await request.get(`/`);
    } catch (error) {
        throw new Error('Lỗi không gửi được fetch: ' + error.message);
    }
};

// get config
const getNoteById = async (id) => {
    try {
        return await request.get(`/${id}`);
    } catch (error) {
        throw new Error('Lỗi không gửi được fetch: ' + error.message);
    }
};

// add config
const addNote = async (text) => {
    const addApi = '/';

    try {
        return await request.post(addApi, { text });
    } catch (error) {
        throw new Error('Lỗi không gửi được fetch: ' + error.message);
    }
};

// update config
const updateNote = async (id, text) => {
    const updateApi = `/${id}`;
    console.log(text)
    try {
        return await request.put(updateApi, { text });
    } catch (error) {
        throw new Error('Lỗi không gửi được fetch: ' + error.message);
    }
};

// patch config
const patchNote = async (id, patchData) => {
    const patchApi = `/${id}`;

    try {
        return await request.patch(patchApi, patchData);
    } catch (error) {
        throw new Error('Lỗi không gửi được fetch: ' + error.message);
    }
};

// delete config
const deleteNote = async (id, config) => {
    const deleteApi = `/${id}`;
    try {
        return await request.del(deleteApi, config);
    } catch (error) {
        throw new Error('Lỗi không gửi được fetch: ' + error.message);
    }
};


export { getNotes, getNoteById, addNote, updateNote, patchNote, deleteNote };
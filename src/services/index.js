import * as request from "~/utils/request";

// add config
const addNote = async (text) => {
    const addApi = '/add';

    try {
        return await request.post(addApi, { text });
    } catch (error) {
        throw new Error(error);
    }
};

// update config
const updateNote = async (id, updatedData) => {
    const updateApi = `/update/${id}`;

    try {
        return await request.put(updateApi, updatedData);
    } catch (error) {
        throw new Error(error);
    }
};

// patch config
const patchNote = async (id, patchData) => {
    const patchApi = `/patch/${id}`;

    try {
        return await request.patch(patchApi, patchData);
    } catch (error) {
        throw new Error(error);
    }
};

// delete config
const deleteNote = async (id) => {
    const deleteApi = `/delete/${id}`;

    try {
        return await request.del(deleteApi);
    } catch (error) {
        throw new Error(error);
    }
};


export { addNote, updateNote, patchNote, deleteNote };
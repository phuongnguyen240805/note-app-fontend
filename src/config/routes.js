const routes = {
    home: '/',
    addnote: '/addnote',
    update: '/update/:id',
    updateGenerator: (id) => `/update/${id}`,
};

export default routes;
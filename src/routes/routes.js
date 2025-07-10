import { HomePage, AddNotePage, UpdatePage } from "~/pages";
import { routes } from "~/config";

// public routes
const publicRoutes = [
    { path: routes.home, component: HomePage },
    { path: routes.addnote, component: AddNotePage },
    { path: routes.update, component: UpdatePage },
    // { path: '/search', component: SearchPage, layout: null },
    // { path: '/upload', component: UploadPage, layout: SubLayout },
];


// private routes
const privateRoutes = [
    // config routes
];

export { publicRoutes, privateRoutes };
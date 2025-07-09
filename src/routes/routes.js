import { HomePage, AboutPage } from "../pages"

// public routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    // { path: '/profile', component: ProfilePage },
    // { path: '/search', component: SearchPage, layout: null },
    // { path: '/upload', component: UploadPage, layout: SubLayout },
]


// private routes
const privateRoutes = [
    // config routes
]

export { publicRoutes, privateRoutes }
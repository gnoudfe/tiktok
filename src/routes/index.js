import Home from '../Pages/Home';
import Following from '../Pages/Following';
import Profile from '../Pages/Profile';
import Upload from '../Pages/Upload';
import HeaderOnly from '../Layout/HeaderOnly';
import routes from '../config/route';
import Live from '../Pages/Live';
import Details from '../Pages/Details/detail';
const publicRoutes = [
    {
        path: routes.home,
        component: Home,
    },
    {
        path: routes.following,
        component: Following,
    },
    {
        path: routes.profile,
        component: Profile,
        layout: null,
    },
    {
        path: routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routes.live,
        component: Live,
    },

    {
        path: routes.detail,
        component: Details,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

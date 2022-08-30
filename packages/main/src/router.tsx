import { RouteObject } from 'react-router-dom';
import Home from './pages/home';
import Sub1 from './pages/sub1';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/sub1',
        element: <Sub1 />,
    },
];

export default routes;
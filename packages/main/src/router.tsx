import { RouteObject } from 'react-router-dom';
import Home from './pages/home';
import Sub1 from './pages/sub1';
import Sub2 from './pages/sub2';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/sub1',
        element: <Sub1 />,
    },
    {
        path: '/sub2',
        element: <Sub2 />,
    },
];

export default routes;
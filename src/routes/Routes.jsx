import {
    createBrowserRouter
} from 'react-router-dom';
import Main from '../layouts/Main';
import Login from '../pages/Authentication/Login';
import Home from '../pages/Home';
import Register from '../pages/Authentication/Registration';
import Footer from '../components/Footer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                index:true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/registration',
                element:<Register></Register>
            },
            {
                path:'/footer',
                element:<Footer></Footer>
            }

        ]
    }
]);

export default router;
import {
    createBrowserRouter
} from 'react-router-dom';
import Main from '../layouts/Main';
import Login from '../pages/Authentication/Login';
import Home from '../pages/Home';
import Register from '../pages/Authentication/Registration';
import Footer from '../components/Footer';
import JobDetails from '../pages/JobDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                index:true,
                element: <Home></Home>,
                loader:() =>fetch(`${import.meta.env.VITE_API_URL}/jobs`),
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
            },
            {
                path:'/job/:id',
                element:<JobDetails></JobDetails>
            }

        ]
    }
]);

export default router;
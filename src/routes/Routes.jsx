import {
    createBrowserRouter
} from 'react-router-dom';
import Main from '../layouts/Main';
import Login from '../pages/Authentication/Login';
import Home from '../pages/Home';
import Register from '../pages/Authentication/Registration';
import Footer from '../components/Footer';
import JobDetails from '../pages/JobDetails';
import AddJob from '../pages/AddJob';
import ErrorPage from '../pages/ErrorPage';
import MyPostedJobs from '../pages/MyPostedJobs';
import UpdateJob from '../pages/UpdateJob';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<JobDetails></JobDetails>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<UpdateJob></UpdateJob>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path:'/add-job',
                element:<AddJob></AddJob>
            },
            {
                path:'/my-posted-jobs',
                element:<MyPostedJobs></MyPostedJobs>
            },
         

        ]
    }
]);

export default router;
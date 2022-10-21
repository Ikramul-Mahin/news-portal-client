import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Category from "../components/Main/Pages/Home/Category/Category";
import News from "../components/Main/Pages/Home/Category/News/News";
import Home from "../components/Main/Pages/Home/Home";
import Login from "../components/Main/Pages/Home/Login/Login";
import Register from "../components/Main/Pages/Home/Login/Register";
import TermsCondition from "../components/Main/Pages/Home/TermsCondition";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),

            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsCondition></TermsCondition>
            }
        ]
    }
]) 
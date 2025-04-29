import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Components/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<h1><HomeLayout/></h1>,
        children:[
            {
                path:'',
                element:<Navigate to='/category/01'></Navigate>
            },
            {
                path:'/category/:id',
                loader:({ params })=>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                ,
                element:<CategoryNews/>,
            },
        ]
        
    },
    {
        path:'/news/:id',
        element:<PrivateRoute>
                  <NewsDetails/>
            </PrivateRoute>,
        loader:(({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`))
    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element:<Login/>
                
            },
            {
                path:'/auth/register',
                element:<Register/>
            },
        ]
    },
    {
        path:'*',
        element:<h1>Error</h1>
    },

])

export default router;
import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";


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
        path:'/news',
        element:<h1>news layout</h1>
    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element:<h2>login</h2>
            },
            {
                path:'/auth/register',
                element:<h2>register</h2>
            },
        ]
    },
    {
        path:'*',
        element:<h1>Error</h1>
    },

])

export default router;
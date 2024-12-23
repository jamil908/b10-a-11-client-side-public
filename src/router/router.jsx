import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../Error/Error";
import Home from "../page/home/Home";
import Register from "../page/register/Register";
import Login from "../page/login/Login";
import PrivateRoute from "../page/private/PrivateRoute";
import MyQueries from "../page/myQueries/MyQueries";
import AddQuery from "../page/AddQuery/AddQuery";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/myQueries',
          element:<PrivateRoute><MyQueries></MyQueries></PrivateRoute>,
        },
        {
          path:'/addQueries',
          element:<PrivateRoute><AddQuery></AddQuery></PrivateRoute>,
        },
      ]
    },
  ]);
  export default router;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout.jsx';
import Home from './Home.jsx';
import SignUP from './SignUP.jsx';
import Login from './Login.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import Order from './Order.jsx';
import Profile from './Profile.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:"/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/order",
        element:<PrivateRoutes> <Order></Order></PrivateRoutes>   //private route  er bhitor rakhle j joto jai koruk login kora chara baki feature gula use ba dekhte parbe naa
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

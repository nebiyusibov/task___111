import {
    createBrowserRouter
} from "react-router-dom";
import Basket from "../pages/mainpages/Basket";
import Detail from "../pages/mainpages/Detail";
import MainLayout from "../layout/mainlayout/MainLayout";
import Home from "../pages/mainpages/Home";
import AdminLayout from "../layout/adminlayout/AdminLayout";
import AdminPanel from "../pages/adminpages/AdminPanel";
import Add from "../pages/adminpages/Add";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index:true,
                element: <Home></Home>,
            },
            {
                path: "Detail/:id",
                element: <Detail></Detail>,
            },
            {
                path: "Basket",
                element: <Basket></Basket>,
            }
        ]

    },
    {
        path: "/AdminPanel",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                index:true,
                element: <AdminPanel></AdminPanel>,
            },
            {
                path: "Add",
                element: <Add></Add>,
            }
        ]

    }
])
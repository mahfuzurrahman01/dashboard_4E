import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Client from "../Pages/Client";
import Dashboard from "../Pages/Dashboard";
import DashboardTwo from "../Pages/DashboardTwo";
import Folio from "../Pages/Folio";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/clients',
                element: <Client></Client>
            },
            {
                path: '/folio',
                element: <Folio></Folio>
            },

        ]
    },
    {
        path: '/dashboardTwo',
        element: <DashboardTwo></DashboardTwo>
    }
])
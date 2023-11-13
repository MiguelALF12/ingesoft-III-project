import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Auth/Login/Login";
import Admin from "./pages/Dashboard/Admin/Admin";
import Employee from "./pages/Dashboard/Employee/Employee";
import Incapacities from "./pages/Dashboard/Employee/Incapacities";
import Uploads from "./pages/Dashboard/Employee/Uploads";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        // errorElement: <ErrorPage />
        errorElement: <>ErrorPage</>
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin/dashboard",
        element: <Admin />,
    },
    {
        path: "/employee/dashboard",
        element: <Employee />,
        children: [
            {
                path: "incapacities",
                element: <Incapacities />,
            },
            {
                path: "uploads",
                element: <Uploads />,
            }
        ]
    },
])
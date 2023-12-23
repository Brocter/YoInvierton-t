import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./views/Register";
import LogIn from "./views/LogIn";
import Investments from "./views/Investments";
import Disclaimer from "./views/Disclaimer";
import Landing from "./views/Landing";
import Home from "./views/Home";
import Admin from "./views/Admin";
import UploadInvestments from "./views/AddInvestments";
import ChangePassword from "./views/ChangePassword";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "registro",
        element: <Register />,
      },
      {
        path: "iniciar-sesion",
        element: <LogIn />,
      },
      {
        path: "inversiones",
        element: <Investments />,
      },
      {
        path: "disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home/password",
        element: <ChangePassword />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "admin/cargar",
        element: <UploadInvestments />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='w-full h-full'>
    <RouterProvider router={router}>
    </RouterProvider>
  </div>
);

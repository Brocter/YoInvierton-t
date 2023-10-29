import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Register from "./views/Register";
import LogIn from "./views/LogIn";
import Investments from "./views/Investments";
import Disclaimer from "./views/Disclaimer";
import Landing from "./views/Landing";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router}>
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
    </RouterProvider>
  </div>
);

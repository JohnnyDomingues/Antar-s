import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginProvider } from "./context/LoginContext";

import Admin from "./pages/Layout/Admin";
import Login from "./pages/Login";
import Poster from "./pages/poster";
import User from "./pages/adminInterface/User";
import App from "./App";
import Layout from "./components/Layout"; // Assurez-vous que le chemin est correct

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Utilisation du Layout ici
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/posters",
        element: <Poster />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />, // Utilisez un layout si nécessaire pour la section admin
    children: [
      {
        path: "users",
        element: <User />, // Route pour la gestion des utilisateurs
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  </React.StrictMode>
);

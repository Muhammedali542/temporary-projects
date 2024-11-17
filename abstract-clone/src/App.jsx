import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import LandingPage from "./components/pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/submit",
        element: <p>Submit a request</p>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

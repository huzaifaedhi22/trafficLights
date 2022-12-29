import React from "react";
import DataPage from "./DataPage";
import "./App.css";
import LandingPage from "./LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/data-page",
      element: <DataPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;

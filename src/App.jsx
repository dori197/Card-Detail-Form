import React from 'react'
import Home from './pages/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CardDetail from './pages/card-detail';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/card-detail",
      element: <CardDetail />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;

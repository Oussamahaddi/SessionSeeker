import React from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Page404} from "./pages"
import Layout from './components/layout/Layout';
import routes from './routes';

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement : <Page404 />,
      children: routes
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;

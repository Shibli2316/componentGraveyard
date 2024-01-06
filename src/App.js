import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NotFoundPage from './pages/NotFoundPage';
import Home from './features/home/Home';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import TestingPage from './pages/TestingPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/productList",
    element: <ProductListPage/>
  },
  {
    path: "/product",
    element: <ProductPage/>
  },
  {
    path: "/test",
    element: <TestingPage/>
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

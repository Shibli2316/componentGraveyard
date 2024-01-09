import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NotFoundPage from './pages/NotFoundPage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import TestingPage from './pages/TestingPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DoodlePage from './pages/DoodlePage';
import AcrylicPage from './pages/AcrylicPage';
import LineArtPage from './pages/LineArtPage';
import MuralsPage from './pages/MuralsPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import TestimonialPage from './pages/TestimonialPage';
import Navbar from './features/navbar/Navbar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/productList",
    element: <ProductListPage/>
  },
  {
    path: "/navbar",
    element: <Navbar/>
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
    path: "/cart",
    element: <CartPage/>
  },
  {
    path: "/checkout",
    element: <CheckoutPage/>
  },
  {
    path: "/contact",
    element: <ContactPage/>
  },
  {
    path: "/doodle",
    element: <DoodlePage/>
  },
  {
    path: "/acrylic",
    element: <AcrylicPage/>
  },
  {
    path: "/lineart",
    element: <LineArtPage/>
  },
  {
    path: "/murals",
    element: <MuralsPage/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  },
  {
    path: "/event",
    element: <EventsPage/>
  },
  {
    path: "/testimonials",
    element: <TestimonialPage/>
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

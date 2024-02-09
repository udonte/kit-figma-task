import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import Footer from './components/Footer';
import Nav from "./components/Nav.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Nav />}>
        <Route index element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <RouterProvider router={router} /> */}
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

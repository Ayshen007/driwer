import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home /> }/>
          <Route path="/services" element={<Services /> }/>
          <Route path="/ServiceDetails/:id" element={<ServiceDetails/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home.page";
import "./App.css";
import { Contact } from "./pages/Contact/Contact.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="" element={} /> */}
            {/* <Route path="*" element={} /> */}
            {/* ^^ back up not found page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

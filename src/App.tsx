import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Home/Layout";
import Home from "./pages/Home/Home.page";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
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

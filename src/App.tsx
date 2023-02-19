import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home.page";
import "./App.css";
import GroupLessons from "./pages/GroupLessons/GroupLessons.page";
import PrivateLessons from "./pages/PrivateLessons/PrivateLessons.page";
import Contact from "./pages/Contact/Contact.page";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route
                            path="/group-lessons"
                            element={<GroupLessons />}
                        />
                        <Route
                            path="/private-lessons"
                            element={<PrivateLessons />}
                        />
                        <Route path="/contact" element={<Contact />} />
                        {/* <Route path="*" element={} /> */}
                        {/* ^^ back up not found page */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

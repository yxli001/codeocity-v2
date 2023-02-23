import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home.page";
import "./App.css";
<<<<<<< HEAD
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
=======
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
>>>>>>> 894a9b44f984e835b16d1e065578eb1fa0dc4e7d
}

export default App;

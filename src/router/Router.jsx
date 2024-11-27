// import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Profil from "../pages/Profil";
import Settings from "../pages/Settings";
import Community from "../pages/Community";
import Error404 from "../pages/Error404";

function Router() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil/:id" element={<Profil />} />
            <Route path="/settings/:id" element={<Settings />} />
            <Route path="/community/:id" element={<Community />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
      </BrowserRouter>
    )
  }

  export default Router
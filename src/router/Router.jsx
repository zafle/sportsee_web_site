// import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from '../layout/MainLayout/MainLayout'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import Settings from '../pages/Settings/Settings'
import Community from '../pages/Community/Community'
import Error404 from '../pages/Error404/Error404'

function Router() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Router

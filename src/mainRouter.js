import React from "react";
import { Routes, Route } from "react-router-dom"; // Quita BrowserRouter aquí
import LandingPage from "./index-Landing";
import App from "./App";

function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app" element={<App />} index/>
        </Routes>
    );
}

export default MainRouter;

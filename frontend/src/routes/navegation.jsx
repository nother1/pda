import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '../modules/login/login.jsx'


function Navegation() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                {/* <Route path="/register" element={<UserRegister />} />
                <Route path="/home/:uuid" element={<Home />} /> */}
            </Routes>
        </Router>
    );
}

export default Navegation;
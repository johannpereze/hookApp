import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { AboutScreen } from './components/09-useContext/AboutScreen';
import { LoginScreen } from './components/09-useContext/LoginScreen';
import { HomeScreen } from './components/09-useContext/HomeScreen';
import { NavBar } from './components/09-useContext/NavBar';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/about" element={<AboutScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path='*' element={<HomeScreen />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

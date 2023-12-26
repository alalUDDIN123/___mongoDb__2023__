// Routes.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import App from './App';
import RandomComponent from './RandomComponent';


const RoutesRouter = () => {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<App />} />
           
                <Route path="/random" element={<RandomComponent />} />
                
            </Routes>
        </Router>

    );
};

export default RoutesRouter;

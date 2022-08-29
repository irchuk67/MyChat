import React from "react";
import {Router, Route} from 'react-router-dom';
import './App.scss';
import LogIn from "./Components/LogIn/LogIn";
import history from "./history";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
    return (
        <div className="app">
            <Router history={history}>
                <Route path={'/'} component={LogIn}/>
                <ProtectedRoute/>
            </Router>

        </div>
    );
}


export default App;

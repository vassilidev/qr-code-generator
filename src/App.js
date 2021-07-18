import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>

            <Sidebar/>

            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;

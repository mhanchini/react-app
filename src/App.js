import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/dashboard";
import ProjectItem from "./components/project/projectItem";
import Header from "./components/layout/header";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import addProject from "./components/project/addProject";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/addProject" component={addProject}/>
                    {/*<header className="App-header">*/}
                    {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
                    {/*  /!*<p>*!/*/}
                    {/*  /!*  Edit <code>src/App.js</code> and save to reload.*!/*/}
                    {/*  /!*</p>*!/*/}
                    {/*  /!*<a*!/*/}
                    {/*  /!*  className="App-link"*!/*/}
                    {/*  /!*  href="https://reactjs.org"*!/*/}
                    {/*  /!*  target="_blank"*!/*/}
                    {/*  /!*  rel="noopener noreferrer"*!/*/}
                    {/*  /!*>*!/*/}
                    {/*  /!*  Learn React*!/*/}
                    {/*  /!*</a>*!/*/}
                    {/*</header>*/}
                </div>
            </Router>
        </Provider>
    );
}

export default App;

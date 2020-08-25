import React from "react";

import { Switch, Route } from "react-router-dom";
// import { useImmerReducer } from "use-immer";

import DispatchContext from "./context/DispatchContext";
import StateContext from "./context/StateContext";

import ChatComponent from "./components/chat-component/chat-component";
import ChatInput from "./components/chat-component/chat-input";
import LoginComponent from "./components/login/login";
import RegisterComponent from "./components/login_register-component/Register-component";
import HomePage from "./components/page/home-page.component";
import LandingPageComponent from "./components/page/LandingPage.component";

function App() {
    return (
        <Switch>
            <Route exact path="/landing-page">
                <LandingPageComponent />
            </Route>
            <Route exact path="/register">
                <RegisterComponent />
            </Route>
            <Route exact path="/login">
                <LoginComponent />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>

            <Route path="/home">
                <HomePage />
            </Route>
            <Route path="/chat/:name">
                <ChatComponent />
            </Route>
            <Route path="/test">
                <ChatInput />
            </Route>
        </Switch>
    );
}

export default App;

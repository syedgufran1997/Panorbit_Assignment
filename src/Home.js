import React from 'react';
import { Switch, Route } from "react-router-dom";
import AccountHome from "./components/AccountHomePage/AccountHome"
import MyAccount from "./components/MyAccount/MyAccount"

export const Home = () => {
    return (
        <div>

            <AccountHome />
            <MyAccount />            
        </div>
    );
}

export default function Routes() {
    return(
        <>
        <Switch>
                <Route path="/" exact component={AccountHome} />
                <Route path="/my_account" component={MyAccount} />
        </Switch>
        </>
    )
}
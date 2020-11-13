import React from 'react';
import { Switch, Route } from "react-router-dom";
import MyAccount from "../MyAccount/MyAccount"
import AccountHomePage from "../AccountHomePage/AccountHome"

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={AccountHomePage} />
                <Route path="/my_account" component={MyAccount} />
            </Switch>
        </div>
    );
}
 
 
export default Routes;
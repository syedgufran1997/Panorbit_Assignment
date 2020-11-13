import React,{useEffect,useState} from "react";
import MyAccount from "../MyAccount/MyAccount";
import accountstyles from "./account.module.css"

import { Switch, Route, Link } from "react-router-dom";

export function AccountHome () {

 const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://panorbit.in/api/users.json",{
        })
        .then(res => res.json())
        .then(data => {
                setData(data.users)
            })
            .catch(error => console.log(error))
    }, [])
    
    return (
        <div className={accountstyles.wrap}>
            <div className={accountstyles.contentWrapper}>
                <h2>Select an account</h2>
                <div className={accountstyles.accountWrapper}>
                    {data.map((item, index) => 
                        <div key={index} className={accountstyles.cardwrap} 
                         >
                            <img src={item.profilepicture} alt="example" />
                            <Link to="/my_account" >
                            <h3>{item.name}</h3>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
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
import React from "react";
import  Admin  from './pages/admin/admin'
import  Login  from './pages/login/login'
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";

export default class index extends  React.Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/" component={Admin}/>
                </Switch>
            </Router>
        )
    }
}
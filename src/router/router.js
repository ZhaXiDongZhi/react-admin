import React from "react";
import  Index  from './index'
import {HashRouter as Router,Route,Switch} from "react-router-dom";
export default class index extends  React.Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" component={Index}/>
                </Switch>
            </Router>
        )
    }
}
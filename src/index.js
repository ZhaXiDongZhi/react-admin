import React from "react";
import ReactDOM from "react-dom"
import  Index from "./pages/index.js"

export default class Indexs extends  React.Component {
    render(){
        return(
            <div>
                <Index></Index>
            </div>
        )
    }
}

ReactDOM.render(<Indexs/>,document.getElementById('root') );

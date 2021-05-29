import React,{ Component } from "react";
import connection from "./config-firebase";
import './form.css'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
        // this.logout = this.logout.bind(this);
    }
    logout(){
        connection.auth().signOut();
    }
    render(){
        return(
            <div id="container">
                <div class="form-wrap">
                <h1>Hi, You are now logged In</h1>
                <button type="submit" onClick={this.logout}>Logout</button>
            </div>
                
            </div>
        )
    }
}

export default Home;
import React,{ Component } from "react";
import connection from "./config-firebase";
import './form.css'
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email: "",
            password: "",
            place: "",
            location: "", 
        }

        this.handleChange = this.handleChange.bind(this);
        this.signin = this.signin.bind(this);
        this.signup = this.signup.bind(this);
    }



    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value,
        })
        console.log(e)
    }
    signin(event){
        event.preventDefault()
        connection.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((user)=>{
            console.log(user);
        })
        .catch((err)=>{
            this.signup()
            console.log(err);
        })
        this.render(
            
        )
    }
    signup(event){
        event.preventDefault();
        connection.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((user)=>{
            console.log(user)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div id="container">
                <div class="form-wrap">
                    <h1>Authentication</h1>
                    <form method="POST">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Your email" onChange={this.handleChange} value={this.state.email} />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Your password" onChange={this.handleChange} value={this.state.password} />
                    </div>
                        <button type="submit" class="btn" onClick={this.signin}>Sign in</button>
                        <button type="submit" class="btn" onClick={this.signup}>Sign up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
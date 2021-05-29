import React,{Component} from 'react'
import './App.css';
import connection from './config-firebase';
import Login from './Login';
import Home from './Home';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    connection.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({user});
      } else{
        this.setState({user:null})
      }
    })
  }

  render(){
    return (
      <div className="App">
        
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }
}


export default App;
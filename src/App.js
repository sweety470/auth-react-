import React,{useState} from 'react'
import './App.css';
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
var get=localStorage.getItem('email')

function App() {
  const [user,setLoginUser]=useState({
    // name:"",
    // email:"",
    // password:""
   
  })
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact  path="/">
            {/* {
              user && user._id ? <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser} />
            } */}

            {
              get ? <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser} />
            }

            </Route>
          <Route  exact path="/login">
            <Login setLoginUser={setLoginUser} /></Route>
          <Route exact path="/register"><Register /></Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;

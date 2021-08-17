import React,{useState} from 'react'
import './login.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Validator from "validator";

const Login=( {setLoginUser} )=>{
    const history=useHistory()
    const [user,setUser]=useState({
        email:"",
        password:""
        
    })
    const handleChange=e=>{
       
        const {name,value}=e.target
        console.log(name,value)
        setUser({
            ...user,
            [name]:value
        })
    }

    

    const login=()=>{
        
        
        axios.post('http://localhost:3001/login',user)
        
        .then(res=> {
            alert(res.data.message)
            setLoginUser(res.data.user)
            console.log('-----------',res.data.user.email);
            //alert(res.data.user.email)
            localStorage.setItem('email',res.data.user.email)
            history.push('/')
        
        })
    
    }
    return(
        <div className="login">
        {console.log(user)}
        <h1>LOGIN</h1>
        <input type="email" placeholder="Enter your Email" name="email"  value={user.email} onChange={handleChange}></input>
        <input type="password" placeholder="Enter your Password" name="password"  value={user.password} onChange={handleChange}></input>
        <div className="button" onClick={login}>Login</div>
        <div>or</div>
        <div className="button"onClick={()=>history.push('/register')} >Register</div>
        <ToastContainer />
    </div>

    ) 
}

export default Login
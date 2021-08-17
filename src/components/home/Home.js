import React,{useEffect} from 'react'
import './home.css'
import {Redirect, useHistory} from 'react-router-dom'
import { render } from '@testing-library/react';



const Home=({setLoginUser})=>{
    const history=useHistory()
   
    const logout = ()=>{
        localStorage.removeItem('email');
        setLoginUser({})
        history.push('/login')
       
        
    }

    return(
        <div className="homepage">
        <h1>Hello</h1>
        <div className="button" onClick={logout}>Logout</div>
    </div>

    ) 
}


export default Home
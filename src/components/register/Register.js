import React, { useState } from "react"
import "./register.css"
// import './spec.js'
import axios from "axios"
import { useHistory } from "react-router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Validator from "validator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash,faTimes,faCheck } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const history=useHistory()
    

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        console.log(e.target.value)
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const [show,setShow]=useState(false)
    const valid=(item,v_icon,inv_icon)=>{
        let text=document.querySelector(`#${item}`);
        text.style.opacity="1";

        let valid_icon=document.querySelector(`#${item} .${v_icon}`);
        valid_icon.style.opacity="1";

        let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
        invalid_icon.style.opacity = "0";
  
    }
    const invalid=(item,v_icon,inv_icon)=>{
        let text=document.querySelector(`#${item}`);
        text.style.opacity=".5";

        let valid_icon=document.querySelector(`#${item} .${v_icon}`);
        valid_icon.style.opacity="0";

        let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
        invalid_icon.style.opacity = "1";
    }
    
    const handleInputChange=e=>{
        const password=e.target.value;
        if(password.match(/[A-Z]/)!=null){
            valid('capital','faCheck','faTimes')
        }else{
            invalid('capital','faCheck','faTimes')
        }
        if(password.match(/[0-9]/)!=null){
            valid('num','faCheck','faTimes')
        }else{
            invalid('num','faCheck','faTimes')
        }
        if(password.match(/[!@#$%^&*]/)!=null){
            valid('char','faCheck','faTimes')
        }else{
            invalid('char','faCheck','faTimes')
        }
        if(password.length > 5){
            valid('more5','faCheck','faTimes')
        }else{
            invalid('more5','faCheck','faTimes')
        }
    }

    const handleShowHide=()=>{
        setShow(!show)
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
       
        if( name && email && password && (password === reEnterPassword)){
            // if(!Validator.isEmail(email)){
            //     toast.error("Please enter valid email");
            // }
            alert('posted')
            axios.post("http://localhost:3001/register", user)
            
            .then( res => {
                //alert(res.data.message)
                toast.success("Registered successfully")
                setTimeout(
                    function() {
                        history.push('/login')
                    }
                    .bind(this),
                    3000
                );
               
            })
        } else {
            alert("invalid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <ToastContainer />
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type={show ? "text" : "password"} name="password" value={user.password} placeholder="Your Password" onChange={ handleChange} onKeyUp={handleInputChange } className="password"></input>
           
            {show ? ( <FontAwesomeIcon icon={faEye} id="show_hide" onClick={handleShowHide}/>)
            :
            ( <FontAwesomeIcon icon={faEyeSlash} id="show_hide" onClick={handleShowHide}/>)}
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={()=> history.push('/login')}>Login</div>

           <div className="container">
            <p id="capital">
                <FontAwesomeIcon icon={faTimes} className="faTimes icon" />
                <FontAwesomeIcon icon={faCheck} className="faCheck icon"/>
                <span className="lights">Capital Letters</span>
            </p>

            <p id="num">
                <FontAwesomeIcon icon={faTimes} className="faTimes icon" />
                <FontAwesomeIcon icon={faCheck} className="faCheck icon"/>
                <span className="lights">Contains Numbers</span>
            </p>

            <p id="more5">
                <FontAwesomeIcon icon={faTimes} className="faTimes icon"/>
                <FontAwesomeIcon icon={faCheck} className="faCheck icon"/>
                <span className="lights">5 Characters</span>
            </p>

            <p id="char">
                <FontAwesomeIcon icon={faTimes} className="faTimes icon"/>
                <FontAwesomeIcon icon={faCheck} className="faCheck icon"/>
                <span className="lights">Special Character</span>
            </p>
            </div>

            
            
        </div>
    )
}

export default Register
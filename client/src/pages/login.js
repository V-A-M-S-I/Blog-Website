import '../css/LOGIN.css'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react';


function Login()
{
    const [user, setUser] = useState({
        email:"",
        password:"",
    })
    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit =() =>{
        axios.post("http://localhost:8080/login",user)
        .then(res => console.log(res))
    }

    return(
                  
        <div className="box">
            <div className="inner">
                <form >
                    
                    <div className='logo'>
                        <img src='https://saumya-mendiratta.github.io/Static-Blog-Website/blog-logo.png' alt="blog"></img>
                    </div>
                    
                    <div className="username">
                        <input type="email" placeholder="E-mail" name="email" value={user.email}  onChange={handleChange} required></input>
                    </div>
                    <div className="psw">
                        <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} required></input>
                    </div>
                    <div className="sign">
                        <input type="submit" className='login' value="Sign In" onClick={handleSubmit} ></input>
                    </div>
                    <Link to='/login' className='forgot'>Forgot Password?</Link>
                    <Link to='/signup' className='register'>Sign Up</Link>
                </form>
            </div>
        </div>
    );
}
 
export default Login;
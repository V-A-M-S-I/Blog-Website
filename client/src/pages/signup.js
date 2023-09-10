import '../css/SIGNUP.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
function Sign()
{
    
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit = () =>{
        const {name, email, password, reEnterPassword } = user
        if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:8080/signup",user)
            .then(res => console.log(res))
        }else{
            alert("invalid input")
        }
        
    }
    

        
    
    
    return(
        <div className="box1">
            <div className="inner1">
                <form>
                    <div className='logo1'>
                        <img src='https://saumya-mendiratta.github.io/Static-Blog-Website/blog-logo.png' alt="blog"></img>
                    </div>
                    
                    <div className="username1">
                        <input type="text" placeholder="Username" name="name" value={user.name} id="vamsi" onChange={handleChange} ></input>
                        <span id="names"></span>
                    </div>
                    <div className="mail">
                        <input type="email" placeholder="E-mail address" name="email" value={user.email} id="ramesh" onChange={handleChange} ></input>
                        <span id="gmail"></span>
                    </div>
                    <div className="psw1">
                        <input type="password" placeholder="Password" name="password" value={user.password} id="devi" onChange={handleChange} ></input>
                        <span id="psw"></span>
                    </div>
                    <div className="psw1">
                        <input type="password" placeholder="Re-EnterPassword" name="reEnterPassword" value={user.reEnterPassword} id="harika" onChange={handleChange}></input>
                        <span id="repsw"></span>
                    </div>
                    <div className="sign1">
                        <input type="submit" className='login1' value="Sign Up" onClick={handleSubmit}></input>
                    </div>
                
                    <div className='hav'>
                        Have an account?<Link to='/login' className='forgot'>Sign In</Link>
                    </div>
                </form>
                
            </div>
        </div>
    );
}


export default Sign;
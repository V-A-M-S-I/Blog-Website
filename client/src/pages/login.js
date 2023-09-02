import '../css/LOGIN.css'
import { Link } from "react-router-dom"



function Login()
{
    return(
                  
        <div className="box">
            <div className="inner">
                <div className='logo'>
                    <img src='https://saumya-mendiratta.github.io/Static-Blog-Website/blog-logo.png' alt="blog"></img>
                </div>
                <div className="username">
                    <input type="email" placeholder="E-mail" required></input>
                </div>
                <div className="psw">
                    <input type="password" placeholder="Password" required></input>
                </div>
                <div className="sign">
                    <input type="submit" className='login' value="Sign In"></input>
                </div>
                <Link to='/login' className='forgot'>Forgot Password?</Link>
                <Link to='/signup' className='register'>Sign Up</Link>
            </div>
        </div>
    );
}
 
export default Login;
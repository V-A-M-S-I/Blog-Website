import '../css/SIGNUP.css'
import { Link } from 'react-router-dom';

function Sign()
{
    return(
        <div className="box1">
            <div className="inner1">
                <div className='logo1'>
                    <img src='https://saumya-mendiratta.github.io/Static-Blog-Website/blog-logo.png' alt="blog"></img>
                </div>
                <div className="username1">
                    <input type="text" placeholder="Username" required></input>
                </div>
                <div className="psw1">
                    <input type="password" placeholder="Password" required></input>
                </div>
                <div className="psw1">
                    <input type="password" placeholder="Confrim Password" required></input>
                </div>
                <div className="mail">
                    <input type="email" placeholder="E-mail address" required></input>
                </div>
                <div className="sign1">
                    <input type="submit" className='login1' value="Sign Up"></input>
                </div>
                <div className='hav'>
                    Have an account?<Link to='/login' className='forgot'>Sign In</Link>
                </div>
                
                
            </div>
        </div>
    );
}

export default Sign;
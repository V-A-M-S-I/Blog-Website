import '../css/MAIN.css'
import { Link } from 'react-router-dom';

function Main()
{
    
    return(
        <div className='outlock'>
                
                <ul>
                    <li className='vam'>BLOG</li>
                    <li className='si'>
                        <Link to='/login'>Sign In</Link>
                    </li>
                </ul>

                <h2>Publish Your Passions,Your Way</h2>
                <h4>Create a unique and beautiful blog easily</h4>
                <br></br>
                <Link to='/signup' className='vamsi'>CREATE YOUR BLOG</Link>
                
        </div>
    );
}

export default Main;
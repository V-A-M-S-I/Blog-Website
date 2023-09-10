import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/NAVBAR.css'
function Navbar()
{
    const [menuopen, setmenuopen] = useState(false);
       
    return(
        
            <nav>
                <Link to='/' className=" title">BLOG</Link>
                <div className="menu" onClick={()=>{
                    setmenuopen(!menuopen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                    <ul className={menuopen ? "open": ""}>
                        {/* <li>
                            <Link to='/signup'>Sign up</Link>
                        </li>
                        <li>
                            <Link to='/login'>Sign In</Link>
                        </li>
                        <li>
                            <Link to='/#'>About Us</Link>
                        </li> */}
                    </ul>
                    
             </nav>
            
       
        
    );
}


export default Navbar;
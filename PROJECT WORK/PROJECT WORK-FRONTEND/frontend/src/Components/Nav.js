import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <div>
            <img className='logo' src="https://media.geeksforgeeks.org/wp-content/uploads/20210511160813/g4g.jpg"/>
            {

                auth ?

            
            <ul className="nav-ul">
                <li><Link to ='/'>Products</Link></li>
                <li><Link to ='/add'>Add products</Link></li>
                <li><Link to ='/update'>Update Products</Link></li>
                <li><Link to ='/profile'>Profile</Link></li>
                <li><Link to ='/logout'>Logout</Link></li>                           
            </ul>
            :
            <ul className="nav-ul  nav-right">
                <li><Link to ='/signup'>Signup</Link></li>
                <li><Link to ='/login'>Login</Link></li>     
            </ul>
            
            
}
        </div>
        
    )}

    export default Nav;
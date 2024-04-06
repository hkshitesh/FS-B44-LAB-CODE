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
            <ul className="nav-ul">
                <li>Products</li>
                <li>Add products</li>
                <li>Update Products</li>
                <li>Profile</li>
                <li>Logout</li>                
            </ul>
        </div>
        
    )}

    export default Nav;
import React from 'react'
import logo from "../images/logo.svg"
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";




const Navbar = () => {

    return (
        
            <header>
                <nav>
                    <div className="navLeft">
                        <Link to='/' ><div className='logo' style={{ cursor: "pointer"}}>
                            <img src={logo} alt="logo" />
                        </div></Link>
                        <div className="navSearch">
                            <div className="search">
                                <input type="text" placeholder="Search"/>
                                <IoSearch />
                            </div>
                        
                        </div>
                    </div>
                    <div className="navRight">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/category">Category</NavLink>
                        <NavLink to="/cart">Cart 0</NavLink>
                       <NavLink to="/login"><button className='sign_in'>SIGN IN</button></NavLink>
                        <NavLink to="/signup"><button className='sign_up'>SIGN UP</button></NavLink>
                        

                    </div>
                </nav>
            </header>
        
    )
}

export default Navbar
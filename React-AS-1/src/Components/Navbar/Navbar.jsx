import React from 'react'
import "./Navbar.css"
import { NavLink,Link } from 'react-router-dom'



export default function Navbar() {
   
    return (
        <div id='nav'>
            <nav className="navbar navbar-expand-lg py-4 ">
                <div className="container">
                    <Link to={"start"} className="navbar-brand">start framework</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <NavLink to={"about"} className="nav-link  mt-3 mt-md-0 px-2" aria-current="page">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"portfolio"} className="nav-link mt-3 mt-md-0 px-2">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"contact"} className="nav-link mt-3 mt-md-0 px-2">contact</NavLink>
                            </li>
                            
                                
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    )
}

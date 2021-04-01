import React from 'react'
import { NavLink} from "react-router-dom"


function NavBar(){
    return(
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <span class="navbar-brand navName">Jose Espinoza</span>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav" text-align:right>
                    <li class="nav-item px-2">
                        <NavLink to="/contact"class="nav-link active" aria-current="page" >Contact</NavLink>
                    </li>
                    <li class="nav-item px-2">
                        <NavLink to="/portfolio" class="nav-link" >Portfolio</NavLink>
                    </li>
                    <li class="nav-item px-2">
                        <NavLink to="/index" class="nav-link" >About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    )
}
export default NavBar
import React from "react";
import '../Css/styles.css'

export default function NavBar() {
    return (
        <>
         <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
             <a className="navbar-brand ps-3" style={{color:'white'}}>EgyProSoft Admin</a>


            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
             
            </form>

            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        {/* <li><hr className="dropdown-divider" /></li> */}
                        <li><a className="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        </>
    );
}
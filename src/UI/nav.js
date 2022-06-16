import React, { useState } from "react";
import '../Css/styles.css'
import { NavLink } from "react-router-dom";

export default function NavBar() {

    const [pages, setPages] = useState([
        { name: 'Slider', link: '/slider', },
        { name: 'About', link: '/about', },
        { name: 'Offer', link: '/offer', },
        { name: 'Services', link: '/service', },
        { name: 'Project', link: '/project', },
        { name: 'Testmonials', link: '/testmonials', },
        { name: 'Partner', link: '/partner', },
    ])

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-block d-md-none d-flex">
                <a className="navbar-brand ps-3" style={{ color: 'white' }}>EgyProSoft Admin</a>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {
                            pages.map((e) => {
                                return (
                                    <NavLink className="nav-link" to={e.link} activeClassName>
                                        {/* <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div> */}
                                        {e.name}
                                    </NavLink>
                                );
                            })
                        }

                    </ul>
                </div>

                <button class="navbar-toggler form-inline  ml-auto " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>

            {/*  */}

            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark 	d-none d-sm-block ">
                <a className="navbar-brand ps-3" style={{ color: 'white' }}>EgyProSoft Admin</a>





            </nav>
        </>
    );
}
import React, { useState } from "react";
import '../Css/styles.css'
import { NavLink } from "react-router-dom";

export default function Side() {
    const [pages, setPages] = useState([
        { name: 'Slider', link: '/slider', },
        { name: 'About', link: '/about', },
        { name: 'Best Offer', link: '/offer', },
        { name: 'Services', link: '/service', },
        { name: 'Project', link: '/project', },
        { name: 'Testmonials', link: '/testmonials', },
        { name: 'Partner', link: '/partner', },
    ])
    return (
        <>
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        {/* <div className="sb-sidenav-menu-heading">Core</div>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </a> */}
                        <div className="sb-sidenav-menu-heading">Pages</div>

                        {
                            pages.map((e) => {
                                return (
                                    <NavLink className="nav-link" to={e.link} activeClassName>
                                        <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                        {e.name}
                                    </NavLink>
                                );
                            })
                        }



                    </div>
                </div>

            </nav>
        </>
    );
}
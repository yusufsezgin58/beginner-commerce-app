import React from "react";
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import github from '../img/icons8-github-100.png'

function Layout() {
    return (
        <header className="all">
            <div className="header">
                <div>
                    <a href="https://github.com/yusufsezgin58" target='_blank'>
                        <img src={github}/>
                    </a>
                </div>
                <div className="links">
                    <ul>
                        <li><Link className="text-dark rounded text-decoration-none fs-5" to='/add'>ADMIN</Link></li>
                        <li><Link className="text-dark text-decoration-none fs-5" to='/show'>PRODUCTS</Link></li>
                    </ul>
                </div>
            </div>

            <Outlet />
        </header>
    )
}

export default Layout;
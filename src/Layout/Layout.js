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
                        <li><Link className="btn btn-light px-3 py-2" to='/add'>ADMIN</Link></li>
                        <li><Link className="btn btn-light px-3 py-2" to='/show'>PRODUCTS</Link></li>
                    </ul>
                </div>
            </div>

            <Outlet />
        </header>
    )
}

export default Layout;
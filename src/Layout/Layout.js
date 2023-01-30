import React from "react";
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import github from '../img/icons8-github-100.png'
import { Button, ButtonGroup } from '@chakra-ui/react'

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

                        <Button colorScheme='teal' className="button"><Link className="px-3 py-2" to='/add'>Admin</Link></Button>
                        <Button colorScheme="teal" className="button"><Link className="px-3 py-2" to='/show'>Products</Link></Button>
                        <Button colorScheme="teal" className="button"><Link to='/box' className="px-3 py-2">BOX</Link></Button>
                    </ul>
                </div>
            </div>

            <div className="text bg-success"><span>This project developed by </span><a href="https://github.com/yusufsezgin58" target='_blank'>Yusuf Sezgin</a></div>
            <Outlet />
        </header>
    )
}

export default Layout;
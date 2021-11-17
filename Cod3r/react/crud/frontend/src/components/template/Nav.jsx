import './Nav.css'
import React from 'react'
import NavItem from './NavItem'
export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home">
                Home
            </NavItem>
            <NavItem href="users" icon="users">
                Usuários
            </NavItem>
        </nav>
    </aside>
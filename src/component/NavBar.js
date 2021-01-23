import React from 'react'
import { NavLink } from 'react-router-dom'

const links = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6 px',
    background: 'green',
    textDecoration: 'none',
    color: "white"

}

const NavBar = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={links}
                activeStyle={{
                    background: 'dark blue'
                }}
                >Home
            </NavLink>
            <NavLink  to="/adventures"
                exact
                style={links}
                activeStyle={{
                    background: 'dark blue'
                }}
                >Adventures
            </NavLink>
            <NavLink
                 to="/about"
                 exact
                 style={links}
                 activeStyle={{
                     background: 'dark blue'
                 }} 
            >
                About
            </NavLink>
            <NavLink
                 to="/contact"
                 exact
                 style={links}
                 activeStyle={{
                     background: 'dark blue'
                 }}
            >
                Contact
            </NavLink>
            <NavLink
                 to="/link"
                 exact
                 style={links}
                 activeStyle={{
                     background: 'dark blue'
                 }}
            >
                Link
            </NavLink>
        </div>
    )
}

export default NavBar
import React from "react";
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="snake">Snake Game</NavLink>
        </nav>
    )
}

export default Nav;
import React from 'react';
import { NavLink } from "react-router-dom";

const WelcomeScreen = () => {
    return (
        <div>
            <NavLink to='/music'>
                Music
            </NavLink>
            <NavLink to='/corporate'>
                Corporate
            </NavLink>
        </div>
    )
}

export default WelcomeScreen

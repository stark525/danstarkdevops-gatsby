import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Dan Stark</h1>
        <p>Cloud Architecture and Development</p>
    </header>
)

export default Header

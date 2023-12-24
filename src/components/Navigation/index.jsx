import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {

    const hideNavbar = useState(true)

    window.onscroll = () => {
        let { scrollX, scrollY } = window

        const { innerHeight, innerWidth } = window
        scrollX = Math.floor(scrollX)
        scrollY = Math.floor(scrollY)

        const perScrollX = Math.floor((scrollX / innerWidth) * 100);
        const perScrollY = Math.floor((scrollY / innerHeight) * 100);

        console.log(perScrollX, perScrollY);
    }

    return (
        <div className="navigation-container">
            <div className="logo-container">
                <img src="#" alt="LOGO" />
            </div>
            <div className="navigation-wrapper">
                <div className="navigation">
                    <Link to={''}>outreach</Link>
                    <Link to={''}>resume</Link>
                    <Link to={''}>portfolio</Link>
                    <Link to={''}>contact</Link>
                </div>
            </div>
        </div>
    )
}

const Navigation = () => {
    return (
        window.scrollY > 100
            ? MainNav()
            : null
    )
}

export default Navigation
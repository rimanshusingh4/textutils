import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  const {Mode,toGoggle}=props;
    return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link"  to="/about">About</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li> */}
                </ul>
                <div className={`form-check form-switch text-${Mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={toGoggle} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                </div>
            </div>
        </div>
    </nav>
    </>
    )
}
Navbar.propTypes = {title:PropTypes.string,
                    usefulLink: PropTypes.string
                }
Navbar.defaultProps ={title:'Set title here',
                        usefulLink: 'set link here'
}
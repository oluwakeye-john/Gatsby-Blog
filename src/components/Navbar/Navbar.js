import React from "react";
import './Navbar.scss'
import {Link} from 'gatsby'

export default ({title}) => (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top ">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand">Gatsby</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto"  data-toggle="collapse" data-target=".navbar-collapse.show">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'about'} className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <Link to={'/tags'} className="nav-link" href="#">Tags</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={ (e) => e.preventDefault()}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
)
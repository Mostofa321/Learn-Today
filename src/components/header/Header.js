import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white  py-3 fixed-top ">
            <div className="container-fluid justify-content-between">
                <div>
                    <a className="navbar-brand fs-1 fw-semibold ps-5" href="#">Quiz Test</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 pe-5">
                        <li className="nav-item">
                            <Link to='/topics' className="nav-link" aria-current="page">Topics</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/statistics' className="nav-link mx-3">Statistics</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/blog' className="nav-link mx-3">Blog</Link>
                            {/* <a className="nav-link mx-3" href="#">Blog</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
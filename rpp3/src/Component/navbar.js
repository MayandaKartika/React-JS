import React from 'react';
import {Link} from "react-router-dom";
import logo from '../Images/leaf.png';

class Navbar extends React.Component{
    render() {
        return(
        <div>
            <div className="navbar navbar-expand-lg bg-light navbar-light">
                <div className="container">
                <a className="navbar-brand" href="#"><img alt="logo" src={logo} width="35" height="35"/> Adiwiyata </a>
                {/*Show And Hide Menu */}
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    {/*Menu */}
                    <div id="navbarNav" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Gallery" className="nav-link">
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/HariBesar" className="nav-link">
                                    BigDay
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Navbar;
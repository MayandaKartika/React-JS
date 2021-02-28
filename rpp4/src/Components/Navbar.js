import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg bg-info navbar-light">
                <a className="navbar-brand" href="#">
                    Single Page Application
                </a>

                {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse"
                data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* menu */}
                <div id="menu" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bigday" className="nav-link">
                                BigDay
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">
                                Product
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;
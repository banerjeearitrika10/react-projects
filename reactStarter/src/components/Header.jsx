import { useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
    const [btnName , setbtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo d-flex align-items-center">
                <img src={logo} alt="" width="50" height="50" className="mr-2"/>
                <h3 className="ml-2">Foodvita</h3>
            </div>
            
            <div className="nav align-items-center">
                <ul className="mb-0">
                   <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>
                        About
                    </NavLink>
                    </li>
                    <li>Contact</li>
                    <li><button className="login" onClick={()=>{btnName === "Login"? setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
};
export default Header;
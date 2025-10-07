
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg'
import './Header.css';

function Header() {
    return (
        <div className="header">
        <ul>
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
        <li>
          <NavLink to="/Form" className={({ isActive }) => (isActive ? 'active' : '')}>
            Form
          </NavLink>
        </li>

        </ul>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
       );
};

export default Header;
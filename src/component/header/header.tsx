import { NavLink } from 'react-router-dom';
import './index.css';

function Header() {

    return (<>
        <header className="header">
            <nav>
                <div className="logo">
                    <NavLink to={'/'}>sample</NavLink>
                </div>
                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
                <ul className="menu">
                    <li> <NavLink to={'/'} >Resource</NavLink></li>
                    <li><NavLink to={'/Application'}>Application</NavLink></li>
                </ul>
            </nav>
        </header></>);
}

export default Header;
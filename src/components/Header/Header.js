import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './Header.css'
 
function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to="/" className='navbar-brand'>Accounts App</Link>
    <ul className='navbar-nav ml-auto'>
        <NavLink activeClassName={'activeLink'} exact to="/" className='nav-link'>Accounts</NavLink>
        <NavLink activeClassName={'activeLink'}  to="/add" className='nav-link'>Add Accounts</NavLink>
        <NavLink activeClassName={'activeLink'}  to="/edit" className='nav-link'>Edit/Delete Accounts</NavLink>
    </ul>
    </nav>
  )
}

export default Header
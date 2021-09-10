import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props: { name: string, setName: (name: string) => void }) => {

    const logout = async () => {
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });

      props.setName('');
    }

    let menu;

    if(props.name === ''){
        menu = (
          <div className="collapse navbar-collapse" id="navbarCollapse">

            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <Link to="/" className="nav-link active">Home</Link>
                </li>
            </ul>


            <form>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link to="/login" className="nav-link active">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link active">Register</Link>
                </li>
            </ul>
            </form>
          </div>
        );
    }else {
        menu = (
          
          <div className="collapse navbar-collapse" id="navbarCollapse">

            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/assetentry" className="nav-link">Asset Entry</Link>
                </li>
            </ul>


            <form>
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link to="/login" className="nav-link active" onClick={logout}>Logout</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">{props.name}</a>
                </li>
              </ul>
            </form>
          </div>
        );
    };
  
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <div className="container-fluid">
              {menu}
          </div>
        </nav>
    );
};

export default Nav;
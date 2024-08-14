import React from 'react'
import logo from "../logo.svg";
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className={`header ${props.mode}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              {/* <Link className="navbar-brand" to="/">{" "}<img src={logo} className="App-logo" alt="logo" /></Link> */}
              <a className="navbar-brand" href="/"><img src={logo} className="App-logo" alt="logo" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"aria-label="Toggle navigation">                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    {/* <Link className="nav-link" aria-current="page" to="/aboutus">About</Link> */}
                    <a className="nav-link" aria-current="page" href="/aboutus">About</a>
                  </li>
                  <li className="nav-item">
                    {/* <Link className="nav-link" to="/">{props.blogText}</Link> */}
                    <a className="nav-link" href="/">{props.blogText}</a>
                  </li>
                  <li className="nav-item dropdown">
                    {/* <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link> */}
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                    <ul className="dropdown-menu">
                      <li>
                        {/* <Link className="dropdown-item" to="/">Services Overview</Link> */}
                        <a className="dropdown-item" href="/">Services Overview</a>
                      </li>
                      <li>
                        {/* <Link className="dropdown-item" to="/">Hosting</Link> */}
                        <a className="dropdown-item" href="/">Hosting</a>
                      </li>
                      <li>
                        <hr className="dropdown-divider"/>
                      </li>
                      <li>
                        {/* <Link className="dropdown-item" to="/">Developing</Link> */}
                        <a className="dropdown-item" href="/">Developing</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    {/* <Link className="nav-link" to="/">Contact</Link> */}
                    <a className="nav-link" href="/">Contact</a>
                  </li>
                </ul>
                {/* <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form> */}
                <div className="form-check form-switch"  onClick={props.toggleMode}>
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
                </div>

              </div>
            </div>
          </nav>
        </div>
      </header>
  )
}
Header.propTypes = {
    blogText: PropTypes.string,
}
Header.defaultProps = {
    blogText: "Blog"
}
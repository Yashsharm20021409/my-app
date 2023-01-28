// Component file Name Must Be Start From Capital Letter Navbar(N is cap here)
import React from "react";
import PropTypes from "prop-types";

// Export kie h ki app.js me import krske
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable Dark Mode
              </label>
            </div>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

// agar hmne string ki jga number bhj to error milegi so be carefull about it
// this is basically the check to avoid any kind of mistake in future like by mistake you have send number insted of string about not able ot find what is wrong to avoid that kind of problem it is necessary
// isRequired means compulsary to send the props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// executed if any prop is not passed or sent from app.js to navbar.js
// Navbar.defaultProps = {title:"Yash",
//                       aboutText:"About Yash"};

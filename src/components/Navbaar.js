import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbaar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <a className="nav-link" href="/home">Home</a> */}
                        <a className="nav-link" href="#">Home</a>

          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
            <a className="nav-link" href="#">{props.aboutText}</a>

          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
      </div>
    </nav>
  )
}

Navbaar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

// Here are the default props when no data from properties of app.js navbee this will be by default set
Navbaar.defaultProps = {
  title: 'Set Title Here',
  // aboutText: 'Set About Here'
  aboutText: 'About Us'
}

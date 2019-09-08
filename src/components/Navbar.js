import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
import GabrielBrownLogo from '../img/GabrielBrown-Logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              aria-label="menu" aria-expanded="false"
              style={{
                marginLeft: '0',
                marginRight: 'auto',
              }}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
            <Link to="/" className="navbar-item" id="mobile-logo" title="Logo">
              <img src={GabrielBrownLogo} alt="Gabriel Brown" style={{ width: "40px", maxHeight: "100%" }} />
            </Link>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
            <a className="navbar-item"
                href="./img/gabrielbrown-cv.pdf"
                target="_blank"
                rel="noopener noreferrer">
                Resume
              </a>
              <Link className="navbar-item" activeClassName="is-active" to="/">
                Portfolio
              </Link>
              <Link className="navbar-item" activeClassName="is-active" to="/about">
                About
              </Link>
              <a className="navbar-item" 
                href="mailto:gabobrown.design@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                Contact
              </a>
            </div>
            <div className="navbar-end">
              <Link to="/" className="navbar-item" id="desktop-logo" title="Logo">
                <img src={GabrielBrownLogo} alt="Gabriel Brown" style={{ width: "40px", maxHeight: "100%" }} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

import React from 'react'
// import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="container"
            style={{
            borderTop: '1px solid #979797',
            }}
          >
            <div className="columns">
              <div className="column is-6">
                <p
                  className="subtitle is-7"
                >Made by 
                  <a
                    href="https://www.vmvargas.com/"
                    target="_blank"
                    rel="noopener noreferrer"                    
                  >
                  vmvargas.com
                  </a>
                </p>
              </div>
              <div className="column is-6 has-text-right">
                <p
                  className="subtitle is-7"
                >&copy; Copyright Gabriel Brown 2019</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

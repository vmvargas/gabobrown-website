import React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div
            className="container"
            style={{
              borderTop: "1px solid #979797",
              paddingTop: "14px",
            }}
          >
            <div className="columns is-mobile">
              <div className="column is-12 has-text-right">
                <p
                  style={{
                    fontSize: "12px",
                    color: "#000",
                  }}
                >
                  &copy; Gabriel Brown 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;

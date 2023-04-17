import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="www.google.com" className="navbar navbar-brand">
                Employee Management App
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

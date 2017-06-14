import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            Top Tennis Players
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a demo nodejs app with react components.
          </p>
        </footer>
      </div>
    );
  }
}
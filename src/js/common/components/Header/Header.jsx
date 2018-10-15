import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="globalHeader">
        <div className='headerItems'>
          <p>Homework</p>
          <p>ADD</p>
        </div>
      </header>
    );
  }
}

export default Header;

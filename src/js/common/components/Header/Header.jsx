import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import AddIcon from '../../../../assets/images/add.png';

import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="globalHeader">
        <div className='headerItems'>
          <p>Homework</p>
          <div className='add-icon'>
            <img src={AddIcon} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

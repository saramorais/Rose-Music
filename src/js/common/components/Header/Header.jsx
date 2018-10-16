import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { searchDisplay } from '../../../redux/actions';
import { connect } from 'react-redux';

import AddIcon from '../../../../assets/images/add.png';

import './Header.css';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    this.props.searchDisplay('show-search');
  }

  render() {
    return (
      <header className="globalHeader">
        <div className='headerItems'>
          <p>Homework</p>
          <div className='show-search' onClick={this.toggleSearch} >
            <img src={AddIcon} />
          </div>
        </div>
      </header>
    );
  }

}

export default connect(null, { searchDisplay })(Header);

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchAlbums } from '../../../redux/actions';

import './SearchBar.css';

class SearchBar extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      albums: []
    }
    this.changeTerm = this.changeTerm.bind(this);
  }
  
  changeTerm(e) {
    this.setState({ term: e.target.value });
    this.props.fetchAlbums(this.state.term);
  }

  render() {
    return (
      <div className='search-wrap'>
        <form className='search-form'>
          <input type="text" onChange={this.changeTerm} className='search-input' placeholder='search' />
        </form>
      </div>
    );
  }
}


export default connect(null, { fetchAlbums })(SearchBar);

import React, { PureComponent } from 'react';
import { SearchBar } from '../SearchBar/index';

import { Album } from '../Album/index';
import { SavedAlbums } from '../SavedAlbums/index';

import { saveAlbum } from '../../../redux/actions';

import { connect } from 'react-redux';

import AddIcon from '../../../../assets/images/add.png';

import './App.css';

class App extends PureComponent {

  constructor(props) {
    super(props);

    this.albumSave = this.albumSave.bind(this);
  }

  albumSave(album) {
    this.props.saveAlbum(album);
  }
  
  renderAlbums() {
    // console.log(this.props.result.saveAlbums);
    const { results } = this.props.result;
    if (results.length <= 0) {
      return <p className='center'>_</p>;
    } else {
      return results.map((result) => {
        return (
          <div key={result.collectionId} className='album-container'>
            <div className='album-result'>
              <Album album={result} />
            </div>
            <div className='add-album' onClick={() => this.albumSave(result)}>
              <img src={AddIcon} />
            </div>
          </div>
        )
      });

    }
  }
  

  render() {
    return (
      <div className='result'>
        <SearchBar />
        <div className='albums'>
          {this.renderAlbums()}
          <div className='button'>
            <button>DONE</button>
          </div>
        </div>
        <SavedAlbums />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    result: state.reducer
  };
};

export default connect(mapStateToProps, { saveAlbum })(App);

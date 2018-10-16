import React, { PureComponent } from 'react';
import { SearchBar } from '../SearchBar/index';
import { Album } from '../Album/index';
import { SavedAlbums } from '../SavedAlbums/index';
import { saveAlbum, searchDisplay } from '../../../redux/actions';
import { connect } from 'react-redux';
import AddIcon from '../../../../assets/images/add.png';
import './App.css';

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.albumSave = this.albumSave.bind(this);
    this.checkifSaved = this.checkifSaved.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
  }

  albumSave(album) {
    this.props.saveAlbum(album);
  }
  
  checkifSaved(res) {
    const saved = this.props.result.savedAlbums;
    const savedIds = saved.map((result) => { return result.collectionId; });
    for (let i = 0; i <= savedIds.length; i++) {
      if (res.collectionId === savedIds[i]) {
        return;
      }
    }
    return (
      <div className='add-album' onClick={() => this.albumSave(res)}>
        <img src={AddIcon} />
      </div>
    )
  }

  hideSearch() {
    this.props.searchDisplay('hide-search');
  }

  renderAlbums() {
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
            {this.checkifSaved(result)}
          </div>
        )
      });
    }
  }
  
  render() {
    return (
      <div className='result'>
        <div className={this.props.result.searchStatus}>
          <SearchBar />
          <div className='albums'>
            {this.renderAlbums()}
            <div className='button'>
              <button onClick={this.hideSearch}>DONE</button>
            </div>
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

export default connect(mapStateToProps, { saveAlbum, searchDisplay })(App);

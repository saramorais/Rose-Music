import React, { PureComponent } from 'react';
import './SavedAlbums.css';
import { Album } from '../Album/index';
import { connect } from 'react-redux';

class SavedAlbums extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      limit: 3
    }
    this.loadMore = this.loadMore.bind(this);
    this.showLoadBtn = this.showLoadBtn.bind(this);
  }

  loadMore() {
    this.setState({
      limit: this.state.limit + 3
    });
  }

  showLoadBtn() {
    if (this.props.result.length > this.state.limit) {
      return (
        <div className='button'>
          <button onClick={this.loadMore}>LOAD MORE</button>
        </div>
      ) 
    }
  }

  showAlbums() {
    const results = this.props.result;
    if (results.length <= 0) {
      return <p className='center'>_</p>;
    } else {
      return results.slice(0,this.state.limit).map((result) => {
        return (
          <div key={result.collectionId} className='album-container'>
            <div className='saved-result'>
              <Album album={result} />
            </div>
          </div>
        )
      });
    }
  }

  render() {
    return (
      <div>
        <p className='saved-title bold'>Miles’s Melodious Music Miscellany</p>
        {this.showAlbums()}
        {this.showLoadBtn()}
      </div>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    result: state.reducer.savedAlbums
  };
};


export default connect(mapStateToProps, {})(SavedAlbums);
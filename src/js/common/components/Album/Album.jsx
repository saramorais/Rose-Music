import React from 'react';
import './Album.css';

const Album = props => {

  const { album } = props;
  const year = album.releaseDate.slice(0,4);

  return (
    <div className='album-box'>
      <div className='image-box'>
        <img src={album.artworkUrl100} />
      </div>
      <div className='album-info'>
        <p><span className='bold'>Album</span>: {album.collectionCensoredName}</p>
        <p><span className='bold'>Artist</span>: {album.artistName}</p>
        <p><span className='bold'>Year</span>: {year}</p>
      </div>
    </div>
  );
  
}



export default Album;
import axios from 'axios';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const SAVE_ALBUM = 'SAVE_ALBUM';
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';

export function fetchAlbums(term) {
  const request = axios.get(`https://itunes.apple.com/search?term=${term}&entity=album&limit=3`);
  return {
    type: FETCH_ALBUMS,
    payload: request
  }
}

const savedAlb = [];
export function saveAlbum(album) {
  const saved = savedAlb.concat(album).reverse();
  savedAlb.push(album);

  return {
    type: SAVE_ALBUM,
    saved
  }
}

export function searchDisplay(searchStatus) {
  return {
    type: TOGGLE_SEARCH,
    searchStatus
  }
}

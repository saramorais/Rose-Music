import { FETCH_ALBUMS, SAVE_ALBUM, TOGGLE_SEARCH } from '../actions';

const initialState = {
  results: [],
  savedAlbums: [],
  searchStatus: 'show-search'
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ALBUMS:
      return {
        ...state, 
        results: action.payload.data.results,
        searchStatus: 'hide-search'
      };
    case SAVE_ALBUM:
      return {
        ...state, 
        savedAlbums: action.saved
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        searchStatus: action.searchStatus
      }
    default:
      return {...state};
  }
};

export default reducer;
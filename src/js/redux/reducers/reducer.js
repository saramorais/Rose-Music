import { FETCH_ALBUMS } from '../actions';
import { SAVE_ALBUM } from '../actions';

const initialState = {
  results: [],
  savedAlbums: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ALBUMS:
      return {
        ...state, 
        results: action.payload.data.results 
      };
    case SAVE_ALBUM:
      return {
        ...state, 
        savedAlbums: action.saved
      };
    default:
      return {...state};
  }
};

export default reducer;
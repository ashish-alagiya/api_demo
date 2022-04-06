import {getPhotos} from '../actions';
import {
  GET_ALBUMS,
  GET_COMMENTS,
  GET_DATA,
  GET_PHOTOS,
  GET_TODOS,
  GET_USER,
} from '../actions/type';

const INITIAL_STATE = {
  listData: [],
  comments: [],
  albums: [],
  photos: [],
  todos: [],
  user: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      return {...state, listData: action.payload};
    case GET_COMMENTS:
      return {...state, comments: action.payload};
    case GET_ALBUMS:
      return {...state, albums: action.payload};
    case GET_PHOTOS:
      return {...state, photos: action.payload};
    case GET_TODOS:
      return {...state, todos: action.payload};
    case GET_USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
};

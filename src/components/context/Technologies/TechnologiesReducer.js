import {
  GET_TECHNOLOGIES,
  GET_TECHNOLOGIES_SUCCESS,
  GET_TECHNOLOGIES_ERROR,
  ADD_REMOVE_FAVORITE_LIST,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_TECHNOLOGIES:
      return {
        ...state,
        loader: true,
        error: '',
      }
    case GET_TECHNOLOGIES_SUCCESS:
      return {
        ...state,
        technologiesList: action.payload,
        loader: false,
      }
    case GET_TECHNOLOGIES_ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload,
      }
    case ADD_REMOVE_FAVORITE_LIST:
      return {
        ...state,
        technologiesList: action.payload,
      }
    default:
      return state
  }
}

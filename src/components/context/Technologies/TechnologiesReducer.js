import {
  GET_TECHNOLOGIES,
  GET_TECHNOLOGIES_SUCCESS,
  GET_TECHNOLOGIES_ERROR,
  ADD_REMOVE_FAVORITE_LIST,
  UPDATE_QUERY_FILTER,
  FILTER_TEACHNOLOGIES,
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
        clonList: action.payload,
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
        technologiesList: action.payload.teachList,
        clonList: action.payload.cloneList,
      }
    case UPDATE_QUERY_FILTER:
      return {
        ...state,
        filterParams: {
          ...state.filterParams,
          [action.payload.field]: action.payload.value,
        },
      }
    case FILTER_TEACHNOLOGIES:
      return {
        ...state,
        technologiesList: action.payload,
      }
    default:
      return state
  }
}

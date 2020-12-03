import { useReducer } from 'react'
import TechnologiesContext from './TechnologiesContext'
import TechnologiesReducer from './TechnologiesReducer'
import api from '../../../helpers/api'
import {
  restructureData,
  updateTeachnologie,
  saveDataLocalStorage,
} from '../../../helpers'
import {
  GET_TECHNOLOGIES,
  GET_TECHNOLOGIES_SUCCESS,
  GET_TECHNOLOGIES_ERROR,
  ADD_REMOVE_FAVORITE_LIST,
} from '../types'

const TechnologiesState = (props) => {
  const initialState = {
    technologiesList: [],
    loader: false,
    error: '',
  }

  const [state, dispatch] = useReducer(TechnologiesReducer, initialState)

  /* functions or reducer */

  // get all technologies consulting the api or localStorage
  const getTechnologies = async () => {
    dispatch({
      type: GET_TECHNOLOGIES,
    })
    if (localStorage.getItem('technologiesList')) {
      dispatch({
        type: GET_TECHNOLOGIES_SUCCESS,
        payload: JSON.parse(localStorage.getItem('technologiesList')),
      })
    } else {
      try {
        const { data } = await api.get('/techs')
        dispatch({
          type: GET_TECHNOLOGIES_SUCCESS,
          payload: restructureData(data),
        })
      } catch {
        dispatch({
          type: GET_TECHNOLOGIES_ERROR,
          payload: 'Ops! problemas al cargar las tecnologias',
        })
      }
    }
  }

  // get all technologies without consulting api only the localStorage
  const getTechnologiesWithoutApi = () => {
    dispatch({
      type: GET_TECHNOLOGIES_SUCCESS,
      payload: localStorage.getItem('technologiesList')
        ? JSON.parse(localStorage.getItem('technologiesList'))
        : [],
    })
  }

  // Add or remove one technologies how teachFavorite
  const addOrRemoveFavoriteTech = (technologie) => {
    const updateData = updateTeachnologie(
      state.technologiesList,
      technologie.id,
      technologie.isFavorite,
    )
    dispatch({
      type: ADD_REMOVE_FAVORITE_LIST,
      payload: updateData,
    })
    saveDataLocalStorage('technologiesList', updateData)
  }

  return (
    <TechnologiesContext.Provider
      value={{
        technologiesList: state.technologiesList,
        favoriteList: state.favoriteList,
        loader: state.loader,
        error: state.error,
        getTechnologies,
        addOrRemoveFavoriteTech,
        getTechnologiesWithoutApi,
      }}
    >
      {props.children}
    </TechnologiesContext.Provider>
  )
}

export default TechnologiesState
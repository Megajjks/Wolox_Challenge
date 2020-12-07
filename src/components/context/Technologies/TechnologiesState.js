import { useReducer } from 'react'
import TechnologiesContext from './TechnologiesContext'
import TechnologiesReducer from './TechnologiesReducer'
import api from '../../../helpers/api'
import {
  restructureData,
  updateTeachnologie,
  saveDataLocalStorage,
  filterByField,
  orderList,
} from '../../../helpers'
import {
  GET_TECHNOLOGIES,
  GET_TECHNOLOGIES_SUCCESS,
  GET_TECHNOLOGIES_ERROR,
  ADD_REMOVE_FAVORITE_LIST,
  UPDATE_QUERY_FILTER,
  FILTER_TEACHNOLOGIES,
} from '../types'

const TechnologiesState = (props) => {
  const initialState = {
    technologiesList: [],
    clonList: [],
    filterParams: {
      filterName: '',
      filterType: '',
      filterSort: '',
    },
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
    const updateDataTechList = updateTeachnologie(
      state.technologiesList,
      technologie.id,
      technologie.isFavorite,
    )
    const updateDataClonList = updateTeachnologie(
      state.clonList,
      technologie.id,
      technologie.isFavorite,
    )
    dispatch({
      type: ADD_REMOVE_FAVORITE_LIST,
      payload: { teachList: updateDataTechList, cloneList: updateDataClonList },
    })
    saveDataLocalStorage('technologiesList', updateDataClonList)
  }

  // update the query of filter inputs
  const updateQuery = (e) => {
    dispatch({
      type: UPDATE_QUERY_FILTER,
      payload: { field: e.target.name, value: e.target.value },
    })
  }

  // filter the data
  const filterByName = () => {
    dispatch({
      type: FILTER_TEACHNOLOGIES,
      payload: filterByField(
        state.clonList,
        'tech',
        state.filterParams.filterName,
      ),
    })
  }
  const filterByType = () => {
    dispatch({
      type: FILTER_TEACHNOLOGIES,
      payload: filterByField(
        state.clonList,
        'type',
        state.filterParams.filterType,
      ),
    })
  }
  const orderTechnologies = () => {
    dispatch({
      type: FILTER_TEACHNOLOGIES,
      payload: orderList(state.clonList, state.filterParams.filterSort),
    })
  }
  const resetFilterData = () => {
    dispatch({
      type: FILTER_TEACHNOLOGIES,
      payload: state.clonList,
    })
  }

  return (
    <TechnologiesContext.Provider
      value={{
        technologiesList: state.technologiesList,
        clonList: state.clonList,
        filterParams: state.filterParams,
        loader: state.loader,
        error: state.error,
        getTechnologies,
        addOrRemoveFavoriteTech,
        getTechnologiesWithoutApi,
        updateQuery,
        filterByName,
        filterByType,
        orderTechnologies,
        resetFilterData,
      }}
    >
      {props.children}
    </TechnologiesContext.Provider>
  )
}

export default TechnologiesState

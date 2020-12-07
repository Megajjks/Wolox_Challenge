import {
  SEND_DATA_FORM,
  SEND_DATA_FORM_SUCCESS,
  SEND_DATA_FORM_ERROR,
  UPDATE_DATA_FORMS,
  FILTER_PROVINCE,
  VALIDATE_DATA_FORM,
} from '../../../components/context/types'

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_DATA_FORMS:
      return {
        ...state,
        form: { ...state.form, [action.payload.field]: action.payload.value },
      }
    case FILTER_PROVINCE:
      return {
        ...state,
        listProvince: action.payload[0].provinces,
      }
    case VALIDATE_DATA_FORM:
      return {
        ...state,
        btnDisable: action.payload.btn,
        matchPassword: action.payload.password,
      }
    case SEND_DATA_FORM:
      return { ...state, loader: true, error: null }
    case SEND_DATA_FORM_SUCCESS:
      return {
        ...state,
        loader: false,
        form: {
          name: '',
          lastname: '',
          phone: '',
          country: '',
          province: '',
          email: '',
          password: '',
          confirmPassword: '',
          terms: false,
        },
      }
    case SEND_DATA_FORM_ERROR:
      return { ...state, loader: false, error: action.payload }
    default:
      return state
  }
}

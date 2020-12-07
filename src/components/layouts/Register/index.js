import { useReducer, useEffect } from 'react'
import { initialState } from './constants'
import { reducer } from './reducer'
import {
  UPDATE_DATA_FORMS,
  FILTER_PROVINCE,
  VALIDATE_DATA_FORM,
  SEND_DATA_FORM,
  SEND_DATA_FORM_SUCCESS,
  SEND_DATA_FORM_ERROR,
} from '../../context/types'
import {
  countrys,
  FilterProvince,
  notify,
  saveDataLocalStorage,
} from '../../../helpers'
import api from '../../../helpers/api'
import Button from '../../ui/Button'
import Spinner from '../../ui/Spinner'
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './style.scss'

const Register = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {
    name,
    lastname,
    phone,
    country,
    province,
    email,
    password,
    confirmPassword,
    terms,
  } = state.form
  const history = useHistory()
  const authContext = useAuth()
  /* Regx */
  const regxPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/

  /* Filter the province in base of country select */
  useEffect(() => {
    dispatch({
      type: FILTER_PROVINCE,
      payload: FilterProvince(country, countrys),
    })
  }, [country])

  /* Check the conditions to enable the button */
  useEffect(() => {
    validateData()
  }, [
    name,
    lastname,
    phone,
    country,
    province,
    email,
    password,
    confirmPassword,
    terms,
  ])

  const handleOnChange = (e) => {
    if (e.target.name === 'terms') {
      dispatch({
        type: UPDATE_DATA_FORMS,
        payload: { field: e.target.name, value: !terms },
      })
    } else {
      dispatch({
        type: UPDATE_DATA_FORMS,
        payload: { field: e.target.name, value: e.target.value },
      })
    }
  }

  const numericRestriction = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength,
      )
    }
  }

  const validateData = () => {
    if (
      name === '' ||
      lastname === '' ||
      phone === '' ||
      country === '' ||
      province === '' ||
      email === '' ||
      password === '' ||
      !regxPassword.test(password) ||
      confirmPassword === '' ||
      !regxPassword.test(confirmPassword) ||
      !terms
    ) {
      dispatch({
        type: VALIDATE_DATA_FORM,
        payload: { btn: true, password: false },
      })
      return
    }
    if (password !== confirmPassword) {
      dispatch({
        type: VALIDATE_DATA_FORM,
        payload: { btn: true, password: true },
      })
      return
    }
    dispatch({
      type: VALIDATE_DATA_FORM,
      payload: { btn: false, password: false },
    })
  }

  const sendData = async (e) => {
    e.preventDefault()
    const { confirmPassword, terms, ...newData } = state.form
    dispatch({
      type: SEND_DATA_FORM,
    })
    try {
      const { data } = await api.post('/signup', newData)
      dispatch({
        type: SEND_DATA_FORM_SUCCESS,
        payload: data,
      })
      saveDataLocalStorage('user', newData)
      authContext.setToken(data)
      notify('success', '☑️  Datos registrados correctamente')
      history.push('/#Inicio')
    } catch {
      dispatch({
        type: SEND_DATA_FORM_ERROR,
        payload: '!Opps, ocurrio un problema con la conexión',
      })
      notify(
        'error',
        '⚠️ Problemas al momento de guardar los datos, revice su conexión y vuelva a intentarlo',
      )
    }
  }

  return (
    <div className="register-wrapper">
      <h1>
        Empieza tu <span className="accent-blue-text">historia</span> con{' '}
        <span className="accent-green-text">nosotros</span>
      </h1>
      <h3>
        A continuación proporcionanos los siguientes datos para poder conocerte
        mejor y tener una cuenta para darte seguimiento.
      </h3>
      <form className="form-wrapper" onSubmit={sendData}>
        <label>Nombre(s)</label>
        <input
          type="text"
          placeholder="Introduce tu nombre"
          name="name"
          value={name}
          onChange={handleOnChange}
          maxLength="30"
          required
        />
        <label>APellido(s)</label>
        <input
          type="text"
          placeholder="Introduce tus apellidos"
          name="lastname"
          value={lastname}
          onChange={handleOnChange}
          maxLength="30"
          required
        />
        <label>Telefono</label>
        <input
          type="number"
          placeholder="Introduce tu numero"
          maxLength="10"
          onInput={numericRestriction}
          name="phone"
          value={phone}
          onChange={handleOnChange}
          required
        />
        <label>Pais donde resides</label>
        <select
          name="country"
          value={country}
          onChange={handleOnChange}
          required
        >
          {countrys.map((country, idx) => (
            <option key={idx} value={country.value}>
              {country.value}
            </option>
          ))}
        </select>
        <label>Provincia donde resides</label>
        <select
          name="province"
          value={province}
          onChange={handleOnChange}
          required
        >
          {state.listProvince.map((province, idx) => (
            <option key={idx} value={province.value}>
              {province.value}
            </option>
          ))}
        </select>
        <label>Correo Electronico</label>
        <input
          type="email"
          placeholder="Introduce tu correo electronico"
          name="email"
          value={email}
          onChange={handleOnChange}
          required
        />
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Introduce tu contraseña"
          minLength="6"
          name="password"
          value={password}
          onChange={handleOnChange}
          required
        />
        <div className="info_box">
          <p>La contraseña debe tener:</p>
          <ul>
            <li> Minimo 6 caracteres</li>
            <li> Minimo una letra en mayuscula</li>
            <li> Minimo una un numero</li>
            <li>Minimo una un caracter especial @,#,&</li>
          </ul>
        </div>
        <label>Confirma tu contraseña</label>
        <input
          type="password"
          placeholder="Introduce tu de nuevo la contraseña"
          minLength="6"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          required
        />
        {state.matchPassword && (
          <div className="info_box">
            <p className="warning_txt">
              *Contraseñas no coinciden, verifica que sean iguales
            </p>
          </div>
        )}
        <div className="terms-box">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={terms}
            onChange={handleOnChange}
            required
          />
          <label htmlFor="terms">Acepto Términos y Condiciones</label>
        </div>
        {state.loader ? (
          <Spinner />
        ) : (
          <Button title="Registrarme" isDisabled={state.btnDisable} />
        )}
      </form>
      <ToastContainer />
    </div>
  )
}

export default Register

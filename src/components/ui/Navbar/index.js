import { useState, useContext } from 'react'
import TechnologiesContext from '../../context/Technologies/TechnologiesContext'
import Brand from '../../../assets/images/logo_full_color.svg'
import MenuIco from '../../../assets/images/menu.svg'
import HiddenIco from '../../../assets/images/close.svg'
import Button from '../Button'
import { HashLink } from 'react-router-hash-link'
import { countTechnologiesFav } from '../../../helpers'
import './style.scss'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const navItems = ['Inicio', 'Beneficios']
  const technologiesContext = useContext(TechnologiesContext)
  const { clonList } = technologiesContext

  const ShowMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className="navbar-wrapper">
      <img src={Brand} alt="wolox-brand" />
      <ul className="menu">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <HashLink to={`/#${item}`} smooth>
              {item}
            </HashLink>
          </li>
        ))}
        <Button
          type="secundary"
          title={localStorage.getItem('user') ? 'Tecnologias' : 'Registrarse'}
          url={localStorage.getItem('user') ? '/technologies' : '/register'}
          size="50%"
        />
        {countTechnologiesFav(clonList) > 0 && (
          <div className="favorite-box">
            <p>{countTechnologiesFav(clonList)}</p>
          </div>
        )}
      </ul>
      <div className="buttons-mobile">
        {countTechnologiesFav(clonList) > 0 && (
          <div className="favorite-box">
            <p>{countTechnologiesFav(clonList)}</p>
          </div>
        )}
        <img
          src={menu ? HiddenIco : MenuIco}
          alt={menu ? 'close menu' : 'open menu'}
          onClick={ShowMenu}
        />
        {menu && (
          <ul className="menu-mobile">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <HashLink onClick={ShowMenu} to={`/#${item}`} smooth>
                  {item}
                </HashLink>
              </li>
            ))}
            <Button
              type="secundary"
              title={
                localStorage.getItem('user') ? 'Tecnologias' : 'Registrarse'
              }
              url={localStorage.getItem('user') ? '/technologies' : '/register'}
              size="50%"
            />
          </ul>
        )}
      </div>
    </div>
  )
}

export default Navbar

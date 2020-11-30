import { useState } from 'react'
import Brand from '../../../assets/images/logo_full_color.svg'
import MenuIco from '../../../assets/images/menu.svg'
import HiddenIco from '../../../assets/images/close.svg'
import Button from '../Button'
import { HashLink } from 'react-router-hash-link'
import './style.scss'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const navItems = ['Inicio', 'Beneficios']

  const ShowMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className="navbar-Wrapper">
      <img src={Brand} alt="wolox-brand" />
      <ul className="menu">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <HashLink to={`/#${item}`} smooth>
              {item}
            </HashLink>
          </li>
        ))}
        <Button type="secundary" title="Login" url="/" size="50%" />
      </ul>
      <div className="buttons-Mobile">
        <img
          src={menu ? HiddenIco : MenuIco}
          alt={menu ? 'close menu' : 'open menu'}
          onClick={ShowMenu}
        />
        {menu && (
          <ul className="menu-Mobile">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <HashLink onClick={ShowMenu} to={`/#${item}`} smooth>
                  {item}
                </HashLink>
              </li>
            ))}
            <Button type="secundary" title="Login" url="/" size="50%" />
          </ul>
        )}
      </div>
    </div>
  )
}

export default Navbar

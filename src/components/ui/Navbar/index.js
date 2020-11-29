import { useState } from 'react'
import Brand from '../../../assets/images/logo_full_color.svg'
import MenuIco from '../../../assets/images/menu.svg'
import HiddenIco from '../../../assets/images/close.svg'
import Button from '../Button'
import './style.scss'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const navItems = ['Inicio', 'Beneficios']

  const ShowMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className="Navbar-Wrapper">
      <img src={Brand} alt="wolox-brand" />
      <ul className="Menu">
        {navItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
        <Button type="secundary" title="Login" url="/" size="50%" />
      </ul>
      <div className="Buttons-Mobile">
        <img
          src={menu ? HiddenIco : MenuIco}
          alt={menu ? 'close menu' : 'open menu'}
          onClick={ShowMenu}
        />
        {menu && (
          <ul className="Menu-Mobile">
            {navItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
            <Button type="secundary" title="Login" url="/" size="50%" />
          </ul>
        )}
      </div>
    </div>
  )
}

export default Navbar

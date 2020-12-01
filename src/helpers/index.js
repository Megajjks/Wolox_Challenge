import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Img1 from '../assets/images/Ic_Hour.svg'
import Img2 from '../assets/images/Ic_HomeOffice.svg'
import Img3 from '../assets/images/Ic_Workshops.svg'
import Img4 from '../assets/images/Ic_DrinkSnacks.svg'
import Img5 from '../assets/images/Ic_laptop.svg'
import Img6 from '../assets/images/Ic_brain.svg'

/* Filter of province */
export const FilterProvince = (state, list) => {
  const filter = list.filter((country) => country.value === state)
  return filter
}

/* Function that return a notify pop */
export const notify = (type, msg) => {
  switch (type) {
    case 'success':
      return toast.success(msg, { position: toast.POSITION.TOP_RIGHT })
    case 'info':
      return toast.info(msg, { position: toast.POSITION.TOP_RIGHT })
    case 'warn':
      return toast.warn(msg, { position: toast.POSITION.TOP_RIGHT })
    case 'error':
      return toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
    default:
      return toast(msg, { position: toast.POSITION.TOP_RIGHT })
  }
}

/* Data of benefits in the landingpage */
export const benefits = [
  {
    title: 'Flexibilidad Horaria',
    img: Img1,
  },
  {
    title: 'Home Office',
    img: Img2,
  },
  {
    title: 'Capacitaciones y workshops',
    img: Img3,
  },
  {
    title: 'Snacks, frutas y bebidas gratis',
    img: Img4,
  },
  {
    title: 'Semana Remota',
    img: Img5,
  },
  {
    title: 'Trabajar en ultimas tecnologías',
    img: Img6,
  },
]

/* Data of country in the registre view */
export const countrys = [
  {
    value: '',
    provinces: [
      {
        value: '',
      },
    ],
  },
  {
    value: 'Argentina',
    provinces: [
      {
        value: '',
      },
      {
        value: 'Buenos Aires',
      },
      {
        value: 'Catamarca',
      },
      {
        value: 'Jujuy',
      },
      {
        value: 'La pampa',
      },
      {
        value: 'Mendoza',
      },
      {
        value: 'Misiones',
      },
    ],
  },
  {
    value: 'Chile',
    provinces: [
      {
        value: '',
      },
      {
        value: 'Santiago',
      },
      {
        value: 'Cordillera',
      },
      {
        value: 'Talca',
      },
      {
        value: 'Linares',
      },
      {
        value: 'Arauco',
      },
      {
        value: 'Osorno',
      },
    ],
  },
  {
    value: 'Colombia',
    provinces: [
      {
        value: '',
      },
      {
        value: 'Amazonas',
      },
      {
        value: 'Bolivar',
      },
      {
        value: 'Caldas',
      },
      {
        value: 'Huila',
      },
      {
        value: 'Magdalena',
      },
      {
        value: 'Cali',
      },
    ],
  },
  {
    value: 'México',
    provinces: [
      {
        value: '',
      },
      {
        value: 'Yucatan',
      },
      {
        value: 'Campeche',
      },
      {
        value: 'Sinaloa',
      },
      {
        value: 'Chiapas',
      },
      {
        value: 'Monterrey',
      },
      {
        value: 'Veracruz',
      },
    ],
  },
  {
    value: 'Perú',
    provinces: [
      {
        value: '',
      },
      {
        value: 'Arequipa',
      },
      {
        value: 'Cajamarca',
      },
      {
        value: 'Cusco',
      },
      {
        value: 'Ica',
      },
      {
        value: 'Lima',
      },
      {
        value: 'Tacna',
      },
    ],
  },
  {
    value: 'Ecuador',
    provinces: [
      {
        value: '',
      },
      {
        value: 'Azuay',
      },
      {
        value: 'Carchi',
      },
      {
        value: 'Loja',
      },
      {
        value: 'Orellana',
      },
      {
        value: 'Pastaza',
      },
      {
        value: 'Tungurahua',
      },
    ],
  },
]

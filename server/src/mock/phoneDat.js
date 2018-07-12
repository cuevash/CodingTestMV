// Mock-up phones's data
const domain = process.env.domain

const DataPhones = [
  {
    id: '1',
    title: 'Samsung S6',
    description: `El Samsung Galaxy S6 ofrece diversidad de novedades:
- Acabado en vidrio que consigue un diseño único.
- Mejoras importantes en ambas cámaras, mayor resolución y una apertura de F1.9.
    - Carga ultrarrápida, con la que cargarás el móvil un 50% más rápido que en modelos anteriores. Además de carga inalámbrica.
    - Pantalla Quad HD (2.560 x 1.440) Super AMOLED de 5,1" con la que podrás disfrutar de una nitidez increíble.
    - Seguridad mejorada gracias a la detección de huellas dactilares.
    - Arquitectura de 64 bits con la que podrás realizar multitud de tareas a gran velocidad.`,
    imageUrl: `${domain}/media/samsung_s6.png`,
    color: 'white',
    price: 200,
    priceUnit: 'euro'
  },
  {
    id: '2',
    title: 'Iphone 7',
    description: 'Mobile from Apple, light, excellent camera, long batery',
    imageUrl: `${domain}/media/Iphone7.png`,
    color: 'white',
    price: 300,
    priceUnit: 'euro'
  },
  {
    id: '3',
    title: 'Samsung S6',
    description: 'Mobile from samsung, light, excellent camera, long batery',
    imageUrl: `${domain}/media/samsung_s6.png`,
    color: 'white',
    price: 200,
    priceUnit: 'euro'
  },
  {
    id: '4',
    title: 'Iphone 7',
    description: 'Mobile from Apple, light, excellent camera, long batery',
    imageUrl: `${domain}/media/Iphone7.png`,
    color: 'white',
    price: 300,
    priceUnit: 'euro'
  },
  {
    id: '5',
    title: 'Samsung S6',
    description: 'Mobile from samsung, light, excellent camera, long batery',
    imageUrl: `${domain}/media/samsung_s6.png`,
    color: 'white',
    price: 200,
    priceUnit: 'euro'
  },
  {
    id: '6',
    title: 'Iphone 7',
    description: 'Mobile from Apple, light, excellent camera, long batery',
    imageUrl: `${domain}/media/Iphone7.png`,
    color: 'white',
    price: 300,
    priceUnit: 'euro'
  },
  {
    id: '7',
    title: 'Samsung S6',
    description: 'Mobile from samsung, light, excellent camera, long batery',
    imageUrl:`${domain}/media/samsung_s6.png`,
    color: 'white',
    price: 200,
    priceUnit: 'euro'
  },
  {
    id: '8',
    title: 'Iphone 7',
    description: 'Mobile from Apple, light, excellent camera, long batery',
    imageUrl: `${domain}/media/Iphone7.png`,
    color: 'white',
    price: 300,
    priceUnit: 'euro'
  }
]

module.exports = DataPhones

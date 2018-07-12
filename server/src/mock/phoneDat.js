// Mock-up phones's data
const domain = process.env.domain

const DataPhones = [
  {
    id: '1',
    title: 'Samsung S6',
    description: `
* Heart rate monitor
* Futuristic wireless technology makes charging simple
* Unique curved screen
* Fingerprint scanner
* Sleek metal and glass body
    `,
    imageUrl: `${domain}/media/samsung_s6.png`,
    color: 'white',
    price: 200,
    priceUnit: 'euro'
  },
  {
    id: '2',
    title: 'Samsung S7',
    description: `
* 5.1-inch Quad HD display
* Massive battery with wireless charging
* Dual Pixel 12MP camera
* IP68 certified – the highest water and dust resistance rating
* Available in 32GB capacity
    `,
    imageUrl: `${domain}/media/samsung_s7.jpg`,
    color: 'white',
    price: 400,
    priceUnit: 'euro'
  },
  {
    id: '3',
    title: 'Samsung S8',
    description: `
* 6.2-inch dual edge Quad HD display
* 12MP Dual Pixel camera
* 64GB internal storage
    `,
    imageUrl: `${domain}/media/samsung_s8.jpg`,
    color: 'white',
    price: 600,
    priceUnit: 'euro'
  },
  {
    id: '4',
    title: 'Samsung S9',
    description: `
* 5.8-inch Widescreen Quad HD display
* Main camera with dual aperture
* 960fps super slow motion
* ‘Intelligent Scan’ facial recognition for extra security
* Available in Blue, Black, Purple and Titanium Grey
    `,
    imageUrl: `${domain}/media/samsung_s9.png`,
    color: 'white',
    price: 800,
    priceUnit: 'euro'
  },


  {
    id: '5',
    title: 'iPhone 6',
    description: `
* 4.7-inch Retina HD display
* 8-megapixel for photos 1080p HD video recording
* Fingerprint identity sensor
* FaceTime HD for video calls
* Available fully Unlocked in Space Grey
* Available in 32GB capacity
    `,
    imageUrl: `${domain}/media/Iphone6.jpg`,
    color: 'white',
    price: 300,
    priceUnit: 'euro'
  },
  {
    id: '6',
    title: 'iPhone 7',
    description: `
* 4.7-inch Retina HD display
* 12MP camera with OIS
* 7MP front-facing lens
* A10 Fusion chip with 64-bit architecture
* Available in 32GB, 128GB and 256GB capacity
* Available fully Unlocked in Red, Jet Black, Black, Gold, Silver and Rose Gold.
    `,
    imageUrl: `${domain}/media/Iphone7.png`,
    color: 'white',
    price: 400,
    priceUnit: 'euro'
  },
  {
    id: '7',
    title: 'iPhone 8',
    description: `
* 4.7-inch Retina HD display
* 12MP camera
* 7MP front-facing lens
* Available in 64GB, 256GB
* Available fully unlocked in Gold, Silver, Space grey and Red
    `,
    imageUrl: `${domain}/media/Iphone8.jpg`,
    color: 'white',
    price: 600,
    priceUnit: 'euro'
  },
  {
    id: '8',
    title: 'iPhone X',
    description: `
* 5.8-inch Super Retina display
* 12MP dual lens camera
* 64GB or 256GB internal storage
* Available in space grey, and silver
    `,
    imageUrl: `${domain}/media/IphoneX.jpg`,
    color: 'white',
    price: 850,
    priceUnit: 'euro'
  }
]

module.exports = DataPhones

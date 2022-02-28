console.log('» index.js is running');

/* const person = {
  firstName: 'Barry',
  birthYear: 1977,
  location: {
    city: 'New York',
  },
  get age() {
    return new Date().getFullYear() - this.birthYear;
  },
  set age(value) {
    if (value > 0 && value < 150) {
      this.birthYear = new Date().getFullYear() - value;
    }
  },
};
console.log(person.age);
person.age = 160;
console.log(person.birthYear); */

// **********************************************************************

// const h1 = document.querySelector('h1');
// console.dir(h1);

// **********************************************************************
const hotel = {
  brand: 'Hotel Clarusway',
  categories: ['Spa', 'Swimming Pool', 'Resort'],
  options: ['just stay', 'free breakfast', 'all inclusive'],
  rooms: ['2-bed', '3-bed', '4-bed'],
  receptionHours: {
    mon: { open: 8, close: 22 },
    fri: { open: 9, close: 21 },
    sat: { open: 10, close: 20 },
  },

  // book: function (obj) {
  // console.log(obj)
  book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
    console.log(
      `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
    );
  },
};

// ! destructuring

const { brand, options } = hotel;

console.log(brand);
console.log(options[0]);

const { brand: hotelName, rooms } = hotel;
console.log('hotel name is', hotelName);

// const { mon } = hotel.receptionHours;

const {
  receptionHours: { mon: Monday },
} = hotel;
console.log(Monday);

console.log('uzun yazim ->', hotel.receptionHours.fri.open);

const openingFriday1 = hotel.receptionHours.fri.open;
const closingFriday1 = hotel.receptionHours.fri.close;

const {
  receptionHours: {
    fri: { open: openingFriday, close: closingFriday },
  },
} = hotel;

console.log(openingFriday, closingFriday);
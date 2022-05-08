'use strict';

// Data needed for a later exercise

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: { open: 12, close: 22 },
  [weekdays[4]]: { open: 11, close: 23 },
  [weekdays[5]]: { open: 0, close: 24 },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}
      and ${this.mainMenu[mainIndex]} will be delivered
      to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza(mainIng, ...otherIngs) {
    console.log(mainIng, otherIngs);
  },
};

////////////////// ASSIGNMENT 3 ////////////////////

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.toLowerCase().split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(25)}${'✅'.repeat(i + 1)}`);
  }
});

////////////////// ASSIGNMENT 4 ////////////////////

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(47);
  console.log(output);
}

////////////////// WORKING WITH STRINGS ////////////////////

// underscore_case;
//   first_name;
// Some_Variable;
//  calculate_AGE;
// delayed_departure;

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(-2));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   const last = seat.slice(-1);
//   // console.log(last);
//   if (last === 'B' || last === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('3C');

// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@example.com';
// const loginEmail = ' Hello@Examlple.Io';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// const priceGB = '288,97&';
// const priceUS = priceGB.replace('&', '$').replace(',', '.');
// console.log(priceUS);

// const plane2 = 'A32neo';
// console.log(plane2.includes('A320'));

// const chekcBaggage = function (items) {
//   const item = items.trim().toLowerCase();
//   if (item.includes('knife') || item.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome a board');
//   }
// };
// chekcBaggage('I have laptop, some food and a pocket knife');
// chekcBaggage(' Have some socks and camera');
// chekcBaggage(' Got some snack and a gun for selprotection');

// const capitalizeName = function (name) {
//   const lower = name.toLowerCase().split(' ');
//   const namesUpper = [];
//   for (const letter of lower) {
//     namesUpper.push(letter.replace(letter[0], letter[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jeSSica aNn smitH dAvIs');
// capitalizeName('aKhRor oriBjoNoV');

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   console.log(last.padStart(str.length, '*'));
// };
// maskCreditCard(123456787654);
// maskCreditCard(987654345655);
// maskCreditCard('23434254352');

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };
// planesInLine(10);
// planesInLine(3);
// planesInLine(6);

////////////////// ASSIGNMENT 2 ////////////////////

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Task 1.
// for (const [key, value] of game.scored.entries()) {
//   console.log(`Goal ${key + 1}: ${value}`);
// }

// // Task 2.
// let averageOdd = 0;
// for (const odd of Object.values(game.odds)) {
//   averageOdd += odd / 3;
// }
// console.log(averageOdd);

// // Task 3.
// for (const [team, odds] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odds}`);
// }

// // Task 4.
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

////////////////// LOOPING OBJECTS /////////////////

// const properties = Object.keys(openingHours);
// let openStr = `We are open on ${properties.length}days: `;
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open}, and close at ${close}`);
// }

////////////////// OPTIONAL CHAINING /////////////////

// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

////////////////// FOR OF LOOP ////////////////////

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

////////////////// ASSIGNMENT 1 ////////////////////

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Task 1.
// const [player1, player2] = game.players;
// console.log(player1, player2);

// // Task 2.
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// // Task 3.
// const [allPlayers] = [...player1, player2];
// console.log(allPlayers);

// // Task 4.
// const [playersFinal] = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

// // Task 5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // Task 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// // Task 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

////////////////// SHORT CIRCUITING //////////////////

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Akho',
// };
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

////////////////// LOGICAL ASSIGNMENT //////////////////

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests ?? 10;
// console.log(guests2);

// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

////////////////// REST OPERATOR //////////////////

// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(7, 8, 9, 1, 2, 4);
// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

////////////////// SPREAD OPERATOR ////////////////

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// const joinedMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(joinedMenu);

// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);

// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];
// // restaurant.orderPasta(...ingredients);
// const newRestaurant = { ...restaurant, founder: 'Akho', foundedIn: 2002 };
// console.log(newRestaurant);

////////////////// OBJECT DESTRUCTURING ////////////////

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via Del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

////////////////// ARRAY DESTRUCTURING ////////////////

// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a, b, c);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 3, [4, 5, [6, 7]]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k, [l, m]]] = nested;
// console.log(i, j, k, l, m);

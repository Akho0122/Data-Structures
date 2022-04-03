'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
const openingHours = {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0 },
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
  orderDelivery({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndex]} will be deliverd 
      to ${adress} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is Your Delicious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(otherIngs);
  },
};

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = function (str) {
  return str.slice(0, 3).toUpperCase();
};

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} ${time.replace(':', 'h')}`.padStart(41);
  console.log(output);
}
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;

// const [firstName, lastName] = 'Jonas Schedtmann'.split(' ');
// const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalize = function (...names) {
//   for (const name of names) {
//     const upper = name[0].toUpperCase() + name.slice(1);
//     console.log(upper);
//   }
// };
// capitalize('axror', 'aziz', 'nodir');

// const capitalize = function (names) {
//   const normal = names.split(' ');
//   const nam = [];
//   for (const name of normal) {
//     nam.push(name[0].toUpperCase() + name.slice(1));
//   }
//   const ok = nam.join(' ');
//   console.log(ok);
// };
// capitalize('john ann smith davis');
// capitalize('jonas schedtmann');

// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+'));
// console.log(message.padEnd(23, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(4334343434343434));
// console.log(maskCreditCard(7564321456754323));
// console.log(maskCreditCard('7564321456754323'));

// const plane = 'A320neo';
// console.log(plane.includes('A32'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of new Airbus family');
// }

// const checkBaggage = function (items) {
//   const item = items.toLowerCase();
//   if (item.includes('pocket knife') || item.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('You are welcome');
//   }
// };
// checkBaggage('I have laptop, some food, and a PoCket knife');
// checkBaggage('Socks and cameras');
// checkBaggage('Got some snacks and a gun for protection');

// const airplane = 'Tap Air Portugal';
// console.log(airplane.toLocaleLowerCase());
// console.log(airplane.toLocaleUpperCase());
// const passenger = 'jOnAs';
// const passengerCorrect = passenger.toLowerCase();
// console.log(
//   passengerCorrect[0].toLocaleUpperCase() + passengerCorrect.slice(1)
// );

// const airplane = 'Tap Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(airplane.indexOf('r'));
// console.log(airplane.lastIndexOf('r'));

// const checkMiddleSeat = function (seat) {
//   const letter = seat.slice(-1);
//   if (letter === 'B' || letter === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const entries = Object.entries(openingHours);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const properties = Object.keys(openingHours);
// let openStr = `We are open ${properties.length} days: `;
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// console.log(restaurant.openingHours?.mon?.open);
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }
// console.log(restaurant.orderRisotto?.('Hi') ?? 'Method does not exist');

// const users = [{ name: 'Jonas', email: 'hello@gmail.com' }];
// console.log(users[0]?.name ?? 'User array is empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }
// for (const [numb, item] of menu.entries()) {
//   console.log(`${numb + 1}: ${item}`);
// }

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

// for (const [index, item] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${item}`);
// }
// const average = Object.values(game.odds);
// let sum = 0;
// for (let i = 0; i < average.length; i++) {
//   sum += average[i] / average.length;
// }
// console.log(sum);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// const entries = Object.entries(openingHours);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const [players1, players2] = game.players;
// console.log(players1);
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

// const add = function (numb) {
//   let numbers = [];
//   for (let i = 0; i <= numb; i++) {
//     numbers.push(i);
//   }
//   console.log(numbers);
// };
// add(10);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   console.log(sum);
// };
// add(3, 2);
// add(5, 3, 7, 5);

// const ingredients = [
//   prompt('Lets make pasta! Ingredient1?'),
//   prompt('Ingredient2?'),
//   prompt('Ingredient3?'),
// ];

// restaurant.orderPasta(...ingredients);

// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(1, 2);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6, [7, 8]]];

// const [two, four, [five, six, [seven, eight]]] = nested;
// console.log(two, four, five, six, seven, eight);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

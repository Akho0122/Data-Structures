'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const openingHours = {
  [weekdays[3]]: { open: 12, close: 22 },
  [weekdays[4]]: { open: 11, close: 23 },
  [weekdays[6]]: { open: 0, close: 24 },
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
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20 : 00', adress }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndex]} will be delivered to 
      ${adress} at ${time}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

//// --------------- OPTIONAL CHAINING --------------- ////

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon);
}
// WITH optional chaining
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

// Method

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// ARRAYS
// const users = [{ name: 'John', email: 'john@' }];
const users = [];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0]?.name);
else console.log('User array empty');

//// --------------- LOOPING ARRAYS --------------- ////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//// --------------- ASSIGNMENT 1 --------------- ////

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

// //// 1.

// const [player1, player2] = game.players;
// console.log(player1, player2);

// //// 2.

// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// //// 3.

// const [...allPlayers] = [...player1, ...player2];
// console.log(allPlayers);

// //// 4.

// const playersFinal = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

// //// 5.

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// //// 6.

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);

// //// 7.
// team1 < team2 && console.log('team1 is more likely to win');
// team2 < team1 && console.log('team2 is more likely to win');

//// --------------- LOCIGAL ASSIGNMENT OPERATORS --------------- ////

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // Nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYNOUS>';
// rest2.owner = rest2.owner && '<ANONYNOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//// --------------- NULLISH OPERATOR--------------- ////

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//// --------------- SHORT CIRCUITS (&& AND ||) --------------- ////

// // Use ANY data type, return ANY data type

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // --AND--
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//// --------------- REST PATTERN AND PARAMETERS --------------- ////

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olivies', 'spinach');
// restaurant.orderPizza('mushrooms');

//// --------------- SPREAD OPERATOR --------------- ////

// const arr = [7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT Objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   // prompt('Lets make pasta! Ingredient 1?'),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { ...restaurant, founder: 'Guiseppe', fondedYear: 1990 };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristoranto Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//// --------------- DESTRUCTURING OBJECTS --------------- ////

// restaurant.orderDelivery({
//   time: '22 : 30',
//   adress: 'Via del Sole 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del Sole 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//// Default values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//// Mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

//// Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//// --------------- DESTRUCTURING ARRAYS --------------- ////

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

///// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//// Receive 2 return values from function

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//// Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
/*
//Slice method

console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // index 4 is not shown in the console.
console.log(arr.slice(-2)); // starts taking off from the end
console.log(arr.slice(-1)); // is always the last element from any array
console.log(arr.slice(1, -2));
console.log(arr.slice()); // this creates a copy of the array
console.log([...arr]); // similar to the above, but with spread opertor

// Splice method

// console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr); // we can see that splice removed the rest of the elements.



// Reverse method

arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

// Concat method

const letters = arr.concat(arr2);

console.log(letters);
console.log([...arr, ...arr2]); // can be done with the spread operator too

// Join method

console.log(letters.join(' - '));


//////// Looping arrays using FOREACH method /////

// Bank account exercise

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// looping over with for of method
// for (const movement of movements) {
  for (const [i, movement] of movements.entries()) {
    // this is how we access the counter variable of  for of loop
    if (movement > 0) {
      console.log(`Movement${i + 1}: You deposited ${movement}`);
    } else {
    console.log(`Movement${i + 1}: You withdrew ${Math.abs(movement)}`); // Math.abs removes the negative sign
  }
}
// achieve the same thing using forEach method - easier

console.log('---------- FOREACH METHOD ----------');
// movements.forEach(function (movement) {
  //   if (movement > 0) {
    //     console.log(`You deposited ${movement}`);
    //   } else {
      //     console.log(`You withdrew ${Math.abs(movement)}`); // Math.abs removes the negative sign
      //   }
      // });
      
      // accessing the current index - to create a counter
      
      movements.forEach(function (mov, i, arr) {
        if (mov > 0) {
          console.log(`Movement${i + 1}: You deposited ${mov}`);
        } else {
          console.log(`Movement${i + 1}: You withdrew ${Math.abs(mov)}`);
        }
      });
      
      // forEach on Maps
      
      const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// forEach on Sets

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`); // key is the same as value, because a set doesn't have keys
});


///////////////////////// DATA TRANSFORMATION METHODS ////////////////

// MAP

const euroToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
  //   // more aligned to functional programming
  //   return mov * euroToUsd;
  // });
  
  const movementsUsd = movements.map((mov) => mov * euroToUsd);
  
  console.log(movements);
  console.log(movementsUsd);
  
  // same thing with for of loop, but it's a differen philosophy
  
  const movementsUsdFor = [];
  
  for (const mov of movements) movementsUsdFor.push(mov * euroToUsd);
  console.log(movementsUsdFor);
  
  const movementsDescriptions = movements.map(
    (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
      )}`
      );
      
      console.log(movementsDescriptions);

      
      // FILTER
      
      const deposits = movements.filter(function (mov) {
        return mov > 0;
      });
      const withdrawals = movements.filter((mov) => mov < 0);
      
      console.log(movements);
      console.log(deposits);
      console.log(withdrawals);
      
      //using for of loop
      
      const depositsFor = [];
      for (const mov of movements) if (mov > 0) depositsFor.push(mov);
      
      console.log(depositsFor);
      


// REDUCE

console.log(movements);

// accumulator -> snowball

// const balance = movements.reduce(function (accumulator, current, index, array) {
//   console.log(`Iteration ${index}: ${accumulator}`);
//   return accumulator + current;
// }, 0);

//using the arrow function
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

// for loop

let balance2 = 0; // initial accumulator value
for (const mov of movements) balance2 += mov;

console.log(balance2);

// Maximum value

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);



//////////////// CHAINING METHODS //////////////

const euroToUsd = 1.1;

// Pipeline analogy

const totalDepositsUSD = movements
  .filter((mov) => mov < 0)
  .map((mov, i, arr) => {
    // the map method was called on the results of the movements.filter, so this is where we have to check if something went wrong.
    console.log(arr);
    return mov * euroToUsd;
  })
  // .map((mov) => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

/////////// FIND METHOD //////////////////

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === 'Jessica Davis');

console.log(account);

////// findIndex Method //////

const index = accounts.findIndex(
  (acc) => acc.username === currentAccount.username
  );
  


//////// SORTING ARRAYS ////////

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
console.log(movements);
console.log(movements.sort()); // this doesn't work

// return < 0, A will be before B (keep order)
// return > 0, B will be before A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/

////////////// CREATING AND FILLING ARRAYS ///////////////

const arr2 = [1, 2, 3, 4, 5, 6, 7];

// Empty arrays + fill method
const x = new Array(7); // creates an array of 7 empty elements
console.log(x);
// console.log(x.map(() => 5)); // this doesn't work

x.fill(1);
x.fill(1, 3, 5); // start, end (but not included)
console.log(x);

arr2.fill(23, 4, 6);
console.log(arr2);

// Array.from

const y = Array.from({ length: 7 }, () => 1); // recreating x array
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); //recreating arr2
console.log(z);

// practice

// const movementUI = Array.from(document.querySelectorAll('.movements_value'));

// console.log(movementUI);

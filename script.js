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

*/

///////////////////////// DATA TRANSFORMATION METHODS ////////////////

// MAP

const euroToUsd = 1.1;

const movementsUsd = movements.map(function (mov) {
  // more aligned to functional programming
  return mov * euroToUsd;
});

console.log(movements);
console.log(movementsUsd);

// same thing with for of loop, but it's a differen philosophy

const movementsUsdFor = [];

for (const mov of movements) movementsUsdFor.push(mov * euroToUsd);
console.log(movementsUsdFor);

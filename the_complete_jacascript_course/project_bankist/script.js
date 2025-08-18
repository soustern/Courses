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

const displayMovements = function(movements) {
  containerMovements.innerHTML = ``;

  movements.forEach(function(movement, index) {
    const type = movement > 0 ? `deposit` : `withdrawal` 
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
      <div class="movements__value">${movement}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  })
}
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]); 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUsd = movements.map(movement => movement * eurToUsd);

/////////////////////////////////////////////////

//#region console training

// Slice method -----------------------------------------------------------------------------------------------------
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); 
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// The slice method can be used to create a shallow copy
console.log(arr.slice());

// Splice method -----------------------------------------------------------------------------------------------------
// This method does not return a new array, it changes the original
// It mutates the original array

arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.splice(2));
console.log(arr);

// It can be used to remove the last element of an array
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(-1));
console.log(arr);

// Reverse method ------------------------------------------------------------------------------------------------------
// This method mutates the original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Concat method -------------------------------------------------------------------------------------------------------
// This returns a new array and does not mutate the original
const letters = arr.concat(arr2);
console.log(letters);
// Same as:
const letters2 = [...arr, ...arr2];
console.log(letters2);

// Join method ---------------------------------------------------------------------------------------------------------
// Returns a string with the separator we specify as an argument
console.log(letters.join(`-`));

// At method ----------------------------------------------------------------------------------------------------------
const arr3 = [23, 11, 64];
console.log(arr3.at(0));
// Same as:
console.log(arr3[0]);

// Getting the last element
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

// foreach method ------------------------------------------------------------------------------------------------------
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// foreach method in maps ------------------------------------------------------------------------------------------
const newCurrencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
])

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// foreach method in Sets ------------------------------------------------------------------------------------------
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// A set does not have key or indexes, so the value os key becomes the value itself 
// This is a design decision from the developers of the language
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//#endregion
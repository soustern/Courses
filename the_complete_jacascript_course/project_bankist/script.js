'use strict';

let isHidden = {
  passwordId: new Object(),
}

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

// #region Elements
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
const btnVisibility = document.querySelector(`.form__btn--visibility`);
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//#endregion

const movements = [200, 450, -400, -3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUsd = movements.map(movement => movement * eurToUsd);

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]); 

// This variable will receive the account which is logged in at the moment
let currentAccount;

// #region Update UI Function

const updateUI = account => {
  displayMovements(account.movements);
  calcDisplaySummary(account);
  labelBalance.textContent = account.balance = defineBalance(account);
};

// #endregion

// #region Event Handlers

btnLogin.addEventListener(`click`, (event) => {
  event.preventDefault();

  // The .find method does not return a boolean, but the first element that matches
  // the condition specified. If nothing is find, undefined is returned
  currentAccount = accounts.find(account => account.username === inputLoginUsername.value);
  console.log(currentAccount);

  // Usage of optional chaining
  // Check if current account even has a value associated to it
  // before trying to access a property
  if(currentAccount?.pin === Number(inputLoginPin.value))
  {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(` `)[0]}`;
    containerApp.style.opacity = 100;

    // Clear the input field
    // This method of assigning works because assignment works from right to left
    inputLoginUsername.value = inputLoginPin.value = ``;
    // Makes it so the field looses the cursor focus
    inputLoginPin.blur();
    
    updateUI(currentAccount);
    
  };
});

// #endregion

// #region Implement Transfers

btnTransfer.addEventListener(`click`, function(event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  if (!receiverAcc) {
    alert(`Receiver account does not exist`);
    return;
  };

  // This is not necessary here and was only made for training purposes
  // Try catch is anti pattern here
  // try{
  //   receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  //   if(!receiverAcc) {
  //    throw new Error(`Receiver account does not exist`);
  //   }
  //   console.log(amount, receiverAcc);
  // }
  // catch(error)
  // {
  //   alert(error.message);
  // }
  // This is critically wrong, the finally code block will execute
  // Even if no error is thrown
  // finally
  // {
  //   alert(`Account not found`);
  // }
  

  if (amount > 0 && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

// #endregion

// #region implement Close Account

btnVisibility.addEventListener(`click`, function(event) {
  event.preventDefault();
  if (this.querySelector(`i`).classList.contains(`fa-eye-slash`)) {
    this.querySelector(`i`).classList = `fa-solid fa-eye`;
    inputClosePin.type = `password`;
  }
  else {
    this.querySelector(`i`).classList = `fa-solid fa-eye-slash`
    inputClosePin.type = ``;
  }
});

btnClose.addEventListener(`click`, function(event) {
  event.preventDefault();
  console.log(`delete`);
  
  if (!inputClosePin.value.trim() && !inputCloseUsername.value.trim())
  {
    alert(`pin and username missing`);
  }
  else if(!inputClosePin.value.trim())
  {
    alert(`pin is missing`);
  }
  else if(!inputCloseUsername.value.trim())
  {
    alert(`username is missing`);
  };
    
});
// #endregion

//#region displayMovements
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

//#endregion

// #region defineBalance

const defineBalance = acc => acc.movements.reduce((curr, mov) => curr + mov, 0);

//#endregion

//#region calcDisplaySummary
const calcDisplaySummary = function(account) {
  const incomes = account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes;

  const outgoing = account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = outgoing;

  // chaining methods can cause performance issues in huge arrays
  const interest = account.movements.filter(mov => mov > 0)
  .map(mov => mov * account.interestRate / 100)
  .filter(mov => mov >= 1)
  .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = interest
};

//#endregion

//#region createUsername 
// Create the usernames using the acc.owner property
// This is becoming second nature to me, exciting
const createUsername = accs => 
    accs.forEach(acc => acc.username = acc.owner.toLowerCase().split(` `).map(string => string[0]).join(``));

createUsername(accounts);
console.log(accounts);
//#endregion

// #region Filter method
// returns a new array with entries that are specified by the callback function
const deposits = movements.filter(movement => movement > 0);
const withdrawals = movements.filter(movement => movement < 0);
//#endregion

// #region Reduce method
// Reduce method reduces all values within an array to single one based on
// a operation defined within the callback function
// Aside from a callback as the first argument, we can also pass a starting value
// as the second argument. The accumulator will then default to that argument
// in its first value
const balance = movements.reduce((accumulator, movement) => accumulator + movement, 0) / movements.length;

console.log(deposits, withdrawals, balance > 0 ? `positive balance of ${balance}` : `negative balance of ${Math.abs(balance)}`);
// #endregion

//#region Chaining methods
// Pipeline
const totalDepositsInUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsInUSD );

//#endregion

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

// Using the reduce method to return the biggest value within an array ---------------------------------------------
const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);

console.log(max);

//#endregion

//#region find method
// find method returns the first element of an array
// that satisfies a specified condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts.find(account => account.owner[0].toLowerCase() === `s`).owner);

// Same thing as above but in a for of loop
for (const account of accounts) {
  if (account.owner[0].toLowerCase() === `s`) {
    console.log(account.owner);
    // Have to break it here otherwise the console will log the 
    // other person which name begins with S
    break;
  };
}
// #endregion


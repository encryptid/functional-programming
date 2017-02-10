// Part 1: functional solutions to practice problems

// Solve these classics; no loops allowed! One common functional tool NOT built-in to Javascript is the 
// range(min, max) function, which returns an array of all the numbers between min and max. You can use this range 
// function.


// Part 2: reinventing map and filter

// Write your own map and filter functions that do the same thing as the built-in array.map and 
// array.filter functions. You cannot use the built-in map or filter! Use loops instead.

// Your functions should accept TWO parameters instead of one: the array and the callback function.

// The following code should work with your functions:

// function addFive(n) {
//    return n + 5;
// }

// function square(n) {
//   retur n * n;
// }

// function greaterThanEleven(n) {
//    return n > 11;
// }

// console.log(map([7, 1, 5, 2], addFive));                  // [12, 6, 10, 7]
// console.log(map([6, 3, 15, 4], addFive));                 // [11, 8, 20, 9]
// console.log(map([6, 3, 15, 4], square));                  // [36, 9, 225, 16]
// console.log(filter([7, 21, 45, 102], greaterThanEleven)); // [21, 45, 102]
// console.log(map([7, 21, 45, 102], greaterThanEleven));    // [false, true, true, true]

/** RANGE FUNCTION */
// function range(min, max) {
//   let arr = [];
  
//   for (let i = min; i <= max; i++) {
//     arr.push(i);
//   }
  
//   return arr;
// }


/** 01 | containsVowel
 * 
 * Write a function called containsVowel that takes a single string and returns true if there is at least one value 
 * or false otherwise.
 * 
 * Input/Output: string, boolean
 * Steps:
 * 1. Create an array of vowels
 * 2. Loop through the array of vowels
 * 3. While looping through each vowel, check if it is equal to the first letter in a word, followed by the second
 *    and so on, until reaching the end,
 * 4. ...at which point 
 * 4. If there is a single vowel, return true, else return false.
*/

function containsVowel(word) {
    let bits = word.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    function vowelly(letter) {
      console.log("letter is " + letter);
      if (vowels.includes(letter) === true) {
          //console.log("sandwich");
          return true;
      } else {
        //console.log('potato');
          return false;
      }
    }

    let results = bits.filter(vowelly);
    console.log(results);
    if ( results.length > 0) {
      return true
    } else {
      return false
    }
}

console.log(containsVowel('mystery'));

console.log(containsVowel("mystyry"));


/** 02 | divisors
 * 
 * Write a function called divisors that accepts a number and returns an array of all of the numbers that divide 
 * evenly into it.
 * 
 * Input/Output: number, array of numbers that divide evenly into number
 * Steps:
 * 1. Create a function with a parameter. The parameter represents our number.
 * 2. Use .map function to iterate over array of numbers that divide evenly into our "number". Possibly use "range"
 * 3. Return array
 */
function range(num) {
    let arr = [];
    
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    
    return arr;
  }

function divisors (num) {
  
  let potentials = range(num);
  
  function keepers(them) {
    if (num % them === 0) {
      return them
    }
  }

  let results = potentials.filter(keepers)
  return results;

}

console.log(divisors(20));

/** 03 | boost
 * 
 * Write a function called boost that accepts a number as a parameter and increments all of the digits of the number 
 * individually. If the digit is 0-8, it should be incremented, but if its 9 then it should be reset to 0. Return 
 * the incremented number.
 * 
 * boost(129);   // 230
 * boost(49);    // 50
 * boost(48);    // 59
 * boost(412);   // 523
 * 
 * Input/Output: number, new number
 * 
 * Steps:
 * 1. Create function with a parameter. That parameter will be our starting number.
 * 2. The function must first split the number into a string of numbers.
 * 3. The function should then increment (add) all the digits of the number (.map) by 1. Unless it's a 9.
 * 4. The function should then parseInt to return the number to a number.
 * 5. Finally, return the updated number
 */

function boost(num) {
  console.log("boost " + num);
  let things = num.toString();
  let split = things.split("");
  console.log(split);
  function booster(numeral) {
    if (numeral === "9") {
      return 0
    } else {
      return parseInt(numeral) + 1
    }
  } 

  let results = split.map(booster);
  let boosted = parseInt(results.join(''));
  return boosted;
}

console.log(boost(789));
console.log(boost(516));
console.log(boost(704));

/** 04 | multiples
 * 
 * Write a function called multiples that accepts two numbers and returns an array of all numbers from 1 - 100 that 
 * are evenly divisible by both.
 * 
 * Input/Output: two numbers, array of all numbers from 1-100 that are evenly divisible by both.
 * 
 * Steps:
 * 1. Create a function that accepts two numbers (parameters, first and second, perhaps)
 * 2. Use range to create an array of numbers from 1-100
 * 3. Iterate over each number and filter down to numbers that can be evenly divided by our parameters. Sounds like
 *      an if statement (if first % range[i] = 0, first.push(arrayOne))
 * 4. If so, push the number to an array (see above)
 * 5. Now we should have two arrays. Compare the two arrays. If the two arrays have numbers in common, push them
 *      to a final array, which will be our answer.
 */

function multiples (uno, dos) {

  function range(min, max) {
  let arr = [];
  
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  
  return arr;
}
  let anArray = range(1, 100);

  function isMultiple(num) {
    if (num % uno === 0 && num % dos === 0) {
      return num
    }
  }
  let results = anArray.filter(isMultiple);
  return results
}

console.log(multiples(5, 10));
console.log(multiples(4, 16));
console.log(multiples(10, 50))


/** Part 2: reinventing map and filter
 * 
 * Write your own map and filter functions that do the same thing as the built-in array.map and 
 * array.filter functions. You cannot use the built-in map or filter! Use loops instead.
 * 
 * Your functions should accept TWO parameters instead of one: the array and the callback function.
 * 
 * The following code should work with your functions:
 */

/**  
 * function addFive(n) {
 *  return n + 5;
 *  }
 * 
 * function square(n) {
 * return n * n;
 * }
 * 
 * function greaterThanEleven(n) {
 * return n > 11;
 * }
 * 
 * console.log(map([7, 1, 5, 2], addFive));                  // [12, 6, 10, 7]
 * console.log(map([6, 3, 15, 4], addFive));                 // [11, 8, 20, 9]
 * console.log(map([6, 3, 15, 4], square));                  // [36, 9, 225, 16]
 * console.log(filter([7, 21, 45, 102], greaterThanEleven)); // [21, 45, 102]
 * console.log(map([7, 21, 45, 102], greaterThanEleven));    // [false, true, true, true]
 */

function addFive(n) {
  return n + 5;
};

function square(z) {
  return z * z;
};

function greaterThanEleven(t) {
  return t > 11;
}

function map(arr, func) {
let stuff = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let things = func(item);
    stuff.push(things);
  };
  return stuff
};

function filter(arr, func) {
  let box = [];
  for (let i = 0; i < arr.length; i++) {
    let eye = arr[i]
    if ( func(eye) === true) {
      box.push(true);
    } else if (func(eye) === false) {
      box.push(false);
      // return false
    }
  }
  return box;
}
console.log(map([7,1,5,2], addFive));
console.log(map([6, 3, 15, 4], addFive));
console.log(map([6, 3, 15, 4], square));
console.log(filter([7, 21, 45, 102], greaterThanEleven));
console.log(map([7, 21, 45, 102], greaterThanEleven));

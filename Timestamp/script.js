// Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

// Write a function to find how many days have passed since any point in time (after 1970).

// Example:

// daysPassed(new Date(2018, 0, 15)) // 173

let date = new Date();

function daysPassed(date) {
  let today = new Date();
  let days = Math.floor((today - date) / 86400000);
  return days;
}

console.log(daysPassed(new Date(1994, 5, 5)));

// Write a function to find how many seconds have passed since any point in time (after 1970).

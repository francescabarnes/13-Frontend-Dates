// Find the timezones of :

// Anchorage (USA)
// Reykjavik (Iceland)
// Saint-Petersburg (Russia)
// And display the date and time of these cities along with the time and date of Brussels.

let date = new Date();
let utc = date.getTime() + date.getTimezoneOffset() * 60000;

let brussels = new Date(utc + 3600000 * 2);
let anchorage = new Date(utc + 3600000 * -8);
let reykjavik = new Date(utc + 3600000 * 0);
let saintPetersburg = new Date(utc + 3600000 * 3);

console.log("Brussels : " + brussels);
console.log("Anchorage : " + anchorage);
console.log("Reykjavik : " + reykjavik);
console.log("Saint-Petersburg : " + saintPetersburg);

function displayTime() {
  document.getElementById("bxlclock").innerHTML = `${brussels}`;
  document.getElementById("ancorclock").innerHTML = `${anchorage}`;
  document.getElementById("reyclock").innerHTML = `${reykjavik}`;
  document.getElementById("stpclock").innerHTML = `${saintPetersburg}`;
}

displayTime();

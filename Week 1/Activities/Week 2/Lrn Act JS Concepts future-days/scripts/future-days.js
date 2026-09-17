const numberOfDays = 6; // variable days in future setting
const options = { weekday: "long" }; // Intl.DateTimeFormat vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);
document.getElementById("today").innerHTML = `Today is <strong>${todaystring}</strong>`;

// next n days
// let i = 1; i <= numberOfDays; i++) {
//   if (i < numberOfDays)    


  // let i = 1;
  // while (i <= numberOfDays) {
  //   if (i <= numberOfDays) {

  let i = 1; i <= numberOfDays; i++) {
  if (i < numberOfDays)  

    numberOfDays.forEach(function (item) {
      if (item <= numberOfDays) {

      }
    });

  for (let i in numberOfDays) {
    if (i < numberOfDays) {
        const nextday = new Date();
        nextday.setDate(today.getDate() + i);
        let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
        const item = document.createElement("li"); // list item
        item.textContent = nextdaystring;
        document.querySelector("ul").appendChild(item);
    }
  }


        // const nextday = new Date();
        // nextday.setDate(today.getDate() + i);
        // let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
        // const item = document.createElement("li"); // list item
        // item.textContent = nextdaystring;
        // document.querySelector("ul").appendChild(item);


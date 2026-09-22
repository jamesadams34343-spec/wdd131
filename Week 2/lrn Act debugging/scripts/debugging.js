

// This is the original un debugged code you can use dev tools to inspect and see the errors use the console and sorce tabs were what was mostly used.
const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('area');

let area = 0;
const PI == 3.14159;

const radius = 10;
area = PI * radius * radius;
radiusOutput = radius;
areaOutput = area;

radius = 20;
area = PI * radius * radius;
radiusOutput = radius;
areaOutput = area;












// debugged code below with commented out what was done.

// // get elements from the document
// const radiusOutput = document.getElementById('radius');
// const areaOutput = document.querySelector('#area'); // added # before area

// let area = 0;
// const PI = 3.14159; // removed ==

// let radius = 10; // changed const to let "so the veriable could be rewritten further down"
// area = PI * radius * radius;
// radiusOutput.textContent = radius; // added .textContent
// areaOutput.textContent = area;  // added .textContent

// radius = 20;
// area = PI * radius * radius;
// radiusOutput.innerHTML = radius; // added .innerHTML
// areaOutput.innerHTML = area;  // added .innerHTML
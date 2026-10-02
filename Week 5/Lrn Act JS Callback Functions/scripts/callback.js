const target = document.getElementById("cal");


function calculate(a, b, callback) {
  callback(a + b);
}

function displayResult(result) {
  console.log('The result is: ' + result);
}
// This will post the result to the website intead of the console.log
// function displayResult(result) {
//   target.innerHTML = 'The result is: ' + result;
// }


calculate(2, 3, displayResult)


// A common use of callback functions in JavaScript is for asynchronous operations, such as handling events or making asynchronous requests. Here is a simulated example:




function fetchData(callback) {
  // using setTimeout to simulate fetching data from a server
  setTimeout(() => {
    // This calls the 'callback' function and passes data to it.
    callback('Data has been fetched');
  }, 2000); // This simulates a 2-second delay from a service.
}

function that processes the data
function processData(data) {
  console.log("Data received:", data);
}

// function processData(data) {
//   target.innerHTML = "Data received:", data;
// }



// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);


// The fetchData function simulates server data fetching using setTimeout to create a 2-second delay. After the delay, it invokes the callback function, passing 'Data has been fetched' as an argument. In this example, processData is passed as the callback, and it logs the received data to the console when invoked.

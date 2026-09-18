document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


// Store the selected elements that we are going to use.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

//add a click event listender to the hamburger button and use a callback function that toggles the list elemnt's list of classes.
hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});


//What does toggle mean? Instead of separate add and remove statments, toggle means add the class if it does not currently exist or remove the named class if it does exist.
//The CSS class rules will handle the different views, layouts, and displays. JavaScript only apoplies the class value or not.
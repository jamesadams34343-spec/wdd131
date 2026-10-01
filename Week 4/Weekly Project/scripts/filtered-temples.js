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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008, February, 10",
    area: 57504,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-62899-main.jpg"
  },
    {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 19",
    area: 119619,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
  },
    {
    templeName: "Red Cliffs Utah",
    location: "St. George, Utah, United States",
    dedicated: "2024, March, 24",
    area: 99055,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/red-cliffs-utah-temple/red-cliffs-utah-temple-8960-thumb.jpg"
  },



  // Add more temple objects here...
];

function getYear(dateString) {
  return parseInt(dateString.split(',')[0].trim());
}

const allTemplesLink = document.querySelector("#alltemples")
const oldTemplesLink = document.querySelector("#oldtemples")
const newTemplesLink = document.querySelector("#newtemples")
const largeTemplesLink = document.querySelector("#largetemples")
const smallTemplesLink = document.querySelector("#smalltemples")

allTemplesLink.addEventListener("click", () => {
  createTempleCard(temples);
});

oldTemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => getYear(temple.dedicated) < 1900));
});

newTemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => getYear(temple.dedicated) > 2000));
});

largeTemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallTemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
});



const container = document.getElementById('temple-container');

function createTempleCard(filteredTemples) {
  container.innerHTML = ""
  filteredTemples.forEach(temple => {
      const card = document.createElement('div');
      card.className = 'temple-card';

      card.innerHTML =`
          
          <div class="temple-info">
              <h2>${temple.templeName}</h2>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Total Area:</stong> ${temple.area.toLocaleString()} sq ft</p>
              <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy" width="400" height="250">
          </div>
          
        `;

    container.appendChild(card);
  });
}

createTempleCard(temples);
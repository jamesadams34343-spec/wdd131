document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

/*seperate variables*/

/*pre defiend link between image and urls for each section*/
let trendingvideos = [
  { image: 'woodwork1.jpg', url: 'https://www.youtube.com/watch?v=cagYqNJrFnA'},
  { image: 'woodwork2.jpg', url: 'https://www.youtube.com/watch?v=H3R856PUt1c'},
  { image: 'woodwork3.jpg', url: 'https://www.youtube.com/watch?v=M-AqJmp2tJ8'},
  { image: 'woodwork4.jpg', url: 'https://www.youtube.com/watch?v=RDkOLzF3PPw'},
  { image: 'woodwork5.jpg', url: 'https://www.youtube.com/watch?v=n8BXj1yJWoU'},
  { image: 'coding1.jpg', url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&list=PLZPZq0r_RZON03iKBjYOsOKr1-TD7z2lH'},
  { image: 'coding2.jpg', url: 'https://www.youtube.com/watch?v=ZzaPdXTrSb8'},
  { image: 'coding3.jpg', url: 'https://www.youtube.com/watch?v=zOjov-2OZ0E'},
  { image: 'coding4.jpg', url: 'https://www.youtube.com/watch?v=lfmg-EJ8gm4'},
  { image: 'coding5.jpg', url: 'https://www.youtube.com/watch?v=EerdGm-ehJQ'},
  { image: 'quilting1.jpg', url: 'https://www.youtube.com/watch?v=vn6L9X4lLXU'},
  { image: 'quilting2.jpg', url: 'https://www.youtube.com/watch?v=DqSW2HBSSes'},
  { image: 'quilting3.jpg', url: 'https://www.youtube.com/watch?v=1I4GvFMrKYA'},
  { image: 'quilting4.jpg', url: 'https://www.youtube.com/watch?v=_t0HqkO1gQM'},
  { image: 'quilting5.jpg', url: 'https://www.youtube.com/watch?v=PDIHYjUssoc'},



]; 

/* template -> { image: 'woodworking ?', url: ''}, */

// let articles = [
//   { image: 'article 1', url: ''},
//   { image: 'article 2', url: ''},
//   { image: 'article 3', url: ''},
//   { image: 'article 4', url: ''},
//   { image: 'article 5', url: ''},
//   /* template -> { image: 'article ?', url: ''} */
// ]

/*items to display in each section*/
const displaygroup = 5;

/*functions*/
/*shuffle displaygroup randomly*/
function getrandomvids(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// HIGHLIGHTED CHANGES BELOW
const miscSection = document.querySelector('#misc'); // Changed variable name and selector target
const selectedItems = getrandomvids(trendingvideos, displaygroup);

selectedItems.forEach(item => {
  const anchor = document.createElement('a');
  anchor.href = item.url;
  anchor.target = '_blank'; /*new tab*/
  
  const img = document.createElement('img');
  img.src = `images/${item.image}`;
  img.alt = 'Miscellaneous item'; // Updated alt text to match the new context
  
  anchor.appendChild(img);
  miscSection.appendChild(anchor); // Appends to the new section variable
});
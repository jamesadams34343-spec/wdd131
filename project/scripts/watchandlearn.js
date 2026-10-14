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


];

/* template -> { image: 'woodworking ?', url: ''}, */


let articles = [
  { image: 'article 1', url: ''},
  { image: 'article 2', url: ''},
  { image: 'article 3', url: ''},
  { image: 'article 4', url: ''},
  { image: 'article 5', url: ''},


  /* template -> { image: 'article ?', url: ''} */
]

/*items to display in each section*/
const displaygroup = 3;






/*functions*/

/*shuffle displaygroup randomly*/

function getrandomvids(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}


const trendingSection = document.querySelector('#trending');
const selectedItems = getrandomvids(trendingvideos, displaygroup);

selectedItems.forEach(item => {
  const anchor = document.createElement('a');
  anchor.href = item.url;
  anchor.target = '_blank'; /*new tab*/

  const img = document.createElement('img');
  img.src = `images/${item.image}`;
  img.alt = 'Trending video';

  anchor.appendChild(img);
  trendingSection.appendChild(anchor);

});
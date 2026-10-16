document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

/*seperate variables*/

/*pre defiend link between image and urls for each section*/
let trendingvideos = [
  { id: 'Wood1', category: 'Woodworking', image: 'woodwork1.jpg', url: 'https://www.youtube.com/watch?v=cagYqNJrFnA'},
  { id: 'Wood2', category: 'Woodworking', image: 'woodwork2.jpg', url: 'https://www.youtube.com/watch?v=H3R856PUt1c'},
  { id: 'Wood3', category: 'Woodworking', image: 'woodwork3.jpg', url: 'https://www.youtube.com/watch?v=M-AqJmp2tJ8'},
  { id: 'Wood4', category: 'Woodworking', image: 'woodwork4.jpg', url: 'https://www.youtube.com/watch?v=RDkOLzF3PPw'},
  { id: 'Wood5', category: 'Woodworking', image: 'woodwork5.jpg', url: 'https://www.youtube.com/watch?v=n8BXj1yJWoU'},
  { id: 'Code1', category: 'Coding', image: 'coding1.jpg', url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&list=PLZPZq0r_RZON03iKBjYOsOKr1-TD7z2lH'},
  { id: 'Code2', category: 'Coding', image: 'coding2.jpg', url: 'https://www.youtube.com/watch?v=ZzaPdXTrSb8'},
  { id: 'Code3', category: 'Coding', image: 'coding3.jpg', url: 'https://www.youtube.com/watch?v=zOjov-2OZ0E'},
  { id: 'Code4', category: 'Coding', image: 'coding4.jpg', url: 'https://www.youtube.com/watch?v=lfmg-EJ8gm4'},
  { id: 'Code5', category: 'Coding', image: 'coding5.jpg', url: 'https://www.youtube.com/watch?v=EerdGm-ehJQ'},
  { id: 'Quilt1', category: 'Quilting', image: 'quilting1.jpg', url: 'https://www.youtube.com/watch?v=vn6L9X4lLXU'},
  { id: 'Quilt2', category: 'Quilting', image: 'quilting2.jpg', url: 'https://www.youtube.com/watch?v=DqSW2HBSSes'},
  { id: 'Quilt3', category: 'Quilting', image: 'quilting3.jpg', url: 'https://www.youtube.com/watch?v=1I4GvFMrKYA'},
  { id: 'Quilt4', category: 'Quilting', image: 'quilting4.jpg', url: 'https://www.youtube.com/watch?v=_t0HqkO1gQM'},
  { id: 'Quilt5', category: 'Quilting', image: 'quilting5.jpg', url: 'https://www.youtube.com/watch?v=PDIHYjUssoc'},



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


const displaygroup = 8;


//this retreives the random videos from for the misc section
if (document.querySelector('#misc')) {
  function getrandomvids(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }


  const miscSection = document.querySelector('#misc'); // Changed variable name and selector target
  const selectedItems = getrandomvids(trendingvideos, displaygroup);

  selectedItems.forEach(item => {
    const anchor = document.createElement('a');
    anchor.href = item.url;
    anchor.target = '_blank'; /*new tab*/

    // const createid = item.image.split('.')[0];//[0]; // creates the link ids for the counter so I have something to track for the trending section
    // anchor.id = createid;
    
    const createid = item.id;

    const img = document.createElement('img');
    img.src = `images/${item.image}`;
    img.alt = 'Miscellaneous item'; // Updated alt text to match the new context
    img.loading = 'lazy';

    anchor.addEventListener('click', () => {
      clicktracking(item.id);
    });

      // const lskey = `click_${createid}`;
      // let currentClicks = localStorage.getItem(lskey) ? parseInt(localStorage.getItem(lskey)) : 0;
      
      // currentClicks++;

      // localStorage.setItem(lskey, currentClicks);

      // gettrendingvids();
    



    anchor.appendChild(img);
    miscSection.appendChild(anchor); // Appends to the new section variable
  });

}





//This pulls the local storage information for the trending function
if (document.querySelector('#trending')) {
  function gettrendingvids() {
    const trendingsection = document.querySelector('#trending');
    if(!trendingsection) return;

    let lscount = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key.startsWith('click_')) {
        const createid = key.replace('click_', '');
        const clicks = parseInt(localStorage.getItem(key)) || 0;

        // const originalItem = trendingvideos.find(v => v.image.split('.')[0] === createid);

        const originalItem = trendingvideos.find(v => v.id == createid);
        

        //if(originalItem && clicks > 0) { <- might replace below it replaced -> if(originalItem) {

        if(originalItem && clicks > 0) {
          lscount.push({ ...originalItem, clicks: clicks });

        }
      }
    }

    // if (lscount.length === 0) {

    //   lscount = trendingvideos.slice(0, displaygroup).map(item => ({ ...item, clicks: 0 }));
    // } else {
    //   lscount.sort((a, b) => b.clicks - a.clicks);
    // }


    if(lscount.length > 0) {
      lscount.sort((a, b) => b.clicks - a.clicks);
      
      // const currentids = lscount.map(item => item.image.split('.')[0]);
      // const extras = trendingvideos.filter(item => !currentids.includes(item.image.split('.')[0]));

      const currentids = lscount.map(item => item.id);

      const extras = trendingvideos.filter(item => !currentids.includes(item.id));


      lscount = [...lscount, ...extras];
    }
    else {
      lscount = [...trendingvideos];
    }



    const highestamount = lscount.slice(0, displaygroup);

    trendingsection.innerHTML = '<h2>Trending Videos</h2>';
    
    highestamount.forEach(item => {
      const trendlink = document.createElement('a');
      trendlink.href = item.url;
      trendlink.target = '_blank';
      trendlink.className = 'trending-clicks'; //<- if this doesn't work try 'Trending';

      trendlink.addEventListener('click', () => {
        clicktracking(item.id);
      });

      const trendimg = document.createElement('img');
      trendimg.src = `images/${item.image}`;
      trendimg.alt = 'Trending video thumbnail';
      trendimg.loading = 'lazy';

      trendlink.appendChild(trendimg);
      trendingsection.appendChild(trendlink);
    });



  }
  gettrendingvids();
}



if (document.querySelector('#selection')) {
  function getselectedvids(category) {
    const selectedsection = document.querySelector('#selection');
    
    
    if(!selectedsection) return;
    
      selectedsection.innerHTML='';

      const heading = document.createElement('h2');
      heading.textContent = `${category} Videos`;

      selectedsection.appendChild(heading);

      const matches = trendingvideos.filter(video => video.category === category).slice(0, displaygroup);

      matches.forEach(item => {
        const link = document.createElement('a');

        link.href = item.url;
        link.target = '_blank';

        link.addEventListener('click', () => {
          clicktracking(item.id);
        });

        const img = document.createElement('img');
          img.src = `images/${item.image}`;
          img.alt = item.category;
          img.loading = 'lazy';

          link.appendChild(img);
          selectedsection.appendChild(link);
      });



  }

    const videoselection = document.querySelector('#videos');

    videoselection.addEventListener('change' , (event) => {
    getselectedvids(event.target.value);

  });

}

function clicktracking (uniqueid) {
  const lskey = `click_${uniqueid}`;

  let currentClicks = parseInt(localStorage.getItem(lskey)) || 0;

  currentClicks++;

localStorage.setItem(lskey, currentClicks);
  gettrendingvids();

}



if(document.querySelector('#stars')) {
  document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll("#stars label");
    const inputs = document.querySelectorAll("#stars input");

    function highlightStars(count) {
      stars.forEach((star,index) => {
        star.style.color = index < count ? "gold" : "grey";
      });
    }

    // hover
    stars.forEach((star, index) => {
      star.addEventListener("mouseover", () => highlightStars(index + 1));
      star.addEventListener("mouseout", () => {
        const checked = document.querySelector("#stars input:checked");
        highlightStars(checked ? Number(checked.value) : 0);
      });
    });

  // click
    inputs.forEach((input, index) => {
      input.addEventListener("change", () => highlightStars(index + 1));
    });
  });
}


if (document.querySelector('#review-form')) {
  const form = document.querySelector("form");

  form.addEventListener("submit", () => {
    alert("Thank you for the review!");
  })

  const reviewForm = document.querySelector('#review-form');

  if (reviewForm) {
    reviewForm.addEventListener('submit', () => {
      let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;

      reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    alert("Thank you for the review!");
    });
  }
}



if (document.querySelector('#about-collage')) {
  const collage = document.querySelector('#about-collage');
  
  if (collage) {
    trendingvideos.forEach(item => {
      const img = document.createElement('img');
      img.src = `images/${item.image}`;
      img.style.left = `${Math.random() * 80}%`;
      img.style.top = `${Math.random() * 80}%`
    img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    collage.appendChild(img);
    });
  }

}
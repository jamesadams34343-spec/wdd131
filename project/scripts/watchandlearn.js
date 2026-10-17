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

// homepage

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


// homepage


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

// homepage

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

// homepage

function clicktracking (uniqueid) {
  const lskey = `click_${uniqueid}`;

  let currentClicks = parseInt(localStorage.getItem(lskey)) || 0;

  currentClicks++;

localStorage.setItem(lskey, currentClicks);
  gettrendingvids();

}

//review page

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

//review page

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

//About us page

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

if (document.querySelector('#ref')) {
  function refpage(videoslist) {
    return videoslist.map(video => {
      const {channel, uploadDate, title, url, username } = video;
      const authorDisplay = username ? `${channel} [${username}]` : channel;
      return `${authorDisplay}. (${uploadDate}). *${title}* [Video]. YouTube. ${url}`;
    });
  }
  const tubeVideos = [
    {
      channel: "Woodworking Studio",
      username: "@WoodworkingStudio",
      uploadDate: "Jan 21, 2025",
      title: "Top 6 Japanese Woodworking projects for Beginners",
      url: trendingvideos[0].url
    },
    {
      channel: "YASUHIRO TV",
      username: "@YASUHIROTV",
      uploadDate: "May 11, 2025",
      title: "40 Simple Circular Saw Hacks | Japanese Woodworking",
      url: trendingvideos[1].url
    },
    {
      channel: "Woodworking Studio",
      username: "@WoodworkingStudio",
      uploadDate: "Jul 7, 2026",
      title: "Top 6 Japanese Woodworking Skills for Beginners",
      url: trendingvideos[2].url
    },
    {
      channel: "YASUHIRO TV",
      username: "@YASUHIROTV",
      uploadDate: "Sep 27, 2025",
      title: "TOP 60 Router Hacks | Japanese Woodworking",
      url: trendingvideos[3].url
    },
    {
      channel: "B&D Handmade-Wood",
      username: "@BD-DIY-HOMEMADE",
      uploadDate: "Mar 13, 2025",
      title: "5 Jigs and Simple Trim Router Hacks | DIY Woodworking ..!",
      url: trendingvideos[4].url
    },
    {
      channel: "Bro Code",
      username: "@BroCodez",
      uploadDate: "Aug 20, 2024",
      title: "Python Full Course for free",
      url: trendingvideos[5].url
    },
    {
      channel: "Programming with Mosh",
      username: "@programmingwithmosh",
      uploadDate: "Aug 10, 2022",
      title: "C++ Tutorial for Beginners - Learn C++ in 1 Hour",
      url: trendingvideos[6].url
    },
    {
      channel: "freeCodeCamp.org",
      username: "@freecodecamp",
      uploadDate: "Apr 21, 2020",
      title: "Introduction to Programming and Computer Science - Full Course",
      url: trendingvideos[7].url
    },
    {
      channel: "Bro Code",
      username: "@BroCodez",
      uploadDate: "Jan 1, 2024",
      title: "JavaScript Full Course for free",
      url: trendingvideos[8].url
    },
    {
      channel: "SuperSimpleDev",
      username: "@SuperSimpleDev",
      uploadDate: "May 9, 2024",
      title: "JavaScript Tutorial Full Course - Beginner to Pro",
      url: trendingvideos[9].url
    },
    {
      channel: "Fat Quarter Shop",
      username: "@FatQuarterShopTX",
      uploadDate: "Oct 13, 2026",
      title: "Jelly Roll Rigatoni Quilt Tutorial 🍝 Easy Jelly Roll Quilt + FREE Pattern | Fat Quarter Shop",
      url: trendingvideos[10].url
    },
    {
      channel: "Missouri Star",
      username: "@MissouriQuiltCo",
      uploadDate: "Aug 3, 2023",
      title: "How to Make a Beginner's Star Quilt - Free Quilting Tutorial",
      url: trendingvideos[11].url
    },
    {
      channel: "Sew Be It Quilts",
      username: "@sewbeitquilts",
      uploadDate: "Jul 6, 2024",
      title: "5 Must Know Quilt Blocks for Beginners! | Quilting Tutorial",
      url: trendingvideos[12].url
    },
    {
      channel: "Chelsea | She Sews Seams",
      username: "@shesewsseams",
      uploadDate: "Oct 16, 2025",
      title: "Beginner Rag Quilt Tutorial | The Easiest Quilt You’ll Ever Sew (No Binding, No Batting, No Stress!)",
      url: trendingvideos[13].url
    },
    {
      channel: "Missouri Star",
      username: "@MissouriQuiltCo",
      uploadDate: "Mar 9, 2025",
      title: "How To Make a Prairie Twilight Lonestar Quilt - Free Quilting Tutorial",
      url: trendingvideos[14].url
    },                                                                                          
  ];

  // const organizeRef = refpage(myVideos);

  // organizeRef.forEach((reference, index) => {
  //   console.log(`${index + 1}. ${reference}`);
  // });

      const organizeRef = refpage(tubeVideos);

    const refElement = document.querySelector('#ref');

    refElement.innerHTML = organizeRef
      .map((reference, index) => `<p>${index + 1}. ${reference}</p>`)
      .join('');
  
}
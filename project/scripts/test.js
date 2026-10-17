//template for references page

// 1. The formatting function
function generateYouTubeReferences(videoList) {
  return videoList.map(video => {
    // Destructure the properties from the video object
    const { channel, uploadDate, title, url, username } = video;
    
    // Format the username display: "Channel Name [username]" or just "Channel Name"
    const authorDisplay = username ? `${channel} [${username}]` : channel;
    
    // Combine everything into an APA 7th edition reference string
    return `${authorDisplay}. (${uploadDate}). *${title}* [Video]. YouTube. ${url}`;
  });
}

// 2. Your collection of YouTube video data
const myVideos = [
  {
    channel: "Web Dev Simplified",
    username: "WebDevSimplified",
    uploadDate: "2020, January 23",
    title: "JavaScript ES6 Arrow Functions Tutorial",
    url: "https://youtube.com"
  },
  {
    channel: "FreeCodeCamp.org",
    username: "freecodecamp",
    uploadDate: "2021, December 14",
    title: "JavaScript Programming Full Course",
    url: "https://youtube.com"
  }
];

// 3. Run the function and log the results
const formattedReferences = generateYouTubeReferences(myVideos);

formattedReferences.forEach((reference, index) => {
  console.log(`${index + 1}. ${reference}`);
});






// this doesen't look correct so I tested it and sure enough doesn't work
const selectMenu = document.getElementById('videos');
const interestSection = document.getElementById('interestSection');
const interestTitle = document.getElementById('interestTitle');

// 1. Listen for dropdown changes to show/hide the section
selectMenu.addEventListener('change', (event) => {
  const selectedValue = event.target.value;

  if (selectedValue !== "") {
    // Reveal the section
    interestSection.style.display = "block";
    
    // Optional: Dynamically update the header text to match the choice
    const selectedText = selectMenu.options[selectMenu.selectedIndex].text;
    interestTitle.textContent = `${selectedText} Videos`;
  } else {
    // Hide it if they somehow select the default option again
    interestSection.style.style.display = "none";
  }
});

// 2. Click Counter logic specific to the new section's link
const interestLink = document.getElementById('interestLink');
const interestDisplay = document.getElementById('interestClickCount');

// Load any previously saved clicks from localStorage
let interestCount = localStorage.getItem('interestLinkClicks') || 0;
interestDisplay.textContent = interestCount;

interestLink.addEventListener('click', () => {
  interestCount++;
  interestDisplay.textContent = interestCount;
  localStorage.setItem('interestLinkClicks', interestCount);
});

//This is the tending retreavel template with a fallback(if else) so that it shows trending videos even if there are no clicks
function populateTrendingSection() {
  const trendingContainer = document.querySelector('#trending');
  if (!trendingContainer) return;

  let clickData = [];
  
  // 1. Gather all tracking keys from localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    
    if (key.startsWith('click_')) {
      const cleanId = key.replace('click_', '');
      const clicks = parseInt(localStorage.getItem(key)) || 0;
      
      const originalItem = trendingvideos.find(v => v.image.split('.')[0] === cleanId);
      
      if (originalItem && clicks > 0) { // Only count items that actually have clicks
        clickData.push({ ...originalItem, clicks: clicks });
      }
    }
  }

  // 2. FALLBACK RULE: If no one has clicked anything yet, use default videos
  if (clickData.length === 0) {
    // Take the first 5 videos from your master list and give them a baseline of 0 clicks
    clickData = trendingvideos.slice(0, 5).map(item => ({ ...item, clicks: 0 }));
  } else {
    // Otherwise, sort items by clicks in descending order (Highest to Lowest)
    clickData.sort((a, b) => b.clicks - a.clicks);
  }

  // 3. Limit the final display to top 5 items
  const topTrending = clickData.slice(0, 5);

  // 4. Clear old content and build the updated HTML
  trendingContainer.innerHTML = ''; 
  
  topTrending.forEach(item => {
    const trendAnchor = document.createElement('a');
    trendAnchor.href = item.url;
    trendAnchor.target = '_blank';
    trendAnchor.className = 'trending-item';

    const trendImg = document.createElement('img');
    trendImg.src = `images/${item.image}`;
    trendImg.alt = 'Trending item';

    trendAnchor.appendChild(trendImg);

    // 5. Only show the "views" badge if the item actually has clicks
    if (item.clicks > 0) {
      const scoreBadge = document.createElement('span');
      scoreBadge.className = 'click-badge';
      scoreBadge.textContent = `${item.clicks} views`;
      trendAnchor.appendChild(scoreBadge);
    }

    trendingContainer.appendChild(trendAnchor);
  });
}

// Run on page load
populateTrendingSection();


//template for optional code set to re organize the tiles live interesting I don't know that I care that much right now
localStorage.setItem(storageKey, currentClicks);
populateTrendingSection(); // Instantly re-shuffles the leaderboard live!



//This is the template for the trending retreavel

function populateTrendingSection() {
  const trendingContainer = document.querySelector('#trending');
  if (!trendingContainer) return;

  // 1. Gather all tracking keys from localStorage
  let clickData = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    
    // Check if the key belongs to our click counter
    if (key.startsWith('click_')) {
      const cleanId = key.replace('click_', '');
      const clicks = parseInt(localStorage.getItem(key)) || 0;
      
      // Match the ID back to your master database list (trendingvideos)
      const originalItem = trendingvideos.find(v => v.image.split('.')[0] === cleanId);
      
      if (originalItem) {
        clickData.push({ ...originalItem, clicks: clicks });
      }
    }
  }

  // 2. Sort items by clicks in descending order (Highest to Lowest)
  clickData.sort((a, b) => b.clicks - a.clicks);

  // 3. Limit to top items (e.g., top 5)
  const topTrending = clickData.slice(0, 5);

  // 4. Clear the old trending view and build the updated HTML
  trendingContainer.innerHTML = ''; 
  
  topTrending.forEach(item => {
    const trendAnchor = document.createElement('a');
    trendAnchor.href = item.url;
    trendAnchor.target = '_blank';
    trendAnchor.className = 'trending-item';

    const trendImg = document.createElement('img');
    trendImg.src = `images/${item.image}`;
    trendImg.alt = 'Trending item';

    // Optional: Add a click counter label next to or on the image
    const scoreBadge = document.createElement('span');
    scoreBadge.className = 'click-badge';
    scoreBadge.textContent = `${item.clicks} views`;

    trendAnchor.appendChild(trendImg);
    trendAnchor.appendChild(scoreBadge);
    trendingContainer.appendChild(trendAnchor);
  });
}

// Run this function when the page loads to display the top charts instantly
populateTrendingSection();



/*This was the template for the id setup*/
selectedItems.forEach(item => {
  const anchor = document.createElement('a');
  anchor.href = item.url;
  anchor.target = '_blank';
  
  const cleanId = item.image.split('.');
  anchor.id = cleanId; 
  
  const img = document.createElement('img');
  img.src = `images/${item.image}`;
  img.alt = 'Miscellaneous item';
  
  anchor.addEventListener('click', () => {
    // Prefixing the key makes gathering this data safe and easy
    const storageKey = `click_${cleanId}`;
    let currentClicks = localStorage.getItem(storageKey) ? parseInt(localStorage.getItem(storageKey)) : 0;
    currentClicks++;
    localStorage.setItem(storageKey, currentClicks);
  });
  
  anchor.appendChild(img);
  miscSection.appendChild(anchor);
});











/*this worked when pasted in*/

let trendingvideos = [
  {
    image: 'woodwork1.jpg',
    url: 'https://www.youtube.com/watch?v=cagYqNJrFnA'
  },
  {
    image: 'woodwork2.jpg',
    url: 'https://www.youtube.com/watch?v=H3R856PUt1c'
  },
  {
    image: 'woodwork3.jpg',
    url: 'https://www.youtube.com/watch?v=M-AqJmp2tJ8'
  },
  {
    image: 'woodwork4.jpg',
    url: 'https://www.youtube.com/watch?v=RDkOLzF3PPw'
  },
  {
    image: 'woodwork5.jpg',
    url: 'https://www.youtube.com/watch?v=n8BXj1yJWoU'
  }
];

const displaygroup = 3;

function getrandomvids(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const trendingSection = document.querySelector('#trending');
const selectedItems = getrandomvids(trendingvideos, displaygroup);

selectedItems.forEach(item => {
  const anchor = document.createElement('a');
  anchor.href = item.url;
  anchor.target = '_blank';

  const img = document.createElement('img');
  img.src = `images/${item.image}`;
  img.alt = 'Trending video';

  anchor.appendChild(img);
  trendingSection.appendChild(anchor);
});








































/*pre defiend link between image and urls for each section*/
let trendingvideos = [
  { image: 'woodwork1.jpg', url: 'https://www.youtube.com/watch?v=cagYqNJrFnA'},
  { image: 'woodwork2.jpg', url: 'https://www.youtube.com/watch?v=H3R856PUt1c'},
  { image: 'woodwork3.jpg', url: 'https://www.youtube.com/watch?v=M-AqJmp2tJ8'},
  { image: 'woodwork4.jpg', url: 'https://www.youtube.com/watch?v=RDkOLzF3PPw'},
  { image: 'woodwork5.jpg', url: 'https://www.youtube.com/watch?v=n8BXj1yJWoU'},


];

/* template -> { image: 'woodworking ?', url: ''}, */


let miscvideos = [
  { image: 'misc 1', url: ''}
  { image: 'misc 2', url: ''}
  { image: 'misc 3', url: ''}
  { image: 'misc 4', url: ''}
  { image: 'misc 5', url: ''}


  /* template -> { image: 'misc ?', url: ''} */
]

let articles = [
  { image: 'article 1', url: ''}
  { image: 'article 2', url: ''}
  { image: 'article 3', url: ''}
  { image: 'article 4', url: ''}
  { image: 'article 5', url: ''}


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
  img.alt = `Trending link to ${item.url}`;

  anchor.appendChild(img);
  trendingSection.appendChild(anchor);

});
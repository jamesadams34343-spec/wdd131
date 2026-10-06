document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.getElementById("product-select")

products.forEach(product => {
  const option = document.createElement("option")
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});


document.addEventListener("DOMContentLoaded", () => {
  // Read the query string from the URL
  const params = new URLSearchParams(window.location.search);

  // Detect a real form submission by checking for expected form fields
  const isFormSubmission =
    params.has("selectproduct") &&
    params.has("stars") &&
    params.has("itemdate");

  if (isFormSubmission) {
    let reviewCount = parseInt(localStorage.getItem("completedReviews")) || 0;
    reviewCount++;
    localStorage.setItem("completedReviews", reviewCount);

    console.log(`Review submitted! Total reviews completed: ${reviewCount}`);
  }
});



// document.addEventListener('DOMContentLoaded', () => {
//   const isFormSubmission = document.referrer.includes('submit') || window.location.search.includes('success');

//   if (isFormSubmission) {
//     let reviewCount = parseInt(localStorage.getItem('completedReviews')) || 0;
//     reviewCount++;
//     localStorage.setItem('completedReviews', reviewCount);
//     console.log(`Review submitted! Total reviews completed: ${reviewCount}`);
//   }
// });

// Stars

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
      highlightStars(checked ? checked.value : 0);
    });
  });

// click
  inputs.forEach((input, index) => {
    input.addEventListener("change", () => highlightStars(index + 1));
  });
});




// star effect

// document.addEventListener("DOMContentLoaded", () => {
//   const stars = document.querySelectorAll("#stars label");
//   const inputs = document.querySelectorAll("#stars input");

//   function highlightStars(count) {
//     stars.forEach((star, index) => {
//       star.style.color = index < count ? "gold" : "grey";
//     });
//   }

//   // Hover effect
//   stars.forEach((star, index) => {
//     star.addEventListener("mouseover", () => highlightStars(index + 1));
//     star.addEventListener("mouseout", () => {
//       const checked = document.querySelector("#stars input:checked");
//       highlightStars(checked ? checked.value : 0);
//     });
//   });

//   // Click effect
//   inputs.forEach((input, index) => {
//     input.addEventListener("change", () => highlightStars(index + 1));
//   });
// });

//   if (onReviewPage && submittedFlag) {
//     let reviewCount = Number(localStorage.getItem("completedReviews")) || 0;
//     reviewCount++;
//     localStorage.setItem("completedReviews", reviewCount)
//   }
// });


// faulty submission count attempt
  //   const isFormSubmitted = document.referrer.includes('submit') || window.location.search.includes('submitted=true');
//   if (isFormSubmitted) {
//     let reviewCount = parseInt(localStorage.getItem('completedReviews')) || 0;
//     reviewCount += 1;
//     localStorage.setItem('completedReviews', reviewCount);
//     console.log(`Total reviews completed: ${reviewCount}`);
//   }
// });




// Example script for selector option
    // <script>
    //     // Provided product array
    //     const products = ["Laptop", "Smartphone", "Wireless Headphones", "Smartwatch", "Tablet"];

    //     // Get a reference to the select element
    //     const productSelect = document.getElementById("productSelect");

    //     // Dynamically loop through the array and create option elements
    //     products.forEach(product => {
    //         // Create a new option element
    //         const option = document.createElement("option");
            
    //         // Set the value attribute to the product name
    //         option.value = product;
            
    //         // Set the visible text to the product name
    //         option.textContent = product;
            
    //         // Append the option to the select element
    //         productSelect.appendChild(option);
    //     });
    // </script>


// Example code to use local storage to count submissions
// document.addEventListener('DOMContentLoaded', () => {
//     // 1. Check if the page loaded due to a successful form submission
//     // (Adjust this condition if your form passes a specific query parameter like '?success=true')
//     const isFormSubmission = document.referrer.includes('submit') || window.location.search.includes('success');

//     if (isFormSubmission) {
//         // 2. Retrieve the current count from localStorage, defaulting to 0 if it doesn't exist
//         let reviewCount = parseInt(localStorage.getItem('completedReviews')) || 0;

//         // 3. Increment the counter
//         reviewCount++;

//         // 4. Save the updated count back to localStorage
//         localStorage.setItem('completedReviews', reviewCount);

//         console.log(`Review submitted! Total reviews completed: ${reviewCount}`);
//     }
// });
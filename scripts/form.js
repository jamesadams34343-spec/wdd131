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

//<form action="review.html?submitted=true" method="get"></form>

document.addEventListener('DOMContentLoaded', () => {
  const onReviewPage = window.location.pathname.includes("review.html");
  const submittedFlag = window.location.search.includes("submitted=true");

  if (onReviewPage && submittedFlag) {
    let reviewCount = Number(localStorage.getItem("completedReviews")) || 0;
    reviewCount++;
    localStorage.setItem("completedReviews", reviewCount)
  }
});




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
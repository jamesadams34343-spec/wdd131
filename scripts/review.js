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
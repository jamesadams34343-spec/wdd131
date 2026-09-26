document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const statictemp = 78;
const staticwind = 4;
const staticcond = "Sunny";

function calculateWindChill(statictemp, staticwind) {
  return (statictemp <= 50 && staticwind > 3) ? (35.74 + 0.6215 * statictemp - 35.75 * Math.pow(staticwind, 0.16) + 0.4275 * statictemp * Math.pow(staticwind, 0.16)).toFixed(1) + " °F": 'N/A';
}

document.getElementById("temp").textContent = statictemp;
document.getElementById("wind").textContent = staticwind;
document.getElementById("conditions").textContent = staticcond;
document.getElementById("wind-chill").textContent = calculateWindChill(statictemp, staticwind);






// \(\text{Wind\ Chill}=35.74+0.6215T-35.75(V^{0.16})+0.4275T(V^{0.16})\)
// const calculateWindChill = (statictemp, staticwind) => (temp <= 50 && windSpeed > 3) ? (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)) : "N/A";
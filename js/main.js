document.querySelector("gulblad").addEventListener("click", infogul);

function infogul() {
  console.log("infogul");
  document.querySelector(".info-text h2").textContent = "GultBlad";
  document.querySelector(".placeholder").textContent = "GultBlad";
}

document.querySelector("bruntglad").addEventListener("click", bruntblad);

function infobrun() {
  console.log("infobrun");
  document.querySelector(".info-text h2").textContent = "BruntBlad";
  document.querySelector(".placeholder").textContent = "Bruntblad";
}

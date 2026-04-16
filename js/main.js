document.querySelector("#gul").addEventListener("click", infogul);
document.querySelector("#sund").addEventListener("click", infosund);
document.querySelector("#trist").addEventListener("click", infotrist);
document.querySelector("#brun").addEventListener("click", infobrun);

function infogul() {
  console.log("infogul");
  document.querySelector(".info-text > h2").textContent = "MIN PLANTE ER GUL";
  document.querySelector(".info-subheadline").textContent = "her er vigtig information om gul plante";
  document.querySelector("#efficiency").innerHTML = "<h3>hvorfor er den gul?</h3> <p> det er den fordi....</p>";
}
function infosund() {
  console.log("infosund");
  document.querySelector(".info-text > h2").textContent = "MIN PLANTE ER SUND:)";
  document.querySelector(".info-subheadline").textContent = "her er vigtig information om sund plante";
  document.querySelector("#efficiency").innerHTML = "<h3>hvorfor er den sund?</h3> <p> det er den fordi....</p>";
}
function infotrist() {
  console.log("infotrist");
  document.querySelector(".info-text > h2").textContent = "MIN PLANTE ER trist)";
  document.querySelector(".info-subheadline").textContent = "her er vigtig information om trist plante";
  document.querySelector("#efficiency").innerHTML = "<h3>hvorfor er den trist?</h3> <p> det er den fordi....</p>";
}
function infobrun() {
  console.log("infobrun");
  document.querySelector(".info-text > h2").textContent = "MIN PLANTE ER BRUN";
  document.querySelector(".info-subheadline").textContent = "Brune blade betyder ofte, at planten er stresset eller udtørret";
  document.querySelector("#efficiency").innerHTML = "<h3>hvorfor er den brun?</h3> <p> det er den fordi....</p>";
}

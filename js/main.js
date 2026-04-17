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

const outputName = document.querySelector("#name_output");
const outputEmail = document.querySelector("#email_output");
const outputDepartment = document.querySelector("#department_output");
const outputMessage = document.querySelector("#message_output");

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  outputName.textContent = formData.get("full_name");
  outputEmail.textContent = formData.get("email");
  // 1. saml værdierne fra select og textarea og vis dem i output-sektionen
  const department = formData.get("department");
  outputDepartment.textContent = department;
  outputMessage.textContent = formData.get("message");

  form.reset();
}

form.addEventListener("submit", handleSubmit);
const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);

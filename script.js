const termsLink = document.getElementById("termsLink");
const privacyLink = document.getElementById("privacyLink");

termsLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "terms.html";
});

privacyLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "privacy.html";
});

function goBack() {
  window.history.back();
}

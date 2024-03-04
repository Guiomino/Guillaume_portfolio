const checkboxWrapper = document.querySelector(".checkbox_wrapper");
const checkbox = document.getElementById("switch");

checkboxWrapper.addEventListener("click", toggleMode);
checkboxWrapper
  .querySelector(".moon")
  .addEventListener("click", () => checkbox.click());
checkboxWrapper
  .querySelector(".sun")
  .addEventListener("click", () => checkbox.click());

function toggleMode() {
  document.body.classList.toggle("lightMode");
  checkbox.checked = document.body.classList.contains("lightMode");
  checkboxWrapper.classList.toggle("active", checkbox.checked);
}

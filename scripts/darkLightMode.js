document.addEventListener("DOMContentLoaded", function () {
  const checkboxWrapper = document.querySelector(".checkbox_wrapper");
  const checkbox = document.getElementById("switch");

  // SET MY FUNCTION WITH LOCAL STORAGE : for UX
  setStyles();

  checkboxWrapper.addEventListener("click", toggleMode);
  checkboxWrapper.querySelectorAll(".moon, .sun").forEach((element) => {
    element.addEventListener("click", () => checkbox.click());
  });

  function toggleMode() {
    const body = document.body;
    const isLightMode = body.classList.toggle("lightMode");

    const backgroundColor = isLightMode ? "#eee" : "#024564";

    // background color : input[type="checkbox"]:after
    checkboxWrapper.style.setProperty(
      "--after-background-color",
      backgroundColor
    );

    checkbox.checked = isLightMode;
    checkboxWrapper.classList.toggle("active", isLightMode);

    // SAVE STATUS MODE IN LOCAL STORAGE
    localStorage.setItem("lightMode", isLightMode);
  }

  // MY FUNCTION WITH LOCAL STORAGE : for UX
  function setStyles() {
    const body = document.body;
    const savedMode = localStorage.getItem("lightMode");
    const isLightMode = savedMode === "true";

    body.classList.toggle("lightMode", isLightMode);

    const backgroundColor = isLightMode ? "#eee" : "#024564";

    // background color de input[type="checkbox"]:after
    checkboxWrapper.style.setProperty(
      "--after-background-color",
      backgroundColor
    );

    checkbox.checked = isLightMode;
    checkboxWrapper.classList.toggle("active", isLightMode);
  }
});

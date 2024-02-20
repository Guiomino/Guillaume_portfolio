const burgerMenuBtn = document.querySelector(".nav_toggle");
const navigation = document.querySelector("nav");

burgerMenuBtn.addEventListener("click", toggleNav);

document.addEventListener("click", closeNavOutside);

function toggleNav(event) {
  burgerMenuBtn.classList.toggle("active");
  navigation.classList.toggle("active");

  // event.stopPropagation();
}

function closeNavOutside(event) {
  if (
    !navigation.contains(event.target) &&
    !burgerMenuBtn.contains(event.target)
  ) {
    burgerMenuBtn.classList.remove("active");
    navigation.classList.remove("active");
  }
}

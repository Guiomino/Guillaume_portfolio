const progressBarContainer = document.createElement("div");
progressBarContainer.className = "progressBarContainer";
document.body.appendChild(progressBarContainer);

const progressBar = document.createElement("div");
progressBar.className = "progressBar";
progressBarContainer.appendChild(progressBar);

function updateProgressBar() {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const progress = (scrolled / scrollHeight) * 100;
  progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateProgressBar);
window.addEventListener("resize", updateProgressBar);
updateProgressBar();

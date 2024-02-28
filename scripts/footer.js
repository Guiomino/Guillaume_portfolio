document.addEventListener("DOMContentLoaded", () => {
  // Créer le footer
  const footer = document.createElement("footer");

  // Div Top
  const topDiv = document.createElement("div");
  topDiv.className = "footer-top";

  // Liens
  const linksDiv = document.createElement("div");
  linksDiv.className = "footer-links";
  const linksHeading = document.createElement("h3");
  linksHeading.textContent = "Links:";
  const linksList = document.createElement("ul");
  ["Skills", "Services", "Contact"].forEach((linkText) => {
    const linkItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#" + linkText.toLowerCase();
    link.textContent = linkText;
    linkItem.appendChild(link);
    linksList.appendChild(linkItem);
  });
  linksDiv.appendChild(linksHeading);
  linksDiv.appendChild(linksList);
  topDiv.appendChild(linksDiv);

  // Div pour créer ligne séparatrice
  const separatorDiv1 = document.createElement("div");
  separatorDiv1.className = "footer-separator";
  topDiv.appendChild(separatorDiv1);

  // Logo
  const logo = document.createElement("img");
  logo.src = "icons/Logo.svg";
  logo.alt = "Logo";
  topDiv.appendChild(logo);

  // Date sous le logo
  const dateParagraph = document.createElement("p");
  dateParagraph.id = "date";
  topDiv.appendChild(dateParagraph);

  // Div pour créer ligne séparatrice
  const separatorDiv2 = document.createElement("div");
  separatorDiv2.className = "footer-separator";
  topDiv.appendChild(separatorDiv2);

  // Liens Sociaux
  const socialMediaDiv = document.createElement("div");
  socialMediaDiv.className = "footer-social-media";
  const socialMediaHeading = document.createElement("h3");
  socialMediaHeading.textContent = "Social Media:";
  const socialMediaList = document.createElement("ul");
  ["Linkedin", "Github", "Instagram", "Site perso"].forEach((socialText) => {
    const socialItem = document.createElement("li");
    const socialLink = document.createElement("a");
    socialLink.href = "#"; // Remplacez "#" par vos liens sociaux réels
    socialLink.textContent = socialText;
    socialItem.appendChild(socialLink);
    socialMediaList.appendChild(socialItem);
  });
  socialMediaDiv.appendChild(socialMediaHeading);
  socialMediaDiv.appendChild(socialMediaList);
  topDiv.appendChild(socialMediaDiv);

  // Ajouter le Div Top au footer
  footer.appendChild(topDiv);

  // Div Middle
  const middleDiv = document.createElement("div");
  middleDiv.className = "footer-middle";

  // Bouton Copier l'adresse e-mail
  const emailButton = document.createElement("button");
  emailButton.textContent = "Copy my email address 📒";
  emailButton.addEventListener("click", () => {
    copyToClipboard("estrade.guillaume.simplon@gmail.com");
    updateButtonState(emailButton);
  });
  middleDiv.appendChild(emailButton);

  // Ajouter le Div Middle au footer
  footer.appendChild(middleDiv);

  // Div Bottom
  const bottomDiv = document.createElement("div");
  bottomDiv.className = "footer-bottom";

  // Bouton Scroll to Top
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.textContent = "Scroll to Top";
  scrollToTopButton.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
  bottomDiv.appendChild(scrollToTopButton);

  // Copyright
  const copyrightParagraph = document.createElement("p");
  copyrightParagraph.textContent =
    "©2024 - guillaumesimplon.github.io/Guillaume_portfolio";
  bottomDiv.appendChild(copyrightParagraph);

  // Ajouter le Div Bottom au footer
  footer.appendChild(bottomDiv);

  // Ajouter le footer au corps du document
  document.body.appendChild(footer);

  // Fonction pour copier dans le presse-papiers
  function copyToClipboard(email) {
    const dummyInput = document.createElement("input");
    document.body.appendChild(dummyInput);
    dummyInput.setAttribute("value", email);
    dummyInput.select();
    document.execCommand("copy");
    document.body.removeChild(dummyInput);
  }

  // Fonction pour mettre à jour l'état du bouton
  function updateButtonState(button) {
    button.textContent = "Email address copied ! ✅";
    setTimeout(() => {
      button.textContent = "Copy my email address 📒";
    }, 3000); // 3000 millisecondes (3 secondes)
  }

  // Fonction pour mettre à jour la date
  function updateDate() {
    const currentDate = new Date();
    const formattedDate = currentDate
      .toLocaleString("en-EN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(/at/, "-");
    dateParagraph.innerHTML = formattedDate;
  }

  // Mettre à jour la date toutes les secondes
  setInterval(updateDate, 1000);
  updateDate();
});

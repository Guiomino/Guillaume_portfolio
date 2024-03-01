document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");

  // SCROLL TO TOP BUTTON
  const scrollToTopBtn = document.createElement("img");
  scrollToTopBtn.className = "scrollToTopBtn";
  scrollToTopBtn.src = "icons/Footer_ArrowTop.svg";
  scrollToTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
  footer.appendChild(scrollToTopBtn);

  // TOP CONTAINER
  const topDiv = document.createElement("div");
  topDiv.className = "footerTop";

  // LINKS
  const linksDiv = document.createElement("div");
  linksDiv.className = "footerLinks";
  const linksHeading = document.createElement("h3");
  linksHeading.textContent = "Links";
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

  // SEPARATE LINE
  const separatorDiv1 = document.createElement("div");
  separatorDiv1.className = "footerSeparator";
  topDiv.appendChild(separatorDiv1);

  // LOGO AND DATE TIME
  const logoAndDate = document.createElement("div");
  logoAndDate.className = "logoAndDate";

  const logo = document.createElement("img");
  logo.src = "icons/Logo.svg";
  logo.alt = "Logo";
  logoAndDate.appendChild(logo);

  const dateParagraph = document.createElement("p");
  dateParagraph.id = "date";
  logoAndDate.appendChild(dateParagraph);
  topDiv.appendChild(logoAndDate);

  // SEPARATE LINE 2
  const separatorDiv2 = document.createElement("div");
  separatorDiv2.className = "footerSeparator";
  topDiv.appendChild(separatorDiv2);

  // SOCIAL MEDIA
  const socialMediaDiv = document.createElement("div");
  socialMediaDiv.className = "footerSocialMedia";
  const socialMediaTitle = document.createElement("h3");
  socialMediaTitle.textContent = "Social Media";
  const socialMediaList = document.createElement("ul");
  const socialMediaData = [
    {
      text: "Linkedin",
      url: "https://www.linkedin.com/in/guillaume-estrade",
      icon: "Social_Linkedin.svg",
    },
    {
      text: "Github",
      url: "https://github.com/GuillaumeSimplon",
      icon: "Skills_Github.svg",
    },
    {
      text: "Instagram",
      url: "https://www.instagram.com/guiomino",
      icon: "Social_Instagram.svg",
    },
    {
      text: "Novus",
      url: "https://www.guiomino.com",
      icon: "Projects_Novus.svg",
    },
  ];
  socialMediaData.forEach((socialItemMedia) => {
    const socialItem = document.createElement("li");

    const socialIcon = document.createElement("img");
    socialIcon.src = `icons/${socialItemMedia.icon}`;
    socialIcon.alt = socialMediaData.text;
    socialItem.appendChild(socialIcon);

    const socialLink = document.createElement("a");
    socialLink.href = socialItemMedia.url;
    socialLink.textContent = socialItemMedia.text;

    socialItem.appendChild(socialLink);
    socialMediaList.appendChild(socialItem);
  });
  socialMediaDiv.appendChild(socialMediaTitle);
  socialMediaDiv.appendChild(socialMediaList);
  topDiv.appendChild(socialMediaDiv);

  footer.appendChild(topDiv);

  // MIDDLE CONTAINER
  const middleDiv = document.createElement("div");
  middleDiv.className = "footerMiddle";

  // EMAIL BUTTON COPY TO CLIPBOARD
  const clipboardTitle = document.createElement("h4");
  clipboardTitle.textContent =
    "If you prefer to contact me directly from your email box, without using the form:";

  const emailButton = document.createElement("button");
  emailButton.textContent = "Copy my email address 📒";
  emailButton.addEventListener("click", () => {
    copyToClipboard("estrade.guillaume.simplon@gmail.com");
    updateButtonState(emailButton);
  });
  middleDiv.appendChild(clipboardTitle);
  middleDiv.appendChild(emailButton);

  footer.appendChild(middleDiv);

  // BOTTOM CONTAINER
  const bottomDiv = document.createElement("div");
  bottomDiv.className = "footerBottom";

  // COPYRIGHT
  const copyrightParagraph = document.createElement("p");
  copyrightParagraph.textContent =
    "©2024 - guillaumesimplon.github.io/Guillaume_portfolio";
  bottomDiv.appendChild(copyrightParagraph);

  footer.appendChild(bottomDiv);

  document.body.appendChild(footer);

  // SCROLL TO TOP BUTTON FUNCTION()
  function copyToClipboard(email) {
    const dummyInput = document.createElement("input");
    document.body.appendChild(dummyInput);
    dummyInput.setAttribute("value", email);
    dummyInput.select();
    document.execCommand("copy");
    document.body.removeChild(dummyInput);
  }

  // UPDATE CCLIPBOARD COPY BUTTON FUNCTION()
  function updateButtonState(button) {
    button.textContent = "EMAIL ADDRESS COPIED ! ✅";
    setTimeout(() => {
      button.textContent = "Copy my email address 📒";
    }, 4000);
  }

  // DATETIME FUNCTION()
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
  setInterval(updateDate, 1000);
  updateDate();
});

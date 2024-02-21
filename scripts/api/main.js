function getMain(main) {
  const mainSection = document.querySelector(".mainSection");

  // MAIN CONTENT
  const mainContainer = document.createElement("div");
  if (main && main.length > 0) {
    main.forEach((item) => {
      mainContainer.className = "mainContainer";
      const title = document.createElement("h1");
      title.className = "mainTitle";
      title.textContent = item.title;

      const subtitle = document.createElement("h2");
      subtitle.className = "mainSubtitle";
      subtitle.textContent = item.subtitle;

      const teaser = document.createElement("h3");
      teaser.className = "mainTeaser";
      teaser.textContent = item.teaser;

      mainContainer.appendChild(title);
      mainContainer.appendChild(subtitle);
      mainContainer.appendChild(teaser);
    });

    // SOCIAL
    const baseUrlIcons = "icons/";

    const iconNames = [
      "Social_Linkedin.svg",
      "Social_Instagram.svg",
      "Skills_Github.svg",
      "Skills_Wordpress.svg",
    ];

    const links = [
      "https://www.linkedin.com/in/guillaume-estrade/",
      "https://www.instagram.com/guiomino/",
      "https://github.com/GuillaumeSimplon",
      "https://www.guiomino.com/",
    ];

    const social = document.createElement("div");
    social.className = "socialIcons";

    iconNames.forEach((name, index) => {
      const link = document.createElement("a");
      link.href = links[index];
      link.target = "_blank";

      const icon = document.createElement("img");
      icon.src = baseUrlIcons + name;

      link.appendChild(icon);
      social.appendChild(link);
    });
    mainContainer.appendChild(social);

    // CTA
    const mainButtons = [
      { img: "./icons/Projects.svg", text: "Projects", href: "/#projectsSectionId" },
      { img: "./icons/Contact.svg", text: "Contact", href: "/#contactSectionId" },
    ];
    const mainButtonsContainer = document.createElement("div");
    mainButtonsContainer.className = "mainButtons";
    mainButtons.forEach((buttonContent) => {
      const button = document.createElement("a");
      button.innerHTML = `<img src="${buttonContent.img}"><p>${buttonContent.text}</p></a>`;
      button.href = buttonContent.href;
      button.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = buttonContent.href;
      });
      mainButtonsContainer.appendChild(button);
      mainContainer.appendChild(mainButtonsContainer);
    });

    mainSection.appendChild(mainContainer);
  }
}

export { getMain };

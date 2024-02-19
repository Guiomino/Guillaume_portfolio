function getMain(main) {
  const mainSection = document.querySelector(".mainSection");

  // MAIN CONTENT
  if (main && main.length > 0) {
    main.forEach((item) => {
      const title = document.createElement("h1");
      title.className = "mainTitle";
      title.textContent = item.title;

      const subtitle = document.createElement("h2");
      subtitle.className = "mainSubtitle";
      subtitle.textContent = item.subtitle;

      const teaser = document.createElement("h3");
      teaser.className = "mainTeaser";
      teaser.textContent = item.teaser;

      mainSection.appendChild(title);
      mainSection.appendChild(subtitle);
      mainSection.appendChild(teaser);
    });

    // SOCIAL
    const baseUrlIcons =
      "https://raw.githubusercontent.com/GuillaumeSimplon/repository_files_for_API_portfolio/master/icons/";

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
      "https://www.guiomino.com/"
    ];

    const social = document.createElement("div");
    social.className = "socialIcons"

    iconNames.forEach((name, index) => {
      const link = document.createElement("a");
      link.href = links[index];
      link.target = "_blank";

      const icon = document.createElement("div");
      icon.className = "icon";
      icon.style.backgroundImage = `url('${baseUrlIcons + name}')`;

      link.appendChild(icon);
      social.appendChild(link);
    });
    mainSection.appendChild(social);
  }
}

export { getMain };

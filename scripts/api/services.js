function getServices(services) {
  const servicesSection = document.querySelector(".servicesSection");

  // TITLE
  const getIconServices = `icons/Services.svg`;
  const skillsTitle = document.createElement("div");
  skillsTitle.className = "title";
  const skillsTitleContent = `
    <img>
    <h2></h2>
    `;
  skillsTitle.innerHTML = skillsTitleContent;
  skillsTitle.querySelector("img").src = `${getIconServices}`;
  skillsTitle.querySelector("h2").textContent = "SERVICES";

  servicesSection.appendChild(skillsTitle);

  const teaser = document.createElement("h3");
  teaser.className = "teaser";
  teaser.textContent = services[0].teaser;

  servicesSection.appendChild(teaser);

  // SERVICES LIST
  const cardServicesContainer = document.createElement("div");
  cardServicesContainer.className = "cardServicesContainer";
  services[1].servicesTable.forEach((service) => {
    const cardServices = document.createElement("div");
    cardServices.className = "cardServices";

    const serviceTitle = document.createElement("div");
    serviceTitle.className = "serviceTitle";
    const iconServiceContainer = document.createElement("div");
    iconServiceContainer.className = "iconServiceContainer"
    const iconService = document.createElement("img");
    iconService.src = `./icons/${service.icon}`;

    const titleService = document.createElement("h3");
    titleService.textContent = service.title;

    iconServiceContainer.appendChild(iconService)
    serviceTitle.appendChild(iconServiceContainer);
    serviceTitle.appendChild(titleService);

    cardServices.appendChild(serviceTitle);

    const descriptionServices = document.createElement("ul");
    service.description.forEach((description, index) => {
      const listItem = document.createElement("li");

      const numbering = document.createElement("span");
      // numbering.className = "numbering";
      numbering.textContent = index + 1;

      const descriptionText = document.createElement("p");
      // descriptionText.className = "descriptionText";
      descriptionText.textContent = description;

      listItem.appendChild(numbering);
      listItem.appendChild(descriptionText);

      descriptionServices.appendChild(listItem);
    });

    cardServices.appendChild(descriptionServices);
    cardServicesContainer.appendChild(cardServices);
  });
  servicesSection.appendChild(cardServicesContainer);
}

export { getServices };

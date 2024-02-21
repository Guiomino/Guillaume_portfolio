function getServices(services) {
  const servicesSection = document.querySelector(".servicesSection");

  // TITLE
  const getIconServices = `/icons/Services.svg`;
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

  // SERVICES LIST
  const teaser = document.createElement("h3");
  teaser.className = "teaser";
  teaser.textContent = services[0].teaser;

  servicesSection.appendChild(teaser);

  services[1].servicesTable.forEach((service) => {
    const cardServices = document.createElement("div");
    cardServices.className = "cardServices";
    cardServices.innerHTML = `<h3>${service.title}</h3>`;

    const descriptionServices = document.createElement("ul");
    service.description.forEach((description) => {
      const listItem = document.createElement("li");
      listItem.textContent = description;
      descriptionServices.appendChild(listItem);
    });

    servicesSection.appendChild(cardServices);
    cardServices.appendChild(descriptionServices);
  });
}

export { getServices };

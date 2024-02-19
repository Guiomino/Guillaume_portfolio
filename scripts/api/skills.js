function getSkills(skills) {
  const skillsSection = document.querySelector(".skillsSection");

  // TITLE
  const getIconSkills = `icons/Skills.svg`;
  const skillsTitle = document.createElement("div");
  skillsTitle.className = "title";
  const skillsTitleContent = `
  <img>
  <h2></h2>
  `;
  skillsTitle.innerHTML = skillsTitleContent;
  skillsTitle.querySelector("img").src = `${getIconSkills}`;
  skillsTitle.querySelector("h2").textContent = "SKILLS";

  skillsSection.appendChild(skillsTitle);

  // TEASER
  const teaser = document.createElement("h3");
  teaser.className = "teaser";
  teaser.textContent = skills[0].teaser;

  skillsSection.appendChild(teaser);


  // SKILLS LIST  
  skills[1].skillTable.forEach((skill) => {
    const cardSkills = document.createElement("div");
    cardSkills.className = "cardSkills";
    cardSkills.innerHTML = `<h3>${skill.title}</h3>`;

    const toolsSkills = document.createElement("ul");
    skill.tools.forEach((tool) => {
      const listItem = document.createElement("li");

      const iconElement = document.createElement("img");
      iconElement.src = `./icons/${tool.icon}`;
      iconElement.className = "iconSkills";
      listItem.appendChild(iconElement);

      const toolName = document.createElement("p");
      toolName.textContent = tool.name;
      listItem.appendChild(toolName);

      toolsSkills.appendChild(listItem);
    });

    skillsSection.appendChild(cardSkills);
    cardSkills.appendChild(toolsSkills);
  });
}

export { getSkills };


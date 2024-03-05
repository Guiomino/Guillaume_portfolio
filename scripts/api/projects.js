function getProjects(projects) {
  const projectsSection = document.querySelector(".projectsSection");

  const getIconProjects = `icons/Projects.svg`;
  const projectsTitle = document.createElement("div");
  projectsTitle.className = "title";
  const projectsTitleContent = `
    <img>
    <h2></h2>
    `;
  projectsTitle.innerHTML = projectsTitleContent;
  projectsTitle.querySelector("img").src = `${getIconProjects}`;
  projectsTitle.querySelector("h2").textContent = "PROJECTS";

  projectsSection.appendChild(projectsTitle);

  const teaser = document.createElement("h3");
  teaser.className = "teaser";
  teaser.textContent = projects[0].teaser;

  projectsSection.appendChild(teaser);

  //   PROJECTS CARDS
  projects[1].projectsTable.forEach((project) => {
    const cardProjects = document.createElement("div");
    cardProjects.className = "cardProjects";
    // PROJECTS TITLE
    const projectTitleContainer = document.createElement("div");
    projectTitleContainer.className = "projectTitleContainer";

    const projectIconContainer = document.createElement("div");
    projectIconContainer.className = "projectIconContainer";
    const projectIcon = document.createElement("img");
    projectIcon.src = `./icons/${project.icon}`;
    projectIconContainer.appendChild(projectIcon);
    projectTitleContainer.appendChild(projectIconContainer);

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;
    projectTitleContainer.appendChild(projectTitle);

    // PROJECTS DESCRIPTION
    const projectDetailsContainer = document.createElement("div");
    projectDetailsContainer.className = "projectDetailsContainer";

    // FIRST PART => TOOLS
    const projectDetailsTool = document.createElement("div");
    projectDetailsTool.className = "tools";
    const toolTitle = document.createElement("div");
    const toolNumbering = document.createElement("span");
    toolNumbering.textContent = "1";
    const toolText = document.createElement("h4");
    toolText.textContent = "Tools :";

    toolTitle.appendChild(toolNumbering);
    toolTitle.appendChild(toolText);
    projectDetailsTool.appendChild(toolTitle);

    const img = document.createElement("img");
    img.src = `./images/${project.img}`;
    projectDetailsTool.appendChild(img);

    const tool = document.createElement("p");
    tool.textContent = project.tools;
    projectDetailsTool.appendChild(tool);
    projectDetailsContainer.appendChild(projectDetailsTool);

    // SECOND PART => DESCRIPTION
    const projectDetailsDescription = document.createElement("div");
    projectDetailsDescription.className = "description";
    const descriptionTitle = document.createElement("div");
    const descriptionNumbering = document.createElement("span");
    descriptionNumbering.textContent = "2";
    const descriptionText = document.createElement("h4");
    descriptionText.textContent = "Description :";

    descriptionTitle.appendChild(descriptionNumbering);
    descriptionTitle.appendChild(descriptionText);
    projectDetailsDescription.appendChild(descriptionTitle);

    const description = document.createElement("p");
    description.textContent = project.description;
    projectDetailsDescription.appendChild(description);

    projectDetailsContainer.appendChild(projectDetailsDescription);

    // THIRD PART => CHALLENGES
    const projectDetailsChallenges = document.createElement("div");
    projectDetailsChallenges.className = "challenges";
    const challengesTitle = document.createElement("div");
    const challengesNumbering = document.createElement("span");
    challengesNumbering.textContent = "3";
    const challengesText = document.createElement("h4");
    challengesText.textContent = "Challenges and solutions :";

    challengesTitle.appendChild(challengesNumbering);
    challengesTitle.appendChild(challengesText);
    projectDetailsChallenges.appendChild(challengesTitle);

    const challenges = document.createElement("p");
    challenges.textContent = project.challenges;
    projectDetailsChallenges.appendChild(challenges);

    projectDetailsContainer.appendChild(projectDetailsChallenges);

    cardProjects.appendChild(projectTitleContainer);
    cardProjects.appendChild(projectDetailsContainer);
    projectsSection.appendChild(cardProjects);
  });
}

export { getProjects };

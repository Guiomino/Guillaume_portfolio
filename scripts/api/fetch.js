// @ts-check


import { getMain } from "../api/main.js";
import { getSkills } from "../api/skills.js";
import { getServices } from "../api/services.js";

function getData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(`${response.status}`);
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      // console.log(data.main);
      // console.log(data.services);
      getMain(data.main);
      getSkills(data.skills);
      getServices(data.services);
    })
    .catch((error) => {
      console.error("Error fetching service :", error);
    });
}
getData(
  "https://raw.githubusercontent.com/GuillaumeSimplon/repository_files_for_API_portfolio/master/data.json"
);

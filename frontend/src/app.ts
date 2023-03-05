import "./style/style.css";
import {
  hi,
  fullNameSearch,
  connSeacrh,
  descSearch,
  jobSearch,
} from "./scripts/search";
import { create } from "./scripts/create";

hi();

let formCreate =
  (document.querySelector(".postCreate") as HTMLFormElement) || null;

create(formCreate);

formCreate.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const respons = await fetch("http://127.0.0.1:3033/", {
      method: "POST",
      body: JSON.stringify({
        FullName: fullNameSearch(),
        Desc: descSearch(),
        Info: connSeacrh(),
        Job: jobSearch(),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await respons.json();
    console.log(result);
  } catch (e) {
    console.log("Error: ", e);
  }
});

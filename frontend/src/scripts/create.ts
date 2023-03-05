export function create(formCreate: HTMLFormElement) {
  const elementFeat = (
    element: any,
    name: string,
    type?: string,
    className?: string,
    parent?: HTMLElement,
    req?: boolean
  ) => {
    if (type != "") element.type = type;
    element.placeholder = name;
    element.className = className;
    element.name = name;
    element.required = req;
    parent.appendChild(element);
  };
  let addJob = document.getElementById("jobCreate") as HTMLButtonElement;

  addJob.addEventListener("click", () => {
    const blockComp = document.createElement("div");
    blockComp.className = "job";
    const inputComp = document.createElement("input");
    elementFeat(inputComp, "Company", "text", "inpJob", blockComp, true);

    const inputCity = document.createElement("input");
    elementFeat(inputCity, "City", "text", "inpJob", blockComp, true);

    const inputPost = document.createElement("input");
    elementFeat(inputPost, "Post", "text", "inpJob", blockComp, true);

    const inputStart = document.createElement("input");
    elementFeat(inputStart, "StartDate", "date", "inpJob", blockComp);

    const inputEnd = document.createElement("input");
    elementFeat(inputEnd, "EndDate", "date", "inpJob", blockComp);

    const inputDate = document.createElement("input");
    elementFeat(inputDate, "DateCheck", "checkbox", "inpCheck", blockComp);

    const inputArea = document.createElement("textarea") as HTMLTextAreaElement;
    elementFeat(inputArea, "Comment", "", "inpArea", blockComp);

    formCreate.appendChild(blockComp);

    const deleteJob = document.createElement("button");
    deleteJob.innerText = "X";
    deleteJob.onclick = () => {
      deleteJob.parentElement.remove();
    };
    blockComp.appendChild(deleteJob);
  });
}

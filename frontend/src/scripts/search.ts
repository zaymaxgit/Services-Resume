export const hi = (): void => {
  console.log("Test: Hi my Lord");
};

export function fullNameSearch(): string {
  let fullName = (document.getElementById("x") as HTMLInputElement).value;
  if (fullName != null || undefined) {
    return fullName;
  }
}

export const connSeacrh = (): any => {
  let inpConn: NodeListOf<Element> = document.querySelectorAll(".inpConn");
  if (inpConn.length != 0) {
    return Array.from(inpConn, (v) => (v as HTMLInputElement).value);
  }
};

export const descSearch = (): any => {
  let desc = (document.getElementById("bio") as HTMLTextAreaElement).value;
  if (desc != null || undefined) {
    return desc;
  }
};

export const jobSearch = (): any => {
  let inpClass: NodeListOf<Element> = document.querySelectorAll(".inpJob");
  let inpCheck: NodeListOf<Element> = document.querySelectorAll(".inpCheck");
  let inpArea: NodeListOf<Element> = document.querySelectorAll(".inpArea");
  if (inpClass.length != 0) {
    console.log("inpClass: ", inpClass);
    let arrArea = Array.from(inpArea, (v) => (v as HTMLTextAreaElement).value);
    let arrCheck = Array.from(inpCheck, (v) => (v as HTMLInputElement).checked);
    let arr = Array.from(inpClass, (v) => (v as HTMLInputElement).value);
    console.log("inpArea: ", inpArea);
    let f = [];
    for (let i = 0, y = 0; i < arr.length; i += 5, y++) {
      f.push([
        arr[i],
        arr[i + 1],
        arr[i + 2],
        arr[i + 3],
        arr[i + 4],
        arrCheck[y],
        arrArea[y],
      ]);
    }
    return f;
    //console.log("dataResume: ", dataResume);
  }
};

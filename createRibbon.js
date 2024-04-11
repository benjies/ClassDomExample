import { Ribbon, RibbonItem, dataRibbon } from "./Ribbon.js";

const ribbonInsertElement = document.getElementById("insert");
const insertButton = document.getElementById("insert-btn");

insertButton.addEventListener("click", (e) => generateRibbon(dataRibbon));

function generateRibbon(ribbon) {
  if (!(ribbon instanceof Ribbon)) {
    console.log("Failed to generate ribbon.");
  }

  // Removes all elements so it does not duplicate on the DOM
  ribbonInsertElement.replaceChildren();

  // Get the ribbons
  const ribbonData = ribbon.getRibbons();

  // Generate each ribbon on the DOM
  ribbonData.forEach((ribbon) => {
    let ribbonTag = document.createElement("p");
    ribbonTag.innerText = ribbon.getName();
    ribbonInsertElement.append(ribbonTag);
  });
}

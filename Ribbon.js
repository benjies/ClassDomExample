// Class to hold the entire ribbons collection
class Ribbon {
  constructor() {
    this.ribbons = [];
  }

  addRibbon(ribbon) {
    if (ribbon instanceof RibbonItem) {
      this.ribbons.push(ribbon);
    } else {
      console.log("Failed to add ribbon.");
    }
  }

  getRibbons() {
    return this.ribbons;
  }

  getRibbonById(id) {
    const ribbon = this.ribbons.find((ribbon) => ribbon.id === id);

    if (ribbon) {
      return ribbon;
    } else {
      console.log(`Failed to find ribbon by id: ${id}`);
    }
  }
}

// Class to hold the individual ribbon
class RibbonItem {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
}

// Init the ribbon
const dataRibbon = new Ribbon();

// Add the new ribbons
const r1 = new RibbonItem("Red", 1);
const r2 = new RibbonItem("Green", 2);
const r3 = new RibbonItem("Blue", 3);

// Add ribbons to the ribbon
dataRibbon.addRibbon(r1);
dataRibbon.addRibbon(r2);
dataRibbon.addRibbon(r3);

export { Ribbon, RibbonItem, dataRibbon };

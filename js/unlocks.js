const unlockState = {
  smelting: false,
  production: false,
  structures: false,
  autoMiner: false,
  generators: false,
  furnaces: false
};

function checkUnlocks() {
  unlockSmelting();
  unlockProduction();
  unlockStructures();
  unlockAutoMiner();
  unlockGenerators();
}

function unlockSmelting() {
  if (!unlockState.smelting &&
    resources.coal >= 1 &&
    (resources.ironOre >= 2 || resources.copperOre >= 2)) {

    unlockState.smelting = true;
    const tab = document.getElementById("tabSmelting");
    tab.classList.remove("hiddenTab");
    tab.classList.add("newTab");
  }
}

function unlockProduction() {
  if (!unlockState.production &&
    (resources.ironIngot >= 1 || resources.copperIngot >= 1)) {

    unlockState.production = true;
    const tab = document.getElementById("tabProduction");
    tab.classList.remove("hiddenTab");
    tab.classList.add("newTab");
    document.getElementById("productionMaterials").style.display = "block";
  }
}

function unlockAutoMiner() {
  if (!unlockState.autoMiner &&
    (miners.total >= 1)) {

    unlockState.autoMiner = true;
    document.getElementById("autoMinerSection").style.display = "inline-block";
  }
}

function unlockGenerators() {
  if (!unlockState.generators &&
    (power.generator >= 1)) {

    unlockState.generators = true;
    document.getElementById("generatorSection").style.display = "inline-block";
  }
}

function unlockFurnaces() {
  if (!unlockState.furnaces &&
    (furnaces.total >= 1)) {

    unlockState.furnaces = true;
    document.getElementById("furnaceSection").style.display = "inline-block";
  }
}

function unlockStructures() {
  //not in yet
}
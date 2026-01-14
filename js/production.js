function autoMining() {
  const remainingPower = calculateRemainingPower();

  if (remainingPower >= 0) {
    resources.coal += miners.coal;
    resources.stone += miners.stone;
    resources.ironOre += miners.iron;
    resources.copperOre += miners.copper;
    update();
  }
}

function autoSmelting() {
  if (
    resources.ironOre >= requirements.ironOre &&
    resources.coal > requirements.coal &&
    furnaces.iron >= 1
  ) {
    resources.ironOre -= requirements.ironOre * furnaces.iron;
    resources.coal -= requirements.coal * furnaces.iron;
    resources.ironIngot += furnaces.iron;
  }

  if (
    resources.copperOre >= requirements.copperOre &&
    resources.coal > requirements.coal &&
    furnaces.copper >= 1
  ) {
    resources.copperOre -= requirements.copperOre * furnaces.copper;
    resources.coal -= requirements.coal * furnaces.copper;
    resources.copperIngot += furnaces.copper;
  }

}

function smeltWithProgress(type, elementId) {
  if (!resources[`${type}Active`] && resources[`${type}Ore`] >= requirements[`${type}Ore`] && resources.coal >= requirements.coal) {
    resources[`${type}Active`] = true;
    resources[`${type}Ore`] -= requirements[`${type}Ore`];
    resources.coal -= requirements.coal;
    // update();

    let width = 0;
    const bar = document.getElementById(elementId);

    //Protection for failing to load bar
    if (!bar) { 
      console.warn("Progress bar not found:", elementId); 
      resources[`${type}Active`] = false; 
      return; 
    }

    const id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
        resources[`${type}Ingot`] += 1;
        resources[`${type}Active`] = false;
        bar.value = 0;
        update();
      } else {
        width++;
        bar.value = width;
      }
    }, 10);
  }
}

function craftRecipe(costs, outputResource) {
  const canAfford = Object.entries(costs).every(
    ([resource, amount]) => resources[resource] >= amount
  );

  if (canAfford) {
    for (const [resource, amount] of Object.entries(costs)) {
      resources[resource] -= amount;
    }
    resources[outputResource]++;
    update();
  }
}

function makeGear() {
  craftRecipe({ ironIngot: requirements.ironGear }, 'ironGear');
}

function makeWire() {
  craftRecipe({ copperIngot: requirements.copperWire }, 'copperWire');
}

function makeGenerator() {
  const canCraft = Object.entries(buildCosts.generator).every(
    ([key, val]) => resources[key] >= val
  );
  if (canCraft) {
    for (const [key, val] of Object.entries(buildCosts.generator)) {
      resources[key] -= val;
    }
    power.generator++;
    update();
  }
}

function makeMiner() {
  const canCraft = Object.entries(buildCosts.miner).every(
    ([key, val]) => resources[key] >= val
  );
  if (canCraft) {
    for (const [key, val] of Object.entries(buildCosts.miner)) {
      resources[key] -= val;
    }
    miners.total++;
    update();
  }
}

function makeFurnace() {
  const canCraft = Object.entries(buildCosts.furnace).every(
    ([key, val]) => resources[key] >= val
  );
  if (canCraft) {
    for (const [key, val] of Object.entries(buildCosts.furnace)) {
      resources[key] -= val;
    }
    furnaces.total++;
    update();
  }
}
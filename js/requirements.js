const requirements = {
  coal: 1,
  ironOre: 2,
  ironGear: 1, //Requires 1 iron ingot
  copperOre: 2,
  copperWire: 1 //Requires 1 copper ingot
};

const smelter = {
  iron: { time: 5, active: false},
  copper: { time: 5, active: false}
};

const buildCosts = {
  generator: { ironGear: 2, copperWire: 10, stone: 10 },
  miner: { ironGear: 10, copperWire: 2, stone: 10 },
  furnace: { ironGear: 5, copperWire: 5, stone: 20 }
};
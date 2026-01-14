const power = {
  generator: 0,
  activeGenerator: 0,
  generatorPower: 10,
  total: 0,
  frozen: false
};

const miners = {
  total: 0,
  active: 0,
  coal: 0,
  stone: 0,
  iron: 0,
  copper: 0,
  power: 2
};

const furnaces = {
  total: 0,
  iron: 0,
  copper: 0
};

function assignGenerator(direction = 'add') {
  if (direction === 'add' && power.generator > power.activeGenerator && resources.coal >= 1) {
    power.activeGenerator++;
  } else if (direction === 'sub' && power.activeGenerator > 0) {
    power.activeGenerator--;
  }
  update();
}

function assignMiner(type, direction = 'add') {
  if (direction === 'add' && miners.total >= 1) {
    miners.total--;
    miners[type]++;
  } else if (direction === 'sub' && miners[type] >= 1) {
    miners.total++;
    miners[type]--;
  }
  update();
}

function assignFurnace(type, direction = 'add') {
  if (direction === 'add' && furnaces.total >= 1) {
    furnaces.total--;
    furnaces[type]++;
  } else if (direction === 'sub' && furnaces[type] >= 1) {
    furnaces.total++;
    furnaces[type]--;
  }
  update();
}


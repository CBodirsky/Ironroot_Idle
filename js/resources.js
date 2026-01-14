//define variables
const resources = {
  coal: 0,
  stone: 0,
  ironOre: 0,
  ironIngot: 0,
  copperOre: 0,
  copperIngot: 0,
  ironGear: 0,
  copperWire: 0,
  ironActive: false,
  copperActive: false
};

function mine(resourceKey) {
    if (resources.hasOwnProperty(resourceKey)) { 
        resources[resourceKey]++; 
        update(); 
    } 
}
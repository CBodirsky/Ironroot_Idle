function update() {
  // Power calculations
  power.total = power.activeGenerator * power.generatorPower;
  miners.active = miners.coal + miners.stone + miners.iron + miners.copper;
  const remainingPower = calculateRemainingPower();

  // Update DOM values
  updateResourceText();
  updateRequirementText();
  updateMachineText();
  updatePowerText();
  updateBuildCostText();
  checkUnlocks();
}

function updateResourceText() {
  for (const [key, value] of Object.entries(resources)) {
    // Skip active resource usage
    if (key.endsWith("Active")) continue;
    const element = document.getElementById(`${key}Text`);
    if (element) element.innerHTML = value;
  }
}

function updateRequirementText() {
  for (const [key, value] of Object.entries(requirements)) {
    const element = document.getElementById(`${key}ReqText`);
    if (element) element.innerHTML = value;
  }
}

function updateMachineText() {
  const map = {
    generatorText: power.generator,
    generatorText2: power.generator,
    activeGeneratorText: power.activeGenerator,
    activeGeneratorText2: power.activeGenerator,
    minerText: miners.total,
    coalMinerText: miners.coal,
    stoneMinerText: miners.stone,
    ironMinerText: miners.iron,
    copperMinerText: miners.copper,
    furnaceText: furnaces.total,
    ironFurnaceText: furnaces.iron,
    copperFurnaceText: furnaces.copper
  };

  for (const [id, value] of Object.entries(map)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
  }
}

function updatePowerText() {
  document.getElementById('totalPowerText').innerHTML = power.total;
  document.getElementById('remainingPowerText').innerHTML = calculateRemainingPower();
}

function updateBuildCostText() {
  document.getElementById('gengReqText').innerHTML = buildCosts.generator.ironGear;
  document.getElementById('genwReqText').innerHTML = buildCosts.generator.copperWire;
  document.getElementById('gensReqText').innerHTML = buildCosts.generator.stone;

  document.getElementById('minergReqText').innerHTML = buildCosts.miner.ironGear;
  document.getElementById('minerwReqText').innerHTML = buildCosts.miner.copperWire;
  document.getElementById('minersReqText').innerHTML = buildCosts.miner.stone;
  document.getElementById('icoalReqText').innerHTML = requirements.coal;
  document.getElementById('ccoalReqText').innerHTML = requirements.coal;

  document.getElementById('furnacegReqText').innerHTML = buildCosts.furnace.ironGear;
  document.getElementById('furnacewReqText').innerHTML = buildCosts.furnace.copperWire;
  document.getElementById('furnacesReqText').innerHTML = buildCosts.furnace.stone;
}

//tabs
function openTab(evt, actionTabs) {
  // Declare all variables
  var i, tabcontent, tablinks;

  //remove highlight from the clicked tab
  evt.currentTarget.classList.remove("newTab");

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(actionTabs).style.display = "block";
  evt.currentTarget.className += " active";
}

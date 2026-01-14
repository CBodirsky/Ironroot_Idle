function calculateRemainingPower() {
  const usedPower = miners.active * miners.power;
  return power.total - usedPower;  
}

function generatePower() {
  const remainingPower = calculateRemainingPower();
  if (resources.coal < power.activeGenerator) {
    power.activeGenerator = 0;
  }
  else if (remainingPower < 0) {
    power.frozen = true; //add a notice with frozen power prod
    document.getElementById("remainingPowerText").style.color = 'red';
  }
  else {
    power.frozen = false;
    document.getElementById("remainingPowerText").style.color = 'black';
    totalPower = power.activeGenerator * power.generatorPower;
    resources.coal -= power.activeGenerator;
    update();
  }
}
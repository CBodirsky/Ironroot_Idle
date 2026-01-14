//startup commands
window.onload = function() {
  startTab();
  startIntervals();
  update();
}

function startTab() {
  document.getElementById("defaultOpen").click();
}

function startIntervals() {
  setInterval(generatePower, 1000);
  setInterval(autoMining, 1000);
  setInterval(autoSmelting, 1000);
}
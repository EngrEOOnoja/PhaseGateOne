const prompt = require('prompt-sync')(); // import prompt-sync

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function getNextPredictedPeriod(lastPeriodDate, cycleLength) {
  const nextPeriod = new Date(lastPeriodDate);
  nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
  return nextPeriod;
}

function getPredictedOvulationDate(nextPeriodDate) {
  const ovulationDate = new Date(nextPeriodDate);
  ovulationDate.setDate(ovulationDate.getDate() - 14);
  return ovulationDate;
}

function getFertileWindowStart(nextPeriodDate) {
  const ovulationDate = getPredictedOvulationDate(nextPeriodDate);
  ovulationDate.setDate(ovulationDate.getDate() - 5);
  return ovulationDate;
}

function getFertileWindowEnd(nextPeriodDate) {
  const ovulationDate = getPredictedOvulationDate(nextPeriodDate);
  ovulationDate.setDate(ovulationDate.getDate() + 1);
  return ovulationDate;
}

function main() {
  const year = parseInt(prompt("Enter the year of your last period (e.g. 2025): "), 10);
  const month = parseInt(prompt("Enter the month (e.g. 08): "), 10);
  const day = parseInt(prompt("Enter the day (e.g. 20): "), 10);
  const cycleLength = parseInt(prompt("Enter your average cycle length (e.g. 28): "), 10);
  const periodDuration = parseInt(prompt("Enter your period duration (e.g. 5): "), 10);

  const lastPeriodDate = new Date(year, month - 1, day);

  const nextPeriod = getNextPredictedPeriod(lastPeriodDate, cycleLength);
  const ovulationDate = getPredictedOvulationDate(nextPeriod);
  const fertileWindowStart = getFertileWindowStart(nextPeriod);
  const fertileWindowEnd = getFertileWindowEnd(nextPeriod);
  const periodEnd = new Date(lastPeriodDate);
  periodEnd.setDate(periodEnd.getDate() + periodDuration);

  console.log("\nResults:");
  console.log("Your last period likely ended on:", formatDate(periodEnd));
  console.log("Next Predicted Period Date:", formatDate(nextPeriod));
  console.log("Predicted Ovulation Date:", formatDate(ovulationDate));
  console.log("Fertile Window: From", formatDate(fertileWindowStart), "to", formatDate(fertileWindowEnd));
}

main();

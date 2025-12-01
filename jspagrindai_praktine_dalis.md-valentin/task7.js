document.getElementById("convertButton").addEventListener("click", function () {
  const temperatureInput = document.getElementById("temperatureInput").value;
  const unit = document.getElementById("unitSelect").value;
  const resultDisplay = document.getElementById("result");

  if (isNaN(parseFloat(temperatureInput))) {
    resultDisplay.textContent = "Please enter a valid number.";
    return;
  }

  const temp = parseFloat(temperatureInput);
  let convertedTemp;
  let convertedUnit;

  if (unit === "celsius") {
    convertedTemp = (temp * 9) / 5 + 32;
    convertedUnit = "Fahrenheit";
  } else {
    convertedTemp = ((temp - 32) * 5) / 9;
    convertedUnit = "Celsius";
  }

  resultDisplay.textContent = `${convertedTemp.toFixed(1)} ${convertedUnit}`;
});

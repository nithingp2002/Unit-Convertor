function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var result = document.getElementById("result");
    
    if (inputUnit === outputUnit) {
      result.innerHTML = "Result: " + inputValue + " " + outputUnit;
      return;
    }
    
    var convertedValue;
    
    // Conversion logic
    if (inputUnit === "cm" && outputUnit === "m") {
      convertedValue = inputValue / 100;
    } else if (inputUnit === "cm" && outputUnit === "km") {
      convertedValue = inputValue / 100000;
    } else if (inputUnit === "m" && outputUnit === "cm") {
      convertedValue = inputValue * 100;
    } else if (inputUnit === "m" && outputUnit === "km") {
      convertedValue = inputValue / 1000;
    } else if (inputUnit === "km" && outputUnit === "cm") {
      convertedValue = inputValue * 100000;
    } else if (inputUnit === "km" && outputUnit === "m") {
      convertedValue = inputValue * 1000;
    }
    
    result.innerHTML = "Result: " + convertedValue + " " + outputUnit;
  }
  
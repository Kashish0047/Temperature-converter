function convert() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("result").innerHTML = celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.";}
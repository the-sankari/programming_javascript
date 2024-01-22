// Kajol Sutra Dhar

/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

function getTemperature(temp) {
  if (temp < 15) {
    alert(`It's ${temp} outside, you should wear a jacket to go out`);
  } else {
    alert(`It's ${temp} outside, you don't need to wear a jacket to go out`);
  }
}

getTemperature(Number(prompt("What is the current temperature?")));

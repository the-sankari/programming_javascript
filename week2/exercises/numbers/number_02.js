// Kajol Sutra Dhar
// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.

function fahrenheitToCelsius(degree) {
    let celsius = (degree - 32) * 5 / 9;
    
    return celsius.toFixed(1);
}

// Sample usage - do not modify
console.log(fahrenheitToCelsius(21)); // "-6,1"
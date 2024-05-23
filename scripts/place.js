function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed ** 0.16);
}
let windChill = calculateWindChill(17, 8);
document.querySelector("#wind-chill").textContent = parseFloat(windChill).toFixed(2);

//In  my case the temperature is greater than 10°C, that's why I'll not call this function. 
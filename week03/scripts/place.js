const today = new Date();

const currentYear = today.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// lastModified
const LastModifiedDate = document.lastModified; 
document.getElementById("lastModified").textContent = `Last Modification: ${LastModifiedDate}`; 

// ------------
// function for calculate-wind
function calculateWindChill (tempC, windKmh){
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

window.addEventListener('load', () => {
    const temperatureC = 10;  // in Cº
    const windSpeedKmh = 5;  // wind per km
    
    let windChillDisplay = 'N/A';

    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        const windChill = calculateWindChill(temperatureC, windSpeedKmh);
        windChillDisplay = windChill.toFixed(1) + ' °C';
    }

    document.getElementById('windChill').textContent = windChillDisplay; // add to html in 'windChildd' span id
});
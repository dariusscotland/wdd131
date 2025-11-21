function calculateWindChill(temp, speed) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);
}

const temp = 10;
const speed = 5;

const windChillElement = document.getElementById('wind-chill-value');

if (temp <= 10 && speed > 4.8) {
    const windChill = calculateWindChill(temp, speed);
    windChillElement.textContent = `${windChill} °C`;
} else {
    windChillElement.textContent = 'N/A';
}

const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById('last-modified');
if (lastModifiedElement) {
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = lastModifiedDate;
}
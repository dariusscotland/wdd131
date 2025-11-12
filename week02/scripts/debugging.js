const radiusOutput = document.getElementById('radiusValue');
const areaOutput = document.getElementById('areaValue');

let area = 0;
const PI = 3.14159;

const radius1 = 10;
area = PI * radius1 * radius1;

const radius2 = 20;
area = PI * radius2 * radius2;

radiusOutput.textContent = radius2;
areaOutput.textContent = area;
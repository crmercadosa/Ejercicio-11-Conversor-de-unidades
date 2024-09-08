function convertKmToMiles() {
    const kmInput = document.getElementById('kmInput').value;
    const milesOutput = document.getElementById('milesOutput');
    
    if (kmInput) {
        const miles = (kmInput * 0.621371).toFixed(2);
        milesOutput.value = miles;
    } else {
        milesOutput.value = '';
    }
}

function convertMilesToKm() {
    const milesInput = document.getElementById('milesOutput').value;
    const kmOutput = document.getElementById('kmInput');
    
    if (milesInput) {
        const km = (milesInput / 0.621371).toFixed(2);
        kmOutput.value = km;
    } else {
        kmOutput.value = '';
    }
}

function convertMetersToFeet() {
    const metersInput = document.getElementById('metersInput').value;
    const feetOutput = document.getElementById('feetOutput');
    
    if (metersInput) {
        const feet = (metersInput * 3.28084).toFixed(2);
        feetOutput.value = feet;
    } else {
        feetOutput.value = '';
    }
}

function convertFeetToMeters() {
    const feetInput = document.getElementById('feetOutput').value;
    const metersOutput = document.getElementById('metersInput');
    
    if (feetInput) {
        const meters = (feetInput / 3.28084).toFixed(2);
        metersOutput.value = meters;
    } else {
        metersOutput.value = '';
    }
}

function convertCmToInches() {
    const cmInput = document.getElementById('cmInput').value;
    const inchesOutput = document.getElementById('inchesOutput');
    
    if (cmInput) {
        const inches = (cmInput * 0.393701).toFixed(2);
        inchesOutput.value = inches;
    } else {
        inchesOutput.value = '';
    }
}

function convertInchesToCm() {
    const inchesInput = document.getElementById('inchesOutput').value;
    const cmOutput = document.getElementById('cmInput');
    
    if (inchesInput) {
        const cm = (inchesInput / 0.393701).toFixed(2);
        cmOutput.value = cm;
    } else {
        cmOutput.value = '';
    }
}

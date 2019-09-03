var pic = document.getElementById('pic');
pic.style.display = 'none';
function getBmiValue () {
    
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var bmi = document.getElementById('bmiValue');
    var desc = document.getElementById('desc');
    
    if(weight === "" || isNaN(weight)) {
        alert("Please fill in the weight field with numbers only!");
    } else if(height === "" || isNaN(height)) {
        alert("Please fill in the height field with numbers only!");
    } else {
        // Converting pounds to kilograms (kilograms = pounds × 0.453592)
        weight = weight * 0.453592;
        
        // Converting feet to meters (meters = feet * 0.3048)
        height = height * 0.3048;

        // Calculating BMI Value
        bmi.value = (weight / (height * height)).toFixed(1);
        
        if(bmi.value < 18.5) {
            desc.textContent = 'You are Underweight!';
        } else if(bmi.value >= 18.5 && bmi.value <= 24 ) {
            desc.textContent = 'You are healthy!';
        } else if(bmi.value > 24 && bmi.value <= 30) {
            desc.textContent = 'You are Overweight!';
        } else if(bmi.value > 30 && bmi.value <= 35) {
            desc.textContent = 'You are first degree Obese!';
        } else if(bmi.value > 35 && bmi.value <= 40) {
            desc.textContent = 'You are second degree Obese!';
        } else if(bmi.value > 40) {
            desc.textContent = 'You are third degree Obese!';
        } 

    }

}
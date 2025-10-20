// Assign DOM elements to variables
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculate-btn');
const resultContainer = document.getElementById('result-container');

// Connect function to 'Calculate' button click
calculateBtn.addEventListener('click', () => {
    // Get input values (convert string to number)
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // Validate input values
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultContainer.innerHTML = '<p style="color: red;">Please enter a valid height and weight.</p>';
        resultContainer.className = 'result'; // Remove previous result styles
        return; // End function execution
    }

    // Calculate BMI (convert height from cm to m)
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiFormatted = bmi.toFixed(2); // Format to 2 decimal places

    // Determine status and style class based on BMI result (WHO standard)
    let category = '';
    let className = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        className = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
        className = 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        className = 'overweight';
    } else {
        category = 'Obese';
        className = 'obese';
    }

    // Generate and display the result HTML
    resultContainer.innerHTML = `
        <p>Your BMI is <strong>${bmiFormatted}</strong>.</p>
        <p>This is considered <strong>${category}</strong>.</p>
    `;

    // Apply the corresponding style class to the result
    resultContainer.className = `result ${className}`;
});
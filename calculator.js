window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

// Get the inputs from the DOM.
const amountInput = document.getElementById('loan-amount');
const termInput = document.getElementById('loan-years');
const rateInput = document.getElementById('loan-rate');
const calculateBtn = document.getElementById('calc-submit');
const resultDiv = document.getElementById('monthly-payment');

// Adds an event listener to the Calculate button
calculateBtn.addEventListener('click', () => {
  calculateMonthlyPayment();
});

// Retrieves the current values from the UI
function getCurrentUIValues() {
  return {
    amount: +(amountInput.value),
    years: +(termInput.value),
    rate: +(rateInput.value),
  }
}

// Sets up initial default values in the inputs
function setupInitialValues() {
  amountInput.value = '10000';
  termInput.value = '5';
  rateInput.value = '5';
}

// Updates the monthly payment based on the current UI values
function update() {
  const values = getCurrentUIValues();
  calculateMonthlyPayment(values);
}

// Calculates the monthly payment based on the input values
function calculateMonthlyPayment(values) {
  const principle = values.amount;
  const termValue = values.years;
  const rateValue = values.rate;

  const monthlyRate = rateValue / 12 / 100; // Periodic interest rate
  const numberOfPayments = termValue * 12; // Total number of payments
  const numerator = principle * monthlyRate;
  const denominator = 1 - Math.pow(1 + monthlyRate, -numberOfPayments);
  const monthlyPayment = numerator / denominator;

  updateMonthly(monthlyPayment);
}

// Updates the UI to display the monthly payment value
function updateMonthly(monthly) {
  resultDiv.textContent = 'Monthly Payment: $' + monthly.toFixed(2);
}

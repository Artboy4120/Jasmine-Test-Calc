it('should calculate the monthly rate correctly', function() {
  amountInput.value = '10000';
  termInput.value = '5';
  rateInput.value = '5';

  calculateMonthlyPayment();

  expect(resultDiv.textContent).toBe('Monthly Payment: $188.71');
});

it('should handle zero loan amount', function() {
  amountInput.value = '0';
  termInput.value = '10';
  rateInput.value = '3';

  calculateMonthlyPayment();

  expect(resultDiv.textContent).toBe('Monthly Payment: $0.00');
});

it('should handle zero loan term', function() {
  amountInput.value = '5000';
  termInput.value = '0';
  rateInput.value = '8';

  calculateMonthlyPayment();

  expect(resultDiv.textContent).toBe('Monthly Payment: $Infinity');
});

it('should return a result with 2 decimal places', function() {
  // Test code here
});

it('should handle zero interest rate', function() {
  amountInput.value = '20000';
  termInput.value = '3';
  rateInput.value = '0';

  calculateMonthlyPayment();

  expect(resultDiv.textContent).toBe('Monthly Payment: $555.56');
});



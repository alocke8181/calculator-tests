window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 10;
  document.getElementById("loan-rate").value = 2.5;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let newValues = getCurrentUIValues();
  let newMonthly = calculateMonthlyPayment(newValues);
  updateMonthly(newMonthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyInterest = values.rate / (12*100);
  let numberOfPayments = Math.floor(values.years * 12);
  let monthlyPayment = (monthlyInterest * values.amount)/(1 - Math.pow((1+monthlyInterest),-numberOfPayments));
  let rounded = monthlyPayment.toFixed(2);
  return rounded;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = "$"+monthly;
}

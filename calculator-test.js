
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount : 10000, years : 10, rate: 2.5};
  expect(calculateMonthlyPayment(values)).toEqual('94.27');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 9971, years : 10, rate: 2.5};
  expect(calculateMonthlyPayment(values)).toEqual('94.00');
});

it("should return zero", function(){
  const values = {amount: 0, years : 10, rate: 2.5};
  expect(calculateMonthlyPayment(values)).toEqual('0.00');
});

it("should return infinity", function(){
  const values = {amount: 100000, years : 0, rate: 2.5};
  expect(calculateMonthlyPayment(values)).toEqual('Infinity');
});

it("should return NaN", function(){
  const values = {amount: 100000, years : 10, rate: 0};
  expect(calculateMonthlyPayment(values)).toEqual('NaN');
});

/// etc

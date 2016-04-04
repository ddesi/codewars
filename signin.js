// the goal of this kata is to create a sign function. 
// sign(n) should return the sign of a number n, indicating whether the number 
// is positive, negative, zero or NaN.
// The function may return 1, -1, 0 or NaN representing "positive number", 
// "negative number", "zero" or NaNrespectively.
// If a string argument may be converted to number then sign should return the sign of this number.

function sign(number){
  return Math.sign(number);
}

// best practice

function sign(n){
  // ...
  if (n < 0) 
    return -1;
  else if (n == 0)
    return 0;
  else if (n > 0)
    return 1;
  else
    return NaN
}
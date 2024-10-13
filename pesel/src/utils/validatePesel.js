export function validatePESEL (peselNumber) {
  if (!/^\d{11}$/.test(peselNumber)) {
    return false;
  }

  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const digits = peselNumber.split('').map(Number);
  const controlSum = digits.slice(0, 10).reduce((sum, digit, index) => sum + digit * weights[index], 0);

  const controlDigit = (10 - (controlSum % 10)) % 10;
  
  return controlDigit === digits[10];
}
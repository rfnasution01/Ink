export function isValidEmail(input: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
}

export function isValidLength(input: string, length = 8) {
  const validUsername = input.length >= length;
  return validUsername;
}

export function isValidPassword(password: string) {
  if (password.length < 8) {
    return false;
  }

  const containsNumber = /[0-9]/.test(password);
  const containsLetter = /[a-zA-Z]/.test(password);

  return containsNumber && containsLetter;
}

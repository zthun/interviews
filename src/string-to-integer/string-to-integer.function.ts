function _sanitize(input: string) {
  const sp = ' ';

  if (!input) {
    return '';
  }

  let first = 0;

  while (first < input.length && input[first] === sp) {
    ++first;
  }

  return input.substr(first);
}

function _isDigit(char: string) {
  return char >= '0' && char <= '9';
}

export function myAtoi(input: string): number {
  let result = 0;

  let sanitized = _sanitize(input);
  let multiplier = 1;

  if (sanitized.charAt(0) === '-') {
    multiplier = -1;
  }

  if (sanitized.charAt(0) === '-' || sanitized.charAt(0) === '+') {
    sanitized = sanitized.substr(1);
  }

  // there's a special case here because we want to treat remaining white
  // space as part of the alphabet.  So we are going to break out here
  // early if we can just determine that the first character is not a number.
  if (isNaN(+sanitized.charAt(0))) {
    return 0;
  }

  for (let index = 0; index < sanitized.length; ++index) {
    const ch = sanitized.charAt(index);

    if (!_isDigit(ch)) {
      sanitized = sanitized.substr(0, index);
      index = sanitized.length;
    }
  }

  result = +sanitized;
  result *= multiplier;
  result = Math.max(-2147483648, result);
  result = Math.min(2147483647, result);
  return result;
}

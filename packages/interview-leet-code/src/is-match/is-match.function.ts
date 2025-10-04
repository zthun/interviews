function _isMatch(s: string, p: string, si: number, pi: number): boolean {
  for (pi; pi < p.length; ++pi) {
    const pChar = p.charAt(pi);
    const sChar = s.charAt(si);
    const pCharNext = p.charAt(pi + 1);

    if (pCharNext === '*') {
      // If we hit a klein star, then we have to test the permutations
      // of the rest of the string.
      pi += 2;
      let sSkip = sChar;
      let siSkip = si;

      while (siSkip < s.length && (sSkip === pChar || pChar === '.')) {
        siSkip++;
        sSkip = s.charAt(siSkip);
      }

      // Now we go backwards.
      while (siSkip >= si) {
        if (_isMatch(s, p, siSkip, pi)) {
          return true;
        }
        --siSkip;
      }

      return false;
    }

    if (pChar === '.' && sChar !== '') {
      ++si;
      continue;
    }

    if (pChar === '.' || pChar !== sChar) {
      return false;
    }

    ++si;
  }

  return s.charAt(si) === '';
}

/**
 * Returns whether or not s matches the pattern p.
 *
 * Note the wildcards, ., and *.  The dot operator matches any single character
 * and the star matches 0 or more characters.
 *
 * @param s The string to test.
 * @param p The pattern to test against.
 *
 * @returns True if s matches the pattern.  False otherwise.
 */
export function isMatch(s: string, p: string): boolean {
  return _isMatch(s, p, 0, 0);
}

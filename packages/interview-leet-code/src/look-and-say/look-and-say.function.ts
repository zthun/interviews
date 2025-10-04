export function lookAndSay<T>(input: T): string {
  const inputString = (input || '').toString();
  let description = '';
  let last = '';
  let cnt = 0;

  for (let i = 0; i < inputString.length; ++i) {
    const ch = inputString.charAt(i);
    if (!last || last === ch) {
      ++cnt;
    } else {
      description = `${description}${cnt}${last}`;
      cnt = 1;
    }
    last = ch;
  }

  description = last ? `${description}${cnt}${last}` : description;
  return description;
}

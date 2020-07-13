export function sum(...numbers: number[]) {
  return numbers.reduce((sum, current) => sum + current, 0);
}

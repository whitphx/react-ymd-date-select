export function range(first: number, last: number): number[] {
  if (first > last) {
    return range(last, first).reverse();
  }

  const arr: number[] = [];
  for (let i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}

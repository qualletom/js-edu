export function sum(a: number, b: number) {
  return a + b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function splitByWords(sentence: string) {
  return sentence.split(' ').filter(w => w.length);
}
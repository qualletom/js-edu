import {multiply, splitByWords, sum} from "./01.ts";
import {beforeEach} from "vitest";
let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(a,b)).toBe(3);
})

test("multiply should be correct", () => {
  expect(multiply(b,c)).toBe(6);
})

test("split string into words should be correct", () => {
  const sentence1 = "Split this string into   words!";
  const sentence2 = "Hello World!";

  const result1 = splitByWords(sentence1);
  const result2 = splitByWords(sentence2);

  expect(result1.length).toBe(5);
  expect(result1[4]).toBe("words!");
  expect(result2.length).toBe(2);
})